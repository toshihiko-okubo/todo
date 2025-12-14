'use client';

import { useState, KeyboardEvent } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="flex gap-3 mb-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="新しいタスクを入力..."
        className="flex-1 px-5 py-4 bg-white text-gray-800 border-none rounded-xl text-base shadow-md outline-none focus:shadow-lg transition-shadow placeholder-gray-400"
      />
      <button
        onClick={handleAdd}
        className="px-6 py-4 bg-green-500 text-white border-none rounded-xl text-base cursor-pointer shadow-md hover:bg-green-600 hover:-translate-y-0.5 transition-all"
      >
        追加
      </button>
    </div>
  );
}
