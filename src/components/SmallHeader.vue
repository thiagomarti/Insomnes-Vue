<template>
    <div class="visibilidad" id="sidebar">
    <div class="logo-details">
      <i id="busc-logo"><img src="../../public/assets/fotos/insomnes.png" alt=""></i>
        <div class="logo_name">iNSomnes</div>
       <i class='bx bx-menu' id="btn" onclick="abrir()"></i> 
    </div>
    <ul class="nav-list">
      <li class="abierto" id="search1">
          <i class='bx bx-search'  ></i>
         <input type="text" placeholder="Search...">
         <span class="tooltip">Search</span>
      </li>
      <li id="logi1" class="logi1 abierto">
       <i><img src="../../public/assets/fotos/insomnes.png" alt=""></i>
      </li>
      <li id="inicio1" class="inicio1 abierto">
        <a href="./index.html" id="inicio2" class="abierto" onclick="cerrar()">
          <i class='bx bx-home-alt-2' ></i>
          <span class="links_name">Inicio</span>
        </a>
         <span class="tooltip">Inicio</span>
      </li>
      <li id="nosotros1" class="nosotros1 abierto">
       <a href="#sobrenos" id="nosotros2" class="abierto">
        <i class='bx bx-group'></i>
         <span class="links_name">Sobre nosotros</span>
       </a>
       <span class="tooltip">Sobre nosotros</span>
     </li>

     
     <li id="ediciones1" class="ediciones1 abierto select-btn" >
       <a href="#libritos2" id="ediciones2" class="abierto">
        <i class='bx bx-library'></i>
         <span class="links_name sBtn-text">Ediciones</span>
         <i id="flechita" class="bx bx-chevron-down abierto"></i>
       </a>
       <span class="tooltip1"><a class="otro" href="./Libros de Autor.html">libros de autor</a></span>
       <span class="tooltip2"><a class="otro" href="./antologias.html">antologias</a></span>
     </li>

     
     <li class="libros abierto" id="libroesc">
      <a href="./Libros de Autor.html" class="abierto">
        <span class="links_name">&nbsp;&nbsp;Libros de autor</span>
      </a> 
      <span class="tooltip">Libros de autor</span>
    </li>

    <li class="libros abierto" id="libroesc1">
      <a href="./antologias.html" class="abierto">
        <span class="links_name">&nbsp;&nbsp;Antologias</span>
      </a>
      <span class="tooltip">Antologias</span>
    </li>
    
    <li id="ig1" class="ig1 abierto">
      <a href="https://www.instagram.com/editorial_insomnes/" target="_blank" id="ig2" class="abierto">
        <i class='bx bxl-instagram' style='color:#f5275a'></i>
      </a>
      </li>
      <li id="fc1" class="fc1 abierto">
        <a href="https://www.facebook.com/people/Editorial-Insomnes/100076280835164/" id="fc2" target="_blank" class="abierto">
          <i class='bx bxl-facebook-circle bx-sm' style='color:#0026ff'></i>
        </a>
    </li>

    </ul>
  </div>
 
</template>

<script>
export default {
    name: 'SmallHeader',
}
</script>