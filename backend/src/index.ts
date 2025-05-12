import express from "express";
import cors from "cors";
import { router } from "./routes/users.route";

const hostname = "127.0.0.1";
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/users", router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
