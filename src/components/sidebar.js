import React from "react";
import objetsUrl from "./objets";
import Icon from "./icon";
// const {sideBarIcons} = require('./objets');

function filtrar() {

  const sudeBar = objetsUrl.filter((objet)=>
    objet.tipe == "sideBar"
    )

    return sudeBar

}

export function Sidebar() {

  return <div className="sidebar">


    {filtrar().map((filtro) =>
     {return (<Icon iconUrl = {filtro.url} title = {filtro.date}  />)}

    )}

    

  </div>;
}
