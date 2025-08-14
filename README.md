# Markdown Notes Editor for Windows/Web

## Overview

This project is a Markdown notes editor and manager designed for Windows and web platforms, inspired by the MacOS application Bear notes. It allows users to create, edit, and manage their notes using Markdown syntax, providing a clean and efficient interface.

## Features

- **Markdown Editing**: A powerful editor for creating and formatting notes using Markdown.
- **Note Management**: Organize notes with tags and categories.
- **Search Functionality**: Quickly find notes using a search bar.
- **Preview Mode**: View rendered Markdown in real-time.
- **Responsive Design**: Works seamlessly on various screen sizes.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Redux**: For state management.
- **Vite**: A fast build tool for modern web applications.
- **TypeScript**: For type safety and better development experience.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/windows-markdown-notes-web.git
   ```
2. Navigate to the project directory:
   ```
   cd windows-markdown-notes-web
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

or

```
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production

To build the application for production, run:

```
npm run build
```

or

```
yarn build
```

The built files will be located in the `dist` directory.

## CI/CD

This project is set up with GitHub Actions for continuous integration and deployment. The workflows are defined in the `.github/workflows` directory.

## Testing

Unit tests are located in the `src/test` directory. To run the tests, use:

```
npm run test
```

or

```
yarn test
```

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Bear notes for MacOS.
- Thanks to the open-source community for their contributions.
