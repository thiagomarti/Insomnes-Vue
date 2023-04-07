<template>
    <div class="portada">
      <div class="portadatext">
      <h1>Editorial iNSomnes</h1>
      <h5>Una editorial de autor que acompañara el proceso de su obra literaria</h5>
      <img src="../../public/assets/fotos/libro-abierto.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheFront',
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Alkatra:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');
.portada {
    background-color: rgb(235 231 225);
    height: 100vh;  
    margin-top: 12vh;
}

.portadatext {
    padding-top: 12%;
}

.portada h1 {
    margin: auto;
    font-size: 10vh;
    text-align: center;
    font-family: 'Alkatra', cursive;
}

.portada h5 {
    margin: auto;
    text-align: center;
    padding-top: 29px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 5vh;
    max-width: 900px;
}

.portada img {
    padding-top: 70px;
    width: 30%;
    display: block;
    margin-left: 66%;

}

@media screen and (min-width:1441px) {
 
    .portadatext {
        padding-top: 5%;
    }
}

@media screen and (max-width:1441px) {
 
    .portadatext {
        padding-top: 10%;
    }
}

@media screen and (max-width:1040px) {
 
    .portadatext {
        padding-top: 10%;
    }
}

@media screen and (max-width:860px) {
 
    .portada img {
        width: 40%;
        margin: auto;
    }

    .portadatext {
        padding-top: 35%;
    }

    .portada h1 {
        font-size: 5vh;
        
    }
    
    .portada h5 {
        font-size: 3vh;
    }
}

@media screen and (max-width:630px) {
 
    .portada img {
        width: 50%;
        right: 24%;
    }
}

</style>