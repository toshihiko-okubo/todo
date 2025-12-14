export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

export type FilterType = 'all' | 'active' | 'completed';
