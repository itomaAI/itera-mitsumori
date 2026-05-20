# AutoExcel Manual

## 概要

AutoExcel は Excel / XLSX 編集アプリです。

実行時に利用するものは以下です。

- `system/lib/autoexcel` 配下の自前HTML/CSS/JS
- ExcelJS CDN
- Itera OS上で動かす場合のみ、任意のホストブリッジ `window.MetaOS`

`window.MetaOS` はVFS読み書き・AIツール登録のために使いますが、UIや表操作ロジックはAutoExcel内に閉じています。

## 目的

- ユーザーがUIから `.xlsx` ブックを開く
- AIが動的ツール経由でブックを開く
- 複数ブックをタブとして扱う
- シートを画面下部のタブで切り替える
- セル値・数式・基本書式を扱う
- ExcelJS を正本モデルとして使い、XLSXとして保存する

## ファイル構成

```text
workspace/autoexcel/
  autoexcel.html
  css/
    autoexcel.css
  js/
    app.js
    workbook-manager.js
    excel-engine.js
    grid-renderer.js
    style-utils.js
    vfs-io.js
    tools-binder.js
  docs/
    manual.md
```

## 起動

```xml
<spawn pid="main" path="apps/autoexcel.html" force="true" />
```

## UI

### 上部ヘッダー

- `Open`: VFS上の `.xlsx` ファイルを開く
- `New`: 新規ブックを作成
- `Save`: 現在のブックをVFSに保存

### ブックタブ

画面上部に表示されます。

- 1ブック = 1タブ
- クリックでアクティブブックを切り替え
- `*` は未保存状態を示します
- `×` でブックを閉じます

### 数式バー

中央上部に選択セルの値または数式を表示します。

- `=` で始まる入力は数式として保存されます
- `Apply` で選択セルへ反映します

### シートタブ

画面下部に表示されます。

- クリックでシートを切り替え
- `+` でシートを追加

## 数式・関数の扱い

AutoExcel は数式を保持・編集・保存しますが、アプリ内では Excel 関数を再計算しません。

- `=SUM(A1:A3)` のように `=` で始まる入力は、ExcelJS の formula として保存します。
- 既存XLSXに含まれる数式は、基本的に読み込み・保存で保持します。
- 既存XLSXに計算済みキャッシュ値が含まれる場合は、その値を表示できることがあります。
- 保存時には、Excelで開いた際に再計算されやすいよう workbook calculation properties を設定します。
- `SUM`, `IF`, `VLOOKUP` などの関数をAutoExcel内でリアルタイム評価する計算エンジンは持ちません。

## 保存形式

VFSは文字列保存を基本とするため、`.xlsx` は Base64 Data URI として保存します。

保存先の例:

```text
data/spreadsheets/Book1.xlsx
```

## AIツール

AutoExcel 起動時に `window.MetaOS.tools` が存在する場合、以下の動的ツールを登録します。
既存ツールとの衝突を避けるため、すべて `autoexcel_` prefix を持ちます。

### ブック操作

- `autoexcel_open_book`
  - VFS上のXLSXを開きます。
- `autoexcel_create_book`
  - 空の新規ブックを作成します。
- `autoexcel_duplicate_book`
  - 開いているブックをメモリ上で複製し、別aliasで編集可能にします。
  - Referenceを汚さずMergedを作る用途に使えます。
- `autoexcel_list_books`
  - 現在開いているブック一覧を返します。
- `autoexcel_activate_book`
  - アクティブなブックタブを切り替えます。
- `autoexcel_save_book`
  - ブックをVFSに保存します。

### シート操作

- `autoexcel_list_sheets`
  - 指定ブックのシート一覧を返します。
- `autoexcel_add_sheet`
  - 指定ブックに空シートを追加します。
- `autoexcel_delete_sheet`
  - 指定ブックのシートを削除します。最後の1シートは削除できません。
- `autoexcel_rename_sheet`
  - シート名を変更します。
