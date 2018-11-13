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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style>
</style>
