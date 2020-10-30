import React from "react";
import VideoThumbnail from './video-thumbnail';
import objetsUrl from "./objets";

function filtrar() {

  const sudeBar = objetsUrl.filter((objet)=>
    objet.tipe == "bnail"
    )

    return sudeBar

}

export function ThumbContainer() {
  return <div className="thumb-container">

    {filtrar().map((filtro) =>
     {return (<VideoThumbnail image = {filtro.url} />)}
    )}

  </div>;
}
