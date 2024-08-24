"use client";
import { addTodo } from "@/redux/todoSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const InputForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Please write your Todo!");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));
      toast.success("Todo added Successfully!");
      setTodo("");
    }
  };
  return (
    <div>
      {/* todo form  */}
      <form
        onSubmit={handleTodo}
        className="flex items-center gap-4 h-10 md:h-12 relative"
      >
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter your todo..."
          value={todo}
          className="flex-1 h-full border-[1px] border-gray-600 bg-transparent pl-4 pr-6 placeholder:text-gray-400 text-base placeholder:text-sm tracking-wide rounded-md outline-none hover:border-green-600 focus-visible:border-green-600 duration-300"
        />
        {todo && (
          <MdClose
            onClick={() => setTodo("")}
            className=" absolute top-3 right-28 text-lg hover:text-red-600 md:right-32 md:top-3.5 cursor-pointer duration-200"
          />
        )}
        <button className="h-full border-[1px] border-gray-600 px-2 rounded-md hover:text-orange-600 uppercase duration-200 text-sm md:text-base">
          Add todo
        </button>
      </form>
      {/* todo list */}
      <TodoList />
    </div>
  );
};

export default InputForm;
