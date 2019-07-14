import React, { Component } from "react";
import { Link } from "react-router-dom";
import tourist from "../images/lost-tourist.png";

export class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img className="NotFound__image" src={tourist} alt="Lost tourist" />
        <h1 className="NotFound__header">This Page is Not on the Map</h1>
        <p className="NotFound__msg">
          You told your friends you weren’t bringing your phone, to try and
          experience what travel was like back in the day. You bought a map and
          a bottle of water and carried your camera for the money shot. But the
          map was from 2005 and the landscape had changed. So here you are, in
          the middle of a large field, that the map continues to claim is a
          local grocer.
        </p>
        <Link className="NotFound__link" to="/about">
          Back Home
        </Link>
      </div>
    );
  }
}

export default NotFound;
