import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  console.log(track);

  const msToMins = (time) => {
    const seconds = time / 1000;
    return seconds / 60;
  };

  return (
    <div className="songRow">
      {/* <p>{}</p> */}
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join("")}
          <span> - {track.album.name}</span>
        </p>
      </div>
      {/* <p className="songRow__duration">{msToMins(track.duration_ms)}</p> */}
    </div>
  );
}

export default SongRow;
