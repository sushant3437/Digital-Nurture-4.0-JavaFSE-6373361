import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Kohli','Rohit' , 'Rahul', 'Gill', 'Shami'];
  const evenTeam = ['Jadeja', 'Ashwin', 'Kuldeep', 'Siraj', 'Bumrah'];

  const T20players = ['SKY', 'Ishan', 'Hardik'];
  const RanjiTrophy = ['Pujara', 'Rahane','Vihari'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team</h2> 
      <ul>
        {oddTeam.map((p, idx) => <li key={idx}>{p}</li>)}
      </ul>
      <hr/>
      <h2>Even Team</h2>
      <ul>
        {evenTeam.map((p, idx) => <li key={idx}>{p}</li>)}
      </ul>
      <hr/>
      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, idx) => <li key={idx}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
