import React from "react";

export default function Favourites (props) {
  return (
    <div>
      <h1>Favourites</h1>
      <body>
        <div>
          <h3>Toronto</h3>
          <span> Restaurant &#9734;</span>
        </div>
        <div>
          <h3>London</h3>
          <span> Hiking &#9734;</span>
          <span> Restaurant &#9734;</span>
        </div>
        <div>
          <h3>San Francisco</h3>
          <span> Restaurant &#9734;</span>
          <span> Park &#9734;</span>
        </div>
      </body>
    </div>
  );
}