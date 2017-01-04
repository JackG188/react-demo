import React from 'react';
import Flag from './Flag';

export default class HoverStats extends React.Component {
  render() {
    const player = this.props.player;
    return (
    	<div className="hoverStats">
            <ul>
              <li>Born: {player.birth}</li>
              <li>Nationality: <Flag code={player.country} showName="true"/></li>
            </ul>
          </div>
    );
  }
}