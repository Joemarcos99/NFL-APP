/*
Author: Joe Marcotte
Date: 8/8/2022
Title: Nfl Game Data
*/

import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import TeamData from "./components/TeamData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem("team")));
  const [year, setYear] = useState(JSON.parse(localStorage.getItem("year")));

  // updates state variables on click of view results button
  function handleSubmit(team, year) {
    setTeam(team);
    setYear(year);
    setData(
      require(`./nfl_json_data-master/nfl_games/games_data/by_team/${team}/${team}_all_games_${year}.json`)
    );
  }
  // saves state variables to local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("team", JSON.stringify(team));
    localStorage.setItem("year", JSON.stringify(year));
  }, [data, team, year]);
  return (
    <Router>
      <Routes>
        <Route path="/team-data" element={<TeamData data={data} />} />
        <Route
          path="/"
          element={<Home team={team} year={year} handleSubmit={handleSubmit} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
