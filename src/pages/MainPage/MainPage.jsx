import React from "react";
import Intro from "./Intro/Intro";
import Popular from "./Popular/Popular";
import About from "./About/About";
import Listing from "./Listing/Listing";
import Area from "./Area/Area";
import Client from "./Client/Client";
import Blog from "./Blog/Blog";

export default function MainPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gridGap: "56px" }}>
      <Intro />
      <Popular />
      <About />
      <Listing />
      <Area />
      <Client />
      <Blog />
    </main>
  );
}
