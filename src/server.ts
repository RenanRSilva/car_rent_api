import express from "express";

import { specificationRoutes } from "./routes/specifications.routes";


import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(4444, () => console.log("Server is running!"));
