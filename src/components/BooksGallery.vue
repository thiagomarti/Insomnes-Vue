<template>
    <div class="gallery">
      <h3>{{ title }}</h3>
      <div class="galleryItems">
        <div class="imageBox" v-for="(image, x) in items" :key="x" >
          <img :src=image.src :alt=image.alt  />
          <br />
          <span>{{ image.description }}</span>
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