import React from "react";

const Gallery = () => {
  const images = [
    "../../assets/Gallery/MV5BMjNjZmMxMWEtYTFiNC00ZjZiLWE1OWMtYzRhMDU5YzQ1OTRhXkEyXkFqcGc@._V1_QL75_UX603_.jpg",
    "../../assets/Gallery/MV5BMzRkODk0NjgtZmFhYy00MDc0LTgzMDctNjBlMDUzOTdhNWNkXkEyXkFqcGc@._V1_QL75_UX1212_.jpg",
    "../../assets/Gallery/MV5BMzY1YjY3YmYtNWZjYy00ZjcwLWFkYTMtNTJhZmExODA5NDAzXkEyXkFqcGc@._V1_QL75_UX1212_.jpg",
    "../../assets/Gallery/MV5BYWI1MGFlMzQtZGQ4NS00ZTdlLWI0ZjUtYTY1MGQxNWYyYzk5XkEyXkFqcGc@._V1_QL75_UX603_.jpg",
    "../../assets/Gallery/MV5BZjcyNzEwNGQtYjk3Ni00NWI0LThlNmItMTRlMThhOTRjOTEwXkEyXkFqcGc@._V1_QL75_UX600_.jpg",
    "../../assets/Gallery/MV5BZjFmNDQxNjgtNWRhYy00YzIzLWI5ZTEtNmJiYjA1MmQxZDY4XkEyXkFqcGc@._V1_QL75_UX603_.jpg",
    "../../assets/Gallery/MV5BMzkyMDc4ZDMtMTE5OC00MjE1LWJiZGUtZmFiNWUyOTRlNzgwXkEyXkFqcGc@._V1_QL75_UX1212_.jpg",
  ];

  return (
    <section
      id="gallery"
      className="bg-[#1e1e1e] py-16 text-center text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-pink-600 mb-10">🎥 Gallery</h2>
      <div className="flex flex-wrap justify-center gap-4 mx-4 lg:hidden">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Scene ${idx + 1}`}
            className="w-[430px] h-[300px] object-cover border-2 border-pink-600 rounded-lg transform transition-transform duration-300 hover:scale-105 "
            data-aos="zoom-in"
            data-aos-delay={100 * idx}
          />
        ))}
      </div>
      <div className="lg:flex flex-wrap justify-center gap-4 mx-4 hidden">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group w-[40px] h-[400px] hover:w-[630px] overflow-hidden border-2 border-pink-600 rounded-lg transition-all duration-300"
          >
            <img
              src={src}
              alt={`Scene ${idx + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
