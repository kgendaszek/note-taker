const router = require("express").Router();
const fs = require("fs");
const path = require("path");
let db = require("../db/db.json");

function randomId() {
  let str = "qwertyuiopasdfghjk1234567890";
  let result = "";
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * str.length);
    let randomChar = str[randomIndex];
    result += randomChar;
  }
  return result;
};

router.get("/notes", (req, res) => {
  console.log("test");
  res.json(db);
});

router.post("/notes", (req, res) =>{
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: randomId()
  }
  db.push(newNote)
  fs.writeFile('./db/db.json', JSON.stringify(db), (err) =>{
    if (err){
      console.log(err)
      
    }
    return res.json(db);
  })
})

router.delete("/notes/:id", (req, res) => {
  let notesLeft = db.filter(note => {
    return (note.id != req.params.id)
})
db = notesLeft
fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesLeft))
res.json(true)
})


module.exports = router;
