// src/components/IndexPage.js
import React from 'react';
import PlayerPreview from './PlayerPreview';
import players from '../data/players';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          	<h2>Goalkeepers</h2>
          	{players.filter(function(playerData){return playerData.stats.position==='Goalkeeper'}).map(playerData => <PlayerPreview key={playerData.id} {...playerData} />)}
          	<h2>Defenders</h2>
          	{players.filter(function(playerData){return playerData.stats.position==='Defender'}).map(playerData => <PlayerPreview key={playerData.id} {...playerData} />)}
          	<h2>Midfielders</h2>
          	{players.filter(function(playerData){return playerData.stats.position==='Midfielder'}).map(playerData => <PlayerPreview key={playerData.id} {...playerData} />)}
          	<h2>Forwards</h2>
          	{players.filter(function(playerData){return playerData.stats.position==='Forward'}).map(playerData => <PlayerPreview key={playerData.id} {...playerData} />)}
        </div>
      </div>
    );
  }
}