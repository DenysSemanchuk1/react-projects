import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getTheme = () => localStorage.getItem("theme");
function App() {
  const [theme, setTheme] = useState(getTheme() || "light-theme");
  const [articles, setArticles] = useState(data);
  const switchTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={switchTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
