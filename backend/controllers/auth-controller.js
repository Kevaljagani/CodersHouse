const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');

class AuthController {


    async sendOtp(req, res) {
        //logic
        const  {phone} = req.body;
        if(!phone) {
            res.status(400).json({message: 'phone field is required'})
        }

        const otp = await otpService.generateOtp();

        //Hash
        const ttl = 1000 * 60 * 2; 
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);


        res.json({hash: hash})
    }
}

module.exports = new AuthController();


// 4) 2:38:00