import React from "react";
import objetsUrl from "./objets";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Icon from "./icon";
import Login from './login'
/* Importar los componentes */

/* Importar los iconos */
function filtrar(filtro) {

  const sudeBar = objetsUrl.filter((objet)=>
    objet.tipe == filtro
    )

    return sudeBar

}

export default function Navbar(props) {
  return <div className="navbar">

    {filtrar("Logo").map((filtro) =>
     {return (<Logo logo = {filtro.url} />)}
    )}

    {<SearchBar />}

    {filtrar("navBar").map((filtro) =>
     {return (<Icon iconUrl = {filtro.url} title = {filtro.date}  />)}
    )}
    
    {<Login />}
  </div>;
}
