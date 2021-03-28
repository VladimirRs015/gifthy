import { searchEndPoint } from "./enpoints";
async function getGifs({
  keyword = "random",
  limit = 10,
  page = 1,
  signal = null,
} = {}) {
  try {
    const offset = page * limit;
    const searchKeywordEndPoint = `${searchEndPoint}&q=${keyword}&offset=${offset}&limit=${limit}`;
    const res = await fetch(searchKeywordEndPoint, {
      signal,
    });
    const { data } = await res.json();
    return data;
  } catch (err) {
    // throw new Error(err);
  }
}

export { getGifs };
