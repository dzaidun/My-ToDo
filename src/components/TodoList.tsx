import type { Todo } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  labels: any;
}

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo, labels }: TodoListProps) {
  return (
    <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} labels={labels} />
      ))}

      {todos.length === 0 && (
        <p className="text-center text-slate-400 text-sm py-10 opacity-60">{labels.emptyList}</p>
      )}
    </div>
  );
}
