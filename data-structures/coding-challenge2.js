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

const displayGoal = game.scored;
// console.log(displayGoal);

// #1
// for (const [index, key] of Object.entries(game.scored)) {
//     console.log(`Goal ${Number(index) + 1}: ${key}`);
// }

// #2
const totalOdds = Object.values(game.odds);
// console.log(totalOdds);


let sum = 0;
for (let i = 0; i < totalOdds.length; i++) {
    sum += totalOdds[i];
}
const avg = sum / totalOdds.length;
console.log(sum);
console.log(avg);

// #3

