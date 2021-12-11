<template>
    <div>
        <div>
            <form action="" class="formulario">
                <h1>Registro</h1>
                <div class="contenedor__formulario">
                    <div class="input-contenedor">
                        <i class="fas fa-user icon"></i>
                        <input type="text" placeholder="Usuario">
                    </div>

                    <div class="input-contenedor">
                        <i class="fas fa-envelope icon"></i>
                        <input type="email" placeholder="Correo Electronico">
                    </div>

                    <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input type="password" placeholder="contraseña">
                    </div>

                    <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input type="text" placeholder="telefono">
                    </div>

                    <div class="box_reserva">
					    <button class="reserva" type="submit" id="btn" >Registrate</button>
				    </div>
                    <p>Al resgistrarte,aceptas nuestras Condiciones de uso y Politica de privacidad</p>
                    <p>¿Ya tienes cuenta?<a class="link" v-on:click="loadLogin">Iniciar sesion</a></p>
                </div>
            </form>
        </div>
      
    </div>
    
</template>

<script>

    export default {
    name:"Registro",
    data:function() {
        
    },
    methods:{
        
        loadLogin:function(){
        this.$router.push({name:"login"});
        },
        

    },
    created:function(){
        
    },
  
    };

</script>


<style>
.contenedor__formulario{
    width: 100%;
    padding: 15px;
}

.formulario{
    border: 1px solid rgb(128, 128, 128);
    border-radius: 30px;
    margin: 300px auto 0 auto;
    width: 600px;
    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
}
h1{
    text-align: center;
    font-size: 40px;
}
input{
    font-size: 20px;
    width: 82%;
    padding: 10px;
    border: none;
    
}

.input-contenedor{
    margin-bottom: 15px;
    border: 1px solid lightgrey;
    width: 560px;
    border-radius: 5px;
    border-bottom-width: 2px;
}

.icon{
    min-width: 50px;
    text-align: center;
    color: #999;
}


.reserva {
		border: none;
		width: 560px;
		height: auto;
		background: -webkit-linear-gradient(left,#c4c717,rgb(111, 226, 90));
		font-family: "Roboto";
		color: #fff9f9;
		border-radius: 5px;
		cursor: pointer;
		font-size: 20px;
		text-align: center;
		padding: 10px 0px 10px 0px;
        transition: 3s;
	}

	.reserva:hover {
		border: none;
		width: 560px;
		height: auto;
		background: -webkit-linear-gradient(left,rgb(111, 226, 90),#c4c717);
		font-family: "Roboto";
		color: #fff9f9;
		border-radius: 5px;
		cursor: pointer;
		font-size: 20px;
		text-align: center;
		padding: 10px 0px 10px 0px;
		transform: scale(1.04);
	}

    .link{
        text-decoration: none;
        font-weight: 600;
    }

     .link:hover{
        text-decoration: none;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
    }


</style>