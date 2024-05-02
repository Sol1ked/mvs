export type UserReference = {
  id: number
  name: string
  login: string
  role: string
}

export type User = {
  id: number
  name: string
  login: string
  email: string
  role: string
  subscriptions: UserReference[]
  subscribers: UserReference[]
  watched_films: Movie[]
  reviews: Review[]
}

export type Rating = {
  value: number
  count: number
}

export type Genre = {
  id: number
  name: string
}

export type Movie = {
  id: number
  title: string
  production_year: string
  duration: string
  poster: string
  rating: Rating
  genres: Genre[]
  reviews: Review[]
}

export type Review = {
  id: number
  title: string
  text: string
  type: string
  author: UserReference
}
