import React from 'react';

type CoverArtProps = {
  artwork?: string;
};

const CoverArt: React.FC<CoverArtProps> = ({ artwork }) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <img
        src={artwork}
        alt="Cover Art"
        className="w-[25rem] h-[22rem] object-cover rounded-lg shadow-custom"
      />
    </div>
  );
};

export default CoverArt;