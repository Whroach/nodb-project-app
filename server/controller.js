const axios = require('axios');
const { response } = require('express');

module.exports = {

    getPlayerData: (req,res) => {
        playerProfileArray = [];

        axios.get('https://www.balldontlie.io/api/v1/players/237')
        .then(response => {
            playerProfileArray.push(response.data);
            axios.get('https://www.balldontlie.io/api/v1/players/192')
            .then(response => {
                playerProfileArray.push(response.data);
                axios.get('https://www.balldontlie.io/api/v1/players/472')
                .then(response => {
                    playerProfileArray.push(response.data);
                    axios.get('https://www.balldontlie.io/api/v1/players/278')
                    .then(response => {
                        playerProfileArray.push(response.data);
                        axios.get('https://www.balldontlie.io/api/v1/players/15')
                        .then(response => {
                            playerProfileArray.push(response.data);
                            axios.get('https://www.balldontlie.io/api/v1/players/246')
                            .then(response => {
                                playerProfileArray.push(response.data);
                                axios.get('https://www.balldontlie.io/api/v1/players/274')
                                .then(response => {
                                    playerProfileArray.push(response.data);
                                    axios.get('https://www.balldontlie.io/api/v1/players/79')
                                    .then(response => {
                                        playerProfileArray.push(response.data);
                                        axios.get('https://www.balldontlie.io/api/v1/players/140')
                                        .then(response => {
                                            playerProfileArray.push(response.data);
                                            axios.get('https://www.balldontlie.io/api/v1/players/145')
                                            .then(response => {
                                                playerProfileArray.push(response.data);
                                                res.status(200).send(playerProfileArray)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })      
        .catch(error => res.status(500).send(error));
    }
};











    // getPlayerData: (req,res) => {
    //     playerProfile = [];

    //     axios.get('https://www.balldontlie.io/api/v1/players/237')
    //     .then(response => {
    //         playerProfile.push(response.data)
    //         res.status(200).send(playerProfile)
    //     })
    //     .catch(error => res.status(500).send(error));

    // },

