import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

import fireIcon from "./icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "./icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "./icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "./icons/iconfinder_ic_subscriptions_48px_3669213.png";
import logo from "./icons/iconfinder_youtube_294703.png";

const menuItems = [
  {
    icon: homeIcon,
    title: "Principal"
  },
  {
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    icon: playlist,
    title: "Biblioteca"
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar icons={menuItems} />
      <Navbar logo={logo} />
      <ThumbContainer />
    </div>
  );
}

export default App;
