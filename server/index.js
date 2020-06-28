/*4 requirements for express. Need to require(import) express package and save it to a variable called express.
 Then we can invoke the function by saving it to a new variable called app. 
 Next, we need to parse express into json.
 Finally, we need to add app.listen in order to instruct which port we want it to run on and give it a console.log knowing that it works*/

const express = require('express');
const ctrl = require('./controllers/playerCtrl')

const app = express();

app.use(express.json());

/* Endpoints will go here. app.GET, app.POST, app.PUT, app.DELETE
Comprised of three parts: 1. the Method 2. the Path 3. the Handler Function
GPPT = the Method, the Path = ex: '/api/users', handler function = method name inside of our controller file
Example: app.get('/api/users', handlerFunc)*/

app.get('/api/players', ctrl.getPlayerData)
app.post('/api/players', ctrl.draftPlayer);
// app.put();
// app.delete();



app.listen(3005, () => {console.log('Server listening on port 3005')})