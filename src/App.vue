<template>
  <div>
    <div class="header">
      <div class="container">
        <a class="logo" v-on:click="loadInicio">
          <img src="./assets/logo2.png" alt="" class="logo__img">
        </a>

        <div class="nav">
          <nav class="nav__menu">
            <ul>
              
              <li><a v-on:click="loadRegistro"><i class="far fa-user"></i> Registrate o inicia cesion</a></li>
              <li><a> <i class="fas fa-shopping-cart"></i>Carrito</a></li>
            </ul>
          </nav>
        </div>

      </div>
    </div>

    <div class="main-component">
      <router-view>
          
      </router-view>
    </div>
        
  </div>

</template>

<script>

export default {
  name:"App",
  data:function() {},
  methods:{
    
    
  
    loadRegistro: function(){
      this.$router.push({name:"registro"})
    },
    loadInicio:function(){
      this.$router.push({name:"inicio"})
    },
   

  },
  created:function(){
   this.loadInicio()
  },
  
};
</script>

<style>
  body{
    margin: 0 0 0 0;
    font-family: 'Mulish',sans-serif;
    box-sizing: border-box;
  }

  .header{
    background-color: rgb(54, 36, 11);
    margin: 0;
    padding: 25px 40px 50px 20px;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    text-align: center;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }

  .nav{
    margin: 0 0 0 1300px;
  }

  .logo{
    margin-left: 20px;
  }

  .logo:hover{
    cursor: pointer;
  }

  .logo__img{
    width: 120px;
    height: auto;
  }
   nav ul{
   list-style: none;
   margin: 40px 0 0 0;
   padding: 0;
   
 }

 nav ul li{
   display: inline-block;
   margin: 0 20px;
 }

  nav ul li a:hover{
   color: black;
   cursor: pointer;
 }
</style>