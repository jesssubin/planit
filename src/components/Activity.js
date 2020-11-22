import React from "react";
// import classnames from "classnames";

export default function Activity (props) {
  return (
    <article>
      <img></img>
    
    <div>
      <h2 class="activity-title">Activity Name</h2>
      <button>Favorite</button>
      <button>Add to your plan</button>
    </div>
    <div>
      <h3>Description</h3>
      <p>Description goes here </p>
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