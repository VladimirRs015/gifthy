// const ENDPOINT = "http://localhost:8080/favs";

const ENDPOINT = "http://localhost:8080/api/v1/favs";

export async function getFavs({ jwt, signal }) {
  return fetch(ENDPOINT, {
    methods: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
    signal,
  })
    .then((res) => res.json())
    .catch(error => {
      throw new Error(error);
    })
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
