import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOptions";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      ></img>
      <SideBarOption Icon={HomeIcon} title="Home" />
      <SideBarOption Icon={LibraryMusicIcon} title="Search" />
      <SideBarOption Icon={SearchIcon} title="Your Library" />
      <hr />
      <strong className="sidebar__title">PLAYLISTS</strong>
    </div>
  );
}

export default SideBar;
