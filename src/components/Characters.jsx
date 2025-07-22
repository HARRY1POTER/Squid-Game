import React from "react";

const Characters = () => {
  const character = [
    {
      src: "../../assets/character/067.jpg",
      name: "Kang Sae-byeok",
      desc: "Player 067 – defector fighting for her family.",
      delay: "100",
    },
    {
      src: "../../assets/character/AAAAQbpaIYme0rAChfaSmy6jiu8rQ0OdicjHN1bxjgTcLPgezT8VUOwoGkPpN4tJ4BorGnPQcQ8Y8bLuSl99amDvYHbRYRDDvBYMZRdtzvC0RsZV1zcqO6-dvoXtcEPP0ptHU73RfK6c0YgIUjPXsbCISV_r.jpg",
      name: "Seong Gi-hun",
      desc: "Player 456 – the protagonist with a good heart.",
    },
    {
      src: "../../assets/character/squid-game-big-reveal-hints.avif",
      name: "Oh Il-nam",
      desc: "Player 001 – the oldest, but not what he seems.",
      delay: "200",
    },
    {
      src: "../../assets/character/squid-game-2-6.jpeg",
      name: "The Front Man",
      desc: "The mysterious leader of the deadly games, with a hidden agenda.",
      delay: "200",
    },
    {
      src: "../../assets/character/wi-ha-joon-squid-game.avif",
      name: "Hwang Jun-ho",
      desc: "Police officer seeking his missing brother in the deadly game.",
      delay: "200",
    },
  ];

  return (
    <section id="characters" className="py-16 text-center bg-black text-white">
      <h2 className="text-4xl text-pink-600 mb-10" data-aos="fade-down">
        Meet the Characters
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {character.map((char, idx) => (
          <div
            className="bg-[#1c1c1c] border-2 border-pink-600 rounded-xl w-64 transition-transform duration-300 hover:-translate-y-1 hover:shadow-pink-600 hover:shadow-lg overflow-hidden"
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={char.delay}
          >
            <img
              src={char.src}
              alt={char.name}
              className="w-full h-72 object-cover"
            />
            <h3 className="text-white mt-4">{char.name}</h3>
            <p className="text-gray-400 text-sm px-4 pb-4">{char.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Characters;
