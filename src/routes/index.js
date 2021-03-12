var { Router } = require('express');

var router = Router();

router.get('/', (req, res) => {
    res.json({"success": false, "message": "ruta desconocida"});
});

//exporto el modulo para usarlo desde otro archivo
module.exports = router;