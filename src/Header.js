import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton/";
import ForumIcon from "@mui/icons-material/Forum";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
        alt=""
        class="header_logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" clasName="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
