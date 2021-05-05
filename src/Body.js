import { MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React, { useState } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log("DISCOVER WEEKLY IS HERE", discover_weekly);

  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt=" " />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />

          <FavoriteIcon
            onClick={(event) => {
              event.preventDefault();
              setIsLiked(!isLiked);
            }}
            color={isLiked ? "inherit" : "disabled"}
            className="body__favouriteIcon"
          />

          <MoreHoriz className="body__moreItemsIcon" />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.track.name} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
