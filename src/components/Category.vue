<template>
  <v-layout>

    <v-flex xs12>

      <div class="v-card theme--light" v-for="(category, i) in categories" :key="i" style="margin-top: 20px;">
        <div class="v-responsive v-image">
          <div class="v-responsive__sizer" style="padding-bottom: 44.2882%;">
          </div>
      <v-img :src="'https://mitienda.moda/img/categories/'+ category.collection_id + '.jpg'" width="100%"  @click="getcatalog(category.collection_id)"></v-img>
          <v-responsive></v-responsive>

          </div>
        </div>

    </v-flex>
  </v-layout>

</template>

<script>
  import axios from "axios";
localStorage.tittle = "Category"
  export default {
    methods: {
  getcatalog: function(number) {
    console.log(number);
    axios({ method: "POST", 
        "url": "https://octopux.app/api/v1/shopity/collection", 
        "data": {
          octopux_token: "f550a68b-21ff-4b33-aa04-bff68023acca",
          collection_id: number
        },
        "headers": { "content-type": "application/json" } 
        }).then(result => {
          this.response = result.data;
          this.$router.push('/catalog')
          localStorage.catalog = JSON.stringify(this.response)
        }, error => {
            console.error(error);
        });
    }
  },
    data: () => ({
      categories: [{
        name: "Jeans",
        collection_id: 78993358966
      }, {
        name: "Fajas",
        collection_id: 83403636854
      }, {
        name: "Prendas Control",
        collection_id: 80160456822
      }, {
        name: "Compresión Suave",
        collection_id: 83403440246
      }, {
        name: "Ropa Interior",
        collection_id: 83252379766
      }, {
        name: "Leggings",
        collection_id: 83478380662
      }, {
        name: "Shorts",
        collection_id: 79978496118
      }, {
        name: "Sport Life",
        collection_id: 83403341942
      }, {
        name: "Acero",
        collection_id: 79000338550
      }, {
        name: "Oro Laminado 18K",
        collection_id: 78993653878
      }, {
        name: "Oro – Plata",
        collection_id: 78993719414
      }, {
        name: "Plata Ley 925",
        collection_id: 79000404086
      }]
    }),
  }
</script>

<style>
  .theme--light.v-card {
    margin-bottom: 10px;
  }

  .v-toolbar {
    color: #fff !important
  }

  .v-btn__content {
    color: #fff;
  }
</style>