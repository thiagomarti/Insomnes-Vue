<template>
    <div class="invisibilidad" id="contenedor">
        <div id="cabecera">
            <header id="cabecera_web"  class="ancho_web_sin_padding">
                    <div id="interior_cab">
                        <div id="log">
                            <img src="../../public/assets/fotos/insomnes.png" alt="" class="log">
                        </div>
                        <ul id="menu" class="" style="touch-action: pan-y;">   
                            <li class="menuInicio">
                                <router-link to="/">Inicio</router-link>
                            </li>
                            <li class="menuBiografia">
                                <router-link to="/nosotros">Sobre nosotros</router-link>
                            </li>
        
                            <li>
                            <a href=""><span>Ediciones</span></a>
                                <ul class="sub-menu">
                                    <li>
                                        <router-link to="/libros_de_autor">Libros de autor</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/antologias">Antologias</router-link>
                                    </li>
                                </ul>
                            </li> 
                            <li class="menuFace">
                                <a id="face" href="https://www.facebook.com/people/Editorial-Insomnes/100076280835164/" target="_blank"><i class='bx bxl-facebook-circle bx-sm' style='color:#ffffff'></i></a>
                            </li>
                            <li class="menuIg">
                                <a id="ig" href="https://www.instagram.com/editorial_insomnes/" target="_blank"><i class='bx bxl-instagram bx-sm' style='color:#ffffff'></i></a>
                            </li>
                        </ul>
                    </div>        
            </header>
        </div>                                   
    </div> 

</template>

<script>
export default {
    name: 'BigHeader',
}
</script>
