import React from 'react';

const players = [
    { name: 'Gill', score: 72 },
    { name: 'Rohit', score: 92 },
    { name: 'Kohli', score: 183 },
    { name: 'Shreyas', score: 68 },
    { name: 'Rahul', score: 45 },
    { name: 'Jadeja', score: 66 },
    { name: 'Ashwin', score: 34 },
    { name: 'Kuldeep', score: 23 },
    { name: 'Bumrah', score: 22 },
    { name: 'Shami', score: 10 },
    { name: 'Siraj', score: 5 }
];

const lowScorers = players.filter(player => player.score < 70);

const ListofPlayers = () => {
    return (
        <div>
            <h2>List of Players</h2>
            <ul>
                {players.map((p, idx) => (
                    <li key={idx}>{p.name} - {p.score}</li>
                ))}
            </ul>
            <hr />
            <h2>List of Players having Scores Less than 70</h2>
            <ul>
                {lowScorers.map((p, idx) => (
                    <li key={idx}>{p.name} - {p.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListofPlayers;
