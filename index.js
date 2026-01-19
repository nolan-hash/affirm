import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/affirm", (req, res) => {
  const strings = [
    "You are so beautiful",
    "I love youuuu",
    "I miss you",
    "Call me",
    "I want to give you a hug",
    "You are a great person"
  ];

  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex] + " :)";

  res.json({ randomString });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
