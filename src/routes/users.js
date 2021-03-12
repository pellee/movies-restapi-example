var Router = require('express');
var router = Router();
var fetch = require('node-fetch');

router.get ('/', async (req, res) => {
    var response = await fetch('https://jsonplaceholder.typicode.com/users');

    var users = await response.json();

    res.json(users);
});

module.exports = router;