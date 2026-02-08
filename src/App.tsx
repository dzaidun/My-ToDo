import { useTodos } from './hooks/useTodos';

import Header from './components/Header';
import ProgressStats from './components/ProgressStats';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ClearAll from './components/ClearAll';

// App.tsx — Main application component
// - Orchestrates UI presentation and delegates state/logic to `useTodos` hook
// - Sections: language switcher, header, progress, input, todo list, clear-all modal

function App() {
  const { 
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
    stats 
  } = useTodos();


  return (
    <div className="min-h-screen bg-linear-to-tr from-[#aa9900] via-[#631c1c] to-[#270043] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 pb-3 relative">
        <Header labels={labels} lang={lang} setLang={setLang} />

        <ProgressStats labels={labels} stats={stats} />

        <AddTodo inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} labels={labels} />

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} labels={labels} />

        <ClearAll todosLength={todos.length} labels={labels} lang={lang} clearAll={clearAll} />
      </div>
    </div>
  );
}

export default App;