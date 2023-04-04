<template>
<h1>{{ this.book.name }}</h1> 
<p>{{ this.book.description }}</p>
<img :src=this.book.img :alt=this.book.name  />
</template>

<script>
import booksData from "@/assets/books.json";

export default {
  name: 'BookView',
  data() {
    return {
      book: booksData.find(item => item.path == this.$route.params.path)
    }
  }
}
</script>
