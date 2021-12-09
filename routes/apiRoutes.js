const router = require("express").Router();
const fs = require("fs");
const path = require("path");

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

//get route to get all the notes
router.get("/notes", (req, res) => {
  console.log("test");
  let allNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  allNotes = JSON.parse(allNotes);
  res.status(200).json(allNotes);
});

//POST route to post a new note
router.post("/notes", (req, res) => {
  let allNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  allNotes = JSON.parse(allNotes);
  let newNote = req.body;
  req.body.id = randomId();
  allNotes.push(newNote);
  fs.writeFileSync(path.join(__dirname, "../db/db.json"),JSON.stringify(allNotes));
  console.log(newNote);
  allNotes = JSON.parse(allNotes);
  res.status(200).json(allNotes);
});

//delete route to delete a note
router.delete("/notes/:id", (req, res) => {
  let allNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  allNotes = JSON.parse(allNotes);
  let noteId = req.params.id;
  allNotes = allNotes.filter((note) => {
    return note.id !== noteId;
  })
  fs.writeFileSync(path.join(__dirname, "../db/db.json"),JSON.stringify(allNotes));
  console.log(newNote);
  allNotes = JSON.parse(allNotes);
  res.status(200).json(allNotes);
});

module.exports = router;
