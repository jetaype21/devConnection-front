// npm install axios
import axios from "axios";

export const helpHttp = () => {
  const customFetch = (options) => {
    // const defaultHeader = {
    //   accept: "application/json",
    // };

    const controller = new AbortController();
    options.signal = controller.signal;

    setTimeout(() => controller.abort(), 10000);

    /**
     * para usar
     * hacer llamado a .then(res => console.log(res.data)
     */
    return axios.request(options);
  };

  const get = (url, body = {}) => {
    const options = {
      method: "GET",
      url: url,
      data: { ...body },
    };
    return customFetch(options);
  };

  const post = (url, body = {}) => {
    const options = {
      method: "POST",
      url: url,
      data: { ...body },
    };
    // options.method = "POST";

    return customFetch(options);
  };

  const put = (url, body = {}) => {
    const options = {
      method: "PUT",
      url: url,
      data: { ...body },
    };
    // options.method = "POST";

    return customFetch(options);
  };

  const del = (url, body = {}) => {
    const options = {
      method: "DELETE",
      url: url,
      data: { ...body },
    };
    // options.method = "POST";

    return customFetch(options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};

// import axios from "axios";

// export const getUser = async () => {
//   try {
//     const url = "http://localhost:8080/api/auth/login/success";
//     const { data } = await axios.get(url, {
//       method: "GET",
//       withCredentials: true,
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true,
//       },
//     });

//     if (data.error) throw new Error("authentication has been failed!");

//     return data.user;
//   } catch (err) {
//     console.log(err);
//   }
// };
