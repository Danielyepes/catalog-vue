<template>
  <v-app>
    <v-toolbar 
    color="pink lighten-2" app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-normal">
        <span>Catalogo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <v-btn icon>
      <v-icon>phone</v-icon>
    </v-btn>
        <v-btn icon>
      <v-icon>close</v-icon>
    </v-btn>

    </v-toolbar>

    <v-content fluid style="padding: 56px 0px 0px;">
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  },
  methods: {
  getcatalog: function() {
    // this.$http.post("https://octopux.app/api/v1/shopity/collection", {
    //     octopux_token: "f550a68b-21ff-4b33-aa04-bff68023acca",
    //     collection_id: number
    // }).then(function(t) {
    //     console.log(t);
    // }
    // .bind(this)).catch(function(t) {
    //     console.log(t)
    // }
    // .bind(this))

    }
  }
}
</script>

<style>

</style>
