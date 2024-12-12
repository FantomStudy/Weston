import React from "react";
import Title from "../../../components/Title/Title";
import ClientSlider from "./ClientSlider/ClientSlider";

export default function Client() {
  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "35px 0" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title
            title="WHAT OUR CLIENT SAYS"
            desc="Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse."
          />
          <ClientSlider />
        </div>
      </div>
    </section>
  );
}
