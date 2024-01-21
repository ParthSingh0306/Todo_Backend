import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Todo } from "../model/todo.model.js";

const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.find();
  if (!todo) {
    throw new ApiError(401, "Something went wrong while fetching Todo!!");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo Fetched Successfully!!"));
});

const saveTodo = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const createdTodo = await Todo.create({
    text,
  });
  if (!createdTodo) {
    throw new ApiError(401, "Something went wrong while adding Todo!!!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdTodo, "Todo Added Successfullyy!!"));
});

const updateTodo = asyncHandler(async (req, res) => {
  const { text, _id } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    _id,
    {
      $set: {
        text: text,
      },
    },
    {
      new: true,
    }
  );

  if (!todo) {
    throw new ApiError(401, "Invalid Todo Id!!");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, todo, "Todo Updated Succesfully!!"));
});

const deleteTodo = asyncHandler(async(req, res) => {
  const { _id } = req.body

  const deletedTodo = await Todo.findByIdAndDelete(_id)
  if(!deletedTodo) {
    throw new ApiError(401, "Todo is not Deleted!!!")
  }

  return res
  .status(200)
  .json(
    new ApiResponse(200, deletedTodo, "Todo Deleted Successfully!!")
  )
})

export { getTodo, saveTodo, updateTodo, deleteTodo};
