<template>
  <div>
    <h2>Editar Libro</h2>
    <form @submit="submitForm">
      <label for="category">CATEGORY:</label>
      <input type="text" id="category" v-model="formData.category" required>

      <label for="name">name:</label>
      <input type="text" id="name" v-model="formData.name" required>

      <label for="path">path:</label>
      <input type="text" id="path" v-model="formData.path" required>

      <label for="author">author:</label>
      <input type="text" id="author" v-model="formData.author" required>

      <label for="description">Descripción:</label>
      <textarea id="description" v-model="formData.description" required></textarea>

      <label for="img">img:</label>
      <input type="text" id="img" v-model="formData.img" required>

      <label for="edited">edited:</label>
      <input type="text" id="edited" v-model="formData.edited" required>



      <!-- Agrega los campos adicionales que necesites -->

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        category: '',
        name: '',
        path: '',
        author: '',
        description: '',
        img: '',
        edited: ''
        // Agrega los campos adicionales aquí
      }
    };
  },
  methods: {
    submitForm() {
      axios.post('../../public/assets/Admin.php', this.formData)
        .then(response => {
          console.log(response.data); // Puedes manejar la respuesta del servidor aquí

          // Agregar cualquier lógica adicional que necesites después de recibir la respuesta

          // Por ejemplo, podrías mostrar un mensaje de éxito y redirigir al usuario a otra página
          alert('Libro editado exitosamente');
          this.$router.push('/'); // Redireccionar a la página de libros
        })
        .catch(error => {
          console.error(error); // Manejar errores de la solicitud aquí
        });
    }
  }
};
</script>
