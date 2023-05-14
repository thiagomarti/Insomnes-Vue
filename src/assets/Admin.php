<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $descripcion = $_POST["descripcion"];
  $autor = $_POST["autor"];
  $path = $_POST["path"];
  $imagen1 = $_FILES["imagen1"]["name"];
  $imagen2 = $_FILES["imagen2"]["name"];

  // Guardar información en el JSON
  $archivo = "./books.json";
  $json = file_get_contents($archivo);
  $libros = json_decode($json, true);

  $nuevoLibro = array(
    "nombre" => $nombre,
    "descripcion" => $descripcion,
    "autor" => $autor,
    "path" => $path,
    "imagen1" => $imagen1,
    "imagen2" => $imagen2
  );

  array_push($libros["libros"], $nuevoLibro);
  $jsonActualizado = json_encode($libros);
  file_put_contents($archivo, $jsonActualizado);

  // Cargar imágenes
  $carpeta1 = "../../public/assets/images";
  $carpeta2 = "../../public/assets/images";
  move_uploaded_file($_FILES["imagen1"]["tmp_name"], $carpeta1 . $imagen1);
  move_uploaded_file($_FILES["imagen2"]["tmp_name"], $carpeta2 . $imagen2);
}
?>
