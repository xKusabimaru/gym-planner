const MainHeader = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around p-5 sticky top-0 border-b border-white">
      <div className="flex justify-center">
        <img
          className="object-contain h-12 w-16"
          src="images/logo.png"
          alt="logo"
        ></img>
        <p className="place-self-center text-2xl text-white">Gym Planner</p>
      </div>
      <div className="flex justify-around place-self-center">
        <p className="place-self-center text-2xl font-medium text-white">
          Fitness is for everybody, including you
        </p>
      </div>
      <div className="flex justify-around place-self-center">
        <button className="bg-transparent hover:border-transparent px-2 text-white hover:text-gray-300">
          About
        </button>
        <button className="bg-transparent hover:border-transparent px-2 text-white hover:text-gray-300">
          Contact
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
