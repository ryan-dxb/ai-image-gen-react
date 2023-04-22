import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

try {
  connectDB(process.env.MONGODB_URL);
} catch (error) {
  console.log(error);
}

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/posts", postRoutes);
app.use("/api/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
