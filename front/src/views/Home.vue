<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <h4 class="title is-4">
        Métricas de Qualidade para os cards do Desenvolvimento
      </h4>

      

      <button
        class="button is-danger is-outlined is-rounded"
        @click="showProductAddModal = true"
      >
        Cadastrar Novo Sistema</button
      ><br /><br />
 
      <div class="columns is-multiline">
        <div
          class="column is-4"
          v-for="product in productList"
          :key="product._id"
        >
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="../assets/logo-fortes.gif"
                      alt="Logo Fortes Tecnologia"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ product.name }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="/formulario" class="card-footer-item">Inserir Nota</a>
              <a
                class="card-footer-item"
                @click="confirmCustomDelete(product._id)"
                >Apagar Sistema</a
              >
            </footer>
          </div>
        </div>
      </div>

      <b-modal
        v-model="showProductAddModal"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
      >
        <form action="">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Cadastrar Novo Sistema Fortes</p>
            </header>
            <section class="modal-card-body">
              <div class="field">
                <input
                  class="input"
                  v-model="form.name"
                  placeholder="Nome do Sistema"
                />
                <small class="has-text-danger" v-if="errorName === true"
                  >Campo Obrigatório</small
                >
              </div>
              <div class="field">
                <textarea
                  class="textarea"
                  v-model="form.description"
                  placeholder="Descrição"
                ></textarea>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button is-danger is-outlined is-rounded"
                @click="closeModal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="button is-danger is-outlined is-rounded"
                @click="create"
              >
                Cadastrar
              </button>
            </footer>
          </div>
        </form>
      </b-modal>
      <br /><br />
      <div class="container">
        <div class="card">
        <nav class="level">
          <div class="level-left">
            <a href="/formulario"  class="button is-danger is-rounded">
                    Inserir Nota
                  </a>
            
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="field has-addons">
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="searchInput"
                    placeholder="Buscar Tarefa"
                  />
                </p>
                <p class="control">
                  <button class="button is-danger is-rounded" @click="busca">
                    Pesquisar
                  </button>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <template>
          <b-tabs>
            <b-table
              :paginated="true"
              :perPage= 6
              :data="answerList"
              :columns="columns"
              :selected.sync="selected"
              focusable
            ></b-table>
          </b-tabs>

          
        </template>
        
        </div>
<button
            class="button is-danger is-rounded"
            @click="confirmDeleteNota(selected._id)"
          >
            Excluir Nota
          </button>
      </div>
    </div>
  </div>
</template>




<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },

  data() {
    const data = [];

    return {
      productList: [],
      answerList: [],
      showProductAddModal: false,
      errorName: false,      
      guardaProduto: "",
      form: {
        name: "",
        description: "",
      },
      data,
      selected: data[1],
      columns: [
        {
          field: "card",
          label: "Cartão",
          width: "80",
        },
        {
          field: "produto",
          label: "Produto",
        },
        {
          field: "dev",
          label: "Desenvolvedor",
        },
        {
          field: "qa",
          label: "QA",
        },
        {
          field: "data",
          label: "Data",
          centered: true,
        },
        {
          field: "nota",
          label: "Nota",
        },
        {
          field: "retorno",
          label: "Qtd de Reprovação",          
          centered: true,
        },
        {
          field: "comentario",
          label: "Comentário",
          width: "350",
        },
      ],
    };
  },

  methods: {
    busca() {
      if (this.searchInput != "") {
        this.answerList = this.answerList.filter(
          (answer) => answer.card === this.searchInput
        );
      } else {
        this.list_answer();
      }
      this.searchInput = "";
    },

    alertCustom() {
      this.$buefy.dialog.alert({
        title: "Title Alert",
        message: "I have a title, a custom button and <b>HTML</b>!",
        confirmText: "Cool!",
      });
    },

    confirmCustomDelete(productId) {
      this.$buefy.dialog.confirm({
        title: "Deletar Sistema",
        message:
          "Deseja excluir o sistema? <br> Esta ação não poderá ser desfeita.",
        confirmText: "Excluir",
        type: "is-danger",
        onConfirm: () => {
          this.remove(productId);
          this.successDelete();
        },
      });
    },

    confirmDeleteNota(answerId) {
      this.$buefy.dialog.confirm({
        title: "Deletar Nota",
        message:
          "Deseja excluir esta nota? <br> Esta ação não poderá ser desfeita.",
        confirmText: "Excluir",
        type: "is-danger",
        onConfirm: () => {
          this.removeNota(answerId);
          this.successDelete();
        },
      });
    },

    successDelete() {
      this.$buefy.toast.open({
        message: "Exclusão efetuada com sucesso.",
        type: "is-success",
      });
    },

    closeModal() {
      this.showProductAddModal = false;
    },

    create() {
      this.errorName = false;

      if (this.form.name === "") {
        this.errorName = true;
        return null;
      }

      window.axios.post("/products", this.form).then(async (res) => {
        await res.data;
      });

      this.form.name = "";
      this.form.description = "";
      this.list();
    },

    remove(productId) {
      window.axios.delete("/products/" + productId).then(async (res) => {
        await res.data;
        this.list();
      });
    },

    removeNota(answerId) {
      window.axios.delete("/answers/" + answerId).then(async (res) => {
        await res.data;
        this.list_answer();
      });
    },

    list_answer() {
      window.axios.get("/answers").then(async (res) => {
        this.answerList = await res.data;
      });
    },

    list() {
      window.axios.get("/products").then(async (res) => {
        this.productList = await res.data;
        this.showProductAddModal = false;
      });
    },
  },

  mounted() {
    this.list();
    this.list_answer();
    this.showProductAddModal = false;
  },
};
</script>

