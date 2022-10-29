import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();
  if (isLoading) return <div className='loading'></div>;
  return (
    <section className='stories'>
      {hits.map(
        ({ objectID: id, title, num_comments, author, points, url }) => (
          <article className='story' key={id}>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                className='read-link'
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button className='remove-btn' onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        )
      )}
    </section>
  );
};

export default Stories;
