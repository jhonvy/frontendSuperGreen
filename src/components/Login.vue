<template>
    <div>
        <div>
            <form action="" class="formulario">
                <h1>Login</h1>
                <div class="contenedor__login">

                    <div class="input-contenedor">
                        <i class="fas fa-envelope icon"></i>
                        <input type="text" placeholder="Usuario">
                    </div>

                    <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input type="password" placeholder="contraseña">
                    </div>

                    <div class="box_reserva">
					            <button class="reserva" type="submit">Login</button>
				            </div>
                    <p>Al resgistrarte,aceptas nuestras Condiciones de uso y Politica de privacidad</p>
                </div>
            </form>
        </div>
      
    </div>
    
</template>

<script>

    export default {
    name:"Login",
    data:function() {

    },
    methods:{
        
    },
    created:function(){
        
    },
    
    };
</script>

<style>
  body{
    margin: 0 0 0 0;
    font-family: 'Mulish',sans-serif;
  }

  .container{
    background-color: #2bd650;
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

  .contenedor__login{
    width: 100%;
    padding: 15px;
  }

  .nav{
    margin: 0 0 0 1300px;
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