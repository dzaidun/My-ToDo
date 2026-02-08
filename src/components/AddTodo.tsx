interface AddTodoProps {
  inputValue: string;
  setInputValue: (v: string) => void;
  addTodo: () => void;
  labels: any;
}

export default function AddTodo({ inputValue, setInputValue, addTodo, labels }: AddTodoProps) {
  return (
    <div className="relative mb-4 mt-3">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 pr-28 outline-none focus:ring-1 focus:ring-[#f26440] text-base transition-all"
        placeholder={labels.placeholder}
      />
      <button
        onClick={addTodo}
        className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#f26440] hover:bg-orange-600 text-white px-4 rounded-lg font-bold text-sm transition-all active:scale-95"
      >
        {labels.addButton}
      </button>
    </div>
  );
}
