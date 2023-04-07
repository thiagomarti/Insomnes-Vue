<template>
    <!-- Navigation bar -->
    <header class="header">
        <!-- Logo -->
        <router-link to="/"  class="logo"><img src="../../public/assets/fotos/insomnes.png" alt=""></router-link>

        <!-- Hamburger icon -->
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

        <!-- Menu -->
        <nav class="nav">
            <ul class="menu">
                <li><router-link to="/">INICIO</router-link></li>
                <li><router-link to="/">SOBRE NOSOTROS</router-link></li>
                <li class="subnav">
                    <p class="subnavbtn">EDICIONES <i class="fa fa-caret-down"></i></p>
                    <div class="subnav-content">
                        <router-link to="/libros_de_autor">Libros de autor</router-link>
                        <router-link to="/antologias">Antologias</router-link>
                    </div>
                </li>
                <li class="menuFace">
                    <a id="face" href="https://www.facebook.com/people/Editorial-Insomnes/100076280835164/" target="_blank"><i class='bx bxl-facebook-circle bx-sm' style='color:#ffffff'></i></a>
                </li>
                <li class="menuIg">
                    <a id="ig" href="https://www.instagram.com/editorial_insomnes/" target="_blank"><i class='bx bxl-instagram bx-sm' style='color:#ffffff'></i></a>
                </li>
            </ul>
        </nav>
    </header>


</template>
<style scoped>
/* Header */
.header{
    background-color: rgb(175 145 107);
    box-shadow: 1px 1px 5px 0px gray;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}

/* Logo */
.logo{
    display: inline-block;
    color: white;
    margin-top: 0.8%;
    margin-left: 10px;
}

.logo img {
    width: 12vh;
}

/* Nav menu */
.nav{
    width: 100%;
    position: sticky;
    background-color:rgb(175 145 107);
    overflow: hidden;
    
}

.nav ul {
    list-style: none;
}

.menu a,.menu p{
    display: block;
    padding: 3vh;
    color: white;
}

.menu li{
    font-size: 2vh;
}


.menu a:hover{
    background-color: grey;
}

.nav{
    max-height: 0;
    transition: max-height .5s ease-out;
}

/* Sub nav */
.subnav-content {
    background-color: rgb(175 145 107);
    z-index: 1;
    padding: 20px 0 ;
    display: none;
    position: sticky;
    font-size: 2vh;
    margin-left: 6%;
    
  }
.subnav-content a {
    color: white;
    text-decoration: none;
    padding: 0;
    margin: 10px 0;

}
.subnav:hover .subnav-content {
    display: block;
}

/* Menu Icon */

.hamb{
    cursor: pointer;
    float: right;
    padding: 6vh 20px;
}


.hamb-line {
    background: white;
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
    
}

.hamb-line::before,
.hamb-line::after{
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}

.hamb-line::before{
    top: 5px;
}

.hamb-line::after{
    top: -5px;
}


.side-menu {
    display: none;
}

/* Toggle menu icon */

.side-menu:checked ~ nav{
    max-height: 100%;
}

.side-menu:checked ~ .hamb .hamb-line {
    background: transparent;
}

.side-menu:checked ~ .hamb .hamb-line::before {
    transform: rotate(-45deg);
    top:0;

}

.side-menu:checked ~ .hamb .hamb-line::after {
    transform: rotate(45deg);
    top:0;
}


/* Responsiveness */
@media (max-width: 800px) {
.logo {
    margin-top: 1.5%;
}

}

@media (min-width: 768px) {

    .nav{
        max-height: none;
        top: 2px;
        position: relative;
        float: right;
        width: fit-content;
        background-color: transparent;

    }

    .menu li{
        float: left;
        font-size: initial;
    }

    .menu a:hover{
        background-color: transparent;
        color: grey;
        
    }
    
    .hamb{
        display: none;
    }

        /* Sub nav */
    .subnav-content {
        padding: 20px 0 ;
        display: none;
        position: fixed;
        font-size: initial;
        background-color: rgb(175 145 107);
        margin-left: initial;
    }
    .subnav-content a {
        color: white;
    }

    .menu a,.menu p{
    display: block;
    padding: 30px;
    color: white;
    height: 60px;
}
}

.nav {
    webkit-box-shadow: initial;
    box-shadow: initial;
}

@media only screen and (min-width: 601px) {
    .nav{
    height: initial;
    line-height: initial;
}
}

</style>
<script>
export default {
    name: 'HeaderComponent',
}
</script>
