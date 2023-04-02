<template>
  <div class="search">
    <label for="">Buscate algo</label> 
    <input v-model="searchString" placeholder="search" class="search-bar">
    <BooksGallery :items="filteredWorkers" :title="`Galería filtrada`" />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksGallery from '@/components/BooksGallery.vue'
import assetsData from "@/assets/Libros.json";
export default {
  name: 'AnthologiesView',
  components: {
    BooksGallery
  },
  data () 
  {
    return {
      searchString: "",
      data: assetsData
    }     
  },
  computed: {
    filteredWorkers() {    
        const filteredWorkers = this.searchString === ""
            ? this.data.img
            : this.data.img.filter(wo => Object.values(wo).join("").toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1);
        return filteredWorkers;
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