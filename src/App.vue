<template>
  <Header />
  <ButtonComponent />
  <router-view />
</template>

<script>
import Header from './components/Header.vue';
import ButtonComponent from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Header,
    ButtonComponent
  }

}

//javascript

</script>



<style>
           
.face { left: 100%; }  .ig { left: 100%; } #logo {top: -22px; margin-top: 15px; margin-bottom: 15px;}


@import url(./assets/css/books-carousel.css);
@import url(https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css);


#app {
  user-select: none;
}

.icons a.wp{
    bottom: 60px;
    right: 1%;
    z-index: 99;
    background: #ecf0f3;
    position: fixed;
    height: 60px;
    width: 60px;
    margin: 0 10px;
    display: inline-flex;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.3s;
    box-shadow: -3px -3px 7px #ffffff,
                3px 3px 5px #ceced1;
  }
  
  .icons a.gm{
    bottom: 130px;
    right: 1%;
    z-index: 99;
    background: #ecf0f3;
    position: fixed;
    height: 60px;
    width: 60px;
    margin: 0 10px;
    display: inline-flex;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.3s;
    box-shadow: -3px -3px 7px #ffffff,
                3px 3px 5px #ceced1;
  }
  
  .icons a:hover:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff,
                inset 3px 3px 5px #ceced1;
  }
  .icons a i{
    position: relative;
    z-index: 3;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 25px;
    line-height: 60px;
  }
  .icons a:hover i{
    transform: scale(0.9);
  }
  .icons a.wp i{
    color: #3bc537;
  }
  .icons a.gm i{
    color: #f21d1d;
  }
  

</style>