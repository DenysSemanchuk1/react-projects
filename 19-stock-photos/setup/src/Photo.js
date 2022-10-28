import React from "react";

const Photo = ({
  alt_description,
  urls: { regular },
  likes,
  user: {
    name,
    profile_image: { small },
  },
}) => {
  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a>
          <img src={small} alt='user photo' className='user-img' />
        </a>
      </div>
    </article>
  );
};

export default Photo;
