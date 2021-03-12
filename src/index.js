// obtengo el framework de express 
const express = require('express');
// ejecuto el framework
const app = express();
const morgan = require('morgan');

// settings
    // seteo el puerto de escucha. Si existe un puerto definido en donde esté hosteado usa ese, si no usa el 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


//middlewares
    // me dice las solicitudes que van llegando -> Método=GET / StatusCode=404 Tiempo=2.442 ms - ContentLength=139
app.use(morgan('dev'));
    // le permite al servidor entender mensajes json
app.use(express.json());
    // le permite entender al servidor datos que llegen de un imput (ej: formulario)
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));
app.use('/movies', require('./routes/movies'));
app.use('/users', require('./routes/users'));

// innit server
app.listen(app.get('port'),() => {
    console.log('Server listen on port ' + app.get('port'))
})

