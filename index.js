const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;


// Allow all origins
app.use(cors());


//fetch data from openweatherapp
app.get('/', (req, res) => {
    fetch("https://samples.openweathermap.org/data/2.5/weather?q=${}&appid=b1b15e88fa797225412429c1c50c122a1")
        .then(r => {
            console.log(r);
            if (r.ok)
                return r.json();
        })
        .then(data => res.json(data));
});




app.listen(port, console.log(`server start at: locolhost:${port}`));