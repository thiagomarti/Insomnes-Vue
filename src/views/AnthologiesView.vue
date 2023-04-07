<template>
  
        <div class="search-box">
            <i class="bx bx-search"></i>
            <input v-model="searchString" type="text" id="domTextElement" placeholder="Busca un Libro">
        </div>
        <BooksGallery :items="filteredBooks" />
</template>

<script>
// @ is an alias to /src
import BooksGallery from '@/components/BooksGallery.vue'
import booksData from "@/assets/books.json";

export default {
  name: 'AnthologiesView',
  components: {
    BooksGallery
  },
  data () 
  {
    return {
      searchString: "",
      books: booksData.filter(item => item.category == this.$route.meta.category )
    }     
  },
  computed: {
    filteredBooks() {
      const filteredBooks = this.searchString === ""
  ? this.books
  : this.books.filter(wo => {
      const searchString = [wo.author, wo.name].filter(Boolean).join("").toLowerCase();
      return searchString.includes(this.searchString.toLowerCase());
    });
return filteredBooks;
    },
  }
}
</script>
<style scoped>

@import url(@/assets/css/nuestros\ libros.css);
.search-box{
    position: relative;
    height: 42px;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 90px;
}
.search-box input{
    position: absolute;
    height: 100%;
    width: 90%;
    outline: none;
    border: none;
    background-color: #323334;
    padding: 0 0 0 45px;
    color: #fff;
    font-weight: 999;
    border-radius: 6px;
    margin-top: 40px;
}
.search-box i{
    position: absolute;
    z-index: 2;
    color: #999;
    top: 50%;
    left: 15px;
    font-size: 20px;
    transform: translateY(-50%);
    margin-top: 40px;
}
</style>