const TOKEN = "264b3755062a0f078bc9bc3937418fe8377e61f7";

export class API {
  static updateMovie(mov_id, body) {
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
