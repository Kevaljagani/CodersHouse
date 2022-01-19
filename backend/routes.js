const router = require('express').Router();

router.post('/api/send-otp', (req, res) => {
    res.send('HEllo from otp route')
});


module.exports = router;



