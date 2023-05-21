import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 flex flex-col justify-center items-center py-4">
      <div className="text-center w-6/12 py-4">
        <p className="text-4xl py-2 text-white">Welcome to Gym Planner</p>
        <p className="text-3xl py-2 text-white">
          Pick a <span className="font-medium">Workout Plan</span> or {""}
          <span className="font-medium">Resistance Exercises</span>
        </p>
      </div>
      <div className="flex justify-evenly w-8/12 py-8">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center w-4/12 text-center py-2 rounded-lg border-2 border-gray-300">
          <img
            className="object-contain h-96 w-96 rounded-lg"
            src="images/plan.jpg"
            alt="plan image"
          ></img>
          <p className="text-xl py-2 text-white">
            A regular exercising schedule lets you know that you are on track to
            reach your goals
          </p>
          <button className="py-3 text-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-br rounded-lg px-4 border border-white">
            Show Schedules
          </button>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center w-4/12 text-center py-2 rounded-lg border-2 border-gray-300">
          <img
            className="object-contain h-96 w-96 rounded-lg"
            src="images/exercise.jpg"
            alt="exercise image"
          ></img>
          <p className="text-xl py-2 text-white">
            Resistance exercises increases muscle strength by making your
            muscles work against a force
          </p>
          <button className="py-3 text-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-br rounded-lg px-4 border border-white">
            Show Exercises
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
