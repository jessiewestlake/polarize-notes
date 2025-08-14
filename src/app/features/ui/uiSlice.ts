import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
}

const initialState: UIState = {
  isSidebarOpen: true,
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { toggleSidebar, openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
