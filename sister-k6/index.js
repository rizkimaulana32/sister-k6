const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/load10KB", (req, res) => {
  const filePath = `${__dirname}/files/test_10KB.txt`;
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error sending file");
    }
  });
});

app.get("/load100KB", (req, res) => {
    const filePath = `${__dirname}/files/test_100KB.txt`;
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send("Error sending file");
        }
    });
});

app.get("/load1MB", (req, res) => {
  const filePath = `${__dirname}/files/test_1MB.txt`;
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error sending file");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});