const END_POINT = "http://localhost:8080/login";
const deafultParams = {
  email: "",
  password: ""
}
export async function Login(data = deafultParams) {

  try {
    const res = await fetch(END_POINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    if(!res.ok || res.status > 300) throw new Error(res.statusText || "Wrong e-mail or password");

    const { jwt } = await res.json();

    return jwt
  }
  catch (error) {
    throw new Error("Password or email incorrect").message;
  }
}

export async function Register(data) {
  try {
    const res = await fetch(END_POINT, {
      body: JSON.stringify(data),
      method: "POST",
    });
    if (res.ok)
      return true
  }
  catch (error) {
    throw new Error(error);
  }
}

