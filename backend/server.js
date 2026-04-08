import express from "express";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import mongoose from "mongoose";
import cors from "cors";
import tarefasRoutes from "./routes/tarefas.js";

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
    .then(() => {
        console.log("MongoDB conectado com sucesso!");

    app.listen(PORT, () => {
        console.log(`Servidor: http://localhost:${PORT}`);
  });
})
    .catch(err => {
        console.error('Erro fatal ao conectar ao MongoDB:', err.message);
    });

app.use(cors());
app.use("/tarefas", tarefasRoutes);
