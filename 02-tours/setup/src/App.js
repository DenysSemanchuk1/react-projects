import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );
  
  if(tours.length === 0) {
    return <main>
      <h2>No tours</h2>
      <button className="btn" onClick={fetchData}>reset data</button>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeItem={removeItem} />
    </main>
  );
}

export default App;
