import React from "react";
// import classnames from "classnames";

export default function Activity (props) {
  const API_KEY = process.env.API_KEY
  const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  
  return (
    <article>
      <div class="w3-card-4">
        <img src={photoURL} alt="restaurant"/>
        <header class="w3-container w3-light-grey">{props.name}</header>
          <div class="w3-container">
            <h5>{props.rating}</h5>
            <p>Description goes here </p>
          </div>
          <button class="w3-button w3-block w3-dark-grey">Add to Favourites</button>
      </div>
    </article>
  )
}

// export default function Album(props) {
//   const albumInfoClass = classnames("album__info");

//   return (
//     <article className="album">
//       <img className="album__thumbnail" src={props.artworkUrl100} alt="Album" />
//       <div className={albumInfoClass}>
//         <div className="album__name">{props.collectionName}</div>
//         <div className="album__artist">{props.artistName}</div>
//       </div>
//     </article>
//   );
// }