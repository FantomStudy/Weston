import React from "react";
import Intro from "./Intro/Intro";
import Popular from "./Popular/Popular";

export default function MainPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gridGap: "90px" }}>
      <Intro />
      <Popular />
    </main>
  );
}
