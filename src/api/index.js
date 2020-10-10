import axios from "axios";

// VUE_APP 접두사 때문에 자동으로 instance 로 가져 올 수 있다
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

function registerUser(userData) {
  return instance.post("/signup", userData);
}

function loginUser(loginData) {
  return instance.post("/login", loginData);
}

export { registerUser, loginUser };
