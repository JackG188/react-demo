// src/components/AthletePreview.js
import React from 'react';
import HoverStats from './HoverStats';
import { Link } from 'react-router';

export default class PlayerPreview extends React.Component {
  render() {
    return (
      <Link to={`/player/${this.props.id}`}>
        <div className="player-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <div className="preview-stats">
            <span className="goal"><img src="/img/goal.png"/>{this.props.stats.goals}</span>
            <span className="yellows"><img src="/img/yellow-card.png"/>{this.props.stats.yellows}</span>
            <span className="reds"><img src="/img/red-card.png"/>{this.props.stats.reds}</span>
          </div>
          <HoverStats player={this.props}></HoverStats>
        </div>
      </Link>
    );
  }
}