'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// #1
const [players1, players2] = game.players;
console.log(players1, players2);

// #2
const [team1gk, ...team1fieldplayers] = [...players1];
const [team2gk, ...team2fieldplayers] = [...players2];

console.log(team1gk, team1fieldplayers);
console.log(team2gk, team2fieldplayers);

// #3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// #4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// #5
// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, team2, draw);

// #6
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// #7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
