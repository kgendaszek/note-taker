const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}!!!`)
});
