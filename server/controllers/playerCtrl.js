const axios = require('axios');
const { response } = require('express');


let players = [
    {
        id: 1,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/6583.png',
        name: 'Anthony Davis',
        team: 'LAL',
        position: 'Forward-Center'

    },
    {
        id: 2,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/3992.png',
        name: 'James Harden',
        team: 'HOU',
        position: 'Guard',
    },
    {
        id: 3,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/6450.png',
        name: 'Kawhi Leonard',
        team: 'LAC',
        position: 'Forward',
    },
    {
        id: 4,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2779.png',
        name: 'Chris Paul',
        team: 'OKC',
        position: 'Guard',
    },
    {
        id: 5,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png',
        name: 'Luka Doncic',
        team: 'DAL',
        position: 'Forward-Guard',

    },
    {
        id: 6,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png',
        name: 'LeBron James',
        team: 'LAL',
        position: 'Forward',
    },
    {
        id: 7,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png',
        name: 'Russell Westbrook',
        team: 'HOU',
        position: 'Guard',
    },
    {
        id: 8,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png',
        name: 'Damian Lillard',
        team: 'POR',
        position: 'Guard',
    
    },
    {
        id: 9,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/3908809.png',
        name: 'Donovan Mitchell',
        team: 'UTA',
        position: 'Guard',

    },
    {
        id: 10,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913176.png',
        name: 'Brandon Ingram',
        team: 'NOP',
        position: 'Forward',
        
    },
    {
        id: 11,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png',
        name: 'Nikola Jokić',
        team: 'DEN',
        position: 'Center',

    },
    {
        id: 12,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032976.png',
        name: 'Rudy Gobert',
        team: 'UTA',
        position: 'Center',

    },
    {
        id: 13,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136193.png',
        name: 'Devin Booker',
        team: 'PHX',
        position: 'Guard',

    },
    {
        id: 14,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png',
        name: 'Kemba Walker',
        team: 'BOS',
        position: 'Guard',

    },
    {
        id: 15,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/recruiting/ncb/players/full/203210.png&w=350&h=254',
        name: 'Trae Young',
        team: 'ATL',
        position: 'Guard',

    },
    {
        id: 16,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png',
        name: 'Giannis Antetokounmpo',
        team: 'MIL',
        position: 'Forward',

    },
    {
        id: 17,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3149673.png',
        name: 'Pascal Siakam',
        team: 'TOR',
        position: 'Forward',

    },
    {
        id: 18,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png',
        name: 'Joel Embiid',
        team: 'PHI',
        position: 'Center',

    },
    {
        id: 19,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/3012.png',
        name: 'Kyle Lowry',
        team: 'TOR',
        position: 'Guard',

    },
    {
        id: 20,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907387.png',
        name: 'Ben Simmons',
        team: 'PHI',
        position: 'Guard',

    },
    {
        id: 21,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png',
        name: 'Jimmy Butler',
        team: 'MIA',
        position: 'Guard',

    },
    {
        id: 22,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/6609.png',
        name: 'Khris Middleton',
        team: 'MIL',
        position: 'Forward',

    },
    {
        id: 23,
        image: 'https://a.espncdn.com/i/headshots/nba/players/full/4066261.png',
        name: 'Bam Adebayo',
        team: 'MIA',
        position: 'Forward',

    },
    {
        id: 24,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
        name: 'Jayson Tatum',
        team: 'BOS',
        position: 'Forward',

    },
    {
        id: 25,
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155942.png',
        name: 'Domantas Sabonis',
        team: 'IND',
        position: 'Forward',

    },  

];



let newArray = []

let id = 26;


module.exports = {

    getPlayerData: (req,res) => {
        res.status(200).send(players)
    },

    draftPlayer: (req,res) => {

       const  { playersArr } = req.body

        playersArr.id = id
        id++;
        newArray.push(playersArr)
        res.status(200).send(newArray)
        console.log(newArray)
    },

    editPlayer: (req,res) => {

        const { id } = req.params;
        const { name, team, position } = req.body

        const editIndex = players.findIndex(element => element.id === +id)

        players[editIndex].name = name;
        players[editIndex].team = team;
        players[editIndex].position = position

        res.status(200).send(players)


    },


    removePlayer: (req,res) => {

        const { id } = req.params
        
        const removeIndex = newArray.findIndex(element => element.id === +id);
        newArray.splice(removeIndex,1)
        res.status(200).send(newArray)
        console.log(newArray)



    }


};






