<template>
<form method="post" action="../assets/Admin.php" enctype="multipart/form-data">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"><br>

  <label for="descripcion">Descripción:</label>
  <textarea id="descripcion" name="descripcion"></textarea><br>

  <label for="autor">Autor:</label>
  <input type="text" id="autor" name="autor"><br>

  <label for="path">Path:</label>
  <input type="text" id="path" name="path"><br>

  <label for="imagen1">Imagen 1:</label>
  <input type="file" id="imagen1" name="imagen1"><br>

  <label for="imagen2">Imagen 2:</label>
  <input type="file" id="imagen2" name="imagen2"><br>

  <input type="submit" value="Enviar">
</form>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'AdminView',
  components: {
    
  },
 }
</script>
<style scoped>

</style>