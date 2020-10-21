<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-8">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <img src="../assets/logo-fortes-tecnologia.gif" alt="Logo" />
        <h1 class="title is-4">
          Métricas de Qualidade para os cards do Desenvolvimento
        </h1>
      </div>
      <div class="column is-4">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <article v-if="alertError" class="message is-danger">
          <div class="message-body">
            {{ alertError }}
          </div>
        </article>
        <b-tabs type="is-toggle" expanded>
          <b-tab-item label="Login">
            <div class="card">
              <div class="card-content">
                <form>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input
                        class="input"
                        v-model="formLogin.email"
                        type="email"
                        placeholder="Email"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input
                        class="input"
                        v-model="formLogin.password"
                        type="password"
                        placeholder="Password"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control">
                      <button
                        type="button"
                        class="button is-danger is-rounded"
                        @click="login()"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="Signup">
            <div class="card">
              <div class="card-content">
                <form>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input
                        class="input"
                        v-model="formsignup.email"
                        type="email"
                        placeholder="Email"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input
                        class="input"
                        v-model="formsignup.password"
                        type="password"
                        placeholder="Password"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input
                        class="input"
                        v-model="formsignup.confpass"
                        type="password"
                        placeholder="Confirm Password"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control">
                      <button
                        type="button"
                        class="button is-danger is-rounded"
                        @click="create()"
                      >
                        Cadastrar
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",

  data() {
    return {
      activeTab: 'Login',
      alertError: "",
      alertInfo: "",
      alertSuccess: "",
      formsignup: {
        email: "",
        password: "",
        confpass: "",
      },
      formLogin: {
        email: "",
        password: "",
      },
      showSignupModal: false,
    };
  },

  methods: {
    successSignup() {
      this.$buefy.toast.open({
        message: "Usuário Cadastrado com Sucesso.",
        type: "is-success",
      });
    },

    errorSignup(messagem) {
      this.$buefy.toast.open({
        message: messagem,
        type: "is-danger",
      });
    },

    create() {
      if (this.formsignup.email === "") {
        this.errorSignup("Informe o email");
        return null;
      }

      if (this.formsignup.password === "") {
        this.errorSignup("Informe a senha");
        return null;
      }

      if (this.formsignup.password != this.formsignup.confpass) {
        this.errorSignup("A confirmação da senha não confere.");
        return null;
      }

      window.axios
        .post("/user", this.formsignup)
        .then(async (res) => {
          await res.data;
          this.successSignup();
          this.activeTab = 0;
        })
        .catch((error) => {
          this.errorSignup();
        });
      this.formsignup.email = "";
      this.formsignup.password = "";
      this.formsignup.confpass = "";
      this.activeTab = 'Login';
    },

    login() {
      if (this.formLogin.email === "") {
        this.alertError = "Informe o email";
        return null;
      }

      if (this.formLogin.password === "") {
        this.alertError = "Informe a senha";
        return null;
      }

      window.axios
        .post("/session", this.formLogin)
        .then(async (res) => {
          const resp = await res.data;
          localStorage.setItem("user_token", resp.user_token);
          this.$router.push("/home");
        })
        .catch((error) => {
          this.alertError = "Email e/ou senha inválidos.";
        });
    },
  },
};
</script>


 