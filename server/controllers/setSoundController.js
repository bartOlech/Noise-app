const fs = require('fs');

module.exports.setSounds = (req, res) => {
    const soundd = req.params.trees.substr(1)
    
    const path = `./sounds/${soundd}.mp3`;
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize-1

        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'audio/mp3',
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
        'Content-Length': fileSize,
        'Content-Type': 'audio/mp3',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
}