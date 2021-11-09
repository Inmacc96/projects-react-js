const fetch = require("isomorphic-unfetch");

module.exports = {
  reactStrictMode: true,
  assetsPrefix: "/text-web/",
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/movies": { page: "/movie" },
      "/contact": { page: "/contact" },
    };

    const res = await fetch("https://api.jsonserve.com/3fkD1V");
    const movies = await res.json();
    movies.forEach((movie) => {
      paths[`/movie/${movie.id}`] = {
        page: "/movie/[id]",
        query: { id: movie.id },
      };
    });
    return paths;
  },
};
