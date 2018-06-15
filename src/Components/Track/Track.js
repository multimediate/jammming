import React from "react";
import './Track.css';

class Track extends React.Component {

  renderAction() {
    let isRemoval = true; // remove this later
    if (isRemoval === true) {
      return '+'
    } else {
      return '-'
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        <a className="Track-action"></a>
      </div>
    )
  }
}

export default Track;
