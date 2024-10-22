import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookMarks}) => {
  const {title,cover,author_img,author,reading_time,posted_date,hashtags} = blog
  return (
    <div className="mb-20">
      <img className="w-full mb-8 rounded-2xl" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
                  <h3 className="text-2xl">{author}</h3>
                  <p>{posted_date}</p>
            </div>

        </div>
        <div>
          <span>{reading_time} min read</span>
          <button 
            onClick={handleAddToBookMarks}
            className="ml-2 text-2xl text-red-600">
            <CiBookmark /></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};

export default Blog;