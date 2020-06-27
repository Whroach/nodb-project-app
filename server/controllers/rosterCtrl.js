let rosterArray = [];

let id = 1

module.exports = {

    getSelectedPlayer: (req,res) => {
        res.status(200).send(rosterArray)
    },

    /*Assign a unique id to each player that's
    added and then push it to the rosterArray. 
    variable id will increment so we can
    keep id's unique. */

    draftPlayer: (req,res) => {
        const { nbaPlayers } = req.body

        nbaPlayers.id= id;
        id++;

        rosterArray.push(nbaPlayers);
        res.status(200).send(rosterArray)


    },






    // .put()

    // .delete()


};