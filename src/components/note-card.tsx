export function NoteCard() {
    return (
        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
            <span className='text-sm font-medium text-slate-200'>
                há 4 dias
            </span>
            <p className='text-sm leading-6 text-slate-300'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore molestias veniam id dolorem. Vitae, nisi reiciendis, excepturi assumenda dolor quis recusandae beatae magnam ab commodi atque tenetur officia quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, vel! Nostrum possimus adipisci ratione ipsa numquam similique quibusdam, quod beatae distinctio minima dignissimos ab cum eum minus. Mollitia, veniam sit.
            </p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'></div>
        </div>)
}