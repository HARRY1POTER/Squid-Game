const Hero = () => {
  return (
    <section
      className="text-center py-20 bg-gradient-to-r from-black via-gray-900 to-black"
      data-aos="fade-up"
    >
      <h1 className="text-4xl text-pink-600 mb-4">Welcome to the Squid Game</h1>
      <p className="mb-6 text-lg">“Let the games begin...”</p>
      <a
        href="#characters"
        className="inline-block bg-pink-600 text-white py-3 px-6 rounded-full hover:bg-pink-500 transition"
      >
        Explore Players
      </a>
    </section>
  );
};

export default Hero;
