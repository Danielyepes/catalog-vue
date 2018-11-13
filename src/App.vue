<template>
  <v-app>
    <v-toolbar 
    color="pink lighten-2" app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-normal">
        <span>{{tittle}}</span>
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
      <router-view></router-view>
    </v-content>

   <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >

      <v-list class="pt-0" dense>
        <v-list-tile @click="goToCatalog">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Catalogo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <v-list-tile  @click="goToCategory">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Categorías</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>


export default {
  data () {
    return {
      tittle: localStorage.getItem("tittle"),
      drawer: null,
    }
  },
  methods:{
    goToCatalog: function(){
      localStorage.tittle = "Catálogo";
       this.$router.push('/catalog')
    },
     goToCategory: function(){
       localStorage.tittle = "Category";
       this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
