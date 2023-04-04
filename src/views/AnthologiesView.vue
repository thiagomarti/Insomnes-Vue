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
    margin-bottom: 60px;
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