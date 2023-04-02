<template>

<section id="contacto" >
          
     
          <div class="containerContact" id="contacto">
            <div class="content">
                <div class="left-side">
                    <div class="adress details">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <div class="topic">ubicación</div>
                      <div class="text-one"> Argentina, Bs As</div> 
                      <div class="text-two">ituzaingó</div>
                    </div>
    
                    <div class="phone details">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                        <div class="topic">Número de Teléfono</div>
                        <div class="text-one">+54 11 2402-6001</div> 
                        <div class="text-two">+54 11 3414-1830</div>
                      </div>
    
                      <div class="Gmail details">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <div class="topic">Gmail</div>
                        <div class="text-one">ed.insomnes@gmail.com</div>
                      </div>
                </div>
                <div class="right-side">
                    <div class="topic-text">Envianos tu mensaje</div>
                    <p>si tenes alguna duda o queres consultar presupuesto</p>
                
                    <form id="form" action="https://editorial-insomnes.000webhostapp.com/send.php" method="post">
                      <div class="input-box">
                          <input type="text" placeholder="Nombre y Apellido" name="nombre" required="required">
                      </div>
                      <div class="input-box">
                          <input type="text" placeholder="Correo electronico" name="email" required="required">
                      </div>
                      <div class="input-box message-box">
                          <textarea id="escribe tu mensaje" placeholder="Escriba su mensaje aquí" name="mensaje" required="required"></textarea>
                      </div>
                          <button class="button " type="submit">
                            <div class="text-icon">
                              <i class='bx bxs-send' style='color:#ffffff' ></i>
                              <span class="text">Enviar</span>
                            </div>
                          </button>
                </form>
            </div>
            </div>
          </div>
        </section>

</template>

<script>
export default {
    name: 'ContactUs',
}
</script>

<style scoped>

section#contacto {
    min-height: 100vh;
    width: 100%;
    background-color: #c8e8e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.containerContact#contacto {
  font-family: "Poppins" , sans-serif;
  width: 90%;
  background-color: #fff;
  border-radius: 6px;
  padding: 30px 60px 40px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  
  

}

.containerContact .content {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.containerContact .content .left-side {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}

.content .left-side .details {
  margin: 14px;
  text-align: center;

}

.content .left-side::before{
  content: "";
  position: absolute;
  height: 70%;
  width: 2px;
  right: .15px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #afafb6;
}

.content .left-side .details i {
  font-size: 30px;
  color: #3e2093;
margin-bottom: 10px;}

  .content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
  }

  .content .left-side .details .text-one,
  .content .left-side .details .text-two {
    font-size: 14px;
    color: #8e8e91;
  }



.containerContact .content .right-side {
  width: 75%;
  margin-left: 75px;
}

.content .right-side .topic-text {
  font-size: 23px;
  font-weight: 600;
  color: #3e2093

}

.right-side .input-box {
height: 50px;
width: 100%;
margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea {
height: 100%;
width: 100%;
border: none;
font-size: 16px;
background-color: #F0F1FB;
border-radius: 6px;
padding: 0 15px;
resize: none;
}

.right-side .message-box {
min-height: 110px;
margin-top: 6px;
}
.right-side .button{
display: inline-block;
margin-top: 12px;

}
.right-side .button input[type="button"] {
color: #fff;
font-size: 18px;
outline: none;
border: none;
padding: 8px 16px;
border-radius: 6px;
background: #3e2093;
cursor: pointer;
transition: all 0.3s ease;
}

.button input[type="button"] {
background: #5029bc;
}

@media (max-width: 819px ) {

.containerContact#contacto {
font-family: "Poppins" , sans-serif;
width: 80%;
padding: 30px 35px 40px 35px;



}
}

@media (max-width: 800px ) {

.containerContact#contacto {
font-family: "Poppins" , sans-serif;
margin: 40px 0;
height: 100%;
}
.containerContact .content {
  flex-direction: column-reverse;
  }

  .containerContact .content .left-side{
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .containerContact .content .left-side::before {
    display: none;
  }
  .containerContact .content .right-side {
    width: 100%;
    margin-left: 0;
  }
}



/* BOTONNNNNNN */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}

.button{
  position: relative;
  height: 55px;
  max-width: 300px;
  width: 100%;
  background: #7d2ae8;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  overflow: hidden;
}
.button::before{
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.2);
  border-radius: 6px;
}
.button.progress::before{
  animation: progress 6s ease-in-out forwards;
}
@keyframes progress {
  0%{
    left: -100%;
  }
  10%{
    left: -97%;
  }
  20%{
    left: -92%;
  }
  30%{
    left: -82%;
  }
  30%{
    left: -62%;
  }
  40%{
    left: -38%;
  }
  50%{
    left: -18%;
  }
  60%{
    left: -14%;
  }
  80%{
    left: -7%;
  }
  90%{
    left: -3%;
  }
  100%{
    left: 0%;
  }
}
.button .text-icon{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button .text-icon i,
.button .text-icon span{
  position: relative;
  color: #fff;
  font-size: 26px;
}
.button .text-icon span{
  font-size: 20px;
  font-weight: 400;
  margin-left: 8px;
}
</style>