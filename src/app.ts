import express from "express";
import clientsRouter from "./routes/clients.router";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/ping", (_req, res) => {
  console.log("PING");
  res.send("Ping");
});

app.use("/", clientsRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
