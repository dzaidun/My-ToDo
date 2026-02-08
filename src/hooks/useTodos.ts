import { useState, useEffect, useMemo } from 'react';
import { translations, type Language } from '../utils/translations';

// useTodos
// Custom hook that encapsulates todos state, persistence and simple business logic.
// Returns:
// - todos, inputValue and setters
// - action helpers: addTodo, toggleTodo, deleteTodo, editTodo, clearAll
// - localization: `labels`, `lang`, `setLang`
// - computed `stats` (total, completed, percentage, phrase)

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export const useTodos = () => {
  // Language state: stores current language key and persists it to localStorage.
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem('todo_lang');
    return (savedLang as Language) || 'ua';
  });

  // Persist language selection when it changes.
  useEffect(() => {
    localStorage.setItem('todo_lang', lang);
  }, [lang]);

  // Localized labels for the currently selected language.
  const labels = translations[lang];

  // Todos state: persisted to `my_todos` in localStorage.
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedData = localStorage.getItem('my_todos');
    return savedData ? JSON.parse(savedData) : [];
  });

  // Controlled value for the new-todo input field.
  const [inputValue, setInputValue] = useState("");

  // Persist todos when they change.
  useEffect(() => {
    localStorage.setItem('my_todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo using the current `inputValue`.
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Toggle completed state for a todo by id.
  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  // Remove a todo by id.
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Replace the text for a todo (edit mode save).
  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  // Clear all todos. UI is expected to ask for confirmation before calling this.
  const clearAll = () => {
    setTodos([]);
  };

  // Computed statistics for UI.
  const totalTodos = todos.length;
  const completedTodos = todos.filter(t => t.isCompleted).length;
  const percentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  // Choose a short motivational phrase based on completion percentage.
  // useMemo prevents recalculation unless dependencies change.
  const motivationPhrase = useMemo(() => {
    const m = labels.motivation;
    let selected: string[];

    if (totalTodos === 0) return m.zero[Math.floor(Math.random() * m.zero.length)];

    if (percentage === 0) selected = m.zero;
    else if (percentage <= 15) selected = m.step1;
    else if (percentage <= 30) selected = m.step2;
    else if (percentage <= 45) selected = m.step3;
    else if (percentage <= 55) selected = m.half;
    else if (percentage <= 70) selected = m.step5;
    else if (percentage <= 85) selected = m.step6;
    else if (percentage < 100) selected = m.final;
    else selected = m.done;

    const randomIndex = Math.floor(Math.random() * selected.length);
    return selected[randomIndex];
  }, [percentage, totalTodos, lang, labels]);

  return {
    todos,
    inputValue,
    setInputValue,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearAll,
    lang,
    setLang,
    labels, 
    stats: {
      total: totalTodos,
      completed: completedTodos,
      percentage,
      phrase: motivationPhrase
    }
  };
};