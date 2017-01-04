// src/components/AthletePage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PlayersMenu from './PlayersMenu';
import Stats from './Stats';
import Flag from './Flag';
import players from '../data/players';

export default class PlayerPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const player = players.filter((player) => player.id === id)[0];
    if (!player) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${player.cover})` };
    return (
      <div className="player-full">
        <PlayersMenu/>
        <div className="player">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${player.image}`}/>
            <h2 className="name">{player.name}</h2>
          </div>
          <section className="description">
            {player.birth} <strong><Flag code={player.country} showName="true"/></strong>
            <br></br> 
            {player.about}
          </section>
          <section className={!player.hasSocial ? 'hidden' : 'social'} >
            <h3>Social Media</h3>
            <a href={player.social}>
              <img src={`/img/twitter.png`} />
            </a>
          </section>
          <section>
            <strong>Player Stats</strong>
                <Stats {...player.stats}/>
                (For more detailed stats on <a href={player.link} target="_blank">Transfermarkt</a>).
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}