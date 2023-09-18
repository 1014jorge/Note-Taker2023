const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const APIroutes = require('./Routes/APIroutes');
const HTMLroutes = require('./Routes/HTMLroutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(APIroutes);
app.use(HTMLroutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});