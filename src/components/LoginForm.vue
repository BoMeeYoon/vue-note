<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button v-bind:disabled="!isUserNameValid || !password" type="submit">
      login
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";
export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: ""
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    }
  },
  methods: {
    async submitForm() {
      try {
        const loginData = {
          username: this.username,
          password: this.password
        };
        const { data } = await loginUser(loginData);
        this.logMessage = `${data.user.username} 님 환영합니다`;
        this.initForm();
      } catch (error) {
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style></style>
