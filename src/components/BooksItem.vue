<template>
  <div class="carousel-item" id="carousel-item">
    <img :src="image" alt="" />
  </div>
</template>

<script>
export default {
  name: "BooksItem",
  props: {
    image: String,
  },
};
</script>

