const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();

const port = 8090;

app.use(cors());
app.use(express.json());


app.listen(port, ()=>{
    console.log(`Listening on port ${port} ${os.EOL}`)
})

app.get('/', (req,res)=>{
    console.log('GET Home Success' + os.EOL);
    res.status(200).send('GET Home Success')
    
})
app.post('/', (req,res)=>{
    console.log('POST Home Success');
    console.log(req.body);
    console.log('');
    res.send('POST Home Success');
})
app.get('/gimme', (req,res)=>{
    //res.status(510).send('Thrown Error');
    console.log('Gimme GET Test: ')
    console.log(req.body);
    console.log('');
    res.status(266).send(req.body);
})
app.post('/parameterAndQuery/:firstParameter/:secondParameter?', (req,res)=>{
    console.log('Parameter, Query, and Body');
    console.log(`Request Parameters:`);
    console.log(req.params);
    console.log(`Request Query:`);
    console.log(req.query);
    console.log('Request Body: ');
    console.log(req.body);
    console.log('')

    res.status(222).send('Param, Query, Body Success')
})