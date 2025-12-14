'use client';

import { useState, useMemo } from 'react';
import { Todo, FilterType } from '@/types/todo';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { TodoInput } from './TodoInput';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoStats } from './TodoStats';

const STORAGE_KEY = 'todos';

export function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, []);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-white text-center mb-8 text-4xl font-bold drop-shadow-lg">
        TODO App
      </h1>
      <TodoInput onAdd={addTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <TodoStats todos={todos} />
    </div>
  );
}
