import axios from "axios";

export const getUser = async () => {
  try {
    const url = "http://localhost:8080/auth/login/success";
    const { data } = await axios.get(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });

    if (data.error) throw new Error("authentication has been failed!");

    return data.user;
  } catch (err) {
    console.log(err);
  }
};
