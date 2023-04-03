<template>
  <div class="search">
    <label for="">Buscate algo {{ $route.meta.category }} </label> 
    <input v-model="searchString" placeholder="search" class="search-bar">
    <BooksGallery :items="filteredBooks" :title="`Galería filtrada`" />
  </div>
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
      books: booksData.filter(item => item.categoria == this.$route.meta.category )
    }     
  },
  computed: {
    filteredBooks() {    

        // para saber que hace cada parte del código, podes usar console log
        // Que info trae this.$route.meta.category ?
        console.log("this.$route.meta.category es igual a ", this.$route.meta.category)

        // Entonces vamos a filtrar el contenido de booksData para quedarme con los item.categoria sea igual a this.$route.meta.category
        console.log(booksData.filter(item => item.categoria == this.$route.meta.category ));
              

        //Object.values devuelve todos los items del array en uno solo. Cada item es en este caso.
        /*
        {
          "categoria": "autor",
          "nombre": "A contramano",
          "autor": "Susana B. Orlandi",
          "descripcion": "A contramano es el primer libro de cuentos de Susana Orlandi, nos muestra a una escritora que maneja la narrativa con la misma naturalidad con que escribe poemas.",
          "img": "./fotos/tapas libros/A contramano.jpeg",
          "edited": "./assets/fotos/edited/A contramano.jpeg"
        },
        // Una vez q pasan por el Object.values, queda un unico item (array) solo con las values ['autor', 'A contramano', 'Susana B. Orlandi', 'los otros items..']
        // Pero nosotros necesitamos un STRING sobre el que hacer la busqueda, ahí entra el JOIN q convierte el array en un string y lo deja "autor A contramano Susana B. Orlandi".. un único string sobre el que indexOf puede buscar.
      */
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