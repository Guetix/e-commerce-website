const path = require('path');
const fs = require('fs');

function index(req, res) {
    const imageSrc = req.query.imageSrc;
    
    if (!imageSrc) {
        return res.status(400).send("Missing imageSrc parameter");
    }

    const imagePath = path.resolve('public/images', imageSrc);

    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send("Image not found");
    }
}

module.exports = {
    index
};
