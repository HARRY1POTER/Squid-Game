import React from "react";

const testimonials = [
  { text: `"Squid Game changed my life. I’ll never forget it." – Player 456` },
  { text: `"A fight for survival… with friends and enemies." – Player 067` },
  {
    text: `"Every decision felt like life or death. It was a nightmare." – Player 001`,
  },
  { text: `"I had no idea how far people would go to win." – Player 218` },
  {
    text: `"The bond I had with my teammates was unforgettable." – Player 067`,
  },
  {
    text: `"The betrayal in that game was beyond anything I could imagine." – Player 101`,
  },
  {
    text: `"I didn't think I’d make it out alive, but I couldn’t stop." – Player 069`,
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-black text-white py-16 text-center"
      // data-aos="fade-right"
    >
      <h2 className="text-4xl text-pink-600 mb-10">🗣️ What Players Say</h2>
      <div className="space-y-6 mx-5">
        {testimonials.map((quote, idx) => (
          <blockquote
            key={idx}
            className="bg-[#222] text-gray-300 italic border-l-4 border-pink-600 px-6 py-4 max-w-3xl transition-transform duration-300 hover:scale-[1.02] mx-auto"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-up"}
            data-aos-delay={idx * 100}
          >
            {quote.text}
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
