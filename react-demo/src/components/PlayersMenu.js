// src/components/AthletesMenu.js
import React from 'react';
import { Link } from 'react-router';
import players from '../data/players';

export default class PlayersMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {players.map(menuPlayer => {
          return <Link key={menuPlayer.id} to={`/player/${menuPlayer.id}`} activeClassName="active">
            {menuPlayer.name}
          </Link>;
        })}
      </nav>
    );
  }
}
