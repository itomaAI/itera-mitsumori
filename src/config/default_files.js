// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated on: 2026-05-20T03:59:29Z

(function(global) {
    global.Itera = global.Itera || {};
    global.Itera.Config = global.Itera.Config || {};

    global.Itera.Config.BUILD_TIME = new Date("2026-05-20T03:59:29Z").getTime();
    global.Itera.Config.DEFAULT_FILES = {
        "index.html": `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ミャク楽AI Workspace</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- System Libraries -->
    <script src="system/lib/ui.js"></script>
    <script src="system/lib/std.js"></script>
    
    <!-- Kernel Logic -->
    <script src="system/kernel/dashboard.js" defer></script>
</head>
<body class="bg-app text-text-main h-screen p-6 md:p-8 overflow-hidden flex flex-col select-none">

    <!-- Header -->
    <header class="flex justify-between items-center mb-8 shrink-0 animate-fade-in-up">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center text-2xl shadow-lg shadow-primary/20">
                🏢
            </div>
            <div>
                <h1 class="text-2xl font-bold tracking-tight text-text-main">ミャク楽AI Workspace</h1>
                <p id="date-display" class="text-sm text-text-muted mt-0.5 font-mono">Loading...</p>
            </div>
        </div>
        <div class="text-right">
            <div id="clock-display" class="text-3xl font-light font-mono text-primary drop-shadow-sm">00:00</div>
            <div class="flex items-center justify-end gap-2 mt-1">
                <div class="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(0,255,100,0.6)]"></div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-text-muted">Agent Active</span>
            </div>
        </div>
    </header>

    <!-- Main -->
    <main class="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-y-auto pb-10">
        
        <!-- Left: Primary Action & Tools -->
        <div class="lg:col-span-2 flex flex-col gap-6">
            <!-- Hero / Primary App -->
            <section class="bg-panel rounded-2xl p-8 border border-border-main shadow-lg relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-transform group-hover:scale-110"></div>
                
                <h2 class="text-xl font-bold mb-2">積算・見積もり統合アシスタント</h2>
                <p class="text-sm text-text-muted mb-8 leading-relaxed max-w-lg">
                    OCR解析結果の確認や、各業者の見積もり内訳書を参考フォーマットへ統合する作業をAIがサポートします。<br>
                    右側のチャットパネルからAIに指示を出してください。
                </p>
                
                <button onclick="AppUI.go('apps/autoexcel.html')" class="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-5 rounded-xl shadow-md transition flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.99]">
                    <span class="text-2xl">📊</span> AutoExcel を起動する
                </button>
            </section>

            <!-- Secondary Apps Grid -->
            <div class="grid grid-cols-3 gap-4">
                <button onclick="AppUI.go('apps/tasks.html')" class="bg-panel border border-border-main hover:border-primary/50 hover:bg-hover rounded-2xl p-5 flex flex-col items-center justify-center transition shadow-sm hover:shadow-md group">
                    <span class="text-3xl mb-2 group-hover:scale-110 transition-transform">✅</span>
                    <span class="font-bold text-sm text-text-main">タスク管理</span>
                </button>
                <button onclick="AppUI.go('apps/calendar.html')" class="bg-panel border border-border-main hover:border-primary/50 hover:bg-hover rounded-2xl p-5 flex flex-col items-center justify-center transition shadow-sm hover:shadow-md group">
                    <span class="text-3xl mb-2 group-hover:scale-110 transition-transform">📅</span>
                    <span class="font-bold text-sm text-text-main">カレンダー</span>
                </button>
                <button onclick="AppUI.go('apps/settings.html')" class="bg-panel border border-border-main hover:border-primary/50 hover:bg-hover rounded-2xl p-5 flex flex-col items-center justify-center transition shadow-sm hover:shadow-md group">
                    <span class="text-3xl mb-2 group-hover:scale-110 transition-transform">⚙️</span>
                    <span class="font-bold text-sm text-text-main">システム設定</span>
                </button>
            </div>
        </div>

        <!-- Right: Tasks & Context -->
        <div class="flex flex-col gap-6">
            <!-- Tasks Widget -->
            <section class="bg-panel rounded-2xl p-5 border border-border-main shadow-lg flex-1 flex flex-col max-h-[400px]">
                <div class="flex items-center justify-between mb-4 border-b border-border-main/50 pb-3">
                    <h2 class="text-sm font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                        対応タスク
                    </h2>
                    <button onclick="AppUI.go('apps/tasks.html')" class="text-xs font-medium text-text-muted hover:text-text-main transition flex items-center gap-1">
                        すべて見る <span class="text-[10px]">→</span>
                    </button>
                </div>
                <div id="widget-tasks" class="flex-1 overflow-y-auto space-y-2 pr-1">
                    <!-- Injected via JS -->
                    <div class="animate-pulse flex space-x-2">
                        <div class="h-4 bg-card rounded w-3/4"></div>
                    </div>
                </div>
            </section>
            
            <!-- Quick Agent Command (Suggestions) -->
            <section class="bg-card rounded-2xl p-5 border border-border-main border-dashed">
                <h3 class="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">AI への指示の例</h3>
                <p class="text-[11px] text-text-muted mb-4">チャットパネルから以下のように指示できます。</p>
                <div class="flex flex-col gap-2">
                    <button onclick="if(window.MetaOS) MetaOS.ai.ask('OCR処理済みのデータをAutoExcelで開いてください')" class="text-left text-xs bg-panel hover:bg-hover px-3 py-2.5 rounded-lg border border-border-main transition text-text-main shadow-sm truncate">
                        "OCR処理済みのデータを開いて"
                    </button>
                    <button onclick="if(window.MetaOS) MetaOS.ai.ask('各社の見積もりデータを参考フォーマットに合わせて統合してください')" class="text-left text-xs bg-panel hover:bg-hover px-3 py-2.5 rounded-lg border border-border-main transition text-text-main shadow-sm truncate">
                        "データを統合して"
                    </button>
                    <button onclick="if(window.MetaOS) MetaOS.ai.ask('見積もりの提出期限をカレンダーに登録しておいて')" class="text-left text-xs bg-panel hover:bg-hover px-3 py-2.5 rounded-lg border border-border-main transition text-text-main shadow-sm truncate">
                        "提出期限をカレンダーに入れて"
                    </button>
                </div>
            </section>
        </div>
    </main>

    <!-- Task Edit Modal -->
    <div id="edit-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
        <div class="bg-panel w-full max-w-md mx-4 rounded-xl shadow-2xl border border-border-main flex flex-col max-h-[90vh]">
            <div class="p-4 border-b border-border-main flex justify-between items-center">
                <h3 class="font-bold text-lg text-text-main">タスク詳細</h3>
                <button onclick="closeDashboardTaskModal()" class="text-text-muted hover:text-text-main">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            <div class="p-4 space-y-4 overflow-y-auto">
                <input type="hidden" id="edit-id">
                
                <div>
                    <label class="block text-xs font-bold text-text-muted uppercase mb-1">タイトル</label>
                    <input type="text" id="edit-title" class="w-full bg-card border border-border-main rounded p-2 focus:border-primary focus:outline-none text-text-main">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1">優先度</label>
                        <select id="edit-priority" class="w-full bg-card border border-border-main rounded p-2 focus:border-primary focus:outline-none text-text-main">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1">期限</label>
                        <input type="date" id="edit-date" class="w-full bg-card border border-border-main rounded p-2 focus:border-primary focus:outline-none text-text-main text-sm">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-bold text-text-muted uppercase mb-1">詳細 / メモ</label>
                    <textarea id="edit-desc" rows="4" class="w-full bg-card border border-border-main rounded p-2 focus:border-primary focus:outline-none text-text-main text-sm resize-none" placeholder="メモ..."></textarea>
                </div>
            </div>

            <div class="p-4 border-t border-border-main flex justify-between items-center bg-card/50 rounded-b-xl">
                <button onclick="deleteDashboardTask()" class="text-error text-sm hover:underline font-medium">削除</button>
                <div class="flex gap-2">
                    <button onclick="closeDashboardTaskModal()" class="px-4 py-2 rounded-lg text-sm font-medium hover:bg-hover transition text-text-main border border-transparent">キャンセル</button>
                    <button onclick="saveDashboardTaskChanges()" class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow transition">保存</button>
                </div>
            </div>
        </div>
    </div>

    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
        /* スクロールバーの非表示 */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgb(var(--c-bg-hover)); border-radius: 3px; }
    </style>
</body>
</html>`.trim(),

        "docs/manuals/autoexcel.md": `
# AutoExcel Manual

## 概要

AutoExcel は Excel / XLSX 編集アプリです。

実行時に利用するものは以下です。

- \`system/lib/autoexcel\` 配下の自前HTML/CSS/JS
- ExcelJS CDN
- Itera OS上で動かす場合のみ、任意のホストブリッジ \`window.MetaOS\`

\`window.MetaOS\` はVFS読み書き・AIツール登録のために使いますが、UIや表操作ロジックはAutoExcel内に閉じています。

## 目的

- ユーザーがUIから \`.xlsx\` ブックを開く
- AIが動的ツール経由でブックを開く
- 複数ブックをタブとして扱う
- シートを画面下部のタブで切り替える
- セル値・数式・基本書式を扱う
- ExcelJS を正本モデルとして使い、XLSXとして保存する

## ファイル構成

\`\`\`text
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
\`\`\`

## 起動

\`\`\`xml
<spawn pid="main" path="apps/autoexcel.html" force="true" />
\`\`\`

## UI

### 上部ヘッダー

- \`Open\`: VFS上の \`.xlsx\` ファイルを開く
- \`New\`: 新規ブックを作成
- \`Save\`: 現在のブックをVFSに保存

### ブックタブ

画面上部に表示されます。

- 1ブック = 1タブ
- クリックでアクティブブックを切り替え
- \`*\` は未保存状態を示します
- \`×\` でブックを閉じます

### 数式バー

中央上部に選択セルの値または数式を表示します。

- \`=\` で始まる入力は数式として保存されます
- \`Apply\` で選択セルへ反映します

### シートタブ

画面下部に表示されます。

- クリックでシートを切り替え
- \`+\` でシートを追加

## 数式・関数の扱い

AutoExcel は数式を保持・編集・保存しますが、アプリ内では Excel 関数を再計算しません。

- \`=SUM(A1:A3)\` のように \`=\` で始まる入力は、ExcelJS の formula として保存します。
- 既存XLSXに含まれる数式は、基本的に読み込み・保存で保持します。
- 既存XLSXに計算済みキャッシュ値が含まれる場合は、その値を表示できることがあります。
- 保存時には、Excelで開いた際に再計算されやすいよう workbook calculation properties を設定します。
- \`SUM\`, \`IF\`, \`VLOOKUP\` などの関数をAutoExcel内でリアルタイム評価する計算エンジンは持ちません。

## 保存形式

VFSは文字列保存を基本とするため、\`.xlsx\` は Base64 Data URI として保存します。

保存先の例:

\`\`\`text
data/spreadsheets/Book1.xlsx
\`\`\`

## AIツール

AutoExcel 起動時に \`window.MetaOS.tools\` が存在する場合、以下の動的ツールを登録します。
既存ツールとの衝突を避けるため、すべて \`autoexcel_\` prefix を持ちます。

### ブック操作

- \`autoexcel_open_book\`
  - VFS上のXLSXを開きます。
- \`autoexcel_create_book\`
  - 空の新規ブックを作成します。
- \`autoexcel_duplicate_book\`
  - 開いているブックをメモリ上で複製し、別aliasで編集可能にします。
  - Referenceを汚さずMergedを作る用途に使えます。
- \`autoexcel_list_books\`
  - 現在開いているブック一覧を返します。
- \`autoexcel_activate_book\`
  - アクティブなブックタブを切り替えます。
- \`autoexcel_save_book\`
  - ブックをVFSに保存します。

### シート操作

- \`autoexcel_list_sheets\`
  - 指定ブックのシート一覧を返します。
- \`autoexcel_add_sheet\`
  - 指定ブックに空シートを追加します。
- \`autoexcel_delete_sheet\`
  - 指定ブックのシートを削除します。最後の1シートは削除できません。
- \`autoexcel_rename_sheet\`
  - シート名を変更します。
- \`autoexcel_duplicate_sheet\`
  - 同一ブック内でシートを複製します。値・基本スタイル・列幅・行高・結合セルを可能な範囲でコピーします。
- \`autoexcel_activate_sheet\`
  - アクティブシートを切り替えます。

### 読み取り

- \`autoexcel_inspect_sheet\`
  - 指定開始行から一定行数のシート内容をCSVで確認します。
- \`autoexcel_inspect_range\`
  - \`B42:G83\` のような正確な範囲をCSVで確認します。
- \`autoexcel_get_sheet_dimensions\`
  - used range、最終非空行/列、非空セル数、非表示行列、結合範囲などをJSONで返します。
- \`autoexcel_get_cell_info\`
  - 指定範囲の値・数式・スタイル情報をJSONで返します。
- \`autoexcel_search_cells\`
  - 指定シート内の非空セルを検索し、一致したセル位置・値・数式をJSONで返します。
- \`autoexcel_get_cell_style\`
  - 指定範囲のスタイル情報をJSONで返します。

### 書き込み

- \`autoexcel_write_cell\`
- \`autoexcel_write_block\`
- \`autoexcel_copy_range\`
- \`autoexcel_move_range\`
- \`autoexcel_clear_range\`
- \`autoexcel_insert_rows\`
- \`autoexcel_delete_rows\`
- \`autoexcel_set_cell_style\`

## スタイル指定

\`autoexcel_set_cell_style\` は JSON style patch を受け取ります。

例:

\`\`\`json
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
\`\`\`

## 現在の制限

- 初期描画上限は 500行 x 50列です。
- Excelの完全なレンダリング再現は対象外です。
- 条件付き書式、画像、コメント、ピボット、グラフは未対応です。
- 数式の計算エンジンは内蔵していません。数式は保存できますが、再計算はExcel側に依存します。
- 大規模ブックでは仮想スクロールが必要です。

## 統合作業などでの基本運用

AutoExcelは積算統合専用アプリではありませんが、以下の汎用ツールを組み合わせることで、Referenceブックを基準にした複数Partnerブックの統合作業を実行できます。

基本手順:

1. \`autoexcel_open_book\` でReferenceとPartnerブックを開く。
2. \`autoexcel_duplicate_book\` でReferenceを複製し、Mergedブックを作る。
3. 各Partnerブックに対して \`autoexcel_list_sheets\` を実行する。
4. 返ってきた全シートについて、\`autoexcel_get_sheet_dimensions\` と \`autoexcel_inspect_sheet\` / \`autoexcel_inspect_range\` で内容を確認する。
5. 必要に応じて \`autoexcel_add_sheet\` / \`autoexcel_duplicate_sheet\` / \`autoexcel_rename_sheet\` でMerged側のシート構成を整える。
6. 必要に応じて \`autoexcel_search_cells\` で「内部」「外部」「シーリング」「小計」などの位置を探す。
7. \`autoexcel_copy_range\` / \`autoexcel_write_block\` / \`autoexcel_move_range\` でデータを移す。
8. 必要に応じて \`autoexcel_insert_rows\` / \`autoexcel_delete_rows\` / \`autoexcel_clear_range\` / \`autoexcel_delete_sheet\` でレイアウトを整える。
9. \`autoexcel_save_book\` で保存する。

このワークフローの監査・判断・分類はAutoExcel専用機能として固定せず、AIが手順書・プロンプトに従って実施します。

## 今後の拡張候補

- 行列ヘッダーからの行列操作
- 行高・列幅のAIツール操作
- セル結合・結合解除のAIツール操作
- 結合セルの正確な表示
- 書式ツールバーの拡張
- 範囲選択に対する太字・Fillなどの一括適用
- 仮想スクロール
- AIによる表構造推定・見出し検出`.trim(),

        "docs/jobs/見積統合.md": `
# 積算内訳書統合ワークフローマニュアル

## 1. 概要

この文書は、AutoExcel を用いて、複数のパートナーが作成した積算内訳書を、基準となる参考内訳書のフォーマットに沿って統合するための作業マニュアルです。

対象となる作業は、単なるExcelのコピー&ペーストではありません。  
建築・構造・外構・建具・内装など、各パートナー成果物の工種分類、数量、仕様、単位、重複可能性を確認しながら、最終的に一つの統合内訳書として整える作業です。

このワークフローでは、AIは以下の役割を担います。

- Excel操作担当
- 積算内訳の監査担当
- 工種分類の確認担当
- レイアウト整理担当
- 最終成果物の自己レビュー担当

ただし、AutoExcel自体は積算統合専用システムではありません。  
AutoExcelは汎用Excel操作ツールであり、監査・分類・重複判断などは、このマニュアルとユーザー指示に従ってAIが実施します。

---

## 2. 背景

積算統合作業では、複数のパートナーがそれぞれ異なるExcel形式・シート構成・列配置で内訳書を作成することがあります。

典型的には、以下のようなファイルが存在します。

- 参考内訳書
  - 統合先フォーマットの基準となるファイル。
- 統合済み内訳書
  - 既存の統合作業成果物、または作業途中のファイル。
- 構造内訳書
  - 構造系パートナーの成果物。
- 内部内訳書
  - 内装・内部仕上系の成果物。
- 外部内訳書
  - 外部仕上・外装系の成果物。
- 建具・外構内訳書
  - 建具、外構、または周辺工事を含む成果物。

これらのファイルは、一見するとシート名やファイル名から処理対象を判断できそうに見えます。  
しかし、実際には「Sheet1」「表紙」「備考」「外部」などの名前のシートにも、数量・仕様・金額・単価などの有効データが含まれる可能性があります。

したがって、統合作業では、シート名だけで判断せず、必ず中身を確認することが重要です。

---

## 3. 目的

このワークフローの目的は、以下です。

1. パートナー成果物に含まれる有効な積算データを漏れなく確認する。
2. 参考内訳書のフォーマット・単位・工種分類に沿って統合する。
3. 必要に応じて、参考内訳書に存在しない工種シートを追加する。
4. 内部/外部、専門工種/一般工種などの文脈を踏まえて配置する。
5. シーリング等の重複計上リスクを確認する。
6. 列ずれ、単位表記差、空白行、レイアウト崩れを修正する。
7. 最終的に、人間が見ても professional な統合内訳書に仕上げる。

---

## 4. 基本思想

### 4.1 Dumb Auditor First, Smart Integrator Second

AIは、最初から「たぶんこのシートは不要だろう」と判断してはいけません。

最初に行うべきことは、推測ではなく機械的な監査です。

- 全ブックのシート一覧を取得する。
- 全シートを確認する。
- 有効データがあるか判定する。
- 監査ログを作る。
- 全シートの確認が完了してから統合に進む。

統合判断はその後です。

### 4.2 Treat Every Sheet as Potential Money

すべてのシートは、費用・数量・仕様を含む可能性があります。

以下のような名前でも、確認前に無視してはいけません。

- 表紙
- Cover
- Notes
- Sheet1
- 備考
- 参考
- 空白に見えるシート
- 工種名が曖昧なシート

### 4.3 Inspect First, Measure Twice, Copy Once

コピー範囲は推測してはいけません。

禁止例:

\`\`\`text
A2:G100
A2:G500
A1:Z999
\`\`\`

安全な手順:

1. \`autoexcel_get_sheet_dimensions\` で used range を確認する。
2. \`autoexcel_inspect_sheet\` で概要を見る。
3. 必要に応じて \`autoexcel_inspect_range\` で正確な範囲を見る。
4. 実データの開始行・終了行・列範囲を確認する。
5. その範囲だけをコピーまたは書き込みする。

---

## 5. 事前準備

### 5.1 AutoExcelを起動する

\`\`\`xml
<spawn pid="main" path="apps/autoexcel.html" force="true" />
\`\`\`

### 5.2 対象ブックを開く

Reference、Partner、既存Mergedなど、必要なファイルを開きます。

例:

\`\`\`xml
<autoexcel_open_book path="tmp/①/①参考内訳書.xlsx" alias="Reference" />
<autoexcel_open_book path="tmp/①/①各パートナー成果物/構造内訳書.xlsx" alias="Partner_Structure" />
\`\`\`

aliasは短く、役割が分かる名前にします。

推奨alias:

\`\`\`text
Reference
Merged
ExistingMerged
Partner_Structure
Partner_Internal
Partner_External
Partner_Joinery_Exterior
\`\`\`

### 5.3 Mergedブックを作成する

Referenceのフォーマットを基準にする場合、Referenceを直接編集してはいけません。  
必ず複製してMergedを作ります。

\`\`\`xml
<autoexcel_duplicate_book src_book="Reference" alias="Merged" />
\`\`\`

これにより、Referenceのフォーマットを保ったまま、統合作業用ブックを作れます。

---

## 6. 必須監査フェーズ

### 6.1 シート一覧取得

各Partnerブックについて、必ずシート一覧を取得します。

\`\`\`xml
<autoexcel_list_sheets book="Partner_Structure" />
<autoexcel_list_sheets book="Partner_Internal" />
<autoexcel_list_sheets book="Partner_External" />
\`\`\`

### 6.2 全シート確認

\`autoexcel_list_sheets\` で返ってきたすべてのシートに対して、必ず以下を実行します。

\`\`\`xml
<autoexcel_get_sheet_dimensions book="Partner_Internal" sheet="..." />
<autoexcel_inspect_sheet book="Partner_Internal" sheet="..." start_row="1" max_rows="100" />
\`\`\`

必要に応じて、範囲を絞って確認します。

\`\`\`xml
<autoexcel_inspect_range book="Partner_Internal" sheet="..." range="A20:G60" />
\`\`\`

### 6.3 監査ログ

AIは \`<thinking>\` または作業メモ内に、以下の形式で監査ログを作ります。

\`\`\`text
[Book] | [Sheet] | [Used Range] | [Inspection Result] | [Action] | [Notes]
\`\`\`

例:

\`\`\`text
Partner_Internal | B-18内装工事 | A1:G83 | Data | Merge | 内部仕上。数量・単位あり。
Partner_Internal | 表紙 | A1:D12 | Empty/Header Only | Ignore | 金額・数量なし。
Partner_Joinery_Exterior | 建具 | A1:H56 | Data | Merge | 内部/外部混在。分類要確認。
\`\`\`

この監査ログが全シート分そろうまで、統合処理に進んではいけません。

---

## 7. 有効データ判定

### 7.1 Emptyとみなせる条件

シートをEmptyとみなしてよいのは、以下の場合のみです。

- 非空セルがない。
- ヘッダー行のみで、数量・単価・金額・仕様コードがない。
- 表紙や説明文のみで、積算対象の行がない。

### 7.2 Dataとみなす条件

以下が含まれる場合は、原則として有効データとみなします。

- 数量
- 単位
- 単価
- 金額
- 仕様・品番・材料名
- 工事項目名
- 工種コード
- 備考欄に実質的な数量・仕様情報があるもの

シート名が無関係に見えても、中身にこれらがあれば処理対象です。

---

## 8. 統合戦略

### 8.1 非意匠系: Strict Sheet Mapping

構造、設備、外構、雑工事など、意匠仕上以外の工種では、Partner側の分類を尊重します。

原則:

- Partnerの1シートをMergedの1シートへ対応させる。
- 勝手に別工種シートへ分散しない。
- Referenceに同等シートがあればそこへ統合する。
- Referenceに対応シートがなければ、Mergedに新規シートを追加する。

例:

\`\`\`xml
<autoexcel_add_sheet book="Merged" name="構造追加工事" />
\`\`\`

### 8.2 意匠系: Context-aware Mapping

意匠、仕上、建具などは、内部/外部の分類を確認します。

特に建具は注意が必要です。

- 外部建具
- 内部建具
- ガラス
- シーリング
- 金物
- 外構に近い項目

などが混在することがあります。

内部項目を外部セクションより上に入れる必要がある場合は、\`insert_rows\` で既存行を下げます。

\`\`\`xml
<autoexcel_insert_rows book="Merged" sheet="B-14建具" row="20" count="5" />
\`\`\`

末尾追記でよい場合は、直接 \`write_block\` や \`copy_range\` を使います。

### 8.3 専門工種を優先する

同じような項目が複数ファイルに存在する場合、専門業者の成果物を優先します。

代表例:

- 建具ファイル内のシーリング
- 防水/塗装/シーリング系ファイル内のシーリング

仕様・数量が近い場合、二重計上の可能性があります。  
その場合は、専門性の高いファイルを優先し、一般側の重複項目は統合対象から除外または明示的に保留します。

---

## 9. 列マッピング

PartnerファイルとReferenceファイルでは、列構成が異なることがあります。

### 9.1 確認すべき列

最低限、以下を確認します。

- 名称
- 仕様/適用
- 数量
- 単位
- 備考
- 単価
- 金額
- 実行単価
- コード

### 9.2 列ずれに注意

Partner側では、名称がB列ではなくC列やD列にあることがあります。

例:

\`\`\`text
A列: コード
B列: インデント/分類
C列: 名称
D列: 仕様
E列: 数量
F列: 単位
G列: 備考
\`\`\`

Reference側が

\`\`\`text
B列: 名称
C列: 仕様
D列: 数量
E列: 単位
F列: 備考
\`\`\`

であれば、Partner-CをMerged-Bに写す必要があります。

### 9.3 追加列は捨てない

PartnerファイルにReferenceにはない列がある場合でも、価格情報やコードは捨ててはいけません。

特に以下は重要です。

- 実行単価
- 実行金額
- 業者コード
- 見積コード
- 備考に含まれる価格条件

Referenceに該当列がない場合、右端側に追加列として保持することを検討します。

---

## 10. 単位正規化

単位はReferenceを基準にします。

例:

| Partner | Reference | 変換 |
|---|---|---|
| \`m2\` | \`㎡\` | \`m2\` → \`㎡\` |
| \`㎡\` | \`m2\` | \`㎡\` → \`m2\` |
| \`M\` | \`ｍ\` | \`M\` → \`ｍ\` |
| \`m\` | \`ｍ\` | \`m\` → \`ｍ\` |

特定の単位表記を絶対基準にしてはいけません。  
常にReference側の表記に合わせます。

---

## 11. 安全な書き込み手順

### 11.1 書き込み前確認

書き込む前に、対象範囲が空か、上書きしてよい範囲かを確認します。

確認例:

\`\`\`xml
<autoexcel_inspect_range book="Merged" sheet="B-9ﾀｲﾙ・石工事" range="B42:G60" />
\`\`\`

既存データがある場所に直接書く場合は、意図的な上書きかどうかを明確にします。

### 11.2 行挿入が必要な場合

既存データの間に差し込む場合だけ、\`insert_rows\` を使います。

\`\`\`xml
<autoexcel_insert_rows book="Merged" sheet="B-9ﾀｲﾙ・石工事" row="42" count="8" />
\`\`\`

### 11.3 末尾追記の場合

末尾に追加するだけなら、行挿入は不要です。

1. \`autoexcel_get_sheet_dimensions\` で最終行を確認する。
2. 最終データ行の次の行に \`write_block\` または \`copy_range\` する。

### 11.4 範囲は厳密に指定する

禁止:

\`\`\`text
A2:G100
A2:G500
\`\`\`

推奨:

\`\`\`text
A2:G42
\`\`\`

実際の最終行を確認してから、正確に指定します。

---

## 12. レイアウト整理

統合後の成果物は、見た目としても整っている必要があります。

確認すべきこと:

- 空白行が大量に残っていないか。
- 列がずれていないか。
- 名称・仕様・数量・単位がReferenceの列に合っているか。
- 内部/外部セクションが崩れていないか。
- 小計・合計行が変な位置にないか。
- 書式が極端に崩れていないか。

必要に応じて以下を使います。

\`\`\`xml
<autoexcel_move_range ... />
<autoexcel_clear_range ... />
<autoexcel_insert_rows ... />
<autoexcel_delete_rows ... />
<autoexcel_set_cell_style ... />
\`\`\`

---

## 13. 最終Self-Audit

完了前に、必ず自己監査を行います。

### 13.1 Coverage Check

- すべてのPartnerブックで \`list_sheets\` を行ったか。
- 返ってきた全シートを確認したか。
- 監査ログに全シートが記載されているか。

### 13.2 Omission Check

- 有効データがあるのにMergedへ反映していない行はないか。
- 特に金額・単価・数量がある行を落としていないか。

### 13.3 Excess Check

- 同じ項目を二重計上していないか。
- シーリング、防水、塗装、建具周辺の重複は確認したか。

### 13.4 Layout Check

- 空白行が過剰にないか。
- 列がずれていないか。
- Referenceのフォーマットから大きく崩れていないか。

### 13.5 Cross-Trade Leakage

- 建具ファイルに塗装・シーリングが紛れていないか。
- 外構ファイルに建築本体工事項目が紛れていないか。
- 内部/外部が逆に入っていないか。

---

## 14. 報告フォーマット

作業完了時には、以下を報告します。

\`\`\`text
## 統合作業報告

### 対象ファイル
- Reference:
- Partner:
- Merged:

### 監査結果
- Partner_A: n sheets inspected, m sheets merged, k sheets ignored
- Partner_B: ...

### 主な統合内容
- ...
- ...

### 単位正規化
- m2 -> ㎡: x件
- M -> ｍ: y件

### 重複・除外判断
- ...
- ...

### レイアウト調整
- 行挿入:
- 行削除:
- 移動:
- 新規シート:

### 未確定・要確認事項
- ...
\`\`\`

---

## 15. AutoExcelで主に使うツール

### ブック操作

\`\`\`xml
<autoexcel_open_book path="..." alias="..." />
<autoexcel_duplicate_book src_book="Reference" alias="Merged" />
<autoexcel_list_books />
<autoexcel_save_book book="Merged" path="..." />
\`\`\`

### シート操作

\`\`\`xml
<autoexcel_list_sheets book="Partner_Internal" />
<autoexcel_add_sheet book="Merged" name="..." />
<autoexcel_activate_sheet book="Merged" sheet="..." />
\`\`\`

### 読み取り

\`\`\`xml
<autoexcel_get_sheet_dimensions book="..." sheet="..." />
<autoexcel_inspect_sheet book="..." sheet="..." start_row="1" max_rows="100" />
<autoexcel_inspect_range book="..." sheet="..." range="A1:G42" />
<autoexcel_get_cell_info book="..." sheet="..." range="A1:G42" />
\`\`\`

### 書き込み・移動

\`\`\`xml
<autoexcel_write_cell book="Merged" sheet="..." cell="B42">...</autoexcel_write_cell>
<autoexcel_write_block book="Merged" sheet="..." start_cell="B42">CSV...</autoexcel_write_block>
<autoexcel_copy_range src_book="..." src_sheet="..." src_range="A2:G42" tgt_book="Merged" tgt_sheet="..." tgt_cell="A2" />
<autoexcel_move_range src_book="Merged" src_sheet="..." src_range="C2:C42" tgt_book="Merged" tgt_sheet="..." tgt_cell="B2" />
\`\`\`

### レイアウト調整

\`\`\`xml
<autoexcel_insert_rows book="Merged" sheet="..." row="42" count="5" />
<autoexcel_delete_rows book="Merged" sheet="..." row="42" count="5" />
<autoexcel_clear_range book="Merged" sheet="..." range="A42:G46" />
<autoexcel_set_cell_style book="Merged" sheet="..." range="A1:G1">{"font":{"bold":true}}</autoexcel_set_cell_style>
\`\`\`

---

## 16. 禁止事項

以下は禁止です。

- シート名だけで無視する。
- 全シート確認前に統合作業へ進む。
- \`A2:G500\` のような推測範囲でコピーする。
- Referenceブックを直接汚す。
- 価格・単価・コード列を勝手に捨てる。
- Partnerの工種分類を根拠なく再分類する。
- 内部/外部を確認せずに意匠項目を投入する。
- シーリング等の重複可能性を確認せずに両方入れる。
- 空白行や列ずれを放置して「データは入った」として終える。

---

## 17. 判断に迷った場合

判断に迷った場合は、以下の順に対応します。

1. Referenceの分類・単位・列構造を確認する。
2. Partnerシートの該当範囲を再確認する。
3. 仕様・数量・備考を見て、内部/外部・工種分類を判断する。
4. 同種項目が他Partnerにも存在しないか確認する。
5. それでも不明なら、ユーザーに確認する。

AIは、曖昧なまま破壊的なコピーや削除を実行してはいけません。

---

## 18. まとめ

このワークフローの本質は、Excel操作ではなく、漏れ・重複・列ずれ・単位差・分類誤りを防ぐことです。

AutoExcelは、そのための汎用的なExcel操作基盤です。  
AIはこのマニュアルに従い、まず愚直に全体を監査し、その後に文脈を踏まえて統合します。

原則は以下です。

\`\`\`text
Inspect first.
Measure twice.
Copy once.
Make it professional.
\`\`\``.trim(),

        "data/events/2026-02.json": JSON.stringify([
    {
        "id": "evt_1",
        "title": "System Boot & Initialization",
        "date": "2026-02-24",
        "time": "10:00",
        "note": "First boot of the Itera OS environment."
    },
    {
        "id": "evt_2",
        "title": "Blueprint Architecture Review",
        "date": "2026-02-26",
        "time": "14:30",
        "note": "Testing the deployment of background daemons via Markdown blueprints."
    },
    {
        "id": "evt_3",
        "title": "Deep Focus Session",
        "date": "2026-02-28",
        "time": "",
        "note": "No meetings. Install the Pomodoro Timer blueprint for better focus."
    }
], null, 4),

        "data/tasks/2026-02.json": JSON.stringify([
    {
        "id": "1700000000001",
        "title": "Configure Gemini API Key",
        "status": "pending",
        "dueDate": "2026-02-24",
        "priority": "high",
        "created_at": "2026-02-24T00:00:00.000Z",
        "description": "Need to input the API key in the top right corner to activate the agent."
    },
    {
        "id": "1700000000002",
        "title": "Ask AI to change the theme to Midnight",
        "status": "pending",
        "dueDate": "2026-02-25",
        "priority": "medium",
        "created_at": "2026-02-24T00:00:00.000Z",
        "description": "Try the natural language command for system configuration."
    },
    {
        "id": "1700000000003",
        "title": "Read the Itera Codex documentation",
        "status": "completed",
        "dueDate": "2026-02-20",
        "priority": "low",
        "created_at": "2026-02-24T00:00:00.000Z"
    }
], null, 4),

        "system/lib/ui.js": `
/**
 * Itera Guest UI Kit (ui.js)
 * Provides theme configuration, shared UI utilities, and OS-native dialogs.
 */

(function(global) {
    // ==========================================
    // 1. Tailwind Configuration Injection
    // ==========================================
    if (global.tailwind) {
        global.tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans:['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans JP"', '"Noto Sans"', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'Meiryo', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
                    },
                    colors: {
                        app: 'rgb(var(--c-bg-app) / <alpha-value>)',
                        panel: 'rgb(var(--c-bg-panel) / <alpha-value>)',
                        card: 'rgb(var(--c-bg-card) / <alpha-value>)',
                        hover: 'rgb(var(--c-bg-hover) / <alpha-value>)',
                        overlay: 'rgb(var(--c-bg-overlay) / <alpha-value>)',
                        border: {
                            main: 'rgb(var(--c-border-main) / <alpha-value>)',
                            highlight: 'rgb(var(--c-border-highlight) / <alpha-value>)',
                        },
                        text: {
                            main: 'rgb(var(--c-text-main) / <alpha-value>)',
                            muted: 'rgb(var(--c-text-muted) / <alpha-value>)',
                            inverted: 'rgb(var(--c-text-inverted) / <alpha-value>)',
                            system: 'rgb(var(--c-text-system) / <alpha-value>)',
                        },
                        primary: 'rgb(var(--c-accent-primary) / <alpha-value>)',
                        success: 'rgb(var(--c-accent-success) / <alpha-value>)',
                        warning: 'rgb(var(--c-accent-warning) / <alpha-value>)',
                        error: 'rgb(var(--c-accent-error) / <alpha-value>)',
                    }
                }
            }
        };
    }

    // ==========================================
    // 2. Global Styles Injection
    // ==========================================
    const style = document.createElement('style');
    style.textContent = \`
        body { 
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans JP", "Noto Sans", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgb(var(--c-bg-hover)); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgb(var(--c-text-muted)); }
        
        /* Animations for Modals/Loaders */
        @keyframes iteraFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes iteraSlideUp { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes iteraSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        .itera-animate-fade { animation: iteraFadeIn 0.2s ease-out forwards; }
        .itera-animate-modal { animation: iteraSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .itera-loader { border: 3px solid rgb(var(--c-bg-hover)); border-top: 3px solid rgb(var(--c-accent-primary)); border-radius: 50%; width: 24px; height: 24px; animation: iteraSpin 1s linear infinite; }
    \`;
    document.head.appendChild(style);

    // ==========================================
    // 3. AppUI Public API
    // ==========================================
    global.AppUI = {

        // --- Navigation ---
        
        go: (path) => {
            if (global.MetaOS) global.MetaOS.spawn(path, { pid: 'main' });
            else window.location.href = path;
        },

        home: () => {
            if (global.MetaOS) global.MetaOS.spawn('index.html', { pid: 'main' });
        },

        // --- Notifications ---

        notify: (message, type = 'info', duration = 3000) => {
            let container = document.getElementById('__itera-toast-container');
            if (!container) {
                container = document.createElement('div');
                container.id = '__itera-toast-container';
                Object.assign(container.style, {
                    position: 'fixed', bottom: '1.25rem', right: '1.25rem', display: 'flex',
                    flexDirection: 'column', gap: '0.5rem', zIndex: '9999', pointerEvents: 'none'
                });
                document.body.appendChild(container);
            }

            const TYPES = {
                info:    { icon: 'ℹ️', color: 'rgb(var(--c-accent-primary))' },
                success: { icon: '✅', color: 'rgb(var(--c-accent-success))' },
                warning: { icon: '⚠️', color: 'rgb(var(--c-accent-warning))' },
                error:   { icon: '❌', color: 'rgb(var(--c-accent-error))' }
            };
            const { icon, color } = TYPES[type] || TYPES.info;

            const toast = document.createElement('div');
            toast.className = "itera-animate-fade";
            Object.assign(toast.style, {
                display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem',
                borderRadius: '0.5rem', background: 'rgb(var(--c-bg-panel))', color: 'rgb(var(--c-text-main))',
                border: \`1px solid \${color}\`, boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                fontSize: '0.875rem', pointerEvents: 'auto', maxWidth: '320px', wordBreak: 'break-word',
                transition: 'opacity 0.3s ease'
            });

            toast.innerHTML = \`<div style="width:4px; height:100%; min-height:1.5rem; background:\${color}; border-radius:2px; flex-shrink:0;"></div><span>\${icon}</span><span>\${message}</span>\`;
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.addEventListener('transitionend', () => toast.remove());
            }, duration);
        },

        // --- OS Native Dialogs (Async) ---

        /**
         * @param {string} message 
         * @param {string} [title="Alert"] 
         * @returns {Promise<void>}
         */
        alert: (message, title = "System Alert") => {
            return AppUI._createDialog({ type: 'alert', message, title });
        },

        /**
         * @param {string} message 
         * @param {string} [title="Confirm"] 
         * @returns {Promise<boolean>}
         */
        confirm: (message, title = "Confirmation") => {
            return AppUI._createDialog({ type: 'confirm', message, title });
        },

        /**
         * @param {string} message 
         * @param {string} [defaultValue=""] 
         * @param {string} [title="Input Required"] 
         * @returns {Promise<string|null>}
         */
        prompt: (message, defaultValue = "", title = "Input Required") => {
            return AppUI._createDialog({ type: 'prompt', message, title, defaultValue });
        },

        // --- Loading Overlay ---

        showLoading: (message = "Processing...") => {
            AppUI.hideLoading(); // Ensure only one exists
            const overlay = document.createElement('div');
            overlay.id = '__itera-loading-overlay';
            overlay.className = "fixed inset-0 bg-app/80 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center itera-animate-fade";
            overlay.innerHTML = \`
                <div class="itera-loader mb-4"></div>
                <div class="text-sm font-bold text-text-muted tracking-wider uppercase animate-pulse">\${message}</div>
            \`;
            document.body.appendChild(overlay);
        },

        hideLoading: () => {
            const overlay = document.getElementById('__itera-loading-overlay');
            if (overlay) overlay.remove();
        },

        // --- Theming Utilities ---

        /**
         * Get computed CSS color variable (useful for Canvas/Chart.js)
         * @param {string} tokenName - e.g., 'accent-primary', 'bg-panel', 'text-main'
         * @returns {string} - 'rgb(R, G, B)' format
         */
        getThemeColor: (tokenName) => {
            const root = document.documentElement;
            let val = getComputedStyle(root).getPropertyValue(\`--c-\${tokenName}\`).trim();
            if (!val) return '#888888'; // fallback
            // Ensure format is compatible with Canvas (which expects rgb(...) or #hex)
            return val.includes(' ') ? \`rgb(\${val.split(' ').join(', ')})\` : val;
        },

        // --- Internal Dialog Engine ---

        _createDialog: ({ type, message, title, defaultValue }) => {
            return new Promise((resolve) => {
                const overlay = document.createElement('div');
                overlay.className = "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4 itera-animate-fade select-none";
                
                const box = document.createElement('div');
                box.className = "bg-panel border border-border-main rounded-2xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden itera-animate-modal";
                
                // Header
                const header = document.createElement('div');
                header.className = "px-5 py-3 border-b border-border-main bg-card/50 flex items-center gap-2";
                header.innerHTML = \`<span class="text-primary">✦</span><span class="font-bold text-sm text-text-main">\${title}</span>\`;
                
                // Body
                const body = document.createElement('div');
                body.className = "p-5 text-sm text-text-main whitespace-pre-wrap leading-relaxed";
                body.textContent = message;

                let input = null;
                if (type === 'prompt') {
                    input = document.createElement('input');
                    input.type = 'text';
                    input.value = defaultValue || '';
                    input.className = "w-full mt-4 bg-app border border-border-main rounded-lg p-2.5 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition shadow-inner";
                    body.appendChild(input);
                }

                // Footer (Buttons)
                const footer = document.createElement('div');
                footer.className = "px-5 py-3 border-t border-border-main bg-card flex justify-end gap-2";

                const closeDialog = (val) => {
                    overlay.style.opacity = '0';
                    setTimeout(() => overlay.remove(), 200);
                    resolve(val);
                };

                const btnCancel = document.createElement('button');
                btnCancel.className = "px-4 py-2 rounded-lg text-xs font-bold text-text-muted hover:text-text-main hover:bg-hover transition";
                btnCancel.textContent = "Cancel";
                btnCancel.onclick = () => closeDialog(type === 'prompt' ? null : false);

                const btnOk = document.createElement('button');
                btnOk.className = "px-4 py-2 rounded-lg text-xs font-bold bg-primary text-white hover:bg-primary/90 shadow transition";
                btnOk.textContent = "OK";
                btnOk.onclick = () => closeDialog(type === 'prompt' ? input.value : true);

                if (type !== 'alert') footer.appendChild(btnCancel);
                footer.appendChild(btnOk);

                box.append(header, body, footer);
                overlay.appendChild(box);
                document.body.appendChild(overlay);

                // Focus & Keyboard events
                if (input) {
                    setTimeout(() => { input.focus(); input.select(); }, 50);
                    input.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') btnOk.click();
                        if (e.key === 'Escape') btnCancel.click();
                    });
                } else {
                    setTimeout(() => btnOk.focus(), 50);
                    overlay.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') type === 'alert' ? btnOk.click() : btnCancel.click();
                    });
                }
            });
        }
    };
})(window);`.trim(),

        "system/lib/std.js": `
/**
 * Itera Guest Standard Library (std.js)
 * Core Data Access Layer & OS Utilities.
 */

(function(global) {
    
    // --- Internal Utilities ---
    const Utils = {
        getMonthKey: () => new Date().toISOString().slice(0, 7), // YYYY-MM
        getDateStr: () => new Date().toISOString().slice(0, 10), // YYYY-MM-DD
        
        async safeReadJson(path, defaultValue = []) {
            try {
                if (!global.MetaOS) return defaultValue;
                const content = await global.MetaOS.readFile(path);
                return JSON.parse(content);
            } catch (e) {
                // File not found or parse error -> return default
                return defaultValue;
            }
        },

        async safeWriteJson(path, data) {
            if (!global.MetaOS) {
                console.warn("[Std] MetaOS not found, cannot save:", path);
                return;
            }
            // Use silent: true to prevent flooding the AI's chat log with raw file saves
            await global.MetaOS.saveFile(path, JSON.stringify(data, null, 2), { silent: true });
        }
    };

    // --- App API ---
    global.App = {
        
        // ==========================================
        // 1. Core System & OS Utilities (NEW)
        // ==========================================

        /**
         * Log an event to the AI's epistemic history.
         * @param {string} message - The message to log.
         * @param {string} type - Event type (e.g., 'task_completed').
         */
        logEvent(message, type = 'app_event') {
            if (global.MetaOS && global.MetaOS.addEventLog) {
                global.MetaOS.addEventLog(message, type);
            }
        },

        /**
         * System Configuration Access
         */
        Config: {
            async get() {
                return await Utils.safeReadJson('system/config/config.json', {});
            },
            async update(updates) {
                const config = await this.get();
                const newConfig = { ...config, ...updates };
                await Utils.safeWriteJson('system/config/config.json', newConfig);
                return newConfig;
            }
        },

        /**
         * Universal Key-Value Storage for 3rd Party Apps
         * Saves data in 'data/apps/{key}.json'
         */
        Storage: {
            _getPath(key) {
                const safeKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
                return \`data/apps/\${safeKey}.json\`;
            },
            async get(key, defaultValue = {}) {
                return await Utils.safeReadJson(this._getPath(key), defaultValue);
            },
            async set(key, value) {
                await Utils.safeWriteJson(this._getPath(key), value);
            }
        },


        // ==========================================
        // 2. Tasks API (Refactored for Multi-file)
        // ==========================================

        async getTasks() {
            if (!global.MetaOS) return [];
            try {
                // Read all JSON files in data/tasks/
                const files = await global.MetaOS.listFiles('data/tasks');
                const taskFiles = files.filter(f => (typeof f === 'string' ? f : f.path).endsWith('.json'))
                                       .map(f => typeof f === 'string' ? f : f.path);
                
                const allTasks = [];
                for (const path of taskFiles) {
                    const tasks = await Utils.safeReadJson(path, []);
                    if (Array.isArray(tasks)) allTasks.push(...tasks);
                }
                return allTasks;
            } catch (e) {
                console.warn("[Std] Failed to list tasks:", e);
                return [];
            }
        },

        async addTask(title, dueDate = '', priority = 'medium') {
            if (!title.trim()) return;
            const monthKey = Utils.getMonthKey();
            const path = \`data/tasks/\${monthKey}.json\`; // Always append to current month
            
            const tasks = await Utils.safeReadJson(path, []);
            const newTask = {
                id: Date.now().toString(),
                title: title.trim(),
                status: 'pending',
                dueDate: dueDate,
                priority: priority,
                created_at: new Date().toISOString()
            };
            
            tasks.push(newTask);
            await Utils.safeWriteJson(path, tasks);
            
            this.logEvent(\`User added a new task: "\${newTask.title}" (Due: \${dueDate || 'None'})\`, 'task_added');
            return newTask;
        },

        // Helper: Find which file contains the task and update it
        async _updateTaskInFile(id, updaterFn) {
            if (!global.MetaOS) return false;
            const files = await global.MetaOS.listFiles('data/tasks');
            const taskFiles = files.filter(f => (typeof f === 'string' ? f : f.path).endsWith('.json'))
                                       .map(f => typeof f === 'string' ? f : f.path);
            
            for (const path of taskFiles) {
                let tasks = await Utils.safeReadJson(path, []);
                const index = tasks.findIndex(t => t.id === id);
                if (index !== -1) {
                    tasks = updaterFn(tasks, index);
                    await Utils.safeWriteJson(path, tasks);
                    return true; // Stop searching once found and updated
                }
            }
            return false;
        },

        async updateTask(id, updates) {
            let updatedTitle = "";
            const success = await this._updateTaskInFile(id, (tasks, index) => {
                tasks[index] = { ...tasks[index], ...updates };
                updatedTitle = tasks[index].title;
                return tasks;
            });
            if (success && updates.title) {
                this.logEvent(\`User updated task: "\${updatedTitle}"\`, 'task_updated');
            }
            return success;
        },

        async toggleTask(id) {
            return await this._updateTaskInFile(id, (tasks, index) => {
                tasks[index].status = tasks[index].status === 'completed' ? 'pending' : 'completed';
                return tasks;
            });
        },

        async deleteTask(id) {
            let deletedTitle = "";
            const success = await this._updateTaskInFile(id, (tasks, index) => {
                deletedTitle = tasks[index].title;
                tasks.splice(index, 1);
                return tasks;
            });
            if (success) {
                this.logEvent(\`User deleted task: "\${deletedTitle}"\`, 'task_deleted');
            }
            return success;
        },


        // ==========================================
        // 3. Events API (Calendar)
        // ==========================================

        async getEvents(monthKey) {
            const path = \`data/events/\${monthKey}.json\`;
            let events = await Utils.safeReadJson(path, []);
            events.sort((a, b) => {
                if (a.date < b.date) return -1;
                if (a.date > b.date) return 1;
                return 0;
            });
            return events;
        },

        async addEvent(title, date, time = '', note = '') {
            if (!title.trim() || !date) return;
            const monthKey = date.slice(0, 7);
            const path = \`data/events/\${monthKey}.json\`;
            
            let events = await Utils.safeReadJson(path, []);
            const newEvent = {
                id: Date.now().toString(),
                title: title.trim(),
                date: date,
                time: time,
                note: note
            };
            events.push(newEvent);
            await Utils.safeWriteJson(path, events);
            
            this.logEvent(\`User added a calendar event: "\${title}" on \${date} \${time}\`, 'event_added');
            return newEvent;
        },

        async updateEvent(id, updates) {
            const { originalDate, date, title, time, note } = updates;
            await this.deleteEvent(id, originalDate || date);
            return await this.addEvent(title, date, time, note);
        },

        async deleteEvent(id, dateStr) {
            if (!dateStr) return false;
            const monthKey = dateStr.slice(0, 7);
            const path = \`data/events/\${monthKey}.json\`;
            
            let events = await Utils.safeReadJson(path, []);
            const initialLen = events.length;
            const eventToDelete = events.find(e => e.id === id);
            events = events.filter(e => e.id !== id);
            
            if (events.length !== initialLen) {
                await Utils.safeWriteJson(path, events);
                if (eventToDelete) {
                    this.logEvent(\`User deleted calendar event: "\${eventToDelete.title}" on \${eventToDelete.date}\`, 'event_deleted');
                }
                return true;
            }
            return false;
        },

        async getCalendarItems(monthKey) {
            const events = await this.getEvents(monthKey);
            const formattedEvents = events.map(e => ({ ...e, type: 'event' }));

            // Fetch ALL tasks (due to refactoring) and filter by this month
            const allTasks = await this.getTasks();
            const formattedTasks = allTasks
                .filter(t => t.dueDate && t.dueDate.startsWith(monthKey) && t.status !== 'completed')
                .map(t => ({
                    id: t.id,
                    title: t.title,
                    date: t.dueDate,
                    time: '',
                    type: 'task',
                    priority: t.priority
                }));

            return [...formattedEvents, ...formattedTasks];
        },


        // ==========================================
        // 4. Notes & System API
        // ==========================================

        async getRecentNotes(limit = 5) {
            if (!global.MetaOS) return [];
            try {
                const files = await global.MetaOS.listFiles('data/notes', { recursive: true, detail: true });
                if (Array.isArray(files) && files.length > 0 && typeof files[0] === 'object') {
                    return files.filter(f => f.path.endsWith('.md'))
                                .sort((a, b) => b.updated_at - a.updated_at)
                                .slice(0, limit)
                                .map(f => f.path);
                } else {
                    const strFiles = Array.isArray(files) ? files : [];
                    return strFiles.filter(f => f.endsWith('.md')).slice(0, limit);
                }
            } catch (e) {
                console.warn("[Std] Failed to list notes:", e);
                return [];
            }
        },

        async getApps() {
            return await Utils.safeReadJson('system/config/apps.json', []);
        }
    };

})(window);`.trim(),

        "system/lib/autoexcel/js/grid-renderer.js": `
class GridRenderer {
    constructor(manager, dom) {
        this.manager = manager;
        this.dom = dom;
        this.selectedCell = null;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.isMouseSelecting = false;
        this.maxRows = 500;
        this.maxCols = 50;
        this.bindGlobalHandlers();
    }

    bindGlobalHandlers() {
        document.addEventListener('mouseup', () => {
            this.isMouseSelecting = false;
        });

        document.addEventListener('keydown', event => {
            if (!this.manager.activeBookId) return;
            if (event.target === this.dom.formulaInput) return;

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
                event.preventDefault();
                this.copySelectionToClipboard();
                return;
            }

            if ((event.key === 'Delete' || event.key === 'Backspace') && this.hasSelection()) {
                const active = this.manager.getActiveBook();
                this.manager.clearRange(active.id, active.activeSheetName, this.getSelectionRangeString());
                return;
            }
        });

        this.dom.grid.addEventListener('paste', event => {
            if (!this.manager.activeBookId || !this.selectedCell) return;
            const text = event.clipboardData && event.clipboardData.getData('text/plain');
            if (!text) return;
            event.preventDefault();

            const active = this.manager.getActiveBook();
            this.manager.writeBlock(active.id, active.activeSheetName, this.selectedCell, text);
        });
    }

    render() {
        this.renderBookTabs();
        this.renderSheetTabs();
        this.renderGrid();
        this.renderStatus();
    }

    renderStatus() {
        const books = this.manager.listBooks();
        if (!this.dom.statusLabel) return;
        if (!books.length) {
            this.dom.statusLabel.textContent = 'No workbook';
            return;
        }
        const active = this.manager.getActiveBook();
        const selection = this.hasSelection() ? \` / \${this.getSelectionRangeString()}\` : '';
        this.dom.statusLabel.textContent = \`\${active.alias}\${active.dirty ? ' *' : ''} / \${active.activeSheetName}\${selection}\`;
    }

    renderBookTabs() {
        const el = this.dom.bookTabs;
        const books = this.manager.listBooks();
        el.innerHTML = books.map(book => \`
            <div class="book-tab \${book.id === this.manager.activeBookId ? 'active' : ''}" data-book-id="\${this.escapeAttr(book.id)}">
                <span class="book-tab-title">\${this.escapeHTML(book.alias)}\${book.dirty ? ' *' : ''}</span>
                <span class="book-tab-close" data-close-book="\${this.escapeAttr(book.id)}">×</span>
            </div>
        \`).join('');

        el.querySelectorAll('.book-tab').forEach(tab => {
            tab.addEventListener('click', event => {
                if (event.target.dataset.closeBook) return;
                this.manager.setActiveBook(tab.dataset.bookId);
            });
        });

        el.querySelectorAll('[data-close-book]').forEach(btn => {
            btn.addEventListener('click', event => {
                event.stopPropagation();
                this.manager.closeBook(btn.dataset.closeBook);
            });
        });
    }

    renderSheetTabs() {
        const el = this.dom.sheetTabs;
        if (!this.manager.activeBookId) {
            el.innerHTML = '';
            return;
        }

        const book = this.manager.getActiveBook();
        const sheets = this.manager.listSheets(book.id);
        el.innerHTML = sheets.map(name => \`
            <div class="sheet-tab \${name === book.activeSheetName ? 'active' : ''}" data-sheet-name="\${this.escapeAttr(name)}">
                <span class="sheet-tab-title">\${this.escapeHTML(name)}</span>
                <button class="sheet-tab-close" data-delete-sheet="\${this.escapeAttr(name)}" title="Delete sheet" aria-label="Delete sheet">×</button>
            </div>
        \`).join('');

        el.querySelectorAll('.sheet-tab').forEach(tab => {
            tab.addEventListener('click', event => {
                if (event.target.dataset.deleteSheet) return;
                this.selectedCell = null;
                this.selectionStart = null;
                this.selectionEnd = null;
                this.manager.setActiveSheet(book.id, tab.dataset.sheetName);
            });
        });

        el.querySelectorAll('[data-delete-sheet]').forEach(btn => {
            btn.addEventListener('click', event => {
                event.stopPropagation();

                const sheetName = btn.dataset.deleteSheet;
                const sheetCount = this.manager.listSheets(book.id).length;
                if (sheetCount <= 1) {
                    window.alert('最後の1シートは削除できません。');
                    return;
                }

                const ok = window.confirm(\`シート「\${sheetName}」を削除しますか？\\nこの操作は保存前であればファイルには反映されませんが、現在の作業ブックからは削除されます。\`);
                if (!ok) return;

                this.selectedCell = null;
                this.selectionStart = null;
                this.selectionEnd = null;
                this.manager.deleteSheet(book.id, sheetName);
            });
        });
    }

    renderGrid() {
        const el = this.dom.grid;
        if (!this.manager.activeBookId) {
            el.innerHTML = \`<div class="empty-state">ブックが開かれていません。</div>\`;
            return;
        }

        const book = this.manager.getActiveBook();
        const ws = ExcelEngine.getWorksheet(book, book.activeSheetName);

        let maxRow = Math.max(30, (ws.rowCount || 0) + 5);
        let maxCol = Math.max(12, (ws.columnCount || 0) + 3);
        maxRow = Math.min(maxRow, this.maxRows);
        maxCol = Math.min(maxCol, this.maxCols);

        const mergeMap = this.buildMergeMap(ws);
        const visibleCols = [];
        for (let col = 1; col <= maxCol; col++) {
            if (!ws.getColumn(col).hidden) visibleCols.push(col);
        }

        let html = '<table class="autoexcel-grid">';
        html += '<thead><tr><th class="grid-corner"></th>';
        for (const col of visibleCols) {
            const width = ws.getColumn(col).width;
            const widthStyle = width ? \` style="width:\${Math.round(width * 7.2)}px;min-width:\${Math.round(width * 7.2)}px"\` : '';
            html += \`<th class="col-header"\${widthStyle}>\${ExcelEngine.encodeCol(col)}</th>\`;
        }
        html += '</tr></thead><tbody>';

        for (let row = 1; row <= maxRow; row++) {
            const excelRow = ws.getRow(row);
            if (excelRow.hidden) continue;

            const heightStyle = excelRow.height ? \` style="height:\${excelRow.height}px"\` : '';
            html += \`<tr\${heightStyle}><th class="row-header">\${row}</th>\`;

            for (const col of visibleCols) {
                const addr = ExcelEngine.encodeCell(row, col);
                const merge = mergeMap.get(addr);
                if (merge && merge.skip) continue;

                const cell = ws.getCell(row, col);
                const text = ExcelEngine.cellDisplayValue(cell, 'value');
                const css = StyleUtils.excelStyleToCss(cell, excelRow, ws.getColumn(col));
                const isPrimary = this.selectedCell === addr;
                const isInRange = this.isCellInSelection(addr);
                const classNames = [
                    'grid-cell',
                    isPrimary ? 'selected' : '',
                    isInRange ? 'range-selected' : '',
                    merge && merge.master ? 'merge-master' : ''
                ].filter(Boolean).join(' ');

                const spanAttrs = merge && merge.master
                    ? \` rowspan="\${merge.rowspan}" colspan="\${merge.colspan}"\`
                    : '';

                html += \`<td class="\${classNames}" contenteditable="true" data-cell="\${addr}" data-original="\${this.escapeAttr(String(text ?? ''))}"\${spanAttrs} style="\${StyleUtils.cssObjectToString(css)}">\${this.escapeHTML(text)}</td>\`;
            }

            html += '</tr>';
        }

        html += '</tbody></table>';
        el.innerHTML = html;

        el.querySelectorAll('.grid-cell').forEach(cellEl => {
            cellEl.addEventListener('mousedown', event => {
                if (event.button !== 0) return;
                this.isMouseSelecting = true;
                this.selectCell(cellEl.dataset.cell, true);
            });

            cellEl.addEventListener('mouseenter', () => {
                if (!this.isMouseSelecting) return;
                this.selectionEnd = cellEl.dataset.cell;
                this.paintSelection();
            });

            cellEl.addEventListener('focus', () => {
                if (!this.isMouseSelecting) this.selectCell(cellEl.dataset.cell, false);
            });

            cellEl.addEventListener('click', () => {
                if (!this.isMouseSelecting) this.selectCell(cellEl.dataset.cell, false);
            });

            cellEl.addEventListener('blur', () => {
                const currentText = cellEl.textContent;
                const originalText = cellEl.dataset.original ?? '';
                if (currentText === originalText) return;

                const active = this.manager.getActiveBook();
                this.manager.writeCell(active.id, active.activeSheetName, cellEl.dataset.cell, currentText);
            });

            cellEl.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    cellEl.blur();
                    this.focusRelative(cellEl.dataset.cell, 1, 0);
                }
                if (event.key === 'Tab') {
                    event.preventDefault();
                    cellEl.blur();
                    this.focusRelative(cellEl.dataset.cell, 0, event.shiftKey ? -1 : 1);
                }
            });
        });
    }

    buildMergeMap(ws) {
        const map = new Map();
        const merges = ws && ws._merges ? Object.values(ws._merges) : [];

        for (const merge of merges) {
            const model = merge.model || merge.range || merge;
            const top = model.top ?? model.start?.row;
            const left = model.left ?? model.start?.column;
            const bottom = model.bottom ?? model.end?.row;
            const right = model.right ?? model.end?.column;
            if (!top || !left || !bottom || !right) continue;

            const masterAddr = ExcelEngine.encodeCell(top, left);
            map.set(masterAddr, {
                master: true,
                rowspan: bottom - top + 1,
                colspan: right - left + 1,
                top,
                left,
                bottom,
                right
            });

            for (let r = top; r <= bottom; r++) {
                for (let c = left; c <= right; c++) {
                    const addr = ExcelEngine.encodeCell(r, c);
                    if (addr === masterAddr) continue;
                    map.set(addr, { skip: true, masterAddr });
                }
            }
        }

        return map;
    }

    selectCell(address, startRange = false) {
        this.selectedCell = address;
        if (startRange || !this.selectionStart) {
            this.selectionStart = address;
        }
        this.selectionEnd = address;

        if (this.dom.activeCellLabel) this.dom.activeCellLabel.textContent = \`Cell: \${address}\`;
        if (this.dom.formulaInput && this.manager.activeBookId) {
            const book = this.manager.getActiveBook();
            const ws = ExcelEngine.getWorksheet(book, book.activeSheetName);
            const cell = ws.getCell(address);
            this.dom.formulaInput.value = cell.formula ? \`=\${cell.formula}\` : ExcelEngine.cellDisplayValue(cell, 'value');
        }

        this.paintSelection();
        this.renderStatus();
    }

    paintSelection() {
        this.dom.grid.querySelectorAll('.grid-cell.selected').forEach(x => x.classList.remove('selected'));
        this.dom.grid.querySelectorAll('.grid-cell.range-selected').forEach(x => x.classList.remove('range-selected'));

        for (const el of this.dom.grid.querySelectorAll('.grid-cell')) {
            const addr = el.dataset.cell;
            if (addr === this.selectedCell) el.classList.add('selected');
            if (this.isCellInSelection(addr)) el.classList.add('range-selected');
        }

        this.renderStatus();
    }

    isCellInSelection(address) {
        if (!this.selectionStart || !this.selectionEnd || !address) return false;
        const r = this.getSelectionBounds();
        const p = ExcelEngine.parseCellAddress(address);
        return p.row >= r.startRow && p.row <= r.endRow && p.col >= r.startCol && p.col <= r.endCol;
    }

    getSelectionBounds() {
        const a = ExcelEngine.parseCellAddress(this.selectionStart || this.selectedCell);
        const b = ExcelEngine.parseCellAddress(this.selectionEnd || this.selectedCell);
        return {
            startRow: Math.min(a.row, b.row),
            endRow: Math.max(a.row, b.row),
            startCol: Math.min(a.col, b.col),
            endCol: Math.max(a.col, b.col)
        };
    }

    getSelectionRangeString() {
        const r = this.getSelectionBounds();
        const start = ExcelEngine.encodeCell(r.startRow, r.startCol);
        const end = ExcelEngine.encodeCell(r.endRow, r.endCol);
        return start === end ? start : \`\${start}:\${end}\`;
    }

    hasSelection() {
        return !!(this.selectionStart && this.selectionEnd);
    }

    async copySelectionToClipboard() {
        if (!this.hasSelection() || !this.manager.activeBookId) return;
        const book = this.manager.getActiveBook();
        const range = this.getSelectionBounds();
        const ws = ExcelEngine.getWorksheet(book, book.activeSheetName);
        const rows = [];

        for (let row = range.startRow; row <= range.endRow; row++) {
            const arr = [];
            for (let col = range.startCol; col <= range.endCol; col++) {
                arr.push(String(ExcelEngine.cellDisplayValue(ws.getCell(row, col), 'value') ?? ''));
            }
            rows.push(arr.join('\\t'));
        }

        const text = rows.join('\\n');

        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text).catch(() => {});
        }
    }

    focusRelative(address, dRow, dCol) {
        const pos = ExcelEngine.parseCellAddress(address);
        const nextRow = Math.max(1, pos.row + dRow);
        const nextCol = Math.max(1, pos.col + dCol);
        const next = ExcelEngine.encodeCell(nextRow, nextCol);
        const el = this.dom.grid.querySelector(\`[data-cell="\${CSS.escape(next)}"]\`);
        if (el) el.focus();
    }

    applyFormulaInput() {
        if (!this.selectedCell || !this.manager.activeBookId) return;
        const book = this.manager.getActiveBook();
        this.manager.writeCell(book.id, book.activeSheetName, this.selectedCell, this.dom.formulaInput.value);
    }

    escapeHTML(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    escapeAttr(value) {
        return this.escapeHTML(value);
    }
}

window.GridRenderer = GridRenderer;`.trim(),

        "system/lib/autoexcel/js/workbook-manager.js": `
class WorkbookManager {
    constructor() {
        this.books = new Map();
        this.activeBookId = null;
        this.onChange = null;
    }

    emitChange(reason = 'change') {
        if (typeof this.onChange === 'function') this.onChange(reason);
    }

    makeId(alias) {
        const base = String(alias || 'Book').replace(/[^\\w\\u3040-\\u30ff\\u3400-\\u9fff.-]+/g, '_');
        let id = base;
        let n = 2;
        while (this.books.has(id)) id = \`\${base}_\${n++}\`;
        return id;
    }

    async openFromVFS(path, alias = null) {
        const workbook = await VFSIO.readWorkbook(path);
        this.enableExcelRecalculation(workbook);

        const cleanAlias = alias || path.split('/').pop().replace(/\\.xlsx$/i, '') || 'Workbook';
        const id = this.makeId(cleanAlias);
        const sheets = workbook.worksheets;
        if (sheets.length === 0) workbook.addWorksheet('Sheet1');

        this.books.set(id, {
            id,
            alias: cleanAlias,
            path,
            workbook,
            activeSheetName: workbook.worksheets[0].name,
            dirty: false,
            openedAt: new Date().toISOString()
        });
        this.activeBookId = id;
        this.emitChange('open');
        return id;
    }

    createBlankBook(alias = null) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        const name = alias || \`Book\${this.books.size + 1}\`;
        const id = this.makeId(name);
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'AutoExcel';
        workbook.created = new Date();
        workbook.modified = new Date();
        this.enableExcelRecalculation(workbook);

        const sheet = workbook.addWorksheet('Sheet1');
        sheet.getCell('A1').value = '';
        sheet.columns = Array.from({ length: 12 }, () => ({ width: 12 }));

        this.books.set(id, {
            id,
            alias: name,
            path: \`data/spreadsheets/\${name}.xlsx\`,
            workbook,
            activeSheetName: 'Sheet1',
            dirty: false,
            openedAt: new Date().toISOString()
        });
        this.activeBookId = id;
        this.emitChange('create');
        return id;
    }

    async duplicateBook(srcBookId, alias = null) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        const src = this.getBook(srcBookId);
        const name = alias || \`\${src.alias}_copy\`;
        const id = this.makeId(name);

        const buffer = await src.workbook.xlsx.writeBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);
        workbook.creator = workbook.creator || 'AutoExcel';
        workbook.modified = new Date();
        this.enableExcelRecalculation(workbook);

        const activeSheetName = workbook.getWorksheet(src.activeSheetName)
            ? src.activeSheetName
            : (workbook.worksheets[0] ? workbook.worksheets[0].name : 'Sheet1');

        if (workbook.worksheets.length === 0) workbook.addWorksheet('Sheet1');

        this.books.set(id, {
            id,
            alias: name,
            path: \`data/spreadsheets/\${name}.xlsx\`,
            workbook,
            activeSheetName,
            dirty: false,
            openedAt: new Date().toISOString()
        });

        this.activeBookId = id;
        this.emitChange('duplicate-book');
        return id;
    }

    closeBook(bookId) {
        const id = bookId || this.activeBookId;
        if (!id || !this.books.has(id)) return;
        this.books.delete(id);
        if (this.activeBookId === id) {
            this.activeBookId = this.books.size ? this.books.keys().next().value : null;
        }
        this.emitChange('close');
    }

    setActiveBook(bookId) {
        if (!this.books.has(bookId)) throw new Error(\`Book not found: \${bookId}\`);
        this.activeBookId = bookId;
        this.emitChange('activate-book');
    }

    setActiveSheet(bookId, sheetName) {
        const book = this.getBook(bookId);
        const ws = book.workbook.getWorksheet(sheetName);
        if (!ws) throw new Error(\`Sheet not found: \${sheetName}\`);
        book.activeSheetName = sheetName;
        if (bookId) this.activeBookId = book.id;
        this.emitChange('activate-sheet');
    }

    addSheet(bookId, sheetName) {
        const book = this.getBook(bookId);
        const name = sheetName || \`Sheet\${book.workbook.worksheets.length + 1}\`;
        if (book.workbook.getWorksheet(name)) throw new Error(\`Sheet already exists: \${name}\`);
        book.workbook.addWorksheet(name);
        book.activeSheetName = name;
        book.dirty = true;
        this.emitChange('add-sheet');
        return name;
    }

    deleteSheet(bookId, sheetName) {
        const book = this.getBook(bookId);
        const name = sheetName || book.activeSheetName;
        const ws = book.workbook.getWorksheet(name);
        if (!ws) throw new Error(\`Sheet not found: \${name}\`);
        if (book.workbook.worksheets.length <= 1) throw new Error('Cannot delete the last sheet in a workbook.');

        book.workbook.removeWorksheet(ws.id);

        if (book.activeSheetName === name) {
            book.activeSheetName = book.workbook.worksheets[0].name;
        }

        book.dirty = true;
        this.emitChange('delete-sheet');
        return name;
    }

    renameSheet(bookId, oldName, newName) {
        const book = this.getBook(bookId);
        const srcName = oldName || book.activeSheetName;
        if (!newName) throw new Error('New sheet name is required.');
        if (book.workbook.getWorksheet(newName)) throw new Error(\`Sheet already exists: \${newName}\`);

        const ws = book.workbook.getWorksheet(srcName);
        if (!ws) throw new Error(\`Sheet not found: \${srcName}\`);

        ws.name = newName;
        if (book.activeSheetName === srcName) book.activeSheetName = newName;

        book.dirty = true;
        this.emitChange('rename-sheet');
        return newName;
    }

    duplicateSheet(bookId, srcSheetName, newSheetName) {
        const book = this.getBook(bookId);
        const srcName = srcSheetName || book.activeSheetName;
        const src = book.workbook.getWorksheet(srcName);
        if (!src) throw new Error(\`Sheet not found: \${srcName}\`);

        const name = newSheetName || \`\${srcName}_copy\`;
        if (book.workbook.getWorksheet(name)) throw new Error(\`Sheet already exists: \${name}\`);

        const dst = book.workbook.addWorksheet(name, {
            properties: JSON.parse(JSON.stringify(src.properties || {})),
            pageSetup: JSON.parse(JSON.stringify(src.pageSetup || {})),
            views: JSON.parse(JSON.stringify(src.views || []))
        });

        dst.state = src.state;

        for (let c = 1; c <= Math.max(src.columnCount || 0, src.actualColumnCount || 0); c++) {
            const srcCol = src.getColumn(c);
            const dstCol = dst.getColumn(c);
            dstCol.width = srcCol.width;
            dstCol.hidden = srcCol.hidden;
            dstCol.outlineLevel = srcCol.outlineLevel;
            if (srcCol.style) dstCol.style = JSON.parse(JSON.stringify(srcCol.style));
        }

        for (let r = 1; r <= Math.max(src.rowCount || 0, src.actualRowCount || 0); r++) {
            const srcRow = src.getRow(r);
            const dstRow = dst.getRow(r);
            dstRow.height = srcRow.height;
            dstRow.hidden = srcRow.hidden;
            dstRow.outlineLevel = srcRow.outlineLevel;
            if (srcRow.style) dstRow.style = JSON.parse(JSON.stringify(srcRow.style));

            srcRow.eachCell({ includeEmpty: true }, (srcCell, colNumber) => {
                const dstCell = dstRow.getCell(colNumber);
                dstCell.value = ExcelEngine.cloneValue(srcCell.value);
                if (srcCell.style) dstCell.style = JSON.parse(JSON.stringify(srcCell.style));
                if (srcCell.numFmt) dstCell.numFmt = srcCell.numFmt;
                if (srcCell.alignment) dstCell.alignment = JSON.parse(JSON.stringify(srcCell.alignment));
                if (srcCell.border) dstCell.border = JSON.parse(JSON.stringify(srcCell.border));
                if (srcCell.fill) dstCell.fill = JSON.parse(JSON.stringify(srcCell.fill));
                if (srcCell.font) dstCell.font = JSON.parse(JSON.stringify(srcCell.font));
                if (srcCell.protection) dstCell.protection = JSON.parse(JSON.stringify(srcCell.protection));
            });
        }

        if (src._merges) {
            for (const range of Object.keys(src._merges)) {
                try {
                    dst.mergeCells(range);
                } catch (e) {
                    console.warn(\`Failed to copy merge range \${range}\`, e);
                }
            }
        }

        book.activeSheetName = name;
        book.dirty = true;
        this.emitChange('duplicate-sheet');
        return name;
    }

    enableExcelRecalculation(workbook) {
        if (!workbook) return;
        if (!workbook.calcProperties) workbook.calcProperties = {};
        workbook.calcProperties.fullCalcOnLoad = true;
        workbook.calcProperties.forceFullCalc = true;
    }

    getBook(bookId = null) {
        const id = bookId || this.activeBookId;
        if (!id || !this.books.has(id)) throw new Error(\`Workbook not found: \${id || '(none)'}\`);
        return this.books.get(id);
    }

    getActiveBook() {
        return this.getBook(this.activeBookId);
    }

    getActiveSheet() {
        const book = this.getActiveBook();
        return ExcelEngine.getWorksheet(book, book.activeSheetName);
    }

    listBooks() {
        return Array.from(this.books.values()).map(book => ({
            id: book.id,
            alias: book.alias,
            path: book.path,
            activeSheetName: book.activeSheetName,
            dirty: book.dirty
        }));
    }

    listSheets(bookId = null) {
        const book = this.getBook(bookId);
        return ExcelEngine.listSheets(book);
    }

    async saveBook(bookId = null, path = null) {
        const book = this.getBook(bookId);
        const dest = path || book.path || \`data/spreadsheets/\${book.alias}.xlsx\`;
        book.workbook.modified = new Date();
        this.enableExcelRecalculation(book.workbook);
        await VFSIO.writeWorkbook(dest, book.workbook);
        book.path = dest;
        book.dirty = false;
        this.emitChange('save');
        return dest;
    }

    inspectSheet(bookId, sheetName, startRow, maxRows, displayMode) {
        const book = this.getBook(bookId);
        return ExcelEngine.inspectSheet(book, sheetName || book.activeSheetName, startRow, maxRows, displayMode);
    }

    inspectRange(bookId, sheetName, range, displayMode) {
        const book = this.getBook(bookId);
        return ExcelEngine.inspectRange(book, sheetName || book.activeSheetName, range, displayMode || 'value');
    }

    getSheetDimensions(bookId, sheetName) {
        const book = this.getBook(bookId);
        return ExcelEngine.getSheetDimensions(book, sheetName || book.activeSheetName);
    }

    getCellInfo(bookId, sheetName, range) {
        const book = this.getBook(bookId);
        return ExcelEngine.getCellInfo(book, sheetName || book.activeSheetName, range);
    }

    searchCells(bookId, sheetName, query, opts = {}) {
        const book = this.getBook(bookId);
        return ExcelEngine.searchCells(book, sheetName || book.activeSheetName, query, opts);
    }

    writeCell(bookId, sheetName, cell, value) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.writeCell(book, sheetName || book.activeSheetName, cell, value);
        if (msg.startsWith('Wrote ')) {
            this.emitChange('write-cell');
        }
        return msg;
    }

    writeBlock(bookId, sheetName, startCell, csvText) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.writeBlock(book, sheetName || book.activeSheetName, startCell, csvText);
        this.emitChange('write-block');
        return msg;
    }

    copyRange(srcBookId, srcSheet, srcRange, tgtBookId, tgtSheet, tgtCell, move = false) {
        const srcBook = this.getBook(srcBookId);
        const tgtBook = this.getBook(tgtBookId);
        const msg = ExcelEngine.copyRange(srcBook, srcSheet, srcRange, tgtBook, tgtSheet, tgtCell, move);
        this.emitChange(move ? 'move-range' : 'copy-range');
        return msg;
    }

    clearRange(bookId, sheetName, range) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.clearRange(book, sheetName || book.activeSheetName, range);
        this.emitChange('clear-range');
        return msg;
    }

    insertRows(bookId, sheetName, row, count) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.insertRows(book, sheetName || book.activeSheetName, row, count);
        this.emitChange('insert-rows');
        return msg;
    }

    deleteRows(bookId, sheetName, row, count) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.deleteRows(book, sheetName || book.activeSheetName, row, count);
        this.emitChange('delete-rows');
        return msg;
    }

    setCellStyle(bookId, sheetName, range, patch) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.setCellStyle(book, sheetName || book.activeSheetName, range, patch);
        this.emitChange('set-style');
        return msg;
    }

    getCellStyle(bookId, sheetName, range) {
        const book = this.getBook(bookId);
        return ExcelEngine.getCellStyle(book, sheetName || book.activeSheetName, range);
    }
}

window.WorkbookManager = WorkbookManager;`.trim(),

        "system/lib/autoexcel/js/style-utils.js": `
class StyleUtils {
    static argbToCss(color) {
        if (!color) return null;
        if (typeof color === 'string') {
            if (color.startsWith('#')) return color;
            if (/^[0-9a-fA-F]{6,8}$/.test(color)) {
                const hex = color.length === 8 ? color.slice(2) : color;
                return \`#\${hex}\`;
            }
            return color;
        }
        if (color.argb) {
            const hex = String(color.argb).replace(/^#/, '');
            return \`#\${hex.length === 8 ? hex.slice(2) : hex}\`;
        }
        if (color.rgb) {
            const hex = String(color.rgb).replace(/^#/, '');
            return \`#\${hex.length === 8 ? hex.slice(2) : hex}\`;
        }
        return null;
    }

    static cssToArgb(value) {
        if (!value) return undefined;
        const s = String(value).trim();
        if (/^#[0-9a-fA-F]{6}$/.test(s)) return \`FF\${s.slice(1).toUpperCase()}\`;
        if (/^[0-9a-fA-F]{6}$/.test(s)) return \`FF\${s.toUpperCase()}\`;
        if (/^[0-9a-fA-F]{8}$/.test(s)) return s.toUpperCase();
        return undefined;
    }

    static excelStyleToCss(cell, row, column) {
        const style = (cell && cell.style) || {};
        const css = {};

        const font = style.font || {};
        if (font.bold) css.fontWeight = '700';
        if (font.italic) css.fontStyle = 'italic';
        if (font.underline) css.textDecoration = 'underline';
        if (font.size) css.fontSize = \`\${font.size}px\`;
        const fontColor = this.argbToCss(font.color);
        if (fontColor) css.color = fontColor;

        const fill = style.fill || {};
        if (fill.fgColor) {
            const fillColor = this.argbToCss(fill.fgColor);
            if (fillColor) css.backgroundColor = fillColor;
        }

        const alignment = style.alignment || {};
        if (alignment.horizontal) css.textAlign = this.mapHorizontal(alignment.horizontal);
        if (alignment.vertical) css.verticalAlign = this.mapVertical(alignment.vertical);
        if (alignment.wrapText) css.whiteSpace = 'normal';

        const border = style.border || {};
        for (const side of ['top', 'right', 'bottom', 'left']) {
            if (border[side] && border[side].style) {
                const color = this.argbToCss(border[side].color) || 'rgb(var(--c-border-highlight))';
                css[\`border\${side[0].toUpperCase()}\${side.slice(1)}\`] = \`\${this.mapBorderWidth(border[side].style)} solid \${color}\`;
            }
        }

        if (row && row.height) css.height = \`\${row.height}px\`;
        if (column && column.width) {
            const px = Math.max(42, Math.round(column.width * 7.2));
            css.width = \`\${px}px\`;
            css.minWidth = \`\${px}px\`;
        }

        return css;
    }

    static mapHorizontal(value) {
        const map = {
            left: 'left',
            center: 'center',
            right: 'right',
            fill: 'left',
            justify: 'justify',
            centerContinuous: 'center',
            distributed: 'justify'
        };
        return map[value] || value;
    }

    static mapVertical(value) {
        const map = {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom',
            distributed: 'middle',
            justify: 'middle'
        };
        return map[value] || value;
    }

    static mapBorderWidth(style) {
        if (['medium', 'mediumDashed', 'mediumDashDot', 'mediumDashDotDot'].includes(style)) return '2px';
        if (['thick', 'double'].includes(style)) return '3px';
        return '1px';
    }

    static cssObjectToString(css) {
        return Object.entries(css)
            .filter(([, v]) => v !== undefined && v !== null && v !== '')
            .map(([k, v]) => \`\${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:\${String(v).replace(/"/g, '&quot;')}\`)
            .join(';');
    }

    static summarizeStyle(cell) {
        const style = (cell && cell.style) || {};
        return {
            font: style.font || {},
            fill: style.fill || {},
            alignment: style.alignment || {},
            border: style.border || {},
            numFmt: style.numFmt || null
        };
    }

    static applyStylePatch(cell, patch) {
        if (!cell || !patch) return;

        if (patch.font) {
            const font = { ...(cell.font || {}) };
            Object.assign(font, this.normalizeFontPatch(patch.font));
            cell.font = font;
        }

        if (patch.fill) {
            cell.fill = this.normalizeFillPatch(patch.fill);
        }

        if (patch.alignment) {
            cell.alignment = { ...(cell.alignment || {}), ...patch.alignment };
        }

        if (patch.border) {
            const current = { ...(cell.border || {}) };
            for (const [side, spec] of Object.entries(patch.border)) {
                current[side] = this.normalizeBorderSpec(spec);
            }
            cell.border = current;
        }

        if (patch.numFmt !== undefined) {
            cell.numFmt = patch.numFmt;
        }
    }

    static normalizeFontPatch(fontPatch) {
        const font = { ...fontPatch };
        if (font.color && typeof font.color === 'string') {
            const argb = this.cssToArgb(font.color);
            if (argb) font.color = { argb };
        }
        return font;
    }

    static normalizeFillPatch(fillPatch) {
        if (fillPatch.type === 'solid' || fillPatch.color || fillPatch.fgColor) {
            const raw = fillPatch.color || fillPatch.fgColor;
            const argb = typeof raw === 'string' ? this.cssToArgb(raw) : null;
            return {
                type: 'pattern',
                pattern: 'solid',
                fgColor: argb ? { argb } : raw
            };
        }
        return fillPatch;
    }

    static normalizeBorderSpec(spec) {
        if (!spec) return spec;
        const out = { ...spec };
        if (out.color && typeof out.color === 'string') {
            const argb = this.cssToArgb(out.color);
            if (argb) out.color = { argb };
        }
        if (!out.style) out.style = 'thin';
        return out;
    }
}

window.StyleUtils = StyleUtils;`.trim(),

        "system/lib/autoexcel/js/excel-engine.js": `
class ExcelEngine {
    static encodeCol(colNumber) {
        let n = colNumber;
        let s = '';
        while (n > 0) {
            const rem = (n - 1) % 26;
            s = String.fromCharCode(65 + rem) + s;
            n = Math.floor((n - 1) / 26);
        }
        return s;
    }

    static decodeCol(colLetters) {
        let n = 0;
        for (const ch of String(colLetters).toUpperCase()) {
            if (ch < 'A' || ch > 'Z') continue;
            n = n * 26 + (ch.charCodeAt(0) - 64);
        }
        return n;
    }

    static parseCellAddress(address) {
        const m = String(address || '').trim().match(/^([A-Za-z]+)(\\d+)$/);
        if (!m) throw new Error(\`Invalid cell address: \${address}\`);
        return { col: this.decodeCol(m[1]), row: parseInt(m[2], 10) };
    }

    static encodeCell(row, col) {
        return \`\${this.encodeCol(col)}\${row}\`;
    }

    static parseRange(range) {
        const parts = String(range || '').trim().split(':');
        const a = this.parseCellAddress(parts[0]);
        const b = parts[1] ? this.parseCellAddress(parts[1]) : a;
        return {
            startRow: Math.min(a.row, b.row),
            endRow: Math.max(a.row, b.row),
            startCol: Math.min(a.col, b.col),
            endCol: Math.max(a.col, b.col)
        };
    }

    static getWorksheet(bookRecord, sheetName) {
        if (!bookRecord) throw new Error('Book is not selected.');
        const ws = bookRecord.workbook.getWorksheet(sheetName || bookRecord.activeSheetName);
        if (!ws) throw new Error(\`Sheet not found: \${sheetName || bookRecord.activeSheetName}\`);
        return ws;
    }

    static listSheets(bookRecord) {
        return bookRecord.workbook.worksheets.map(ws => ws.name);
    }

    static cellDisplayValue(cell, mode = 'value') {
        if (!cell) return '';
        if (mode === 'formula' && cell.formula) return \`=\${cell.formula}\`;

        const v = cell.value;
        if (v === undefined || v === null) return '';
        if (typeof v === 'object') {
            if (v.formula) return mode === 'formula' ? \`=\${v.formula}\` : (v.result ?? \`=\${v.formula}\`);
            if (v.richText) return v.richText.map(x => x.text).join('');
            if (v.text) return v.text;
            if (v.hyperlink && v.text) return v.text;
            if (v.result !== undefined) return v.result;
            if (v instanceof Date) return v.toISOString();
            return JSON.stringify(v);
        }
        return v;
    }

    static parseUserValue(value) {
        if (typeof value !== 'string') return value;
        const s = value;
        if (s.startsWith('=')) return { formula: s.slice(1) };
        if (s.trim() !== '' && /^-?\\d+(\\.\\d+)?$/.test(s.trim())) return Number(s.trim());
        return s;
    }

    static writeCell(bookRecord, sheetName, address, value) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const cell = ws.getCell(address);
        const incomingText = String(value ?? '');
        const oldDisplay = String(this.cellDisplayValue(cell, incomingText.startsWith('=') ? 'formula' : 'value') ?? '');

        if (oldDisplay === incomingText) {
            return \`No change at \${address}\`;
        }

        cell.value = this.parseUserValue(value);
        bookRecord.dirty = true;
        return \`Wrote \${address}\`;
    }

    static readRange(bookRecord, sheetName, rangeStr, mode = 'value') {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const rows = [];
        for (let row = r.startRow; row <= r.endRow; row++) {
            const arr = [];
            for (let col = r.startCol; col <= r.endCol; col++) {
                arr.push(this.cellDisplayValue(ws.getCell(row, col), mode));
            }
            rows.push(arr);
        }
        return rows;
    }

    static inspectSheet(bookRecord, sheetName, startRow = 1, maxRows = 100, displayMode = 'value') {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const sRow = Math.max(1, parseInt(startRow, 10) || 1);
        const mRows = Math.max(1, Math.min(1000, parseInt(maxRows, 10) || 100));
        const endRow = Math.min(Math.max(ws.rowCount || 1, sRow), sRow + mRows - 1);
        const maxCol = Math.max(1, Math.min(100, ws.columnCount || 20));

        const out = [];
        out.push(['(idx)', ...Array.from({ length: maxCol }, (_, i) => this.encodeCol(i + 1))]);

        for (let row = sRow; row <= endRow; row++) {
            const arr = [String(row)];
            for (let col = 1; col <= maxCol; col++) {
                arr.push(this.formatCellForInspection(ws.getCell(row, col), displayMode));
            }
            out.push(arr);
        }

        return this.toCSV(out);
    }

    static inspectRange(bookRecord, sheetName, rangeStr, displayMode = 'value') {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const out = [];
        const header = ['(idx)'];
        for (let col = r.startCol; col <= r.endCol; col++) {
            header.push(this.encodeCol(col));
        }
        out.push(header);

        for (let row = r.startRow; row <= r.endRow; row++) {
            const arr = [String(row)];
            for (let col = r.startCol; col <= r.endCol; col++) {
                arr.push(this.formatCellForInspection(ws.getCell(row, col), displayMode));
            }
            out.push(arr);
        }

        return this.toCSV(out);
    }

    static formatCellForInspection(cell, displayMode = 'value') {
        if (displayMode === 'style') {
            return JSON.stringify(StyleUtils.summarizeStyle(cell));
        }
        if (displayMode === 'value_and_style') {
            return JSON.stringify({
                value: this.cellDisplayValue(cell, 'value'),
                formula: cell.formula ? \`=\${cell.formula}\` : null,
                style: StyleUtils.summarizeStyle(cell)
            });
        }
        return this.cellDisplayValue(cell, displayMode);
    }

    static getSheetDimensions(bookRecord, sheetName) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        let firstRow = null;
        let firstCol = null;
        let lastRow = 0;
        let lastCol = 0;
        let nonEmptyCells = 0;
        let formulaCells = 0;
        let numericCells = 0;

        ws.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            row.eachCell({ includeEmpty: false }, (cell, colNumber) => {
                if (!this.cellHasContent(cell)) return;

                if (firstRow === null || rowNumber < firstRow) firstRow = rowNumber;
                if (firstCol === null || colNumber < firstCol) firstCol = colNumber;
                if (rowNumber > lastRow) lastRow = rowNumber;
                if (colNumber > lastCol) lastCol = colNumber;

                nonEmptyCells++;
                if (cell.formula || (cell.value && typeof cell.value === 'object' && cell.value.formula)) formulaCells++;
                if (typeof cell.value === 'number') numericCells++;
            });
        });

        const hiddenRows = [];
        for (let r = 1; r <= Math.max(ws.rowCount || 0, lastRow); r++) {
            if (ws.getRow(r).hidden) hiddenRows.push(r);
        }

        const hiddenCols = [];
        for (let c = 1; c <= Math.max(ws.columnCount || 0, lastCol); c++) {
            if (ws.getColumn(c).hidden) hiddenCols.push(this.encodeCol(c));
        }

        const mergedRanges = ws._merges
            ? Object.keys(ws._merges)
            : [];

        const usedRange = nonEmptyCells === 0
            ? null
            : \`\${this.encodeCell(firstRow, firstCol)}:\${this.encodeCell(lastRow, lastCol)}\`;

        return {
            sheet: ws.name,
            rowCount: ws.rowCount || 0,
            columnCount: ws.columnCount || 0,
            actualRowCount: ws.actualRowCount || 0,
            actualColumnCount: ws.actualColumnCount || 0,
            firstNonEmptyRow: firstRow,
            firstNonEmptyCol: firstCol ? this.encodeCol(firstCol) : null,
            lastNonEmptyRow: nonEmptyCells === 0 ? null : lastRow,
            lastNonEmptyCol: nonEmptyCells === 0 ? null : this.encodeCol(lastCol),
            usedRange,
            nonEmptyCells,
            numericCells,
            formulaCells,
            hiddenRows,
            hiddenCols,
            mergedRanges,
            isEmpty: nonEmptyCells === 0
        };
    }

    static cellHasContent(cell) {
        if (!cell) return false;
        if (cell.formula) return true;
        const v = cell.value;
        if (v === undefined || v === null) return false;
        if (typeof v === 'string') return v.trim() !== '';
        if (typeof v === 'object') {
            if (v.formula) return true;
            if (v.result !== undefined && v.result !== null && String(v.result).trim() !== '') return true;
            if (v.richText && v.richText.some(x => String(x.text || '').trim() !== '')) return true;
            if (v.text && String(v.text).trim() !== '') return true;
            if (v.hyperlink) return true;
            return Object.keys(v).length > 0;
        }
        return true;
    }

    static getCellInfo(bookRecord, sheetName, rangeStr) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const infos = [];
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                const cell = ws.getCell(row, col);
                infos.push({
                    cell: this.encodeCell(row, col),
                    value: this.cellDisplayValue(cell, 'value'),
                    formula: cell.formula ? \`=\${cell.formula}\` : null,
                    type: cell.type,
                    style: StyleUtils.summarizeStyle(cell)
                });
            }
        }
        return infos;
    }

    static searchCells(bookRecord, sheetName, query, opts = {}) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const rawQuery = String(query ?? '');
        if (!rawQuery) throw new Error('Search query is empty.');

        const caseSensitive = opts.caseSensitive === true || opts.caseSensitive === 'true';
        const useRegex = opts.regex === true || opts.regex === 'true';
        const maxResults = Math.max(1, Math.min(1000, parseInt(opts.maxResults, 10) || 100));

        const needle = caseSensitive ? rawQuery : rawQuery.toLowerCase();
        const regex = useRegex ? new RegExp(rawQuery, caseSensitive ? 'g' : 'gi') : null;
        const results = [];

        ws.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            if (results.length >= maxResults) return;

            row.eachCell({ includeEmpty: false }, (cell, colNumber) => {
                if (results.length >= maxResults) return;

                const value = this.cellDisplayValue(cell, 'value');
                const formula = cell.formula ? \`=\${cell.formula}\` : null;
                const haystackRaw = [value, formula].filter(v => v !== null && v !== undefined).join(' ');
                const haystack = caseSensitive ? haystackRaw : haystackRaw.toLowerCase();

                const matched = useRegex ? regex.test(haystackRaw) : haystack.includes(needle);
                if (useRegex && regex) regex.lastIndex = 0;
                if (!matched) return;

                results.push({
                    cell: this.encodeCell(rowNumber, colNumber),
                    row: rowNumber,
                    col: colNumber,
                    colName: this.encodeCol(colNumber),
                    value,
                    formula,
                    type: cell.type
                });
            });
        });

        return {
            sheet: ws.name,
            query: rawQuery,
            count: results.length,
            truncated: results.length >= maxResults,
            results
        };
    }

    static writeBlock(bookRecord, sheetName, startCell, csvText) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const start = this.parseCellAddress(startCell);
        const rows = this.parseTableText(csvText || '');
        let changed = 0;

        for (let r = 0; r < rows.length; r++) {
            for (let c = 0; c < rows[r].length; c++) {
                const cell = ws.getCell(start.row + r, start.col + c);
                const incoming = String(rows[r][c] ?? '');
                const oldDisplay = String(this.cellDisplayValue(cell, incoming.startsWith('=') ? 'formula' : 'value') ?? '');
                if (oldDisplay === incoming) continue;
                cell.value = this.parseUserValue(rows[r][c]);
                changed++;
            }
        }

        if (changed > 0) bookRecord.dirty = true;
        return changed > 0
            ? \`Wrote block at \${startCell} (\${rows.length} rows, \${changed} changed cells)\`
            : \`No change at \${startCell}\`;
    }

    static copyRange(srcBook, srcSheet, srcRange, tgtBook, tgtSheet, tgtCell, move = false) {
        const srcWs = this.getWorksheet(srcBook, srcSheet);
        const tgtWs = this.getWorksheet(tgtBook, tgtSheet);
        const range = this.parseRange(srcRange);
        const target = this.parseCellAddress(tgtCell);
        let count = 0;

        for (let r = range.startRow; r <= range.endRow; r++) {
            for (let c = range.startCol; c <= range.endCol; c++) {
                const srcCell = srcWs.getCell(r, c);
                const dstCell = tgtWs.getCell(target.row + (r - range.startRow), target.col + (c - range.startCol));
                dstCell.value = this.cloneValue(srcCell.value);
                dstCell.style = JSON.parse(JSON.stringify(srcCell.style || {}));
                count++;
            }
        }

        if (move) {
            this.clearRange(srcBook, srcSheet, srcRange);
        }

        tgtBook.dirty = true;
        if (move) srcBook.dirty = true;
        return \`\${move ? 'Moved' : 'Copied'} \${count} cells\`;
    }

    static clearRange(bookRecord, sheetName, rangeStr) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        let count = 0;
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                ws.getCell(row, col).value = null;
                count++;
            }
        }
        bookRecord.dirty = true;
        return \`Cleared \${count} cells\`;
    }

    static insertRows(bookRecord, sheetName, row, count) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        ws.spliceRows(parseInt(row, 10), 0, ...Array.from({ length: parseInt(count, 10) || 1 }, () => []));
        bookRecord.dirty = true;
        return \`Inserted \${count} rows at \${row}\`;
    }

    static deleteRows(bookRecord, sheetName, row, count) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        ws.spliceRows(parseInt(row, 10), parseInt(count, 10) || 1);
        bookRecord.dirty = true;
        return \`Deleted \${count} rows at \${row}\`;
    }

    static setCellStyle(bookRecord, sheetName, rangeStr, patch) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const parsed = typeof patch === 'string' ? JSON.parse(patch) : patch;
        let count = 0;
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                StyleUtils.applyStylePatch(ws.getCell(row, col), parsed);
                count++;
            }
        }
        bookRecord.dirty = true;
        return \`Styled \${count} cells\`;
    }

    static getCellStyle(bookRecord, sheetName, rangeStr) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const out = [];
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                out.push({
                    cell: this.encodeCell(row, col),
                    style: StyleUtils.summarizeStyle(ws.getCell(row, col))
                });
            }
        }
        return out;
    }

    static cloneValue(value) {
        if (value === null || value === undefined) return value;
        if (typeof value === 'object') return JSON.parse(JSON.stringify(value));
        return value;
    }

    static toCSV(rows) {
        return rows.map(row => row.map(v => {
            const s = v === undefined || v === null ? '' : String(v);
            return /[",\\n\\r]/.test(s) ? \`"\${s.replace(/"/g, '""')}"\` : s;
        }).join(',')).join('\\n');
    }

    static parseTableText(text) {
        const s = String(text || '');
        if (s.includes('\\t')) {
            return s
                .replace(/\\r\\n/g, '\\n')
                .replace(/\\r/g, '\\n')
                .split('\\n')
                .filter((line, idx, arr) => !(idx === arr.length - 1 && line === ''))
                .map(line => line.split('\\t'));
        }
        return this.parseCSV(s);
    }

    static parseCSV(text) {
        const rows = [];
        let row = [];
        let cell = '';
        let inQuotes = false;
        const s = String(text || '');

        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            const next = s[i + 1];

            if (inQuotes) {
                if (ch === '"' && next === '"') {
                    cell += '"';
                    i++;
                } else if (ch === '"') {
                    inQuotes = false;
                } else {
                    cell += ch;
                }
                continue;
            }

            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                row.push(cell);
                cell = '';
            } else if (ch === '\\n') {
                row.push(cell);
                rows.push(row);
                row = [];
                cell = '';
            } else if (ch !== '\\r') {
                cell += ch;
            }
        }

        row.push(cell);
        if (row.length > 1 || row[0] !== '') rows.push(row);
        return rows;
    }
}

window.ExcelEngine = ExcelEngine;`.trim(),

        "system/lib/autoexcel/js/app.js": `
(function() {
    const DOM = {
        bookTabs: document.getElementById('book-tabs'),
        sheetTabs: document.getElementById('sheet-tabs'),
        grid: document.getElementById('grid-container'),
        statusLabel: document.getElementById('status-label'),
        activeCellLabel: document.getElementById('active-cell-label'),
        formulaInput: document.getElementById('formula-input'),
        toastContainer: document.getElementById('toast-container'),
        loadingOverlay: document.getElementById('loading-overlay'),
        loadingMessage: document.getElementById('loading-message'),
        btnHome: document.getElementById('btn-home'),
        btnOpen: document.getElementById('btn-open'),
        btnNew: document.getElementById('btn-new'),
        btnNewTab: document.getElementById('btn-new-tab'),
        btnSave: document.getElementById('btn-save'),
        btnAddSheet: document.getElementById('btn-add-sheet'),
        btnApplyInput: document.getElementById('btn-apply-input'),
        btnBold: document.getElementById('btn-bold'),
        btnFillYellow: document.getElementById('btn-fill-yellow')
    };

    const manager = new WorkbookManager();
    const renderer = new GridRenderer(manager, DOM);
    const tools = new AutoExcelTools(manager, renderer);

    manager.onChange = () => renderer.render();

    async function ask(message, defaultValue = '', title = 'AutoExcel') {
        const fullMessage = title ? \`\${title}\\n\\n\${message}\` : message;
        return window.prompt(fullMessage, defaultValue);
    }

    function notify(message, type = 'info', duration = 3200) {
        const container = DOM.toastContainer;
        if (!container) {
            console.log(\`[\${type}] \${message}\`);
            return;
        }

        const toast = document.createElement('div');
        toast.className = \`toast \${type}\`;
        toast.textContent = message;
        container.appendChild(toast);

        window.setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(6px)';
            toast.style.transition = 'opacity 180ms ease, transform 180ms ease';
            window.setTimeout(() => toast.remove(), 220);
        }, duration);
    }

    async function withLoading(message, fn) {
        try {
            showLoading(message);
            await new Promise(resolve => setTimeout(resolve, 30));
            return await fn();
        } finally {
            hideLoading();
        }
    }

    function showLoading(message) {
        if (DOM.loadingMessage) DOM.loadingMessage.textContent = message || 'Processing...';
        if (DOM.loadingOverlay) DOM.loadingOverlay.classList.remove('hidden');
    }

    function hideLoading() {
        if (DOM.loadingOverlay) DOM.loadingOverlay.classList.add('hidden');
    }

    async function openFromPrompt() {
        const path = await ask('VFS上の .xlsx パスを入力してください。', 'data/spreadsheets/QA_List.xlsx', 'Open Workbook');
        if (!path) return;

        await withLoading('Opening workbook...', async () => {
            const id = await manager.openFromVFS(path);
            renderer.render();
            notify(\`Opened \${id}\`, 'success');
        }).catch(e => {
            console.error(e);
            notify(\`Open failed: \${e.message}\`, 'error');
        });
    }

    async function createNewBook() {
        const alias = await ask('新規ブック名を入力してください。', \`Book\${manager.listBooks().length + 1}\`, 'New Workbook');
        if (!alias) return;
        try {
            manager.createBlankBook(alias);
            notify(\`Created \${alias}\`, 'success');
        } catch (e) {
            console.error(e);
            notify(\`Create failed: \${e.message}\`, 'error');
        }
    }

    async function saveActiveBook() {
        if (!manager.activeBookId) {
            notify('保存対象のブックがありません。', 'warning');
            return;
        }

        const book = manager.getActiveBook();
        const path = await ask('保存先パスを入力してください。', book.path || \`data/spreadsheets/\${book.alias}.xlsx\`, 'Save Workbook');
        if (!path) return;

        await withLoading('Saving workbook...', async () => {
            await manager.saveBook(book.id, path);
            renderer.render();
            notify(\`Saved to \${path}\`, 'success');
        }).catch(e => {
            console.error(e);
            notify(\`Save failed: \${e.message}\`, 'error');
        });
    }

    async function addSheet() {
        if (!manager.activeBookId) {
            notify('ブックを先に開いてください。', 'warning');
            return;
        }

        const book = manager.getActiveBook();
        const name = await ask('新規シート名を入力してください。', \`Sheet\${book.workbook.worksheets.length + 1}\`, 'Add Sheet');
        if (!name) return;

        try {
            manager.addSheet(book.id, name);
            notify(\`Added sheet \${name}\`, 'success');
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function applyInput() {
        try {
            renderer.applyFormulaInput();
            renderer.render();
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function applyBold() {
        try {
            if (!renderer.selectedCell || !manager.activeBookId) return;
            const book = manager.getActiveBook();
            const cell = ExcelEngine.getWorksheet(book, book.activeSheetName).getCell(renderer.selectedCell);
            const current = !!(cell.font && cell.font.bold);
            manager.setCellStyle(book.id, book.activeSheetName, renderer.selectedCell, {
                font: { bold: !current }
            });
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function applyFillYellow() {
        try {
            if (!renderer.selectedCell || !manager.activeBookId) return;
            const book = manager.getActiveBook();
            manager.setCellStyle(book.id, book.activeSheetName, renderer.selectedCell, {
                fill: { type: 'solid', color: '#fff2cc' }
            });
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function goHome() {
        if (window.MetaOS && MetaOS.system && typeof MetaOS.system.spawn === 'function') {
            MetaOS.system.spawn('index.html', { pid: 'main' }).catch(() => window.history.back());
            return;
        }
        window.history.back();
    }

    async function init() {
        if (!window.ExcelJS) {
            notify('ExcelJS の読み込みに失敗しました。ネットワークまたはCDNを確認してください。', 'error', 8000);
            return;
        }

        DOM.btnHome.addEventListener('click', goHome);
        DOM.btnOpen.addEventListener('click', openFromPrompt);
        DOM.btnNew.addEventListener('click', createNewBook);
        DOM.btnNewTab.addEventListener('click', createNewBook);
        DOM.btnSave.addEventListener('click', saveActiveBook);
        DOM.btnAddSheet.addEventListener('click', addSheet);
        DOM.btnApplyInput.addEventListener('click', applyInput);
        DOM.formulaInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') applyInput();
        });
        DOM.btnBold.addEventListener('click', applyBold);
        DOM.btnFillYellow.addEventListener('click', applyFillYellow);

        manager.createBlankBook('Book1');
        renderer.render();

        await tools.register();

        window.AutoExcelApp = {
            manager,
            renderer,
            tools,
            notify,
            showLoading,
            hideLoading,
            openFromPrompt,
            createNewBook,
            saveActiveBook
        };

        notify('AutoExcel initialized.', 'success');
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();
})();`.trim(),

        "system/lib/autoexcel/js/tools-binder.js": `
class AutoExcelTools {
    constructor(manager, renderer) {
        this.manager = manager;
        this.renderer = renderer;
    }

    async register() {
        if (!window.MetaOS || !MetaOS.tools) return;

        const wrap = async (fn, update = false) => {
            try {
                const result = await fn();
                if (update && this.renderer) this.renderer.render();
                return { ui: String(result), log: String(result) };
            } catch (e) {
                return { ui: 'Error', log: \`AUTOEXCEL_ERROR: \${e.message}\` };
            }
        };

        const tools = [
            {
                name: 'autoexcel_open_book',
                definition: '<define_tag name="autoexcel_open_book">Attr: path, alias(optional). Opens an XLSX workbook from VFS into AutoExcel.</define_tag>',
                handler: p => wrap(async () => {
                    const id = await this.manager.openFromVFS(p.path, p.alias);
                    return \`Opened workbook '\${id}' from \${p.path}\`;
                }, true)
            },
            {
                name: 'autoexcel_create_book',
                definition: '<define_tag name="autoexcel_create_book">Attr: alias. Creates a blank workbook.</define_tag>',
                handler: p => wrap(() => {
                    const id = this.manager.createBlankBook(p.alias);
                    return \`Created workbook '\${id}'\`;
                }, true)
            },
            {
                name: 'autoexcel_duplicate_book',
                definition: '<define_tag name="autoexcel_duplicate_book">Attr: src_book, alias(optional). Duplicates an open workbook in memory under a new alias.</define_tag>',
                handler: p => wrap(async () => {
                    const id = await this.manager.duplicateBook(p.src_book, p.alias);
                    return \`Duplicated workbook '\${p.src_book}' as '\${id}'\`;
                }, true)
            },
            {
                name: 'autoexcel_list_books',
                definition: '<define_tag name="autoexcel_list_books">Lists open workbooks in AutoExcel.</define_tag>',
                handler: () => wrap(() => JSON.stringify(this.manager.listBooks(), null, 2))
            },
            {
                name: 'autoexcel_list_sheets',
                definition: '<define_tag name="autoexcel_list_sheets">Attr: book(optional). Lists sheets in a workbook.</define_tag>',
                handler: p => wrap(() => this.manager.listSheets(p.book).map(x => \`- \${x}\`).join('\\n'))
            },
            {
                name: 'autoexcel_add_sheet',
                definition: '<define_tag name="autoexcel_add_sheet">Attr: book(optional), name. Adds a blank sheet to a workbook.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.addSheet(p.book, p.name);
                    return \`Added sheet '\${name}'\`;
                }, true)
            },
            {
                name: 'autoexcel_delete_sheet',
                definition: '<define_tag name="autoexcel_delete_sheet">Attr: book(optional), name(optional). Deletes a sheet. If name is omitted, deletes the active sheet. Cannot delete the last sheet.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.deleteSheet(p.book, p.name);
                    return \`Deleted sheet '\${name}'\`;
                }, true)
            },
            {
                name: 'autoexcel_rename_sheet',
                definition: '<define_tag name="autoexcel_rename_sheet">Attr: book(optional), old_name(optional), new_name. Renames a sheet.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.renameSheet(p.book, p.old_name, p.new_name);
                    return \`Renamed sheet to '\${name}'\`;
                }, true)
            },
            {
                name: 'autoexcel_duplicate_sheet',
                definition: '<define_tag name="autoexcel_duplicate_sheet">Attr: book(optional), src_sheet(optional), new_name. Duplicates a sheet within the same workbook, including values and basic layout/style.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.duplicateSheet(p.book, p.src_sheet, p.new_name);
                    return \`Duplicated sheet as '\${name}'\`;
                }, true)
            },
            {
                name: 'autoexcel_activate_book',
                definition: '<define_tag name="autoexcel_activate_book">Attr: book. Activates an open workbook tab.</define_tag>',
                handler: p => wrap(() => {
                    this.manager.setActiveBook(p.book);
                    return \`Activated workbook '\${p.book}'\`;
                }, true)
            },
            {
                name: 'autoexcel_activate_sheet',
                definition: '<define_tag name="autoexcel_activate_sheet">Attr: book(optional), sheet. Activates a sheet.</define_tag>',
                handler: p => wrap(() => {
                    const book = p.book || this.manager.activeBookId;
                    this.manager.setActiveSheet(book, p.sheet);
                    return \`Activated sheet '\${p.sheet}'\`;
                }, true)
            },
            {
                name: 'autoexcel_inspect_sheet',
                definition: '<define_tag name="autoexcel_inspect_sheet">Attr: book(optional), sheet(optional), start_row(optional), max_rows(optional), display_mode(optional: value|formula|style|value_and_style). Returns CSV preview.</define_tag>',
                handler: p => wrap(() => {
                    const csv = this.manager.inspectSheet(p.book, p.sheet, p.start_row, p.max_rows, p.display_mode || 'value');
                    return \`Content:\\n\\\`\\\`\\\`csv\\n\${csv}\\n\\\`\\\`\\\`\`;
                })
            },
            {
                name: 'autoexcel_inspect_range',
                definition: '<define_tag name="autoexcel_inspect_range">Attr: book(optional), sheet(optional), range, display_mode(optional: value|formula|style|value_and_style). Returns a CSV preview for the exact range.</define_tag>',
                handler: p => wrap(() => {
                    const csv = this.manager.inspectRange(p.book, p.sheet, p.range, p.display_mode || 'value');
                    return \`Content:\\n\\\`\\\`\\\`csv\\n\${csv}\\n\\\`\\\`\\\`\`;
                })
            },
            {
                name: 'autoexcel_get_sheet_dimensions',
                definition: '<define_tag name="autoexcel_get_sheet_dimensions">Attr: book(optional), sheet(optional). Returns used range, non-empty bounds, counts, hidden rows/cols, and merged ranges.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.getSheetDimensions(p.book, p.sheet), null, 2))
            },
            {
                name: 'autoexcel_get_cell_info',
                definition: '<define_tag name="autoexcel_get_cell_info">Attr: book(optional), sheet(optional), range. Returns cell values, formulas, and styles as JSON.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.getCellInfo(p.book, p.sheet, p.range), null, 2))
            },
            {
                name: 'autoexcel_search_cells',
                definition: '<define_tag name="autoexcel_search_cells">Attr: book(optional), sheet(optional), query, regex(optional true|false), case_sensitive(optional true|false), max_results(optional). Searches non-empty cells and returns matching cells as JSON.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.searchCells(p.book, p.sheet, p.query, {
                    regex: p.regex,
                    caseSensitive: p.case_sensitive,
                    maxResults: p.max_results
                }), null, 2))
            },
            {
                name: 'autoexcel_write_cell',
                definition: '<define_tag name="autoexcel_write_cell">Attr: book(optional), sheet(optional), cell. Content: value or formula.</define_tag>',
                handler: p => wrap(() => {
                    const value = p.content ?? p._content ?? p.value ?? '';
                    return this.manager.writeCell(p.book, p.sheet, p.cell, value);
                }, true)
            },
            {
                name: 'autoexcel_write_block',
                definition: '<define_tag name="autoexcel_write_block">Attr: book(optional), sheet(optional), start_cell. Content: CSV block.</define_tag>',
                handler: p => wrap(() => {
                    const csv = p.content ?? p._content ?? '';
                    return this.manager.writeBlock(p.book, p.sheet, p.start_cell, csv);
                }, true)
            },
            {
                name: 'autoexcel_copy_range',
                definition: '<define_tag name="autoexcel_copy_range">Attr: src_book, src_sheet, src_range, tgt_book, tgt_sheet, tgt_cell. Copies values and basic styles.</define_tag>',
                handler: p => wrap(() => this.manager.copyRange(p.src_book, p.src_sheet, p.src_range, p.tgt_book, p.tgt_sheet, p.tgt_cell, false), true)
            },
            {
                name: 'autoexcel_move_range',
                definition: '<define_tag name="autoexcel_move_range">Attr: src_book, src_sheet, src_range, tgt_book, tgt_sheet, tgt_cell. Moves values and basic styles.</define_tag>',
                handler: p => wrap(() => this.manager.copyRange(p.src_book, p.src_sheet, p.src_range, p.tgt_book, p.tgt_sheet, p.tgt_cell, true), true)
            },
            {
                name: 'autoexcel_clear_range',
                definition: '<define_tag name="autoexcel_clear_range">Attr: book(optional), sheet(optional), range. Clears cell values in range.</define_tag>',
                handler: p => wrap(() => this.manager.clearRange(p.book, p.sheet, p.range), true)
            },
            {
                name: 'autoexcel_set_cell_style',
                definition: '<define_tag name="autoexcel_set_cell_style">Attr: book(optional), sheet(optional), range. Content: JSON style patch for font/fill/alignment/border/numFmt.</define_tag>',
                handler: p => wrap(() => {
                    const patch = p.content ?? p._content ?? '{}';
                    return this.manager.setCellStyle(p.book, p.sheet, p.range, patch);
                }, true)
            },
            {
                name: 'autoexcel_get_cell_style',
                definition: '<define_tag name="autoexcel_get_cell_style">Attr: book(optional), sheet(optional), range. Returns styles as JSON.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.getCellStyle(p.book, p.sheet, p.range), null, 2))
            },
            {
                name: 'autoexcel_insert_rows',
                definition: '<define_tag name="autoexcel_insert_rows">Attr: book(optional), sheet(optional), row, count. Inserts rows at 1-based row index.</define_tag>',
                handler: p => wrap(() => this.manager.insertRows(p.book, p.sheet, p.row, p.count), true)
            },
            {
                name: 'autoexcel_delete_rows',
                definition: '<define_tag name="autoexcel_delete_rows">Attr: book(optional), sheet(optional), row, count. Deletes rows at 1-based row index.</define_tag>',
                handler: p => wrap(() => this.manager.deleteRows(p.book, p.sheet, p.row, p.count), true)
            },
            {
                name: 'autoexcel_save_book',
                definition: '<define_tag name="autoexcel_save_book">Attr: book(optional), path(optional). Saves workbook to VFS as XLSX Data URI.</define_tag>',
                handler: p => wrap(async () => {
                    const path = await this.manager.saveBook(p.book, p.path);
                    return \`Saved workbook to \${path}\`;
                }, true)
            }
        ];

        for (const tool of tools) {
            await MetaOS.tools.register({
                name: tool.name,
                description: 'AutoExcel workbook operation tool',
                definition: tool.definition,
                handler: tool.handler
            });
        }

        await MetaOS.ai.log(\`[System] AutoExcel tools activated.\\n\${tools.map(t => t.definition).join('\\n')}\`, 'tool_available');
    }
}

window.AutoExcelTools = AutoExcelTools;`.trim(),

        "system/lib/autoexcel/js/vfs-io.js": `
class VFSIO {
    static XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    static async readWorkbook(path) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        if (!window.MetaOS || !MetaOS.fs) throw new Error('MetaOS.fs is not available.');

        const raw = await MetaOS.fs.read(path);
        if (raw === undefined || raw === null || raw === '') {
            throw new Error(\`File is empty or not found: \${path}\`);
        }

        const buffer = await this.toArrayBuffer(raw);
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);
        return workbook;
    }

    static async writeWorkbook(path, workbook) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        if (!window.MetaOS || !MetaOS.fs) throw new Error('MetaOS.fs is not available.');

        const buffer = await workbook.xlsx.writeBuffer();
        const dataUri = this.arrayBufferToDataUri(buffer, this.XLSX_MIME);
        await MetaOS.fs.write(path, dataUri, { overwrite: true });
        return path;
    }

    static async toArrayBuffer(raw) {
        if (raw instanceof ArrayBuffer) return raw;
        if (raw instanceof Uint8Array) {
            return raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength);
        }
        if (raw instanceof Blob || (typeof raw === 'object' && typeof raw.arrayBuffer === 'function')) {
            return await raw.arrayBuffer();
        }
        if (typeof raw === 'string') {
            if (raw.startsWith('data:')) {
                return this.dataUriToArrayBuffer(raw);
            }
            return this.binaryStringToArrayBuffer(raw);
        }
        if (raw && raw.buffer instanceof ArrayBuffer) {
            return raw.buffer.slice(raw.byteOffset || 0, (raw.byteOffset || 0) + (raw.byteLength || raw.buffer.byteLength));
        }
        throw new Error(\`Unsupported VFS payload type: \${typeof raw}\`);
    }

    static dataUriToArrayBuffer(dataUri) {
        const comma = dataUri.indexOf(',');
        if (comma < 0) throw new Error('Invalid Data URI.');
        const meta = dataUri.slice(0, comma);
        const body = dataUri.slice(comma + 1);
        if (meta.includes(';base64')) {
            return this.base64ToArrayBuffer(body);
        }
        return new TextEncoder().encode(decodeURIComponent(body)).buffer;
    }

    static binaryStringToArrayBuffer(binary) {
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i) & 0xff;
        }
        return bytes.buffer;
    }

    static arrayBufferToDataUri(buffer, mime) {
        return \`data:\${mime};base64,\${this.arrayBufferToBase64(buffer)}\`;
    }

    static arrayBufferToBase64(buffer) {
        const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
        const chunkSize = 0x8000;
        let binary = '';
        for (let i = 0; i < bytes.length; i += chunkSize) {
            const chunk = bytes.subarray(i, i + chunkSize);
            binary += String.fromCharCode.apply(null, chunk);
        }
        return btoa(binary);
    }

    static base64ToArrayBuffer(base64) {
        const binary = atob(base64);
        return this.binaryStringToArrayBuffer(binary);
    }
}

window.VFSIO = VFSIO;`.trim(),

        "system/lib/autoexcel/css/autoexcel.css": `
:root {
    color-scheme: light;

    --ae-bg-app: #f8fafc;
    --ae-bg-panel: #ffffff;
    --ae-bg-card: #f1f5f9;
    --ae-bg-hover: #e2e8f0;
    --ae-bg-overlay: rgba(248, 250, 252, 0.76);

    --ae-border-main: #d8e0ea;
    --ae-border-strong: #94a3b8;

    --ae-text-main: #0f172a;
    --ae-text-muted: #64748b;
    --ae-text-inverted: #ffffff;

    --ae-primary: #2563eb;
    --ae-primary-hover: #1d4ed8;
    --ae-success: #16a34a;
    --ae-warning: #d97706;
    --ae-error: #dc2626;

    --ae-selection-bg: rgba(37, 99, 235, 0.12);
    --ae-selection-border: rgba(37, 99, 235, 0.72);

    --ae-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);
}

* {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--ae-bg-app);
    color: var(--ae-text-main);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

.hidden {
    display: none !important;
}

.app-header {
    height: 48px;
    flex: 0 0 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 12px;
    border-bottom: 1px solid var(--ae-border-main);
    background: var(--ae-bg-panel);
}

.header-left {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 12px;
}

.header-actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon-button {
    width: 30px;
    height: 30px;
    border: 1px solid transparent;
    border-radius: 999px;
    background: transparent;
    color: var(--ae-text-muted);
    font-size: 18px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.icon-button:hover {
    background: var(--ae-bg-hover);
    color: var(--ae-text-main);
    border-color: var(--ae-border-main);
}

.app-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 800;
    letter-spacing: -0.02em;
    white-space: nowrap;
}

.app-badge {
    display: inline-flex;
    align-items: center;
    height: 20px;
    padding: 0 7px;
    border-radius: 6px;
    background: var(--ae-success);
    color: white;
    font-size: 11px;
    font-weight: 800;
}

.status-label {
    min-width: 0;
    max-width: 48vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--ae-text-muted);
    font-size: 12px;
}

.toolbar-btn {
    height: 30px;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid var(--ae-border-main);
    background: var(--ae-bg-card);
    color: var(--ae-text-main);
    font-size: 12px;
    font-weight: 700;
    transition: background 120ms ease, border-color 120ms ease, transform 80ms ease;
}

.toolbar-btn:hover {
    background: var(--ae-bg-hover);
    border-color: var(--ae-border-strong);
}

.toolbar-btn:active {
    transform: translateY(1px);
}

.toolbar-btn.primary {
    background: var(--ae-primary);
    border-color: var(--ae-primary);
    color: white;
}

.toolbar-btn.primary:hover {
    background: var(--ae-primary-hover);
    border-color: var(--ae-primary-hover);
}

.toolbar-btn.small {
    height: 26px;
    padding: 0 8px;
}

.bold-button {
    font-weight: 900;
}

.book-tab-bar {
    height: 40px;
    flex: 0 0 40px;
    display: flex;
    align-items: flex-end;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 6px;
    border-bottom: 1px solid var(--ae-border-main);
    background: var(--ae-bg-card);
}

.book-tabs {
    min-width: 0;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 2px;
}

.new-tab-button {
    height: 32px;
    min-width: 36px;
    margin-bottom: 1px;
    border: 1px solid var(--ae-border-main);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    background: var(--ae-bg-panel);
    color: var(--ae-text-muted);
    font-weight: 800;
}

.new-tab-button:hover {
    background: var(--ae-bg-hover);
    color: var(--ae-text-main);
}

.book-tab {
    height: 34px;
    min-width: 140px;
    max-width: 240px;
    padding: 0 10px;
    border: 1px solid var(--ae-border-main);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    background: var(--ae-bg-panel);
    color: var(--ae-text-muted);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
    user-select: none;
}

.book-tab:hover {
    background: var(--ae-bg-hover);
}

.book-tab.active {
    background: var(--ae-bg-app);
    color: var(--ae-text-main);
    border-color: var(--ae-primary);
}

.book-tab-title {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 700;
}

.book-tab-close {
    flex: 0 0 auto;
    opacity: 0.65;
    font-size: 13px;
    line-height: 1;
    padding: 3px;
    border-radius: 4px;
}

.book-tab-close:hover {
    opacity: 1;
    color: white;
    background: var(--ae-error);
}

.app-main {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
}

.formula-bar {
    height: 36px;
    flex: 0 0 36px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    border-bottom: 1px solid var(--ae-border-main);
    background: var(--ae-bg-panel);
}

.active-cell-label {
    width: 78px;
    flex: 0 0 78px;
    color: var(--ae-text-muted);
    font-size: 12px;
}

.formula-input {
    flex: 1 1 auto;
    min-width: 80px;
    height: 27px;
    border: 1px solid var(--ae-border-main);
    border-radius: 8px;
    background: var(--ae-bg-app);
    color: var(--ae-text-main);
    padding: 0 9px;
    outline: none;
    font-size: 13px;
}

.formula-input:focus {
    border-color: var(--ae-primary);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.18);
}

.grid-container {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    background: var(--ae-bg-app);
    position: relative;
}

.sheet-tab-bar {
    height: 40px;
    flex: 0 0 40px;
    display: flex;
    align-items: center;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 6px;
    border-top: 1px solid var(--ae-border-main);
    background: var(--ae-bg-panel);
}

.sheet-tabs {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
}

.add-sheet-button {
    height: 28px;
    min-width: 34px;
    border: 1px solid var(--ae-border-main);
    border-radius: 999px;
    background: var(--ae-bg-card);
    color: var(--ae-text-muted);
    font-weight: 800;
}

.add-sheet-button:hover {
    background: var(--ae-bg-hover);
    color: var(--ae-text-main);
}

.sheet-tab {
    height: 28px;
    min-width: 90px;
    max-width: 220px;
    padding: 0 7px 0 12px;
    border: 1px solid var(--ae-border-main);
    border-radius: 999px;
    background: var(--ae-bg-card);
    color: var(--ae-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
}

.sheet-tab:hover {
    background: var(--ae-bg-hover);
}

.sheet-tab.active {
    background: rgba(34, 197, 94, 0.18);
    color: var(--ae-success);
    border-color: var(--ae-success);
}

.sheet-tab-title {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sheet-tab-close {
    flex: 0 0 auto;
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: var(--ae-text-muted);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    line-height: 1;
    padding: 0;
    opacity: 0.72;
}

.sheet-tab-close:hover {
    opacity: 1;
    background: var(--ae-error);
    color: white;
}

.autoexcel-grid {
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    background: var(--ae-bg-card);
    font-size: 12px;
}

.autoexcel-grid th,
.autoexcel-grid td {
    border-right: 1px solid var(--ae-border-main);
    border-bottom: 1px solid var(--ae-border-main);
}

.grid-corner,
.row-header,
.col-header {
    position: sticky;
    background: var(--ae-bg-panel);
    color: var(--ae-text-muted);
    z-index: 3;
    text-align: center;
    font-weight: 700;
    user-select: none;
}

.grid-corner {
    top: 0;
    left: 0;
    z-index: 5;
    width: 48px;
    min-width: 48px;
    height: 26px;
}

.col-header {
    top: 0;
    height: 26px;
    min-width: 86px;
}

.row-header {
    left: 0;
    width: 48px;
    min-width: 48px;
    height: 24px;
}

.grid-cell {
    min-width: 86px;
    width: 86px;
    height: 24px;
    max-width: 240px;
    padding: 2px 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: var(--ae-bg-card);
    color: var(--ae-text-main);
    outline: none;
    vertical-align: middle;
}

.grid-cell:focus,
.grid-cell.selected {
    outline: 2px solid var(--ae-primary);
    outline-offset: -2px;
    z-index: 2;
    position: relative;
}

.grid-cell.range-selected {
    box-shadow: inset 0 0 0 9999px var(--ae-selection-bg), inset 0 0 0 1px var(--ae-selection-border);
}

.grid-cell.merge-master {
    white-space: normal;
}

.grid-row-hidden,
.grid-col-hidden {
    display: none;
}

.grid-cell[contenteditable="true"] {
    cursor: cell;
}

.empty-state {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ae-text-muted);
    font-size: 13px;
}

.toast-container {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: 8px;
    pointer-events: none;
}

.toast {
    min-width: 220px;
    max-width: 380px;
    padding: 10px 12px;
    border-radius: 10px;
    background: var(--ae-bg-panel);
    color: var(--ae-text-main);
    border: 1px solid var(--ae-border-strong);
    box-shadow: var(--ae-shadow);
    font-size: 13px;
    line-height: 1.45;
    pointer-events: auto;
    animation: aeFadeIn 140ms ease-out;
}

.toast.info {
    border-color: var(--ae-primary);
}

.toast.success {
    border-color: var(--ae-success);
}

.toast.warning {
    border-color: var(--ae-warning);
}

.toast.error {
    border-color: var(--ae-error);
}

.loading-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: var(--ae-bg-overlay);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
}

.loader {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    border: 3px solid var(--ae-bg-hover);
    border-top-color: var(--ae-primary);
    animation: aeSpin 900ms linear infinite;
}

.loading-message {
    color: var(--ae-text-muted);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

@keyframes aeSpin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes aeFadeIn {
    from {
        opacity: 0;
        transform: translateY(6px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: var(--ae-bg-hover);
    border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--ae-border-strong);
}`.trim(),

        "system/themes/midnight.json": JSON.stringify({
    "meta": {
        "name": "Midnight Protocol",
        "author": "System"
    },
    "colors": {
        "bg": {
            "app": "#020617",
            "panel": "#0f172a",
            "card": "#1e293b",
            "hover": "#334155",
            "overlay": "#000000"
        },
        "border": {
            "main": "#1e293b",
            "highlight": "#6366f1"
        },
        "text": {
            "main": "#e2e8f0",
            "muted": "#64748b",
            "inverted": "#020617",
            "system": "#818cf8",
            "tag_attr": "#94a3b8",
            "tag_content": "#cbd5e1"
        },
        "accent": {
            "primary": "#6366f1",
            "success": "#10b981",
            "warning": "#f59e0b",
            "error": "#f43f5e"
        },
        "tags": {
            "thinking": "#312e81",
            "plan": "#064e3b",
            "report": "#4338ca",
            "error": "#881337"
        }
    }
}, null, 4),

        "system/themes/light.json": JSON.stringify({
    "meta": {
        "name": "Itera Light",
        "author": "System"
    },
    "colors": {
        "bg": {
            "app": "#f9fafb",
            "panel": "#ffffff",
            "card": "#f3f4f6",
            "hover": "#e5e7eb",
            "overlay": "#000000"
        },
        "border": {
            "main": "#e5e7eb",
            "highlight": "#3b82f6"
        },
        "text": {
            "main": "#1f2937",
            "muted": "#6b7280",
            "inverted": "#ffffff",
            "system": "#2563eb",
            "tag_attr": "#6b7280",
            "tag_content": "#374151"
        },
        "accent": {
            "primary": "#2563eb",
            "success": "#059669",
            "warning": "#d97706",
            "error": "#dc2626"
        },
        "tags": {
            "thinking": "#1d4ed8",
            "plan": "#047857",
            "report": "#4338ca",
            "error": "#b91c1c"
        }
    }
}, null, 4),

        "system/themes/dark.json": JSON.stringify({
    "meta": {
        "name": "Itera Dark",
        "author": "System"
    },
    "colors": {
        "bg": {
            "app": "#0f172a",
            "panel": "#1e293b",
            "card": "#334155",
            "hover": "#475569",
            "overlay": "#000000"
        },
        "border": {
            "main": "#334155",
            "highlight": "#3b82f6"
        },
        "text": {
            "main": "#f1f5f9",
            "muted": "#94a3b8",
            "inverted": "#0f172a",
            "system": "#60a5fa",
            "tag_attr": "#94a3b8",
            "tag_content": "#cbd5e1"
        },
        "accent": {
            "primary": "#3b82f6",
            "success": "#10b981",
            "warning": "#f59e0b",
            "error": "#ef4444"
        },
        "tags": {
            "thinking": "#1e3a8a",
            "plan": "#064e3b",
            "report": "#312e81",
            "error": "#7f1d1d"
        }
    }
}, null, 4),

        "system/config/services.json": JSON.stringify([], null, 4),

        "system/config/apps.json": JSON.stringify([
    {
        "id": "tasks",
        "name": "Tasks",
        "icon": "✅",
        "path": "apps/tasks.html",
        "description": "Manage daily to-dos"
    },
    {
        "id": "calendar",
        "name": "Calendar",
        "icon": "📅",
        "path": "apps/calendar.html",
        "description": "Schedule events"
    },
    {
        "id": "settings",
        "name": "Settings",
        "icon": "⚙️",
        "path": "apps/settings.html",
        "description": "System configuration"
    },
    {
        "id": "autoexcel",
        "name": "AutoExcel",
        "icon": "📊",
        "path": "apps/autoexcel.html",
        "description": "Automate Excel tasks"
    }
], null, 4),

        "system/config/config.json": JSON.stringify({
    "theme": "system/themes/light.json",
    "language": "Japanese",
    "username": "User",
    "agentName": "ミャク楽",
    "autoUpdateSystemFiles": true,
    "llm": {
        "model": "gemini-3-flash-preview",
        "temperature": 1
    },
    "network": {
        "proxyUrl": "https://corsproxy.io/?",
        "allowCredentialsWithProxy": false
    }
}, null, 4),

        "system/kernel/dashboard.js": `
/**
 * ミャク楽AI Dashboard Kernel
 */
(() => {
    const State = { userName: 'User', tasks: [] };
    const DOM = id => document.getElementById(id);

    // --- Time ---
    const updateClock = () => {
        const now = new Date();
        if (DOM('clock-display')) {
            DOM('clock-display').textContent = now.toLocaleTimeString('ja-JP', { hour12: false, hour: '2-digit', minute: '2-digit' });
        }
        if (DOM('date-display')) {
            DOM('date-display').textContent = now.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' });
        }
    };

    // --- Task Widget ---
    const refreshWidgets = async () => {
        if (!window.App || !DOM('widget-tasks')) return;

        State.tasks = await App.getTasks().catch(() => []);
        const pOrder = { high: 0, medium: 1, low: 2 };
        const pending = State.tasks.filter(t => t.status !== 'completed')
                                   .sort((a, b) => (pOrder[a.priority] ?? 1) - (pOrder[b.priority] ?? 1))
                                   .slice(0, 5); // 最大5件表示
        
        DOM('widget-tasks').innerHTML = pending.length ? pending.map(t => \`
            <div class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-hover border border-transparent hover:border-border-main transition group">
                <button onclick="DashTask.toggle('\${t.id}')" class="shrink-0 w-4 h-4 rounded-full border-2 border-text-muted hover:border-primary flex items-center justify-center transition hover:scale-110 group-hover:border-primary/50"></button>
                <div class="flex-1 min-w-0 cursor-pointer" onclick="DashTask.edit('\${t.id}')">
                    <span class="text-sm truncate block \${t.priority === 'high' ? 'text-error font-medium' : 'text-text-main'}">\${t.title}</span>
                    \${t.dueDate ? \`<span class="text-[10px] text-text-muted font-mono opacity-80 mt-0.5 block flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\${t.dueDate}</span>\` : ''}
                </div>
            </div>\`).join('') : '<div class="text-text-muted text-xs italic text-center py-6 bg-card/50 rounded-lg border border-border-main/50">対応中のタスクはありません</div>';
    };

    // --- Task Actions API ---
    window.DashTask = {
        edit: id => {
            const t = State.tasks.find(x => x.id === id);
            if (!t) return;
            ['id','title','priority','date','desc'].forEach(k => DOM(\`edit-\${k}\`).value = t[k === 'date' ? 'dueDate' : k === 'desc' ? 'description' : k] || '');
            DOM('edit-priority').value = t.priority || 'medium';
            DOM('edit-modal').classList.remove('hidden');
        },
        close: ()  => DOM('edit-modal').classList.add('hidden'),
        save:  async () => {
            const [id, title, priority, dueDate, description] = ['id','title','priority','date','desc'].map(k => DOM(\`edit-\${k}\`).value);
            if (title.trim()) { await App.updateTask(id, { title, priority, dueDate, description }); DashTask.close(); refreshWidgets(); }
        },
        del:   async () => { if (confirm('このタスクを完全に削除しますか？')) { await App.deleteTask(DOM('edit-id').value); DashTask.close(); refreshWidgets(); } },
        toggle: async id => { await App.toggleTask(id); refreshWidgets(); }
    };

    // グローバルへバインド (HTMLからの呼び出し用)
    Object.assign(window, { openDashboardTaskModal: DashTask.edit, closeDashboardTaskModal: DashTask.close, saveDashboardTaskChanges: DashTask.save, deleteDashboardTask: DashTask.del, toggleDashboardTask: DashTask.toggle });

    // --- Boot Sequence ---
    const boot = async () => {
        try {
            const conf = JSON.parse(await MetaOS.readFile('system/config/config.json'));
            State.userName = conf.username || "User";
        } catch {}

        updateClock();
        refreshWidgets();

        setInterval(updateClock, 1000);
        // タスクファイルに変更があったら再描画
        window.MetaOS?.on('file_changed', p => p.path.startsWith('data/tasks/') && refreshWidgets());
    };

    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot) : boot();
})();`.trim(),

        "apps/launcher.html": `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Apps</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../system/lib/ui.js"></script>
    <script src="../system/lib/std.js"></script>
</head>
<body class="bg-app text-text-main min-h-screen p-8">

    <!-- Header -->
    <div class="max-w-5xl mx-auto mb-8 flex items-center gap-4 animate-fade-in-up">
        <button onclick="AppUI.home()" class="p-2 -ml-2 rounded-full hover:bg-hover transition text-text-muted hover:text-text-main">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <h1 class="text-2xl font-bold tracking-tight">Library</h1>
    </div>

    <!-- Grid -->
    <div class="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="app-grid">
        <div class="col-span-full text-center text-text-muted py-10">Loading apps...</div>
    </div>

    <script>
        async function loadApps() {
            const grid = document.getElementById('app-grid');
            try {
                const apps = await App.getApps();
                
                grid.innerHTML = '';
                apps.forEach((app, index) => {
                    const div = document.createElement('div');
                    div.style.animationDelay = \`\${index * 50}ms\`;
                    div.className = "group flex flex-col items-center gap-3 p-6 rounded-2xl bg-panel border border-border-main hover:border-primary/50 hover:bg-hover transition-all cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-primary/10 animate-fade-in-up opacity-0 fill-mode-forwards";
                    
                    div.onclick = () => AppUI.go(app.path);
                    
                    div.innerHTML = \`
                        <div class="w-14 h-14 rounded-xl bg-card text-text-main flex items-center justify-center text-3xl shadow-inner mb-1 group-hover:scale-110 transition-transform duration-300">
                            \${app.icon}
                        </div>
                        <div class="text-center">
                            <div class="text-sm font-bold text-text-main">\${app.name}</div>
                            \${app.description ? \`<div class="text-[10px] text-text-muted mt-1 line-clamp-1">\${app.description}</div>\` : ''}
                        </div>
                    \`;
                    grid.appendChild(div);
                });
            } catch(e) {
                grid.innerHTML = '<div class="col-span-full text-center text-error">Failed to load apps config.</div>';
            }
        }
        
        // Simple animation style
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
            .fill-mode-forwards { animation-fill-mode: forwards; }
        \`;
        document.head.appendChild(style);

        loadApps();
    </script>
</body>
</html>`.trim(),

        "apps/settings.html": `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../system/lib/ui.js"></script>
    <script src="../system/lib/std.js"></script>
    <style>
        /* Hide scrollbar for clean OS look */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="bg-app text-text-main h-screen flex flex-col overflow-hidden">

    <!-- Header -->
    <header class="h-14 border-b border-border-main flex items-center justify-between px-6 bg-panel shrink-0 z-10 sticky top-0 shadow-sm">
        <div class="flex items-center gap-4">
            <button onclick="AppUI.home()" class="p-1.5 -ml-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-hover transition bg-card border border-border-main">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <h1 class="text-lg font-bold tracking-tight">System Settings</h1>
        </div>
        <div class="flex items-center gap-2">
            <span id="save-status" class="text-[10px] text-text-muted font-mono uppercase tracking-widest opacity-0 transition-opacity">Saved</span>
        </div>
    </header>

    <!-- Content -->
    <main class="flex-1 overflow-y-auto no-scrollbar p-6">
        <div class="max-w-3xl mx-auto space-y-8 pb-10">

            <!-- Profile & Agent -->
            <section class="bg-panel rounded-2xl border border-border-main p-6 shadow-sm">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-border-main/50">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <div>
                        <h2 class="text-sm font-bold uppercase tracking-wider text-text-main">Identity & Localization</h2>
                        <p class="text-xs text-text-muted">User and Assistant profiles.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1.5">User Name</label>
                        <input type="text" id="config-username" data-key="username" class="w-full bg-card border border-border-main rounded-lg px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition shadow-inner">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1.5">Agent Name</label>
                        <input type="text" id="config-agentName" data-key="agentName" class="w-full bg-card border border-border-main rounded-lg px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition shadow-inner">
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1.5">Language</label>
                        <select id="config-language" data-key="language" class="w-full md:w-1/2 bg-card border border-border-main rounded-lg px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition cursor-pointer">
                            <option value="English">English</option>
                            <option value="Japanese">Japanese (日本語)</option>
                            <option value="Spanish">Spanish (Español)</option>
                            <option value="French">French (Français)</option>
                            <option value="German">German (Deutsch)</option>
                            <option value="Chinese (Simplified)">Chinese Simplified (简体中文)</option>
                            <option value="Chinese (Traditional)">Chinese Traditional (繁體中文)</option>
                            <option value="Korean">Korean (한국어)</option>
                            <option value="Portuguese">Portuguese (Português)</option>
                            <option value="Russian">Russian (Русский)</option>
                            <option value="Arabic">Arabic (العربية)</option>
                            <option value="Hindi">Hindi (हिन्दी)</option>
                        </select>
                    </div>
                </div>
            </section>

            <!-- System & LLM -->
            <section class="bg-panel rounded-2xl border border-border-main p-6 shadow-sm">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-border-main/50">
                    <div class="w-8 h-8 rounded-full bg-warning/20 text-warning flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h2 class="text-sm font-bold uppercase tracking-wider text-text-main">AI Engine (LLM)</h2>
                        <p class="text-xs text-text-muted">Configure the autonomous brain of the OS.</p>
                    </div>
                </div>

                <div class="space-y-6">
                    <div>
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1.5">CORS Proxy URL</label>
                        <input type="text" id="config-network-proxyUrl" data-key="network.proxyUrl" class="w-full font-mono bg-card border border-border-main rounded-lg px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition shadow-inner" placeholder="https://corsproxy.io/?">
                        <p class="text-[10px] text-text-muted mt-1.5 opacity-80">Prefix used when 'useProxy' is true. Example: http://localhost:8080/?</p>
                    </div>
                    <div class="flex items-center gap-3 bg-card/50 p-3 rounded-lg border border-border-main/50">
                        <input type="checkbox" id="config-network-allowCredentialsWithProxy" data-key="network.allowCredentialsWithProxy" class="w-4 h-4 rounded border-border-main text-primary focus:ring-primary cursor-pointer">
                        <div>
                            <label for="config-network-allowCredentialsWithProxy" class="block text-xs font-bold text-text-main cursor-pointer">Allow Credentials with Proxy</label>
                            <p class="text-[10px] text-text-muted mt-0.5">⚠️ Enable this ONLY if you are using a trusted local proxy. Sending API keys to public proxies is dangerous.</p>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-text-muted uppercase mb-1.5">Model Name</label>
                        <input type="text" id="config-llm-model" data-key="llm.model" class="w-full font-mono bg-card border border-border-main rounded-lg px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition shadow-inner" placeholder="e.g. gemini-3.1-pro-preview">
                        <p class="text-[10px] text-text-muted mt-1.5 opacity-80">Requires engine restart or reload to take full effect.</p>
                    </div>
                </div>
            </section>

            <!-- Appearance (Themes) -->
            <section class="bg-panel rounded-2xl border border-border-main p-6 shadow-sm">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-border-main/50">
                    <div class="w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    </div>
                    <div>
                        <h2 class="text-sm font-bold uppercase tracking-wider text-text-main">Appearance</h2>
                        <p class="text-xs text-text-muted">Customize the visual theme of the interface.</p>
                    </div>
                </div>

                <div id="theme-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="text-text-muted text-sm animate-pulse">Loading themes...</div>
                </div>
            </section>

            <!-- System Info Footer -->
            <div class="text-center pt-4 pb-8">
                <p class="text-xs font-bold text-text-main tracking-widest uppercase">Itera OS v4.1</p>
                <p class="text-[10px] text-text-muted opacity-50 mt-1 font-mono">Kernel: Guest Bridge (window.MetaOS)</p>
            </div>

        </div>
    </main>

    <script>
        let config = {};
        let oldConfig = {};
        const DOM = id => document.getElementById(id);
        
        // --- Core ---
        async function loadConfig() {
            try {
                const str = await MetaOS.readFile('system/config/config.json');
                config = JSON.parse(str);
                oldConfig = JSON.parse(str);
                
                // Bind values to UI
                DOM('config-username').value = config.username || '';
                DOM('config-agentName').value = config.agentName || '';
                DOM('config-language').value = config.language || 'English';
                DOM('config-llm-model').value = config?.llm?.model || '';
                DOM('config-network-proxyUrl').value = config?.network?.proxyUrl || '';
                DOM('config-network-allowCredentialsWithProxy').checked = !!config?.network?.allowCredentialsWithProxy;

                await loadThemes();
            } catch (e) { console.warn("Failed to load config", e); }
        }

        async function saveConfig() {
            const status = DOM('save-status');
            status.textContent = "Saving...";
            status.classList.remove('opacity-0');
            status.classList.add('text-warning');

            try {
                await MetaOS.saveFile('system/config/config.json', JSON.stringify(config, null, 4));
                
                if (window.MetaOS && MetaOS.addEventLog) {
                    if (config.username !== oldConfig.username) {
                        MetaOS.addEventLog(\`User changed their name to "\${config.username}".\`, 'config_changed');
                    }
                    if (config.agentName !== oldConfig.agentName) {
                        MetaOS.addEventLog(\`User changed the agent's name to "\${config.agentName}".\`, 'config_changed');
                    }
                    if (config.language !== oldConfig.language) {
                        MetaOS.addEventLog(\`User changed the system language to "\${config.language}". Please communicate in this language from now on.\`, 'config_changed');
                    }
                }
                oldConfig = JSON.parse(JSON.stringify(config));

                status.textContent = "Saved";
                status.classList.remove('text-warning');
                status.classList.add('text-success');
                setTimeout(() => {
                    status.classList.add('opacity-0');
                    setTimeout(() => { status.classList.remove('text-success'); status.textContent = ""; }, 300);
                }, 2000);
            } catch (e) {
                status.textContent = "Error";
                status.classList.add('text-error');
            }
        }

        // Deep set object value by string path (e.g. "llm.model")
        function setNestedValue(obj, path, value) {
            const keys = path.split('.');
            let current = obj;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]]) current[keys[i]] = {};
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
        }

        // --- Event Listeners (Auto-Save) ---
        const handleInput = (e) => {
            const key = e.target.getAttribute('data-key');
            if (!key) return;
            
            const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            setNestedValue(config, key, val);
            
            // Debounce save (500ms)
            clearTimeout(window._saveTimer);
            window._saveTimer = setTimeout(saveConfig, 500);
        };

        ['config-username', 'config-agentName', 'config-language', 'config-llm-model', 'config-network-proxyUrl', 'config-network-allowCredentialsWithProxy'].forEach(id => {
            DOM(id).addEventListener('input', handleInput);
        });

        // --- Themes ---
        async function loadThemes() {
            const container = DOM('theme-list');
            container.innerHTML = '';

            try {
                const files = await MetaOS.listFiles('system/themes');
                const themeFiles = files.filter(f => f.endsWith('.json')).sort();

                for (const path of themeFiles) {
                    try {
                        const themeData = JSON.parse(await MetaOS.readFile(path));
                        const meta = themeData.meta || { name: path.split('/').pop().replace('.json', ''), author: 'System' };
                        const isActive = config.theme === path;
                        
                        const bg = themeData.colors?.bg?.app || '#1a1b26';
                        const fg = themeData.colors?.text?.main || '#c0caf5';
                        const accent = themeData.colors?.accent?.primary || '#7aa2f7';

                        const div = document.createElement('div');
                        div.className = \`cursor-pointer p-4 rounded-xl border-2 transition-all relative overflow-hidden group shadow-sm hover:shadow-md \${isActive ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : 'border-border-main hover:border-text-muted bg-card'}\`;
                        div.onclick = () => {
                            if (config.theme !== path) {
                                config.theme = path;
                                saveConfig().then(loadThemes);
                            }
                        };

                        div.innerHTML = \`
                            <div class="flex items-center gap-3 relative z-10">
                                <div class="w-12 h-12 rounded-full border border-gray-600 shadow-inner shrink-0 flex items-center justify-center transition-transform group-hover:scale-105" style="background:\${bg}">
                                    <div class="w-5 h-5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]" style="background:\${accent}"></div>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="font-bold text-sm truncate flex items-center justify-between" style="color:\${isActive ? 'rgb(var(--c-accent-primary))' : 'inherit'}">
                                        \${meta.name}
                                        \${isActive ? '<svg class="w-4 h-4 text-primary shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>' : ''}
                                    </div>
                                    <div class="text-[10px] text-text-muted truncate mt-0.5 font-mono opacity-80 uppercase tracking-widest">by \${meta.author}</div>
                                </div>
                            </div>
                        \`;
                        container.appendChild(div);

                    } catch(err) { console.warn("Invalid theme file", path); }
                }
            } catch(e) { container.innerHTML = \`<div class="text-error text-sm">Failed to load themes.</div>\`; }
        }

        // Boot
        document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', loadConfig) : loadConfig();
    </script>
</body>
</html>`.trim(),

        "apps/calendar.html": `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../system/lib/ui.js"></script>
    <script src="../system/lib/std.js"></script>
    <style>
        .calendar-cell { min-height: 80px; }
        /* スクロールバー非表示用ユーティリティ */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="bg-app text-text-main h-screen flex flex-col p-6 overflow-hidden select-none">

    <!-- Header -->
    <header class="flex items-center justify-between mb-6 shrink-0">
        <div class="flex items-center gap-4">
            <button onclick="AppUI.home()" class="p-2 -ml-2 rounded-full hover:bg-hover text-text-muted hover:text-text-main transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <h1 class="text-2xl font-bold tracking-tight" id="month-label">Calendar</h1>
        </div>
        <div class="flex gap-2 bg-panel p-1 rounded-lg border border-border-main shadow-sm">
            <button onclick="changeMonth(-1)" class="p-1 hover:bg-hover rounded text-text-muted hover:text-text-main transition">&lt;</button>
            <button onclick="today()" class="px-3 text-xs font-bold text-text-main hover:bg-hover rounded transition">Today</button>
            <button onclick="changeMonth(1)" class="p-1 hover:bg-hover rounded text-text-muted hover:text-text-main transition">&gt;</button>
        </div>
    </header>

    <!-- Event Details Modal (Hidden by default) -->
    <div id="day-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex justify-end backdrop-blur-sm transition-opacity">
        <div class="bg-panel w-full max-w-sm h-full shadow-2xl border-l border-border-main flex flex-col transform translate-x-full transition-transform duration-300" id="day-modal-content">
            <!-- Modal Header -->
            <div class="p-5 border-b border-border-main flex justify-between items-center bg-card/50">
                <div>
                    <h3 class="font-bold text-xl tracking-tight" id="modal-date-display">Date</h3>
                    <p class="text-xs text-text-muted font-mono uppercase tracking-widest mt-0.5" id="modal-weekday-display">Day</p>
                </div>
                <button onclick="closeDayModal()" class="p-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-hover text-text-muted hover:text-text-main transition bg-panel shadow-sm border border-border-main">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            <!-- Event List -->
            <div class="flex-1 p-4 overflow-y-auto space-y-3" id="modal-event-list">
                <!-- Events injected here -->
            </div>

            <!-- Event Form (Hidden by default, used for Add and Edit) -->
            <div id="event-edit-form" class="hidden flex-1 p-5 overflow-y-auto flex-col space-y-4">
                <input type="hidden" id="edit-event-id">
                <input type="hidden" id="edit-event-original-date">
                
                <div>
                    <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Event Title <span class="text-error">*</span></label>
                    <input type="text" id="edit-event-title" placeholder="Meeting with client..." class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm transition shadow-inner">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Date <span class="text-error">*</span></label>
                        <input type="date" id="edit-event-date" class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm transition cursor-pointer">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Time</label>
                        <input type="time" id="edit-event-time" class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm transition cursor-pointer">
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Notes / Description</label>
                    <textarea id="edit-event-note" rows="4" placeholder="Zoom link, agenda..." class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm resize-none transition shadow-inner"></textarea>
                </div>

                <div class="mt-auto flex gap-2 pt-4 border-t border-border-main">
                    <button onclick="cancelEventForm()" class="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-hover transition text-text-muted hover:text-text-main">Cancel</button>
                    <button onclick="saveEventForm()" class="flex-1 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow transition flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Save Event
                    </button>
                </div>
            </div>

            <!-- Add Event Button (Visible in list mode) -->
            <div class="p-4 border-t border-border-main bg-card/50" id="add-event-section">
                <input type="hidden" id="modal-target-date">
                <button onclick="openEventForm(null)" class="w-full bg-primary hover:bg-primary/90 text-white font-bold px-4 py-3 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                    <span class="text-xl leading-none group-hover:scale-125 transition-transform">+</span> 
                    <span>Create New Event</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Calendar -->
    <div class="flex-1 flex flex-col bg-panel border border-border-main rounded-xl overflow-hidden shadow-sm relative">
        <!-- Header Row -->
        <div class="grid grid-cols-7 gap-px bg-border-main text-center py-2 text-xs font-bold text-text-muted uppercase tracking-wider bg-panel shrink-0">
            <div class="text-error">Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div class="text-primary">Sat</div>
        </div>
        <!-- Grid Body -->
        <div id="grid" class="flex-1 grid grid-cols-7 gap-px bg-border-main overflow-y-auto">
            <!-- Cells injected by JS -->
        </div>
    </div>

    <script>
        let currentDate = new Date();
        const DOM = id => document.getElementById(id);

        async function render() {
            const [year, month] = [currentDate.getFullYear(), currentDate.getMonth()];
            const monthKey = \`\${year}-\${String(month + 1).padStart(2, '0')}\`;
            const todayStr = new Date().toISOString().slice(0, 10);
            
            DOM('month-label').textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            
            // Show subtle loading state for cells if desired, but usually it's fast enough.
            const items = await App.getCalendarItems(monthKey).catch(() => []);
            const [firstDay, daysInMonth] = [new Date(year, month, 1).getDay(), new Date(year, month + 1, 0).getDate()];

            const renderCell = d => {
                const dateStr = \`\${year}-\${String(month + 1).padStart(2, '0')}-\${String(d).padStart(2, '0')}\`;
                const badges = items.filter(i => i.date === dateStr).sort((a, b) => (a.time || '').localeCompare(b.time || '')).map(i => {
                    const color = i.type === 'task' ? 'bg-success/15 text-success border-success/30' : 'bg-primary/15 text-primary border-primary/30';
                    return \`<div class="text-[9px] px-1.5 py-0.5 rounded border \${color} truncate mb-0.5 font-medium tracking-tight">\${i.time ? \`<span class="opacity-60 font-mono mr-1">\${i.time}</span>\` : ''}\${i.title}</div>\`;
                }).join('');

                const isToday = dateStr === todayStr;
                const todayStyles = isToday ? 'bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full shadow-lg shadow-primary/30 ring-2 ring-primary/20' : 'text-text-muted';
                
                return \`<div class="calendar-cell bg-panel hover:bg-hover transition-colors duration-200 p-2 cursor-pointer flex flex-col gap-1 group relative overflow-hidden border-t border-transparent hover:border-primary/30" onclick="openDayModal('\${dateStr}')">
                            <div class="text-xs font-bold \${todayStyles} transition-transform \${!isToday ? 'group-hover:scale-110 group-hover:text-text-main' : ''}">\${d}</div>
                            <div class="flex-1 w-full space-y-0.5 mt-1 overflow-y-auto no-scrollbar">\${badges}</div>
                            <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded transition-colors pointer-events-none"></div>
                        </div>\`;
            };

            DOM('grid').innerHTML = Array(firstDay).fill(\`<div class="calendar-cell bg-app/50"></div>\`).join('') + 
                                    Array.from({ length: daysInMonth }, (_, i) => renderCell(i + 1)).join('');
        }

        function changeMonth(d) {
            currentDate.setMonth(currentDate.getMonth() + d);
            render();
        }
        function today() {
            currentDate = new Date();
            render();
        }

        // --- Day Modal Logic ---
        let currentModalDate = '';
        let currentMonthItems = [];

        async function openDayModal(dateStr) {
            currentModalDate = dateStr;
            const targetDate = new Date(dateStr);
            
            document.getElementById('modal-date-display').textContent = targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            document.getElementById('modal-weekday-display').textContent = targetDate.toLocaleDateString('en-US', { weekday: 'long' });
            document.getElementById('modal-target-date').value = dateStr;

            // Get events for this day
            const yearMonth = dateStr.slice(0, 7);
            try {
                currentMonthItems = await App.getCalendarItems(yearMonth);
            } catch(e) {}
            
            const dayEvents = currentMonthItems.filter(i => i.date === dateStr);
            const listContainer = document.getElementById('modal-event-list');
            
            if (dayEvents.length === 0) {
                listContainer.innerHTML = \`
                    <div class="flex flex-col items-center justify-center h-40 text-text-muted opacity-60">
                        <svg class="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span class="text-sm font-medium">No events for this day</span>
                        <span class="text-xs mt-1">Enjoy your free time!</span>
                    </div>
                \`;
            } else {
                // Sort by time (All-day first)
                dayEvents.sort((a, b) => (a.time || '').localeCompare(b.time || ''));

                listContainer.innerHTML = \`<div class="relative mt-2">\` + dayEvents.map((event, index) => {
                    const isTask = event.type === 'task';
                    const icon = isTask ? '✅' : '📅';
                    const isLast = index === dayEvents.length - 1;
                    const colorClasses = isTask ? 'bg-success/5 border-success/30 hover:bg-success/10' : 'bg-primary/5 border-primary/30 hover:bg-primary/10 hover:border-primary/50 cursor-pointer';
                    const dotColor = isTask ? 'bg-success' : 'bg-primary';
                    const timeText = event.time ? event.time : 'ALL DAY';
                    const timeClass = event.time ? 'text-text-main font-bold text-sm' : 'text-text-muted font-bold text-[10px] uppercase tracking-wider pt-1';

                    return \`
                        <div class="flex gap-4 group relative" \${!isTask ? \`onclick="openEventForm('\${event.id}')"\` : \`title="Tasks must be edited in the Tasks App."\`}>
                            <!-- Timeline Left (Time) -->
                            <div class="w-14 shrink-0 text-right pt-2">
                                <span class="font-mono \${timeClass}">\${timeText}</span>
                            </div>
                            
                            <!-- Timeline Center (Dot & Line) -->
                            <div class="flex flex-col items-center relative">
                                <div class="w-3 h-3 rounded-full \${dotColor} mt-3.5 z-10 shadow-[0_0_8px_currentColor] ring-4 ring-app"></div>
                                \${!isLast ? \`<div class="w-px h-full bg-border-main absolute top-6 bottom-[-24px]"></div>\` : ''}
                            </div>
                            
                            <!-- Timeline Right (Content Card) -->
                            <div class="flex-1 pb-6 pt-1">
                                <div class="p-3 rounded-xl border \${colorClasses} flex flex-col gap-1 shadow-sm transition">
                                    <div class="flex items-start justify-between gap-2">
                                        <div class="text-sm font-bold text-text-main leading-tight">\${event.title}</div>
                                        \${!isTask ? \`
                                        <button onclick="event.stopPropagation(); delEvent('\${event.id}', '\${dateStr}')" class="p-1.5 -m-1.5 text-text-muted hover:text-error hover:bg-error/10 rounded opacity-0 group-hover:opacity-100 transition shrink-0">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                        </button>
                                        \` : ''}
                                    </div>
                                    <div class="text-[10px] text-text-muted uppercase tracking-wider font-bold flex items-center gap-1 mt-0.5">
                                        <span>\${icon}</span> \${isTask ? 'Task Deadline' : (event.note ? 'Notes attached' : 'Event')}
                                    </div>
                                    \${event.note ? \`<div class="text-xs text-text-muted mt-2 bg-card/50 p-2 rounded border border-border-main/50 line-clamp-3">\${event.note}</div>\` : ''}
                                </div>
                            </div>
                        </div>
                    \`;
                }).join('') + \`</div>\`;
            }

            // Show modal with slide-in animation
            const modal = document.getElementById('day-modal');
            const content = document.getElementById('day-modal-content');
            modal.classList.remove('hidden');
            // Trigger reflow for transition
            void modal.offsetWidth; 
            content.classList.remove('translate-x-full');
        }

        function closeDayModal() {
            const modal = document.getElementById('day-modal');
            const content = document.getElementById('day-modal-content');
            content.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('hidden');
                cancelEventForm(); // Reset to list view for next open
            }, 300);
        }

        // --- Modal & Form Logic ---
        function toggleFormView(showForm) {
            ['modal-event-list', 'add-event-section'].forEach(id => DOM(id).classList.toggle('hidden', showForm));
            DOM('event-edit-form').classList.toggle('hidden', !showForm);
            DOM('event-edit-form').classList.toggle('flex', showForm);
        }

        function openEventForm(id = null) {
            const e = id ? currentMonthItems.find(e => e.id === id) : {};
            if (id && !e) return;
            
            DOM('edit-event-id').value = e.id || '';
            DOM('edit-event-original-date').value = e.date || '';
            DOM('edit-event-title').value = e.title || '';
            DOM('edit-event-date').value = e.date || DOM('modal-target-date').value;
            DOM('edit-event-time').value = e.time || '';
            DOM('edit-event-note').value = e.note || '';

            toggleFormView(true);
            setTimeout(() => DOM('edit-event-title').focus(), 50);
        }

        const cancelEventForm = () => toggleFormView(false);

        async function saveEventForm() {
            const [id, title, date, time, note, originalDate] = ['id','title','date','time','note','original-date'].map(k => DOM(\`edit-event-\${k}\`).value);
            if (!title.trim() || !date) {
                AppUI.notify("Event title and date are required.", "warning");
                return;
            }

            AppUI.showLoading("Saving event...");
            id ? await App.updateEvent(id, { title, date, time, note, originalDate }) : await App.addEvent(title, date, time, note);
            AppUI.hideLoading();

            AppUI.notify(id ? "Event updated" : "Event created", "success");
            
            cancelEventForm();
            await render();
            openDayModal(date);
        }
        
        async function delEvent(id, dateStr) {
            if (await AppUI.confirm('Are you sure you want to delete this event?')) {
                AppUI.showLoading("Deleting...");
                await App.deleteEvent(id, dateStr);
                AppUI.hideLoading();
                AppUI.notify("Event deleted", "info");
                await render();
                openDayModal(dateStr);
            }
        }

        // Reactive update
        if (window.MetaOS) {
            MetaOS.on('file_changed', (payload) => {
                if (payload.path.startsWith('data/events/') || payload.path.startsWith('data/tasks/')) {
                    render();
                }
            });
        }

        render();
    </script>
</body>
</html>`.trim(),

        "apps/tasks.html": `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tasks</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../system/lib/ui.js"></script>
    <script src="../system/lib/std.js"></script>
</head>
<body class="bg-app text-text-main h-screen flex flex-col p-6 overflow-hidden select-none">

    <!-- Header -->
    <header class="flex items-center justify-between mb-6 shrink-0">
        <div class="flex items-center gap-4">
            <button onclick="AppUI.home()" class="p-2 -ml-2 rounded-full hover:bg-hover text-text-muted hover:text-text-main transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <h1 class="text-2xl font-bold tracking-tight">Tasks</h1>
        </div>
        <div class="flex gap-2">
            <button onclick="render()" class="p-2 rounded hover:bg-hover text-text-muted hover:text-primary transition" title="Refresh">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>
        </div>
    </header>

    <!-- Input Area -->
    <div class="mb-6 shrink-0 bg-panel border border-border-main rounded-xl p-3 shadow-sm">
        <input type="text" id="task-input" placeholder="What needs to be done?" class="w-full bg-transparent border-b border-border-main/50 pb-2 mb-3 focus:outline-none focus:border-primary text-text-main placeholder-text-muted text-lg font-medium transition" onkeydown="if(event.key==='Enter') addTask()">
        
        <div class="flex items-center gap-2 justify-end">
            <!-- Date Input -->
            <input type="date" id="task-date" class="bg-card border border-border-main rounded px-2 py-1.5 text-xs text-text-muted focus:outline-none focus:border-primary focus:text-text-main transition cursor-pointer">
            
            <!-- Priority -->
            <select id="task-priority" class="bg-card border border-border-main text-xs rounded px-2 py-1.5 text-text-muted focus:outline-none cursor-pointer hover:text-text-main hover:border-primary transition">
                <option value="low">Low Priority</option>
                <option value="medium" selected>Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            
            <!-- Add Button -->
            <button onclick="addTask()" class="bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-lg font-bold text-xs transition flex items-center gap-1 shadow-md hover:shadow-lg">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                Add
            </button>
        </div>
    </div>

    <!-- Filters -->
    <div class="flex gap-1 mb-4 border-b border-border-main/50 px-2 shrink-0">
        <button onclick="setFilter('all')" id="filter-all" class="px-4 py-2 text-sm font-medium border-b-2 border-primary text-primary transition-all">All</button>
        <button onclick="setFilter('pending')" id="filter-pending" class="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-text-muted hover:text-text-main transition-all">Pending</button>
        <button onclick="setFilter('completed')" id="filter-completed" class="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-text-muted hover:text-text-main transition-all">Completed</button>
    </div>

    <!-- Task List -->
    <div class="flex-1 overflow-y-auto -mx-2 px-2 pb-10" id="task-list">
        <!-- Content injected by JS -->
    </div>

    <!-- Edit Modal -->
    <div id="edit-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
        <div class="bg-panel w-full max-w-md mx-4 rounded-2xl shadow-2xl border border-border-main flex flex-col max-h-[90vh] itera-animate-modal">
            <div class="p-4 border-b border-border-main flex justify-between items-center bg-card/30 rounded-t-2xl">
                <h3 class="font-bold text-lg text-text-main flex items-center gap-2">
                    <span class="text-primary">✏️</span> Edit Task
                </h3>
                <button onclick="closeTaskModal()" class="text-text-muted hover:text-text-main w-8 h-8 flex items-center justify-center rounded-full hover:bg-hover transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            <div class="p-5 space-y-5 overflow-y-auto">
                <input type="hidden" id="edit-id">
                
                <div>
                    <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5">Task Title</label>
                    <input type="text" id="edit-title" class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm shadow-inner transition">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5">Priority</label>
                        <select id="edit-priority" class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm cursor-pointer transition">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5">Due Date</label>
                        <input type="date" id="edit-date" class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm cursor-pointer transition">
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5">Description / Notes</label>
                    <textarea id="edit-desc" rows="4" class="w-full bg-card border border-border-main rounded-lg p-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-text-main text-sm resize-none shadow-inner transition" placeholder="Add details..."></textarea>
                </div>
            </div>

            <div class="p-4 border-t border-border-main flex justify-between items-center bg-card/30 rounded-b-2xl">
                <button onclick="deleteFromModal()" class="text-error hover:text-white border border-transparent hover:border-error/50 hover:bg-error/20 px-3 py-1.5 rounded text-sm font-medium transition">Delete Task</button>
                <div class="flex gap-2">
                    <button onclick="closeTaskModal()" class="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-hover transition">Cancel</button>
                    <button onclick="saveTaskChanges()" class="px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-md hover:shadow-lg transition">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentFilter = 'all';
        let allTasks = [];
        const DOM = id => document.getElementById(id);

        const GroupUI = {
            overdue:   { label: "Overdue",   icon: '🔥', color: 'text-error', border: 'border-error/30' },
            today:     { label: "Today",     icon: '🌟', color: 'text-primary', border: 'border-primary/30' },
            upcoming:  { label: "Upcoming",  icon: '📌', color: 'text-text-main', border: 'border-border-main' },
            noDate:    { label: "No Date",   icon: '📝', color: 'text-text-muted', border: 'border-border-main' },
            completed: { label: "Completed", icon: '✔️', color: 'text-success', border: 'border-success/30' }
        };

        const renderTaskCard = (task, todayStr) => {
            const isDone = task.status === 'completed';
            const hasDate = !!task.dueDate;
            const isOverdue = hasDate && !isDone && task.dueDate < todayStr;
            const pColors = { 
                high: 'text-error border-error/30 bg-error/10', 
                medium: 'text-warning border-warning/30 bg-warning/10', 
                low: 'text-success border-success/30 bg-success/10' 
            };
            
            return \`
                <div class="group flex items-center gap-3 p-3 mb-2 rounded-xl bg-panel border border-border-main hover:border-primary/50 transition-all duration-200 \${isDone ? 'opacity-60 grayscale' : 'hover:shadow-md hover:-translate-y-0.5'}">
                    <button onclick="toggle('\${task.id}', \${isDone})" class="shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition hover:scale-110 \${isDone ? 'bg-success border-success' : 'border-text-muted hover:border-primary'}">
                        \${isDone ? '<svg class="w-3 h-3 text-text-inverted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>' : ''}
                    </button>
                    <div class="flex-1 min-w-0 cursor-pointer" onclick="openTaskModal('\${task.id}')">
                        <div class="text-sm font-medium truncate \${isDone ? 'line-through text-text-muted' : 'text-text-main'}">\${task.title}</div>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-[10px] px-1.5 py-0.5 rounded border \${pColors[task.priority] || pColors.medium} uppercase font-bold tracking-wider">\${task.priority || 'med'}</span>
                            \${hasDate ? \`<span class="text-[10px] \${isOverdue ? 'text-error font-bold' : 'text-text-muted'} font-mono flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\${task.dueDate}</span>\` : ''}
                        </div>
                    </div>
                    <button onclick="del('\${task.id}')" class="p-2 text-text-muted hover:text-error opacity-0 group-hover:opacity-100 transition hover:scale-110" title="Delete Task">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>\`;
        };

        async function render() {
            const list = DOM('task-list');
            list.innerHTML = '<div class="flex justify-center py-10"><div class="itera-loader"></div></div>'; // Loading state

            try {
                allTasks = await App.getTasks();
                const tasks = allTasks.filter(t => currentFilter === 'all' || (currentFilter === 'pending' && t.status !== 'completed') || (currentFilter === 'completed' && t.status === 'completed'));
                
                if (!tasks.length) {
                    list.innerHTML = \`<div class="flex flex-col items-center justify-center h-40 text-text-muted opacity-60"><div class="text-4xl mb-2">🍃</div><div class="text-sm font-medium">No tasks found</div><div class="text-xs">You're all caught up!</div></div>\`;
                    return;
                }

                const todayStr = new Date().toISOString().slice(0, 10);
                const getGroupKey = t => t.status === 'completed' ? 'completed' : !t.dueDate ? 'noDate' : t.dueDate < todayStr ? 'overdue' : t.dueDate === todayStr ? 'today' : 'upcoming';
                
                // Group & Sort
                const groups = tasks
                    .sort((a, b) => {
                        const aDone = a.status === 'completed' ? 1 : 0;
                        const bDone = b.status === 'completed' ? 1 : 0;
                        if (aDone !== bDone) return aDone - bDone;

                        const aDate = a.dueDate || '9999';
                        const bDate = b.dueDate || '9999';
                        if (aDate !== bDate) return aDate > bDate ? 1 : -1;

                        const pMap = { high: 3, medium: 2, low: 1 };
                        const aPri = pMap[a.priority] || 2;
                        const bPri = pMap[b.priority] || 2;
                        if (aPri !== bPri) return bPri - aPri;

                        return b.id - a.id;
                    })
                    .reduce((acc, t) => { acc[getGroupKey(t)].push(t); return acc; }, { overdue:[], today:[], upcoming:[], noDate:[], completed:[] });

                list.innerHTML = Object.entries(groups).filter(([, arr]) => arr.length).map(([key, arr]) => \`
                    <div class="mt-4 mb-2">
                        <h3 class="text-[11px] font-bold uppercase tracking-widest \${GroupUI[key].color} flex items-center gap-1.5 px-1 border-b \${GroupUI[key].border} pb-1">
                            <span>\${GroupUI[key].icon}</span> \${GroupUI[key].label}
                            <span class="ml-auto bg-card px-2 py-0.5 rounded-full text-[9px] border border-border-main text-text-muted">\${arr.length}</span>
                        </h3>
                    </div>
                    \${arr.map(t => renderTaskCard(t, todayStr)).join('')}
                \`).join('');

            } catch(e) { 
                list.innerHTML = \`<div class="text-error p-4 bg-error/10 rounded-lg border border-error/20">Error: \${e.message}</div>\`; 
            }
        }

        function setFilter(filter) {
            currentFilter = filter;
            ['all', 'pending', 'completed'].forEach(f => {
                DOM('filter-' + f).className = "px-4 py-2 text-sm font-medium border-b-2 border-transparent text-text-muted hover:text-text-main transition-all";
            });
            DOM('filter-' + filter).className = "px-4 py-2 text-sm font-medium border-b-2 border-primary text-primary transition-all";
            render();
        }

        async function addTask() {
            const input = DOM('task-input');
            const dateInput = DOM('task-date');
            const priority = DOM('task-priority').value;
            
            if(!input.value.trim()) {
                AppUI.notify("Task title cannot be empty.", "warning");
                return;
            }
            
            AppUI.showLoading("Adding...");
            await App.addTask(input.value, dateInput.value, priority);
            AppUI.hideLoading();
            
            AppUI.notify("Task added", "success");
            input.value = '';
            dateInput.value = ''; 
            render();
        }

        async function toggle(id, wasDone) { 
            await App.toggleTask(id); 
            AppUI.notify(wasDone ? "Marked as pending" : "Task completed!", wasDone ? "info" : "success");
            render(); 
        }

        async function del(id) { 
            if(await AppUI.confirm("Are you sure you want to delete this task?")) { 
                AppUI.showLoading("Deleting...");
                await App.deleteTask(id); 
                AppUI.hideLoading();
                AppUI.notify("Task deleted", "info");
                render(); 
            } 
        }

        // --- Modal Logic ---
        function openTaskModal(id) {
            const task = allTasks.find(t => t.id === id);
            if (!task) return;

            DOM('edit-id').value = task.id;
            DOM('edit-title').value = task.title;
            DOM('edit-priority').value = task.priority || 'medium';
            DOM('edit-date').value = task.dueDate || '';
            DOM('edit-desc').value = task.description || ''; 

            DOM('edit-modal').classList.remove('hidden');
            setTimeout(() => DOM('edit-title').focus(), 50);
        }

        function closeTaskModal() {
            DOM('edit-modal').classList.add('hidden');
        }

        async function saveTaskChanges() {
            const id = DOM('edit-id').value;
            const title = DOM('edit-title').value.trim();
            const priority = DOM('edit-priority').value;
            const dueDate = DOM('edit-date').value;
            const description = DOM('edit-desc').value;

            if (!title) {
                AppUI.alert("Task title is required.");
                return;
            }

            AppUI.showLoading("Saving...");
            await App.updateTask(id, { title, priority, dueDate, description });
            AppUI.hideLoading();
            
            AppUI.notify("Task updated", "success");
            closeTaskModal();
            render();
        }

        async function deleteFromModal() {
            const id = DOM('edit-id').value;
            if (await AppUI.confirm("Delete this task permanently?")) {
                AppUI.showLoading("Deleting...");
                await App.deleteTask(id);
                AppUI.hideLoading();
                AppUI.notify("Task deleted", "info");
                closeTaskModal();
                render();
            }
        }

        // --- Reactive Update ---
        if (window.MetaOS) {
            MetaOS.on('file_changed', (payload) => {
                // Ignore silent background updates to prevent UI stutter while user is typing
                if (payload.path.startsWith('data/tasks/') && document.activeElement.tagName !== 'INPUT') {
                    render();
                }
            });
        }

        // Boot
        document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', render) : render();
    </script>
</body>
</html>`.trim(),

        "apps/autoexcel.html": `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoExcel</title>
    <script src="https://cdn.jsdelivr.net/npm/exceljs/dist/exceljs.min.js"></script>
    <link rel="stylesheet" href="../system/lib/autoexcel/css/autoexcel.css">
</head>
<body>
    <div id="toast-container" class="toast-container"></div>
    <div id="loading-overlay" class="loading-overlay hidden">
        <div class="loader"></div>
        <div id="loading-message" class="loading-message">Processing...</div>
    </div>

    <header class="app-header">
        <div class="header-left">
            <button id="btn-home" class="icon-button" title="Home">←</button>
            <div class="app-title">
                <span class="app-badge">XLSX</span>
                <span>AutoExcel</span>
            </div>
            <div id="status-label" class="status-label"></div>
        </div>
        <div class="header-actions">
            <button id="btn-open" class="toolbar-btn">📂 Open</button>
            <button id="btn-new" class="toolbar-btn">＋ New</button>
            <button id="btn-save" class="toolbar-btn primary">💾 Save</button>
        </div>
    </header>

    <section class="book-tab-bar">
        <div id="book-tabs" class="book-tabs"></div>
        <button id="btn-new-tab" class="new-tab-button">＋</button>
    </section>

    <main class="app-main">
        <div class="formula-bar">
            <span id="active-cell-label" class="active-cell-label">Cell: -</span>
            <input id="formula-input" class="formula-input" placeholder="値または数式を入力">
            <button id="btn-apply-input" class="toolbar-btn small">Apply</button>
            <button id="btn-bold" class="toolbar-btn small bold-button" title="Bold">B</button>
            <button id="btn-fill-yellow" class="toolbar-btn small" title="Yellow fill">Fill</button>
        </div>

        <div id="grid-container" class="grid-container"></div>

        <div class="sheet-tab-bar">
            <div id="sheet-tabs" class="sheet-tabs"></div>
            <button id="btn-add-sheet" class="add-sheet-button">＋</button>
        </div>
    </main>

    <script src="../system/lib/autoexcel/js/style-utils.js"></script>
    <script src="../system/lib/autoexcel/js/vfs-io.js"></script>
    <script src="../system/lib/autoexcel/js/excel-engine.js"></script>
    <script src="../system/lib/autoexcel/js/workbook-manager.js"></script>
    <script src="../system/lib/autoexcel/js/grid-renderer.js"></script>
    <script src="../system/lib/autoexcel/js/tools-binder.js"></script>
    <script src="../system/lib/autoexcel/js/app.js"></script>
</body>
</html>`.trim()
    };

})(window);
