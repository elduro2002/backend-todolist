const { Router } = require('express');

const router = Router();



router.get('/', (req, res) => {

    res.json({
        msg: "Test"
    })

})


module.exports = router;


