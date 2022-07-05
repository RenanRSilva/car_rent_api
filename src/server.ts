import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.use("/categories", categoriesRoutes);

app.listen(4444, () => console.log("Server is running!"));
