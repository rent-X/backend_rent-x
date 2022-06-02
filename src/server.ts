import express from 'express';

const app = express();


app.get("/", (request, response) => {
    return response.json({message: "Olha aqui"})
})

app.listen(3000);