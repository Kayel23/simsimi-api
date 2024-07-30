const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const responses = {
    "Hello!👋": "Hi!",
    "Hello!😒": "Hi😒",
    "Cgeg panawag nagka gusto ka nako?": "AY CGEG PANAWAG IYOTON TIKA RON!!!!!!!",
    "mangutana ka or luluan ko ng profile picture nimo": "Dwow😒        ",
    "wa koy paki sa gi hatag nimo na impormasyon😍😁": "unya happy naka ana",
    "Kamusta ga laylay ra gyapun imong lagay": "usa ko ka bot wakoy gibati na kasaki sama sa EX nimo😭😕😕",
    "ULOL": "PAKYU",
    "nawa oh akong otin gahi na": "lulua ning akoa oh",
    "gimingaw nako niya": "cge waman koy pake",
    "miss mo?": "syempre miss nako ako gyud siya sugarplumplum cupcake",
    "UGH😩😩😩": "FUCK ME HARDER KYAAAAAAAAAH😩😩😩😩😩😩😩😩😩",
    "YAMETEEEEEEEEEEEEEEEEEE😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩": "LASPAG PAAAAAAAAAAA😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩😩",
    "Let's seggs": "belat nimo ga alisngaw",
    "Saba oy bahog baba": "i tik om na baba nimo kay baho",
    "ikaw tong tagiya sa maisan dol corny mn gud ka": "BELAT",
    "OTEN": "BISONG",
    "BYE-BYE": "ADIOS!!!!!!!",
};

app.get('/sim', (req, res) => {
    const userMessage = req.query.q.toLowerCase();
    const botResponse = responses[userMessage] || "Sorry, I don't understand that.";

    res.json({ respond: botResponse });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
