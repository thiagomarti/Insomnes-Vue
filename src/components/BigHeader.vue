<template>
    <div class="invisibilidad" id="contenedor">
        <div id="cabecera">
            <header id="cabecera_web">
                <div class="ancho_web_sin_padding">
        
                    <div id="interior_cab">
                        <li id="log">
                        <img src="../../public/assets/fotos/insomnes.png" alt="" class="log">
                        </li>

                        <ul id="menu" class="" style="touch-action: pan-y;">   
                        <li class="menuInicio"><a href="" accesskey="0" class="cab"><router-link to="/">Inicio</router-link></a></li>
                        <li class="menuBiografia">
                        <a id="achica" class="cab noLink sf-with-ul"><router-link to="/nosotros">Sobre nosotros</router-link></a>
                        </li>
    
                        <li class="menu-right parent">
                        <a id="achica" href="#"><i class=""></i><span>Ediciones</span></a>
                        <ul class="sub-menu">
                        <li><a id="oscuro" href=""><router-link to="/AuthorBooks">Libros de autor</router-link></a></li>
                        <li><a id="oscuro" href=""><router-link to="/Anthologies">antologias</router-link></a></li>
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
                                </div>
                </header>
                                        </div></div>
</template>

<script>
export default {
    name: 'BigHeader',
}
</script>
