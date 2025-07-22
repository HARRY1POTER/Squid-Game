import React from "react";

const Join = () => {
  return (
    <section id="join" className="bg-[#1a1a1a] py-16 text-center text-white">
      <h2 className="text-4xl text-pink-600 mb-4" data-aos="zoom-in">
        🎯 Want to Join?
      </h2>
      <p>
        Enter your number and await your invitation. Only the brave survive.
      </p>
      <form
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
        data-aos="fade-up"
      >
        <input
          type="text"
          placeholder="Enter your phone number..."
          className="px-4 py-2 w-64 rounded-md text-black"
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-500 px-6 py-2 rounded-md text-white transform transition-transform hover:scale-105"
        >
          Join the Game
        </button>
      </form>
    </section>
  );
};

export default Join;
