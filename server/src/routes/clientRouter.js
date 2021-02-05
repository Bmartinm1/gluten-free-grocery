import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = [
  "/",
  "/categories",
  "/user-sessions/new", 
  "/users/new", 
  "/categories/:id", 
  "/products/:id",
  "/categories/:categoryId/products/new"
];

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
