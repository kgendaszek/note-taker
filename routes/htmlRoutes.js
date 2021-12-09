
const path = require('path')
const router = require('express').Router();
//localhost:3001/notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
//localhost:3001/anything
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router;