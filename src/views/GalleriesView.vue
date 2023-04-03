<template>
  <div class="search">
    <label for="">Buscate algo </label> 
    <input v-model="searchString" placeholder="search" class="search-bar">
    <BooksGallery :items="filteredBooks" :title="`Galería filtrada`" />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksGallery from '@/components/BooksGallery.vue'
import booksData from "@/assets/books.json";

export default {
  name: 'GalleriesView',
  components: {
    BooksGallery
  },
  data () 
  {
    return {
      searchString: "",
      // acá filtar por categoria. Fijate en el JS de las routas que le dejé configurado q cuando entre a la ruta de antologías setee la categoria en antología.
      books: booksData.filter(item => item.categoria == this.$route.meta.category )
    }     
  },
  computed: {
    filteredBooks() {    
        const filteredBooks = this.searchString === ""
            ? this.books
            : this.books.filter(
              wo => Object.values(wo)
              .join("")
              .toLowerCase()
              .indexOf(this.searchString.toLowerCase()) !== -1);
        return filteredBooks;
    },
  }
}
</script>
<style scoped>
.search-bar {
  width: 100px;
}
.search {
  margin-top: 10px; 
}
</style>