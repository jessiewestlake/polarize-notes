// This file defines global types used throughout the application.

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  id: string;
  name: string;
}

export interface AppState {
  notes: Note[];
  tags: Tag[];
  ui: {
    isSidebarOpen: boolean;
    isModalOpen: boolean;
  };
}
