import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// VUE_APP 접두사 때문에 자동으로 instance 로 가져 올 수 있다
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
  return setInterceptors(instance);
}

export const instance = createInstance();

function registerUser(userData) {
  return instance.post("/signup", userData);
}

function loginUser(loginData) {
  return instance.post("/login", loginData);
}

export { registerUser, loginUser };
