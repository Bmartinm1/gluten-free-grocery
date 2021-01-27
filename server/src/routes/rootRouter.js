import express from "express";
import categoriesRouter from "./api/v1/categoriesRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import productsRouter from "./api/v1/productsRouter.js"
import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here
rootRouter.use('/api/v1/categories', categoriesRouter)
rootRouter.use('/api/v1/products', productsRouter)

export default rootRouter;
