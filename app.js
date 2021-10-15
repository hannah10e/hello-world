const express = require('express');
const app = express();
const port = 3005;
app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})