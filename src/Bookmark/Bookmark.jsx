import React from 'react';

const Bookmark = ({bookmarks}) => {
  const {title} = bookmarks;
  return (
    <div className='bg-slate-200 p-4 m-4 rounded-xl'>
      <h3 className='text-3xl'>{title}</h3>
    </div>
  );
};

export default Bookmark;