- `autoexcel_duplicate_sheet`
  - 同一ブック内でシートを複製します。値・基本スタイル・列幅・行高・結合セルを可能な範囲でコピーします。
- `autoexcel_activate_sheet`
  - アクティブシートを切り替えます。

### 読み取り

- `autoexcel_inspect_sheet`
  - 指定開始行から一定行数のシート内容をCSVで確認します。
- `autoexcel_inspect_range`
  - `B42:G83` のような正確な範囲をCSVで確認します。
- `autoexcel_get_sheet_dimensions`
  - used range、最終非空行/列、非空セル数、非表示行列、結合範囲などをJSONで返します。
- `autoexcel_get_cell_info`
  - 指定範囲の値・数式・スタイル情報をJSONで返します。
- `autoexcel_search_cells`
  - 指定シート内の非空セルを検索し、一致したセル位置・値・数式をJSONで返します。
- `autoexcel_get_cell_style`
  - 指定範囲のスタイル情報をJSONで返します。

### 書き込み

- `autoexcel_write_cell`
- `autoexcel_write_block`
- `autoexcel_copy_range`
- `autoexcel_move_range`
- `autoexcel_clear_range`
- `autoexcel_insert_rows`
- `autoexcel_delete_rows`
- `autoexcel_set_cell_style`

## スタイル指定

`autoexcel_set_cell_style` は JSON style patch を受け取ります。

例:

```json
{
  "font": {
    "bold": true,
    "color": "#ff0000"
  },
  "fill": {
    "type": "solid",
    "color": "#fff2cc"
  },
  "alignment": {
    "horizontal": "center",
    "vertical": "middle"
  },
  "border": {
    "bottom": {
      "style": "thin",
      "color": "#000000"
    }
  }
}
```

## 現在の制限

- 初期描画上限は 500行 x 50列です。
- Excelの完全なレンダリング再現は対象外です。
- 条件付き書式、画像、コメント、ピボット、グラフは未対応です。
- 数式の計算エンジンは内蔵していません。数式は保存できますが、再計算はExcel側に依存します。
- 大規模ブックでは仮想スクロールが必要です。

## 統合作業などでの基本運用

AutoExcelは積算統合専用アプリではありませんが、以下の汎用ツールを組み合わせることで、Referenceブックを基準にした複数Partnerブックの統合作業を実行できます。

基本手順:

1. `autoexcel_open_book` でReferenceとPartnerブックを開く。
2. `autoexcel_duplicate_book` でReferenceを複製し、Mergedブックを作る。
3. 各Partnerブックに対して `autoexcel_list_sheets` を実行する。
4. 返ってきた全シートについて、`autoexcel_get_sheet_dimensions` と `autoexcel_inspect_sheet` / `autoexcel_inspect_range` で内容を確認する。
5. 必要に応じて `autoexcel_add_sheet` / `autoexcel_duplicate_sheet` / `autoexcel_rename_sheet` でMerged側のシート構成を整える。
6. 必要に応じて `autoexcel_search_cells` で「内部」「外部」「シーリング」「小計」などの位置を探す。
7. `autoexcel_copy_range` / `autoexcel_write_block` / `autoexcel_move_range` でデータを移す。
8. 必要に応じて `autoexcel_insert_rows` / `autoexcel_delete_rows` / `autoexcel_clear_range` / `autoexcel_delete_sheet` でレイアウトを整える。
9. `autoexcel_save_book` で保存する。

このワークフローの監査・判断・分類はAutoExcel専用機能として固定せず、AIが手順書・プロンプトに従って実施します。

## 今後の拡張候補

- 行列ヘッダーからの行列操作
- 行高・列幅のAIツール操作
- セル結合・結合解除のAIツール操作
- 結合セルの正確な表示
- 書式ツールバーの拡張
- 範囲選択に対する太字・Fillなどの一括適用
- 仮想スクロール
- AIによる表構造推定・見出し検出