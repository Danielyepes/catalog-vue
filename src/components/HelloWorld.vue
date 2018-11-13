<template>
  <v-layout>

    <v-flex xs12>

      <div class="v-card theme--light" v-for="(category, i) in categories" :key="i" style="margin-top: 20px;">
        <div class="v-responsive v-image">
          <div class="v-responsive__sizer" style="padding-bottom: 44.2882%;">
          </div>
<v-img :src="'https://mitienda.moda/img/categories/'+ category.collection_id + '.jpg'" width="100%" @click="getcatalog('{{category.collection_id}}')"></v-img>
          <div class="v-responsive__content">

          </div>
        </div>
      </div>

    </v-flex>
  </v-layout>

</template>

<script>
  export default {
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
    })
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