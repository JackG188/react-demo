// src/components/Stats.js
import React from 'react';

export default class Stats extends React.Component {
  render() {
    return (
      <ul>
        <li> Position: {this.props.position} </li>
        <li> Goals: {this.props.goals} </li>
        <li> Apperances: {this.props.apps} </li>
        <li> Yellow cards: {this.props.yellows} </li>
        <li> Red cards: {this.props.reds} </li>
      </ul>
    );
  }
}