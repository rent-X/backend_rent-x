import express from "express";

const app = express();

app.get("/", (_request, response) => response.json({ message: "Olha aqui" }));

app.listen(3000);
