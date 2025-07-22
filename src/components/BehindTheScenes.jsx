import React from "react";

const BehindTheScenes = () => {
  return (
    <div>
      <section
        className="bg-black py-12 px-5 text-center text-white"
        data-aos="fade-in"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-400 font-roboto">
          🎬 Behind the Scenes
        </h2>
        <div className="flex flex-wrap justify-between items-start max-w-6xl mx-auto gap-8">
          <div className="flex-1 max-w-3xl text-left text-gray-400 leading-8 text-base">
            <p className="mb-5">
              <span className="font-bold text-white">Squid Game</span> was
              filmed in South Korea, utilizing real sets and visually stunning
              locations to create an immersive world of tension and intrigue.
              The production team meticulously designed each set to reflect the
              stark contrasts between the opulent world of the rich and the grim
              environment of the players.
            </p>
            <p className="mb-5">
              The games themselves were shot on large soundstages, with each set
              designed to look deceptively simple but intricately layered to
              represent the psychological pressure the players are under. From
              the giant doll in the{" "}
              <span className="font-bold text-white">
                Red Light, Green Light
              </span>{" "}
              game to the deadly glass bridge, every element was crafted with
              precision to enhance the visual storytelling.
            </p>
            <p className="mb-5">
              The <span className="font-bold text-white">Squid Game</span>{" "}
              costumes were carefully chosen to reflect the character's
              personalities and their class divide. The green tracksuits of the
              players represent uniformity and anonymity, while the guards’
              masks and uniforms symbolize the faceless authority controlling
              the deadly games. The distinctive shapes (circle, triangle,
              square) on the guards’ masks were designed to show the hierarchy
              of power within the game.
            </p>
            <p className="mb-5">
              Director Hwang Dong-hyuk drew inspiration from a variety of
              sources, blending traditional Korean culture with modern societal
              critiques. He wanted to explore the stark contrasts between the
              rich and the poor, using{" "}
              <span className="font-bold text-white">Squid Game</span> as a
              commentary on the desperation of individuals trapped in a
              class-based society. The series also draws from{" "}
              <span className="font-bold text-white">
                Korean childhood games
              </span>
              , incorporating the simplicity of these games with deadly
              consequences.
            </p>
            <p className="mb-5">
              The casting was crucial to the show’s success. The actors, led by
              Lee Jung-jae as Seong Gi-hun and Park Hae-soo as Cho Sang-woo,
              brought depth and authenticity to their roles, creating complex
              characters that audiences could root for or despise. Many of the
              actors were relatively unknown outside of Korea before the show,
              but <span className="font-bold text-white">Squid Game</span>{" "}
              launched their careers internationally, making them household
              names.
            </p>
            <p className="mb-5">
              The <span className="font-bold text-white">unique score</span> of{" "}
              <span className="font-bold text-white">Squid Game</span>, composed
              by Jung Jae-il, added another layer of emotional depth to the
              series. The soundtrack, with its blend of traditional and modern
              elements, accentuates the high-stakes tension and drama, making
              every moment even more captivating.
            </p>
          </div>
          <div
            className="flex-shrink-0 max-w-sm w-full mx-auto flex justify-center items-center"
            data-aos="fade-right"
          >
            <img
              src="../../assets/Gallery/sub-buzz-413-1634772740-4.webp"
              alt="Squid Game Set"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BehindTheScenes;
