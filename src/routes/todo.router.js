import { Router } from "express";
import { deleteTodo, getTodo, saveTodo, updateTodo } from "../controllers/todo.controller.js";

const router = Router();

// get all todos
router.get("/get-todo", getTodo);

// add a todo
router.post("/add-todo", saveTodo);

// update a todo
router.post("/update-todo", updateTodo)

// delete a todo
router.post("/delete-todo", deleteTodo)

export default router;
