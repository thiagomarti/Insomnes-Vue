<template>
  <TheFront />
  <AboutUs />
  <div class="container" id="libritos2">
      <div class="row">
          <div class="col-s12">
              <div class="carousel center-align" id="carousel3">
                  <h2 class="subtitulo1">Carrusel de ediciones</h2>

                  <BooksItem  v-for="(item, x) in libros" :key="x" :image="`${item.image}`"></BooksItem>
  
              </div>
          </div>
      </div>
  </div>


</template>

<script>
import TheFront from '../components/TheFront.vue';
import AboutUs from '../components/AboutUs.vue';
import BooksItem from '../components/BooksItem.vue';
import OurBooks from '../assets/Libros.json';


export default {
  name: 'HomeView',
  components: {
    TheFront,
    AboutUs,
    BooksItem,
  },
  data() {
    return {
      libros: OurBooks
  }
}
}

</script>



