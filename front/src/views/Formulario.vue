<template>
  <div class="formulario">
    <Navbar />
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column is-half">
                  <div class="field">
                    <b-field label="Produto/Sistema">
                      <b-select
                        v-model="form.dados.produto"
                        placeholder="Selecione um produto..."
                        rounded
                        required
                      >
                        <option v-for="product in productList" :key="product">
                          {{ product.name }}
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="field">
                    <b-field label="Responsável Homologação">
                      <b-input rounded v-model="form.dados.qa"></b-input>
                      <small class="has-text-danger" v-if="emptyQa === true"
                        >Campo Obrigatório</small
                      >
                    </b-field>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="field">
                    <b-field label="Nº Tarefa">
                      <b-input rounded v-model="form.dados.card"></b-input>
                      <small class="has-text-danger" v-if="emptycard === true"
                        >Campo Obrigatório</small
                      >
                    </b-field>
                    
                  </div>
                </div>
                <div class="column is-half">
                  <div class="field">
                    <b-field label="Desenvolvedor">
                      <b-input rounded v-model="form.dados.dev"></b-input>
                      <small class="has-text-danger" v-if="emptydev === true"
                        >Campo Obrigatório</small
                      >
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Nota Final</p>
            </header>

            <div class="tile is-ancestor">
              <div class="tile is-vertical is-12">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                      <p class="title" style="text-align: center">
                        {{ form.dados.nota }}
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <button class="button is-danger is-rounded" @click="processaNota">
            Processar Nota
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field
                      label="Equipe de qualidade na definição da solução"
                    >
                      <b-input rounded v-model="form.nota01" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Análise da Raiz do Problema">
                      <b-input rounded v-model="form.nota02" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Solução do Problema">
                      <b-input rounded v-model="form.nota03" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field
                      label="Detalhamento de novos campos criados para a resolução do problema"
                    >
                      <b-input rounded v-model="form.nota04" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field
                      label="Verificar impacto na integração entre os produtos"
                    >
                      <b-input rounded v-model="form.nota05" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Inteligibilidade (é fácil de usar?)">
                      <b-input rounded v-model="form.nota06" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field
                      label="Possibilidade de cadastrar dependências sem sair da tela atual"
                    >
                      <b-input rounded v-model="form.nota07" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Comportamento em relação ao tempo">
                      <b-input rounded v-model="form.nota08" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Padrão Visual">
                      <b-input rounded v-model="form.nota09" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field
                      label="Informar no cartão caminho do Exe/Versão/APK"
                    >
                      <b-input rounded v-model="form.nota10" placeholder="Dê uma Nota de 0 a 10"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Quantidade de Retorno da Tarefa">
                      <b-input rounded v-model="form.dados.retorno" placeholder="Quantas vezes que o cartão foi reprovado?"></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column">
                  <div class="field">
                    <b-field label="Comentários">
                      <b-input
                        maxlength="200"
                        type="textarea"
                        v-model="form.dados.comentario"
                      ></b-input>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Formulário",
  components: {
    Navbar,
  },
  data() {
    return {
      questionList: [],
      productList: [],
      isComponentModalActive: false,
      errorProduct: false,
      emptyQa: false,
      emptycard: false,
      emptydev: false,
      
      form: {
        dados:{
          produto: "Selecione o Produto...",
          qa: "",
          card: "",
          dev: "",
          nota: "",          
          data: "",
          retorno: "",
          comentario: "",
        },
        nota01: "",
        nota02: "",
        nota03: "",
        nota04: "",
        nota05: "",
        nota06: "",
        nota07: "",
        nota08: "",
        nota09: "",
        nota10: "",
        nota11: "",
        
        
      },
    };
  },
  methods: {

    processaNota() {
      this.emptyQa = false;
      this.emptycard = false;
      this.emptydev = false;

      if (this.form.dados.qa === "") {
        this.emptyQa = true;
        return null;
      }

      if (this.form.dados.card === "") {
        this.emptycard = true;
        return null;
      }

      if (this.form.dados.dev === "") {
        this.emptydev = true;
        return null;
      }


      var data = new Date();

      this.form.dados.nota = (
        (parseFloat(this.form.nota01) +
          parseFloat(this.form.nota02) +
          parseFloat(this.form.nota03) +
          parseFloat(this.form.nota04) +
          parseFloat(this.form.nota05) +
          parseFloat(this.form.nota06) +
          parseFloat(this.form.nota07) +
          parseFloat(this.form.nota08) +
          parseFloat(this.form.nota09) +
          parseFloat(this.form.nota10)) /
        10
      ).toFixed(2),
      this.form.dados.data = data.toLocaleDateString(),

      console.log(this.form.dados)

        window.axios.post("/answers", this.form.dados).then(async (res) => {
          await res.data;
        });
        this.success();
    },

    list_product() {
      window.axios.get("/products").then(async (res) => {
        this.productList = await res.data;
      });
    },
    list_question() {
      window.axios.get("/questions").then(async (res) => {
        this.questionList = await res.data;
      });
    },
    list_answer() {
      window.axios.get("/answers").then(async (res) => {
        this.answerList = await res.data;
      });
    },

    success() {
      this.$buefy.toast.open({
        message: "Nota processada com sucesso.",
        type: "is-success",
      });
    },
  },
  mounted() {
    this.list_product();
    this.list_question();
    this.list_answer();
  },
};
</script>


