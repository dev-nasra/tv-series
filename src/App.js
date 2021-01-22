import React from "react";
import "./styles.css";
import { useState } from "react";

const tvSeriesDB = {
  Comedy: [
    { name: "WandaVission", rating: "7.5/10" },
    { name: "The Office", rating: "8.9/10" },
    { name: "Shameless", rating: "8.6/10" },
    { name: "Brooklyn Nine-Nine", rating: "8.4/10" }
  ],

  SciFi: [
    {
      name: "The Expanse",
      rating: "8.5/10"
    },
    {
      name: "Stranger Things",
      rating: "8.8/10"
    },
    {
      name: "Doctor Who",
      rating: "8.6/10"
    }
  ],

  Romance: [
    {
      name: "This is Us",
      rating: "8.7/10"
    },
    {
      name: "After we collided",
      rating: "7/10"
    },
    {
      name: "Gray's Atomy",
      rating: "8/10"
    }
  ],
  Action: [
    {
      name: "Game Of Thrones",
      rating: "5/5"
    },
    {
      name: "The Witcher",
      rating: "8.2/10"
    },
    {
      name: "The Boys",
      rating: "8.8/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SciFi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "#35c495", padding: "1rem" }}>
        {" "}
        🎥 Tv Series 🎥{" "}
      </h1>
      <p
        style={{
          fontSize: "smaller",
          backgroundColor: "#3740df",
          color: "white",
          background: "#3740df",
          borderRadius: "0.5rem",
          padding: "0.5rem  1rem",
          border: "none",
          margin: "1rem 0.3rem"
        }}
      >
        {" "}
        Checkout my favorite tvSeries. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(tvSeriesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              backgroundColor: "#35c495",
              cursor: "pointer",
              background: "#35c495",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "none",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center", border: "2px solid", margin: "auto" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {tvSeriesDB[selectedGenre].map((tvSeries) => (
            <li
              key={tvSeries.name}
              style={{
                listStyle: "none",
                padding: "2rem",
                border: "2px solid ",
                width: "70%",
                margin: "auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {tvSeries.name} </div>
              <div style={{ fontSize: "smaller" }}> {tvSeries.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
