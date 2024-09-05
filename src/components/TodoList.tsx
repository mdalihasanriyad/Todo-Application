"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../../Type";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
import { removeTodo } from "@/redux/todoSlice";
import toast from "react-hot-toast";

const TodoList = () => {
  const { todoList } = useSelector((state: state) => state?.todo);
  const dispatch = useDispatch();
  const [showRemove, setShowRemove] = useState(false);
  return (
    <div className="flex flex-col gap-4 mt-2 p-4 border border-gray-600 rounded-md">
      {todoList?.length > 0 && (
        <div className="">
          <ul className="max-h-[300px] border border-slate-600 p-2 shadow-lg shadow-gray-800 gap-2">
            {todoList?.length > 0 && (
              <>
                {todoList?.map((item, index) => (
                  <TodoItem key={index} item={item} />
                ))}
              </>
            )}
          </ul>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRemove(true)}
            className="text-sm text-orange-500 text-center bg-transparent border-[1px] border-gray-600 rounded-md px-4 py-3 mt-2 hover:border-red-500 duration-200"
          >
            Remove All Todo
          </motion.button>
        </div>
      )}
      {todoList?.length === 0 && (
        <p className="text-center text-base text-yellow-600 font-medium tracking-wide">
          Your todo is Empty!
        </p>
      )}
      {showRemove && (
        <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor rounded-lg">
            <p className="text-base md:text-xl text-center font-medium text-red-500">
              Are you sure to{" "}
              <span className="underline text-xl cursor-pointer font-semibold underline-offset-2 decoration-[1px]">
                remove
              </span>{" "}
              all todos
            </p>
            <div className="flex mt-8  justify-around items-center">
              <button
                onClick={() => setShowRemove(false)}
                className="px-6 py-2 text-base text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 duration-300 rounded-md"
              >
                No
              </button>
              <button
                onClick={() => {
                  dispatch(
                    removeTodo(),
                    toast.success("All todo remove successfully!"),
                    setShowRemove(false)
                  );
                }}
                className="px-6 py-2 text-base text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 duration-300 rounded-md"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
