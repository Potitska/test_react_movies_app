const baseURL = process.env.REACT_APP_API

const urls = {
    movies: () => '/movies',
    movieById: (id) => `/movies/${id}`
}

export {
    baseURL,
    urls
}