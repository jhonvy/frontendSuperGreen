<template>
    <body>
        <div class="allitems">
            <div class="menu">
                <a class="menu__imgs verde" v-on:click="loadFrutas">
                    <img src="../assets/imgInicio/frutas.png" alt="frutas" class="menu__imgs-1">
                    <div class="titulos">
                        <h3>Frutas</h3>
                        <p></p>
                    </div>
                </a>
                <a class="menu__imgs verde2" v-on:click="loadVerduras">
                    <img src="../assets/imgInicio/verduras.png" alt="frutas" class="menu__imgs-1">
                    <div class="titulos">
                        <h3>Verduras</h3>
                        <p></p>
                    </div>
                </a>
                <a class="menu__imgs azul" v-on:click="loadFrutosSecos">
                    <img src="../assets/imgInicio/frutossecos.png" alt="frutas" class="menu__imgs-1">
                    <div class="titulos">
                        <h3>Frutos secos</h3>
                        <p></p>
                    </div>
                </a>
                <a class="menu__imgs morado" v-on:click="loadBebidas">
                    <img src="../assets/imgInicio/bebidas.png" alt="frutas" class="menu__imgs-1">
                    <div class="titulos">
                        <h3>Bebidas</h3>
                        <p></p>
                    </div>
                </a>
            </div>
        </div>
        
    </body>
</template>

<script>

    export default {
    name:"Inicio",
    data:function() {
        
    },
    methods:{
        
        loadProducts:function(){
        this.$router.push({name:"login"});
        },
        loadFrutas:function(){
        this.$router.push({name:"frutas"});
        },
        loadVerduras:function(){
        this.$router.push({name:"verduras"});
        },
        loadFrutosSecos:function(){
        this.$router.push({name:"frutosSecos"});
        },
        loadBebidas:function(){
        this.$router.push({name:"bebidas"});
        },

        

    },
    created:function(){
        
    },
  
    };

</script>

<style>


.menu{  
        padding: 90px 0 0 0;
        width: 70%;
        margin: 0 auto 100px auto;
	    display: grid;   
        grid-template-columns: repeat(2,1fr);
        gap: 30px;
}

.menu__imgs{ 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 400px;
    text-decoration: none;
    box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%), 0 1px 10px rgb(0 0 0 / 12%);
    cursor: pointer;
    transition: 1s;
    
}

.menu__imgs:hover{ 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 400px;
    text-decoration: none;
    box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%), 0 1px 10px rgb(0 0 0 / 12%);
    cursor: pointer;
    transform: scale(1.05);
    
}



.menu__imgs-1{
    margin-top: 40px;
    width: 200px;
    height: auto;
}

.allitems{
    align-content: center;
    margin-top: 200px;
}

.titulos{
    margin-top: 40px;
}
.titulos h3{
    color: #fff;
    font-family: Source Sans Pro,Roboto,Helvetica,Arial,sans-serif;;
    font-weight: 600;
    font-size: 30px;
}

.verde{
    background-color: rgb(0, 133, 106);
}

.verde2{
    background-color: rgb(6, 80, 40);
}

.azul{
   background-color: rgb(8, 126, 164);
}
.morado{
    background-color: rgb(124, 17, 62);
}


</style>