import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {loading || (
          <div className='btn-container'>
            <button
              className='prev-btn'
              onClick={prevPage}
              disabled={page === 0}
            >
              prev
            </button>
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => handlePage(index)}
                disabled={index === page}
                className={
                  "page-btn" + " " + (index === page ? "active-btn" : "")
                }
              >
                {index + 1}
              </button>
            ))}
            <button
              className='next-btn'
              onClick={nextPage}
              disabled={page === data.length - 1}
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
