import { api } from "./api"

export const movieApi = api.injectEndpoints({
  endpoints: builder => ({
    allMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films",
        method: "GET",
      }),
    }),
    popularMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films/popular",
        method: "GET",
      }),
    }),
    bigRatingMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films/popular",
        method: "GET",
      }),
    }),
    newMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films/new",
        method: "GET",
      }),
    }),
    watchedMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/watched",
        method: "GET",
      }),
    }),
  }),
})

export const {
  useAllMoviesQuery,
  useBigRatingMoviesQuery,
  usePopularMoviesQuery,
  useNewMoviesQuery,
  useWatchedMoviesQuery,
  useLazyAllMoviesQuery,
  useLazyPopularMoviesQuery,
  useLazyBigRatingMoviesQuery,
  useLazyNewMoviesQuery,
  useLazyWatchedMoviesQuery,
} = movieApi
