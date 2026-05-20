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
        
        DOM('widget-tasks').innerHTML = pending.length ? pending.map(t => `
            <div class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-hover border border-transparent hover:border-border-main transition group">
                <button onclick="DashTask.toggle('${t.id}')" class="shrink-0 w-4 h-4 rounded-full border-2 border-text-muted hover:border-primary flex items-center justify-center transition hover:scale-110 group-hover:border-primary/50"></button>
                <div class="flex-1 min-w-0 cursor-pointer" onclick="DashTask.edit('${t.id}')">
                    <span class="text-sm truncate block ${t.priority === 'high' ? 'text-error font-medium' : 'text-text-main'}">${t.title}</span>
                    ${t.dueDate ? `<span class="text-[10px] text-text-muted font-mono opacity-80 mt-0.5 block flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>${t.dueDate}</span>` : ''}
                </div>
            </div>`).join('') : '<div class="text-text-muted text-xs italic text-center py-6 bg-card/50 rounded-lg border border-border-main/50">対応中のタスクはありません</div>';
    };

    // --- Task Actions API ---
    window.DashTask = {
        edit: id => {
            const t = State.tasks.find(x => x.id === id);
            if (!t) return;
            ['id','title','priority','date','desc'].forEach(k => DOM(`edit-${k}`).value = t[k === 'date' ? 'dueDate' : k === 'desc' ? 'description' : k] || '');
            DOM('edit-priority').value = t.priority || 'medium';
            DOM('edit-modal').classList.remove('hidden');
        },
        close: ()  => DOM('edit-modal').classList.add('hidden'),
        save:  async () => {
            const [id, title, priority, dueDate, description] = ['id','title','priority','date','desc'].map(k => DOM(`edit-${k}`).value);
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
})();