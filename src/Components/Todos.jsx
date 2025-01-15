import React, { useContext, useState } from "react";
import {
  IoNotificationsOutline,
  IoRefreshOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuRepeat } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GlobalContext } from "../Context/GlobalState";

const Todos = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [newTask, setNewTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false,
      important: false,
      date: selectedDate ? selectedDate.toLocaleDateString() : "No Date",
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTask("");
    setSelectedDate(null); // Reset the date picker
  };

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const removeCompletedTask = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const toggleImportant = (id) => {
  dispatch({ type: "TOGGLE_IMPORTANT", payload: id });
  };

  return (
    <div className="p-6 w-full  mx-auto">
      {/* Add Task Section */}
      <div className="bg-gradient-to-t from-[#3579371A] to-[#D0FFD21A] p-6 rounded-lg shadow-lg mb-8 border border-[#35793730]">
        <h2 className="text-xl font-semibold mb-4 text-[#357937]">Add A Task</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Write your task here"
            className="w-full p-3 border bg-inherit text-white border-[#35793740] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357937] focus:border-transparent transition-all"
          />
          <div className="flex justify-between items-center px-2">
            <div className="flex text-2xl gap-8 text-[#357937]">
              <IoMdNotificationsOutline className="cursor-pointer hover:scale-110 transition-transform" />
              <LuRepeat className="cursor-pointer hover:scale-110 transition-transform" />
              <CiCalendar className="cursor-pointer hover:scale-110 transition-transform" />
            </div>

            <button
              onClick={handleAddTask}
              className="bg-[#357937] text-white px-6 py-2.5 rounded-lg hover:bg-[#285928] transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* To-Do List */}
      <div
        className={`${
          state.theme === "dark" ? "bg-[#2C2C2C]" : "bg-white"
        } p-6 rounded-lg shadow-lg mb-8 border border-gray-100`}
      >
        <h2 className="text-xl font-semibold mb-4">To-Do</h2>
        <ul className="flex flex-col gap-3">
          {state.todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#357937] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="w-5 h-5 cursor-pointer accent-[#357937]"
                  />
                  <span className="text-gray-700">{todo.task}</span>
                </div>
                <button
                  onClick={() => toggleImportant(todo.id)}
                  className={`text-lg hover:scale-110 transition-transform ${
                    todo.important ? "text-[#357937]" : "text-gray-300"
                  }`}
                >
                  {!todo.important && <FaRegStar className="text-2xl" />}
                  {todo.important && <FaStar className="text-2xl" />}
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* Completed List */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">Completed</h2>
        <ul className="flex flex-col gap-3">
          {state.todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-100"
              >
                <span className="line-through text-gray-500">{todo.task}</span>
                <button
                  onClick={() => removeCompletedTask(todo.id)}
                  className="text-red-500 hover:text-red-700 px-4 py-1 rounded-md hover:bg-red-50 transition-all"
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;