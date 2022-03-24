import axios from "axios";

const API_URL = "http://localhost:3000/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "users/sign_in", {
        "user": {
            email,
            password,
        }
    })
      .then((response) => {
          if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        
      }).then(([responseJson, headers]) => {
        console.log(headers)
        localStorage.setItem("token", headers.get("Authorization"));

      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "users", {
      "user": {
        username,
        email,
        password,
      }
    });
  }
}

export default new AuthService();
