<template>
  <TheFront />
  <AboutUs />
  <div class="container" id="libritos2">
      <div class="row">
          <div class="col-s12">
            <h2 class="subtitulo1">Nuestras Ediciones</h2>
              <div class="carousel center-align" id="carousel3">
                  <BooksItem  v-for="(item, x) in libros" :key="x" :image="`${item.edited}`"></BooksItem>
              </div>
          </div>
      </div>
  </div>
  <ContactUs />

</template>

<script>
import TheFront from '../components/TheFront.vue';
import AboutUs from '../components/AboutUs.vue';
import BooksItem from '../components/BooksItem.vue';
import OurBooks from '../assets/books.json';
import ContactUs from '../components/ContactUs.vue';


export default {
  name: 'HomeView',
  components: {
    TheFront,
    AboutUs,
    BooksItem,
    ContactUs,
  },
  data() {
    return {
      libros: OurBooks
    }
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
    const elementosCarousel = document.querySelectorAll(".carousel")
    /* eslint-disable */
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        shift: 5,
        padding: 1,
        numVisible: 10,

    })
  })
},
}

</script>
