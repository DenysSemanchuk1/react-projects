import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) return <h1 className='loading'>Loading...</h1>;
  const { duties, company, id, dates, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => (
            <button
              className={`job-btn ${value === index && "active-btn"}`}
              key={job.id}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div className='job-desc' key={index}>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))}
        </div>
      </div>
      <button className='btn'>more info</button>
    </section>
  );
}

export default App;
