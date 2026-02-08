import { useState } from 'react';
import type { Todo } from '../hooks/useTodos';

// TodoItem.tsx
// Presentational component for a single todo row.
// Responsibilities:
// - Render checkbox, text or edit input
// - Provide edit/save/cancel/delete controls
// - Notify parent via `onToggle`, `onEdit`, `onDelete`

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  labels: any;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit, labels }: TodoItemProps) => {
  // Local UI state for edit flow.
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Save edited text and exit edit mode.
  const handleSave = () => {
    // Prevent saving empty or whitespace-only values.
    if (editText.trim() === '') return;
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  // Cancel editing and revert the local edit buffer.
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between group bg-white border border-slate-100 p-3 rounded-xl hover:border-[#ed7455] transition-all">
      <div className="flex items-center gap-3 flex-1">
        {/* Checkbox: toggles completed state */}
        <input 
          type="checkbox" 
          checked={todo.isCompleted}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 rounded border-slate-300 cursor-pointer accent-[#f26440]"
        />

        {/* Text vs edit input: controlled by `isEditing` */}
        {isEditing ? (
          <div className="flex-1">
            <input 
              className="w-full bg-transparent border-none outline-none p-0 text-base font-medium text-slate-700 focus:ring-0"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
              autoFocus 
            />
            {/* Inline hint shown when user attempts to save an empty value */}
            {editText.trim() === '' && (
              <p className="mt-1 text-xs text-red-500">{labels.inputEmptErrMess}</p>
            )}
          </div>
        ) : (
          <span className={`text-base font-medium text-slate-700 ${todo.isCompleted ? 'line-through text-slate-300' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      
      {/* Action buttons: edit/save/cancel + delete */}
      <div className="flex items-center gap-1">
        {isEditing ? (
          <>
            {/* Save */}
            {/* Save button: disabled when input is empty */}
            <button
              onClick={handleSave}
              disabled={editText.trim() === ''}
              title={editText.trim() === '' ? 'Не можна зберегти пусте значення' : 'Save'}
              className={`text-slate-300 p-1 transition-colors cursor-pointer ${editText.trim() === '' ? 'opacity-40 cursor-not-allowed' : 'hover:text-green-500'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </button>
            {/* Cancel */}
            <button onClick={handleCancel} className="text-slate-300 hover:text-red-400 p-1 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </>
        ) : (
          <>
            {/* Enter edit mode */}
            <button 
              onClick={() => setIsEditing(true)}
              className="text-slate-300 hover:text-blue-500 p-1 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            {/* Delete */}
            <button 
              onClick={() => onDelete(todo.id)} 
              className="text-slate-300 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};