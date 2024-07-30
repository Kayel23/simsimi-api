const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const responses = {
    "hello": "Hi there!",
    "how are you": "I'm just a bot, but I'm doing fine!",
    "bye": "Goodbye!",
    "miss ko na siya": "wala akong pake",
    "sama mo naman": "masama talaga ako"
};

app.get('/sim', (req, res) => {
    const userMessage = req.query.q.toLowerCase();
    const botResponse = responses[userMessage] || "Sorry, I don't understand that.";

    res.json({ respond: botResponse });
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});
