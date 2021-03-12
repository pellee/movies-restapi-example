var Router = require('express');
var router = Router();

var movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/movie', (req, res) => {
    if(req.body.title && req.body.director && req.body.year && req.body.duration){
        var id = (movies.length * 10) + 10;
        var newMovie = {id, ...req.body};

        // Lo estoy guardando en memoria, el archivo no se modifico
        movies.push(newMovie);
        res.json({"success":true, "message": "movie added"});
    }
    else{
        res.status(500).json({"success":false, "message": "wrong request"});
    }
    
});

router.delete('/movie/:id', (req, res) =>{

    for (var i = 0; i < movies.length; i++){
        if(movies[i].id == req.params.id){
            movies.splice(i,1);
            break;
            //console.log(movies[i].id);
            //console.log(req.params.id);
        }
    }
    res.json({"success":true, "message": "movie removed"});
});

router.put('/movie/:id', (req, res) =>{

    var i = movies.findIndex(element => element.id == req.params.id);
    if (i != -1){
        if(req.body.title && req.body.director && req.body.year && req.body.duration){
            movies[i].title     = req.body.title;
            movies[i].director  = req.body.director;
            movies[i].year      = req.body.year;
            movies[i].duration  = req.body.duration;
            res.json({"success":true, "message": "movie updated"});
        }
        else{
            res.status(500).json({"success":false, "message": "wrong request"});
        }
    }
    else{
        res.status(404).json({"success":false, "message": "id not found"});
    }
});


module.exports = router;