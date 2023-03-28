<template>
  <header style="" id="sidebar">
    <nav role="navigation">
      <div id="menuToggle">
        
        <!--
        A fake / hidden checkbox is used as click reciever,
        so you can use the :checked selector on it.
        -->
        <input type="checkbox" />
        
        <!--
        Some spans to act as a hamburger.
        
        They are acting like a real hamburger,
        not that McDonalds stuff.
        -->
        <span></span>
        <span></span>
        <span></span>

                          
        <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
        -->
        <ul id="mobile_menu">
          <li class="bx bx-home-alt-2"><router-link to="/">Inicio</router-link></li>
          <li class="bx bx-group"><router-link to="/nosotros">Sobre nosotros</router-link></li>
          <li class="bx bx-library"><router-link to="/libros_de_autor">Libros de autor</router-link></li>
          <li class="bx bx-library"><router-link to="/antologias">Antologias</router-link></li>
        </ul>
      </div>

    </nav>

  </header>

 
</template>
<style>

nav {
  height: 60px;
  background:rgb(121, 70, 3);
}

#menuToggle
{
  display: block;
  position: relative;
  top: 20px;
  left: 20px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #FFF;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#mobile_menu
{
  background:rgb(121, 70, 3);
  position: absolute;
  width: 515px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(0, -100%);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#mobile_menu li
{
  padding: 10px 0;
  font-size: 22px;
  display: block;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}

</style>
<script>
export default {
    name: 'SmallHeader',
}
</script>