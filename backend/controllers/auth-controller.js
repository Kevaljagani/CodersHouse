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

        //send
        try {
            await otpService.sendBySms(phone, otp);
            res.json({
                hash: `${hash}.${expires}`,
                phone,
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message : `Failed to send message`})
        }
    }

    verifyOtp(req, res) {
        //logic
        const { otp, hash, phone } = req.body;
        if (!otp || !hash || !phone) {
            res.status(400).json({message: `all fields are required`});
        }

        const [hashedOtp, expires] = hash.split('.');
        if (Date.now() > expires){
            res.status(400).json({message: `OTP expired`});
        }
        
        const data = `${phone}.${otp}.${expires}`;

        const isValid = otpService.verifyOtp(hashedOtp, data);
        console.log(isValid)
        if (!isValid) {
            res.status(400).json({message: `Invalid OTP`});
        }
    }
}

module.exports = new AuthController();

// 4) 3:04:00