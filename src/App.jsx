import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import JobGrid from "./components/JobGrid";
import "./App.css";

function App() {
  const [jobData, setJobData] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetch("src/components/data.json")
      .then((res) => res.json())
      .then((data) => {
        setJobData(data);
      });

      sortUserPlugins
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchSection setLocationFilter={setLocationFilter} />
      <JobGrid jobData={jobData} locationFilter={locationFilter} />
    </div>
  );
}

export default App;
