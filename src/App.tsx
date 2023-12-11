import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingSpinner from './ts/LoadingSpinner';
import AnimatedBackground from './ts/AnimatedBG';
import VideoBackground from './ts/VideoBG';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous task
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="portfolio">
      <VideoBackground />
      <nav>
          <a href="#home">Home</a>
          <a href="https://www.linkedin.com/in/anjana-manikandan-63b3a11ba/">Visit my Linkedln!</a>
          <a href="mailto:manikana@kean.edu">Contact Me</a>
        </nav>
          <header>
            <h1>Anjana Manikandan</h1>
            <p>Software Engineer | Vice President, ACM at Kean | AI Researcher</p>
          </header>
          <main>
            <section className="qualifications">
              <h2>Qualifications</h2>
              <ul>
                <li>Self-driven individual with experience in Software Engineering and Web/Application Development.</li>
                <li>Vice President of the Association of Computing Machinery at Kean University.</li>
                <li>Experience with GEICO, Highmark Health, and PSEG through internship/co-op programs.</li>
                <li>Created full-stack applications using C#, Python, and Java.</li>
                <li>Involved in AI research at Kean University.</li>
                <li>Tutored students in various programming languages.</li>
              </ul>
            </section>
          </main>
          <footer>
            <p>Contact Information: manikana@kean.edu</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
