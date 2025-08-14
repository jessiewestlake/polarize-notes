import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { Tag } from '../features/tags/types';

const TagList: React.FC = () => {
  const tags: Tag[] = useSelector((state: RootState) => state.tags.tags);

  return (
    <div className="tag-list">
      <h2 className="text-lg font-semibold">Tags</h2>
      <ul className="list-disc pl-5">
        {tags.map((tag) => (
          <li key={tag.id} className="text-gray-700">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
