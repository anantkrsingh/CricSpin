const express = require("express");
const axios = require("axios");

const app = express();
app.use(require("cors")());
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://64.227.148.23',
    'https://cricspin.live',
    'http://cricspin.live'
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');


  next();
});

app.use("/LiveLine", (req, res) => {
  axios
    .get("http://cricpro.cricnet.co.in/api/values/LiveLine")
    .then((data) => {
      console.log(data.data);
      res.status(200).json(data.data);
    })
    .catch(() => { });
});

app.get("/UpcomingMatches", (req, res) => {
  axios
    .get("http://cricpro.cricnet.co.in/api/values/upcomingMatches")
    .then((data) => {
      console.log(data.data);
      res.status(200).json(data.data);
    })
    .catch(() => { });
});

app.get("/Result", (req, res) => {
  const matchId = req.query.MatchId;
  axios
    .post("http://cricpro.cricnet.co.in/api/values/MatchResult", {
      "MatchId": matchId,
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.get("/MatchResults", (req, res) => {



  const requestBody = {
    start: 1,
    end: 15
  };

  axios.post('http://cricpro.cricnet.co.in/api/values/MatchResults', requestBody)
    .then(response => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

app.get("/Series", (req, res) => {
  const matchId = req.query.MatchId;
  axios
    .post("http://cricpro.cricnet.co.in/api/values/LiveSeries", {
      "MatchId": matchId,
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});


app.post("/Players", (req, res) => {
  const matchId = req.query.MatchId;
  console.log(matchId);
  axios
    .post("http://cricpro.cricnet.co.in/api/values/GetAllPlayers", {
      "MatchId": matchId,
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data.Playerslist);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.post("/MatchOdds", (req, res) => {
  const matchId = req.query.MatchId;
  console.log(matchId);
  axios
    .post("http://cricpro.cricnet.co.in/api/values/MatchOdds", {
      "MatchId": matchId,
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data.Playerslist);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.post("/Live", (req, res) => {
  const matchId = req.query.MatchId;
  console.log(matchId);
  axios
    .post("http://cricpro.cricnet.co.in/api/values/LiveLine_Match", {
      "MatchId": matchId,
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});


app.get("/SeriesMatches", (req, res) => {
  const seriesId = req.query.seriesId;
  axios
    .post("http://cricpro.cricnet.co.in/api/values/SeriesMatches", {
      "seriesid": seriesId,
    })
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});









app.listen("8001", () => {
  console.log("Started");
});
