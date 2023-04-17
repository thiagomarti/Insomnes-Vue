<template>
  <TheFront />
  <AboutUs />
  <div class="container" id="bookscarousel">
      <div class="row">
          <div class="col-s12">
            <h2 class="subtitulo1">Nuestras Ediciones</h2>
              <div class="carousel center-align">
                  <BooksItem  v-for="(item, x) in books" :key="x" :image="`${item.edited}`"></BooksItem>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
import TheFront from '@/components/TheFront.vue';
import AboutUs from '@/components/AboutUs.vue';
import BooksItem from '@/components/BooksItem.vue';
import booksData from "@/assets/books.json";


export default {
  name: 'HomeView',
  components: {
    TheFront,
    AboutUs,
    BooksItem,
  },
  data() {
    return {
      books: booksData
    }
  },
  mounted() {
   // document.addEventListener('DOMContentLoaded', function() {
    const elementosCarousel = document.querySelectorAll(".carousel")
    /* eslint-disable */
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        shift: 5,
        padding: 1,
        numVisible: 10,

    })
 // })
},
}

</script>
