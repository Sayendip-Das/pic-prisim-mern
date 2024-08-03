import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="sm:w-[60vw] h-[15vh] sm:h-[24vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center ">
      <form className="absolute flex justify-center items-center ">
        <input
          type="search"
          id="search"
          name="search"
          className="py-4 px-3 w-[80vw] sm:w-[40vw] sm:px-7 rounded-full shadow-md text-xl sm:text-2xl mx-auto outline-none border-b-2 bg-bgColor"
          placeholder="Search your asset..."
        />
        <IoIosSearch className="text-2xl text-center sm:text-4xl text-gray-400 -ml-12" />
      </form>
    </div>
  );
};

export default HeroSection;
