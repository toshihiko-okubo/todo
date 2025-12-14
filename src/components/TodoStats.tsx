'use client';

import { Todo } from '@/types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;

  if (total === 0) {
    return null;
  }

  return (
    <div className="text-center text-white mt-5 text-sm opacity-80">
      全{total}件 / 未完了: {active}件 / 完了: {completed}件
    </div>
  );
}
