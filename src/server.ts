import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "Look here!" }));

app.listen(3333);
