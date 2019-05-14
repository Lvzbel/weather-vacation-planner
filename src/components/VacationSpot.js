import React, { Component } from "react";

export class VacationSpot extends Component {
  render() {
    const { id, address, lat, lng, countryCode } = this.props.spotInfo;
    return (
      <div className="VacationSpot">
        <h3 className="VacationSpot-title">{address}</h3>
        Weather Info will go here!
      </div>
    );
  }
}

export default VacationSpot;
