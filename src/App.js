import NavigationBar from "./components/nav/navigationBar";
import './basic/_reset.scss';
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ListItemText from "@mui/material/ListItemText";
import ContentCopy from "@mui/icons-material/ContentCopy";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Divider from "@mui/material/Divider";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MenuList from "@mui/material/MenuList";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<div className="header-title"></div>*/}
      </header>
    <NavigationBar />
    </div>
  );
}

export default App;
