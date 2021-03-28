import { trendingEndpoint } from "./enpoints"

function getGifsTrending(offset, limit) {
  const trendingUrlPaginated = `${trendingEndpoint}&offset=${offset}&limit=${limit}`

  return fetch(trendingUrlPaginated)
    .then(res => res.json())
    .then(res => {
      const { data } = res
      return data
    })
}

export {
  getGifsTrending,
}