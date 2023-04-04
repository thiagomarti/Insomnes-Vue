<template>
    <div class="gallery">
      <div class="images">
        <div class="image-box" data-name="" v-for="(item, x) in items" :key="x">
                <a href=""> <img :src=item.img :alt=item.name  /></a>
                <h6>&nbsp;&nbsp;{{ item.name }}&nbsp;&nbsp;</h6>
            </div>
      </div>
    </div>

            
  </template>
  
  <script>
  /* eslint-disable */
  export default {
    name: 'BooksGallery',
    props: ['items', 'title'], // Props recibir propiedades desde otros componentes.
  }
  
  </script>
  
  <style scoped>
  .imageBox {
    margin-bottom:1.25rem;
  }
  .galleryItems {
    columns:3;
    gap:1.25rem;
    padding-top:1.25rem;
  }

 
  </style>