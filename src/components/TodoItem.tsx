'use client';

import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={`group flex items-center px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${
        todo.completed ? 'completed' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 min-w-5 mr-4 cursor-pointer accent-slate-600"
      />
      <span
        className={`flex-1 text-base ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-2 bg-red-500 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
      >
        削除
      </button>
    </div>
  );
}
