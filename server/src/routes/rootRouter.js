import express from "express";
import clientRouter from "./clientRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import productsRouter from './api/v1/productsRouter.js';
import categoriesRouter from "./api/v1/categoriesRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use('/api/v1/categories', categoriesRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use('/api/v1/products', productsRouter)
export default rootRouter;
