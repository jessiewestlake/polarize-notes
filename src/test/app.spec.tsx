import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the main application layout', () => {
    render(<App />);
    const headerElement = screen.getByText(/markdown notes editor/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the sidebar', () => {
    render(<App />);
    const sidebarElement = screen.getByRole('navigation');
    expect(sidebarElement).toBeInTheDocument();
  });

  test('renders the editor component', () => {
    render(<App />);
    const editorElement = screen.getByPlaceholderText(/write your notes here/i);
    expect(editorElement).toBeInTheDocument();
  });

  test('renders the markdown preview', () => {
    render(<App />);
    const previewElement = screen.getByText(/preview/i);
    expect(previewElement).toBeInTheDocument();
  });
});
