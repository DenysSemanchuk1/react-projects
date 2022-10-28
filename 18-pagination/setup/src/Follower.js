import React from "react";

const Follower = ({ login, avatar_url, url }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={url} className='btn'>
        view profile
      </a>
    </article>
  );
};

export default Follower;
