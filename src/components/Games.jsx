import React from "react";

const Games = () => {
  const games = [
    {
      title: "🚦 Red Light, Green Light",
      desc: "A deadly twist on a children's game.",
      delay: 0,
      gameName: "rlgl.html",
    },
    {
      title: "⚖️ Tug of War",
      desc: "Teamwork, strength, and faith determine who lives.",
      delay: 100,
      gameName: "tug-of-war.html",
    },
    {
      title: "🪟 Glass Bridge",
      desc: "Only one path leads to survival.",
      delay: 200,
      gameName: "glass-bridge.html",
    },
    {
      title: "🎲 Marbles",
      desc: "A game of luck and strategy.",
      delay: 300,
      gameName: "marbles.html",
    },
    {
      title: "🍬 Dalgona Candy",
      desc: "Carve the candy shape without breaking it.",
      delay: 400,
      gameName: "dalgona-candy.html",
    },
    {
      title: "🏆 The Final Game",
      desc: "Only one player can survive the last round.",
      delay: 500,
      gameName: "final-game.html",
    },
  ];

  const handlePlayGame = (gameName) => {
    window.open(`/${gameName}`, "_blank");
  };

  return (
    <section
      id="games"
      className="bg-[#0f0f0f] py-16 text-center text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 border-4 border-pink-600 animate-pulse opacity-30"></div>

      <h2 className="text-5xl text-gradient-to-r from-pink-500 to-teal-400 mb-12 animate__animated animate__fadeIn">
        Game Timeline
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative bg-[#222] bg-opacity-50 backdrop-blur-md border-2 border-pink-600 rounded-xl p-6 w-72 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3d"
            data-aos="flip-up"
            data-aos-delay={game.delay}
          >
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold text-gradient-to-r from-pink-500 to-teal-400 mb-4">
                {game.title}
              </h3>
              <p className="text-gray-200">{game.desc}</p>
            </div>

            {/* <div className="mt- 6"> */}
            <button
              key={game.gameName}
              onClick={() => handlePlayGame(game.gameName)}
              className={`relative w-full px-8 py-3 bg-gradient-to-r from-green-400 via-pink-500 to-black text-black font-semibold rounded-full overflow-hidden group hover:text-black 
                ${index === 1 || index === 3 ? "md:top-9 " : ""}`}
            >
              <span className="absolute left-0 top-0 w-0 h-full bg-green-400 transition-all duration-300 group-hover:w-full group-hover:left-auto group-hover:right-0 group-hover:bg-pink-400"></span>

              <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                Play {game.title}
              </span>

              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl group-hover:translate-x-2 transition-all duration-300 opacity-5 group-hover:opacity-100">
                ➡️
              </span>
            </button>
            {/* </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
