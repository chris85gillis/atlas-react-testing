import React from 'react';

type SongTitleProps = {
  title: string;
  author: string;
};

const SongTitle: React.FC<SongTitleProps> = ({ title, author }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-bold text-nightText">{title}</h1>
      <p className="text-lg text-nightSecondary">{author}</p>
    </div>
  );
};

export default SongTitle;