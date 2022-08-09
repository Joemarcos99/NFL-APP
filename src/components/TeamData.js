/*
Author: Joe Marcotte
Date: 8/8/2022
Title: Nfl Game Data
*/

import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamData(props) {
  let navigate = useNavigate();
  return (
    <div className="team-data main-container">
      <table className="table">
        <thead>
          <tr>
            <th>Week</th>
            <th className="text-center">Date</th>
            <th className="text-center">Opponent</th>
            <th className="text-center">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="reg-season">
            <td className="text-center" colSpan="4">
              Pre Season
            </td>
          </tr>
          {/* The first 4 games are sliced for pre season */}
          {props.data.games.slice(0, 4).map((game) => (
            <tr
              // logic to decide to apply winner or loser class name
              className={`table-row ${
                props.data.team === game.home_team
                  ? game.home_score > game.away_score
                    ? "winner"
                    : "loser"
                  : game.home_score < game.away_score
                  ? "winner"
                  : "loser"
              }`}
            >
              <td>{game.week}</td>
              <td>{game.date}</td>
              {/* logic to format opponent and decide if the selected team won or loss */}
              {props.data.team === game.home_team ? (
                <>
                  <td>{`vs ${game.away_team}`}</td>
                  <td>
                    {game.home_score > game.away_score ? "W" : "L"}{" "}
                    {`${game.home_score} - ${game.away_score}`}
                  </td>
                </>
              ) : (
                <>
                  <td>{`@ ${game.home_team}`}</td>
                  <td>
                    {game.away_score > game.home_score ? "W" : "L"}{" "}
                    {`${game.away_score} - ${game.home_score}`}
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr className="reg-season">
            <td className="text-center" colSpan="4">
              Regular Season
            </td>
          </tr>
          {/* The rest of the game data for regular season */}
          {props.data.games.slice(4).map((game) => (
            <tr
              // logic to decide to apply winner or loser class name
              className={`table-row ${
                props.data.team === game.home_team
                  ? game.home_score > game.away_score
                    ? "winner"
                    : "loser"
                  : game.home_score < game.away_score
                  ? "winner"
                  : "loser"
              }`}
            >
              <td>{game.week}</td>
              <td>{game.date}</td>
              {/* logic to format opponent and decide if the selected team won or loss */}
              {props.data.team === game.home_team ? (
                <>
                  <td>{`vs ${game.away_team}`}</td>
                  <td>
                    {game.home_score > game.away_score ? "W" : "L"}{" "}
                    {`${game.home_score} - ${game.away_score}`}
                  </td>
                </>
              ) : (
                <>
                  <td>{`@ ${game.home_team}`}</td>
                  <td>
                    {game.away_score > game.home_score ? "W" : "L"}{" "}
                    {`${game.away_score} - ${game.home_score}`}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* button to navigate back to the home screen */}
      <button className="back-btn" onClick={() => navigate("/")}>
        Check out another team/year
      </button>
    </div>
  );
}
