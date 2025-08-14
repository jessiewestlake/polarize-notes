import TagList from '../components/TagList';

const Tags: React.FC = () => {
  // Data is read by TagList internally via Redux

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tags</h1>
      <TagList />
    </div>
  );
};

export default Tags;
