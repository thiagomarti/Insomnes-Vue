<template>

<div class="nosotros">
  <div class="containernosotros" id="nosotros">
   <div class="box one">
     <div class="details">
       <div class="topic">Sobre Nosotros</div>
        <p class="nosotros">
          "La editorial iNSomnes" es un pequeño emprendimiento de edición de libros que fue creado en 2018
          por Susana Beatriz Orlandi y Norma Elena Ruiz, ambas de CABA y residentes en Ituzaingó. Anteriormente, realizaban trabajos de edición de manera gratuita. Pero a finales de 2018,
          dos escritoras les pidieron que editaran sus libros, lo que tomaron como una señal para
          comenzar oficialmente su emprendimiento.
        </p>
     </div>
     <div class="button1">
      <button><a href="#contacto">contactar</a></button> 
     </div>
   </div>
   <div class="box two">
     <div class="image-box">
       <div class="image">
       </div> 
     </div>
   </div>
 </div>
</div>
</template>

<script>
export default {
    name: 'AboutUs',
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alkatra:wght@500&display=swap');



div.nosotros{
  margin-bottom: 200px;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}
::selection{
  background: #fee6eb;
}
div.nosotros:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(55% at right 30%);
  background: #e6e6e6;
  background-image: linear-gradient( 0deg,  #b9f0e7 10%, #26d1d1 100%);
}
.containernosotros{
  display: flex;
  top: 0;
  max-width: 1250px;
  text-align: justify;
  background: rgb(243, 232, 232);
  border-radius: 12px;
  justify-content: space-between;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  align-items: center;
}
.containernosotros::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  clip-path: circle(65% at right 35%);
  background-image: url(../../public/assets/fotos/foto\ sobre\ nosotros.jpeg);
  background-repeat: no-repeat;
  background-position: right;

}
.containernosotros .box.one{
  padding: 35px 5px 0px 35px;
}
.box.one .details .topic{
  font-size: 30px;
  font-weight: 500;
}
p.nosotros {
  width: 70%;
}




.box.one .details p{
  color: #737373;
  font-size: 2vh;
  font-weight: 500;
}
.box.one .rating{
  color: #fd9bb0;
  font-size: 14px;
  margin-top: 10px;
}
.box.one .price-box{
  margin-top: 16px;
}
.box.one .discount{
  font-size: 20px;
  margin: 10px 0 0 12px;
  position: relative;
  color: #737373;
}
.box.one .discount:before{
  content: '';
  position: absolute;
  height: 1px;
  width: 100px;
  background: #737373;
  top: 50%;
  left: -8px;
}
.box.one .price{
  color: #917747;
  font-size: 30px;
  
}
.box.one .button1{
  margin-top: 20px;
}
.box.one .button1 button{
  outline: none;
  border:none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  background: #00e6e6;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}
.button1 button:hover{
  transform: scale(0.98);
}
.containernosotros .box.two .image{
  position: relative;
  right: 0;
  top: 0;
  height: 340px;
  width: 430px;
}
.image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.containernosotros .box.two .image-box{
  position: relative;
  text-align: right;
  right: 0;
  bottom: 27px;
}
.box.two .image-box .info{
  margin: 0 35px 0 0;
}
.box.two .info .brand{
 font-size: 17px;
 font-weight: 600;
 color: #c9032e;
}
.box.two .info .name{
 font-size: 20px;
 font-weight: 500;
 color: #fff;
}
.box.two .info .shipping{
 font-size: 14px;
 font-weight: 400;
 color: #000;
}
.box.two .button2{
  margin: 17px 0;
}
.button2 button{
  outline: none;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 8px 17px;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
}





@media screen and (max-width: 800px) {

  .two {
    display: none;
  }

  div.nosotros{
    
    display: contents;
    width: 100%;
    height: 40px;
    justify-content: center;
    background: #f7f7f7;
  }

  p.nosotros {
    width: 100%;
  }

  ::selection{
    background: #fee6eb;
  }
  div.nosotros:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 55%;
    clip-path: circle(55% at right 30%);
    background: #e6e6e6;
    background-image: linear-gradient( 0deg,  #b9f0e7 10%, #26d1d1 100%);
  }
  .containernosotros{
    display: flex;
    top: 60px;
    max-width: 750px;
    background: rgb(243, 232, 232);
    border-radius: 12px;
    justify-content: space-between;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    position: relative;
    align-items: center;
  }
  .containernosotros::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 150%;
    width: 100%;
    border-radius: 12px;
    clip-path: circle(65% at right 35%);
    background-image: none;
    background-repeat: no-repeat;
    background-position: right;
  
  }
  .containernosotros .box.one{
      text-align: center;
      padding: initial;
  }
  .box.one .details .topic{
    font-size: 35px;
    font-weight: 500;
    padding-bottom: 15px;
  }
  .box.one .details p{
    color: #737373;
    font-size: 20px;
    font-weight: 500;
  }
  .box.one .rating{
    color: #fd9bb0;
    font-size: 14px;
    margin-top: 10px;
  }
  .box.one .price-box{
    margin-top: 16px;
  }
  .box.one .discount{
    font-size: 20px;
    margin: 10px 0 0 12px;
    position: relative;
    color: #737373;
  }
  .box.one .discount:before{
    content: '';
    position: absolute;
    height: 1px;
    width: 100px;
    background: #737373;
    top: 50%;
    left: -8px;
  }
  .box.one .price{
    color: #917747;
    font-size: 30px;
    
  }
  .box.one .button1{
    margin-top: 20px;
  }
  .box.one .button1 button{
    outline: none;
    border:none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    background: #00e6e6;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .button1 button:hover{
    transform: scale(0.98);
  }
  .containernosotros .box.two .image{
    position: relative;
    right: 0;
    top: 0;
    height: 340px;
    width: 430px;
  }
  .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .containernosotros .box.two .image-box{
    position: relative;
    text-align: right;
    right: 0;
    bottom: 27px;
  }
  .box.two .image-box .info{
    margin: 0 35px 0 0;
  }
  .box.two .info .brand{
   font-size: 17px;
   font-weight: 600;
   color: #c9032e;
  }
  .box.two .info .name{
   font-size: 20px;
   font-weight: 500;
   color: #fff;
  }
  .box.two .info .shipping{
   font-size: 14px;
   font-weight: 400;
   color: #000;
  }
  .button2 button{
    outline: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 12px;
    padding: 8px 17px;
    background: transparent;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }
}

</style>