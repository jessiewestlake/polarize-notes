import React, { useState } from 'react';

type EditorProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const [markdown, setMarkdown] = useState<string>(value ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = event.target.value;
    setMarkdown(next);
    onChange?.(next);
  };

  return (
    <div className="flex flex-col h-full">
      <textarea
        className="flex-1 p-4 border border-gray-300 rounded-md"
        placeholder="Write your notes here"
        name="noteContent"
        value={value ?? markdown}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
