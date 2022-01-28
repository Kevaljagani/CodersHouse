class ActivateController {
    async activate(req, res) {
        req.json({message: 'ok'})
    }
}


module.exports = new ActivateController();