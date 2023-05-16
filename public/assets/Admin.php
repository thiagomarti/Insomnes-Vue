<?php
// Obtener los datos enviados desde el formulario
$data = json_decode(file_get_contents('php://input'), true);

// Ruta al archivo JSON
$jsonFilePath = '../../src/assets/books.json';

// Leer el contenido del archivo JSON
$books = json_decode(file_get_contents($jsonFilePath), true);

// Generar un nuevo ID para el libro
$newBookId = uniqid();

// Crear un nuevo libro con los datos enviados desde el formulario
$newBook = array(
    "id" => $newBookId,
    "category" => $data["category"],
    "name" => $data["name"],
    "path" => $data["path"],
    "author" => $data["author"],
    "description" => $data["description"],
    "img" => $data["img"],
    "edited" => $data["edited"]
);

// Agregar el nuevo libro al arreglo de libros
$books[] = $newBook;

// Convertir el arreglo de libros a formato JSON
$jsonData = json_encode($books, JSON_PRETTY_PRINT);

// Escribir el JSON actualizado en el archivo
file_put_contents($jsonFilePath, $jsonData);

// Responder con el ID del nuevo libro
$response = array("id" => $newBookId);
echo json_encode($response);
?>
