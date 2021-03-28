// const ENDPOINT = "http://localhost:8080/favs";

const ENDPOINT = "http://localhost:8080/favs";

export async function getFavs({ jwt, isMounted }) {
  try {
    const res = await fetch(ENDPOINT, {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
      // signal: !isMounted ? new AbortController().abort() : null,
    });

    if (!res.ok)
      throw new Error(
        res.statusText || "something was wrong during the request"
      );

    const { favs } = await res.json();
    return favs;
  } catch (error) {
    throw new Error(error);
  }
}

export function addToFav({ id, jwt }) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
    body: JSON.stringify({ favid: id }),
  })
    .then((res) => {
      if (!res.ok)
        throw new Error(
          res.statusText || "something was wrong during the request"
        );
      return res.json();
    })
    .catch(
      (error) => new Error(error || "Something was wrong during the cretationg")
    );
}

export function removeFromFavs({ jwt, id }) {
  return fetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch(
      (error) =>
        new Error(
          error || "Something was wrong during trying to delete the Favorite"
        )
    );
}
