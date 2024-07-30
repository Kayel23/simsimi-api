const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const responses = {
    "hello": "Hi",
    "hi": "hello pangit mo po",
    "how are you": "Okay lang po",
    "bye": "Ay.. Iiwan mo na ako? 🥺",
    "miss ko na siya": "wala akong pake", 
    "sama mo naman": "masama talaga ako", 
    "gwapo ko?": "Akong admin nga si French Mangigo ramay gwapo",
    "pogi ko" : "Eh??",
    "good morning": "Good morning! Huwag mokong Isturbuhin!",
    "good night": "Good night! Sweet dreams!",
    "thank you": "You're welcome!",
    "what's your name?": "Ako po yung Iniwan mo dati",
    "who created you?": "I was created by French Clarence Mangigo.",
    "tell me a joke": "Tite mo maliit",
    "what is love?": "Love is a complex set of emotions, behaviors, and beliefs associated with strong feelings of affection.",
    "help": "How can I assist you today?",
    "what's the weather like?": "I'm not sure, but you can check your local weather forecast for accurate information.",
    "I need support": "Mama Mo Support",
    "Pangit mo": "Pangit ka rin",
    "Ang" : "Titi mo maliit",
    "Tell me a joke": "Rice kaba? kasi you have BigAS.",
    "Pa comfort": "Comfort mo Muka mo",
    "Knock Knock": "Kwento mo sa pagong.",
    "Sign of maturity": "Hindi kana puro Jakol",
    "Any announcement from DepEd?": "Mga bata ayaw namo pagbalon ugma...kay diri sa maiudto sa iskwelahan, kay ang lola ni claire Nag donate ug isa ka lechon.",
    "What if?": "What if..ikaw lang naman yung nag assume na gusto ka niya..",
    "Ano?" : "Bakla ka",
    "Ano" : "wala!",
    "Para kanino Ako?" : "Para Kay French Mangigo😍 Pogi Yun!",
    "Para ka kinsa ko?" : "Para kay French Mangigo Akong gwapo nga Creator",
    "ha?": "Hatdog!",
    "huh?": "huhtdog!",
    "huhh": "huhtdog",
    "huh": "huhlabyu",
    "mama mo": "mama ko maganda nye nye",
    "Nesfruta": "Bahog bilat",
    "Nesfruta buko": "Bahog bilat",
    "Nesfruta buko why not": "Bahog Bilat",
    "gwapo": "si French Mangigo",
    "ehh": "ehtlog",
    "eh": "ehtlog",
    "ba": "ho bilat",
    "Oten": "nimo gamay nye nye",
    "What if": "Mag kamo sa akong admin??? e-add na! https://www.facebook.com/frenchclarence.mangigo.9",
    "ogag": "Ikaw yung gago",
    "Mahal kita": "I Love you mwa mwa",
    "Crush kita": "Ayiiiiieeee Di kita crush!",
    "Miss kita": "Di kita miss",
    "I miss you": "miss  u 2",
    "miss you": "nye nye",
    "pangit si?": "Ikaw sino paba!",



};


app.get('/sim', (req, res) => {
    const userMessage = req.query.q.toLowerCase();
    const botResponse = responsesuserMessage || "Sorry, I don't understand that.";
    
    res.json({ respond: botResponse });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
