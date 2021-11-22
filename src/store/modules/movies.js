import axios from "axios";

const movies = {
  state: {
    movies: [],
    movie: null,
    totalPages: 0,
    searchTitle: "",
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setMovie(state, movie) {
      state.movie = movie;
    },
    setTotal(state, total) {
      state.totalPages = total;
    },
    setSearchTitle(state, title = "") {
      state.searchTitle = title;
    },
  },
  actions: {
    async getMovies({ commit }, payload) {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "ac060708",
          s: payload.title || "kenshin",
          type: payload.type || "movie",
          page: payload.page,
        },
      });
      if (response.data.Response === "True") {
        commit("setMovies", response.data.Search);
        commit("setTotal", response.data.totalResults);
      }
    },
    async getMovie({ commit }, id) {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "ac060708",
          i: id,
        },
      });
      if (response.data.Response === "True") {
        commit("setMovie", response.data);
      }
    },
  },
  getters: {
    movies: (state) => state.movies,
    movie: (state) => state.movie,
  },
};

export default movies;
