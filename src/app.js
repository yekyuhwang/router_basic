import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 3001;

const app = express();
app.set("view engine", "pug");

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} SERVER START!`);
});
