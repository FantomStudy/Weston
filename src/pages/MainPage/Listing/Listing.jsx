import React from "react";
import Title from "../../../components/Title/Title";
import ListingSlider from "./ListingSlider/ListingSlider";

export default function Listing() {
  return (
    <section>
      <Title
        title="EXCLUSIVE LISTINGS"
        desc="Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse."
      />
      <ListingSlider />
    </section>
  );
}
