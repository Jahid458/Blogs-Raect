import PropTypes from 'prop-types';


const Bookmark = ({ bookmarks }) => {
  const { title } = bookmarks;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-xl">
      <h3 className="text-3xl">{title}</h3>
    </div>
  );
};


Bookmark.propTypes = {
  bookmarks: PropTypes.object
}


export default Bookmark;
