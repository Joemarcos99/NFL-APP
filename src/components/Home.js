/*
Author: Joe Marcotte
Date: 8/8/2022
Title: Nfl Game Data
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  let navigate = useNavigate();
  const teams = [
    "ARI",
    "ATL",
    "BAL",
    "BUF",
    "CAR",
    "CHI",
    "CIN",
    "CLE",
    "DAL",
    "DEN",
    "DET",
    "GB",
    "HOU",
    "IND",
    "JAC",
    "KC",
    "MIA",
    "MIN",
    "NE",
    "NO",
    "NYG",
    "NYJ",
    "OAK",
    "PHI",
    "PIT",
    "SD",
    "SEA",
    "SF",
    "STL",
    "TB",
    "TEN",
    "WAS",
  ];
  const years = [
    "2009-2010",
    "2010-2011",
    "2011-2012",
    "2012-2013",
    "2013-2014",
    "2014-2015",
    "2015-2016",
    "2016-2017",
    "2017-2018",
    "2018-2019",
    "2019-2020",
  ];
  const [currentTeam, setCurrentTeam] = useState(props.team);
  const [currentYear, setCurrentYear] = useState(props.year);
  return (
    <div className="home main-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.ebayimg.com/images/i/111263765828-0-1/s-l1000.jpg"
        />
        <h1 className="title">NFL Game Data</h1>
      </div>
      <form
        //   updates current team and year state variables in app component
        onSubmit={() => {
          props.handleSubmit(currentTeam, currentYear);
          navigate("/team-data");
        }}
      >
        <select
          value={currentTeam}
          onChange={(event) => setCurrentTeam(event.target.value)}
          className="dropdown"
        >
          <option>Choose Team</option>
          {/* fills dropdown by mapping teams */}
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
        <select
          value={currentYear}
          onChange={(event) => setCurrentYear(event.target.value)}
          className="dropdown"
        >
          <option>Choose Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <div className="submit-container">
          <input
            type="submit"
            value="View Results"
            className="btn submit-btn"
          />
        </div>
      </form>
    </div>
  );
}
