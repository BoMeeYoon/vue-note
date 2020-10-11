<template>
  <header id="nav">
    <div>
      <router-link to="/" class="logo">TIL</router-link>
      <span v-if="isLogin"> by {{ username }}</span>
    </div>
    <div class="navigations">
      <template v-if="isLogin">
        <a href="javascript:;" @click="logoutUser" class="logoutBtn"
          >Sign out</a
        >
      </template>
      <template v-else>
        <router-link to="/login">Sign in</router-link> |
        <router-link to="/signup">Sign up</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLogin"]),
    ...mapState(["username"])
  },
  methods: {
    ...mapMutations({
      CLEAR_USERNAME: "CLEAR_USERNAME"
    }),
    logoutUser() {
      this.CLEAR_USERNAME();
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logoutBtn {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
