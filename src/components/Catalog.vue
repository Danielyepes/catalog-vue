<template>
  <v-layout>

    <v-flex xs12>
    <v-card v-for="(items, i) in msg.catalogItems" :key="i">
        <v-carousel>
            <v-carousel-item 
            v-for="(images, j) in items.images" 
            :key="j"
            :src="images"
            >
            </v-carousel-item>
        </v-carousel>
        <div class="item-name">
            <span class="item-first">{{items.name}}</span>
            <span class="item-second">$ {{items.saleprice}}</span>
            <span class="item-ref">Ref: {{items.ref}}</span>
        </div>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    localStorage.tittle = "Catálogo";
export default {
  data() {
    return {
      msg: JSON.parse(localStorage.catalog),
    };
  }
};
</script>

<style>
.v-carousel .v-carousel__controls {
    background-color: transparent;
}
.v-carousel .v-carousel__controls .v-btn .v-icon {
    color: #589df8;
    font-size: 12px!important;
}
.v-carousel .v-btn .v-icon {
    color: rgba(0,0,0,.4);
}
.v-carousel__controls__item--active .v-icon {
    opacity: 1;
    vertical-align: middle;
}
.item-name{
    -ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;font-family:Open Sans,sans-serif;padding:10px;position:relative;}
    .item-name .item-first{font-size:25px;padding:0}
    .item-name .item-second{color:#eab3ca;font-size:35px;font-weight:700;padding:0;position:relative;top:-15px}
    .item-name .item-ref{font-size:12px;padding:0;position:relative;top:-20px}
</style>
