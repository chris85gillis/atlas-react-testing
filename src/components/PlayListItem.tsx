import React from 'react';

interface PlayListItemProps {
  title: string;
  genre: string;
  length: string;
  onClick?: () => void;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ title, genre, length }) => {
  return (
    <div className="flex justify-between items-center py-2 flex-nowrap p-6">
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold text-nightText truncate">{title}</h2>
        <p className="text-sm text-nightSecondary truncate">{genre}</p>
      </div>
      <span className="text-sm text-nightSecondary whitespace-nowrap">{length}</span>
    </div>
  );
};

export default PlayListItem;