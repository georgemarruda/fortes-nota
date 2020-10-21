<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" style="width: auto">
          <img
            src="../assets/logo-fortes-tecnologia.gif"
            width="150"
            height="80"
          />
        </a>
 
        
        <div class="navbar-start">
          <a class="navbar-item" href="/home"> Home </a>
        </div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                href="/login"
                class="button is-danger is-rounded is-outlined"
                @click="logout()"
              >
                Sair
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.removeItem("user_token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  margin-bottom: 30px;
}
</style>