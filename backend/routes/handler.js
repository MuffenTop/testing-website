const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Jasmine",
        "msg": "This is my first tweet",
        "username": "MuffenTop",
    }];

    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) =>{
    res.end('NA');
});

module.exports = router;