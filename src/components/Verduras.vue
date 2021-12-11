<template>
    <body>
        <section>
            <div class="contenedor__verduras">
                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/tomateCherry.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Tomate Cherry</h3>
                    <p>500 Gr</p>
                    <h2 class="product__precio">$5.300</h2>
                    <p>Unidad a $5.300</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/cebolla.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Cebolla</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$600</h2>
                    <p>Unidad a $600</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/aguacate.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Aguacate Hass</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$1.600</h2>
                    <p>Unidad a $1.600</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/zanahoria.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Zanahoria</h3>
                    <p>1000 Gr</p>
                    <h2 class="product__precio">$3.500</h2>
                    <p>Unidad a $3.500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                   <div class="product__img">
                        <img src="../assets/productos/verduras/lechuga.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Lechuga</h3>
                    <p>500 Gr</p>
                    <h2 class="product__precio">$1.800</h2>
                    <p>Unidad a $1.800</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/pimenton.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Pimenton</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$1500</h2>
                    <p>Unidad a $1500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/brocoli.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Brocoli</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$2000</h2>
                    <p>Unidad a $2000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/verduras/espinaca.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Espinaca</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$2500</h2>
                    <p>Unidad a $2500</p>
                    <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>
                
            </div>
        </section>
    </body>
</template>
<script>
export default {
    
}

</script>
<style>

section{
    width: 100%;
    margin: 250px auto 250px auto;
    text-align: center;

}
.contenedor__verduras{
    width: 90%;
    margin: 0 auto 0 auto;
    display: grid; 
    padding-left: 15px;  
    grid-template-columns:repeat(4,1fr);
    gap: 30px;
}

.product{
    border: 1px solid rgb(190, 189, 189);
    border-radius: 25px;
    padding: 20px 5px 20px 5px;
    width: 300px;
    transition: 0.3s;
}

.product:hover{
    border: 1px solid rgb(190, 189, 189);
    border-radius: 25px;
    padding: 20px 5px 20px 5px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.40);
    
}

.product p{
    font-weight: 600;
    color: #333;
    font-size: 15px;
}

.product__precio{
    color: #171717;
    font-weight: 600;
}

.product__img{
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
}

.product__img-f{
    width: 200px;
    height: auto;
    
}

.product__titulo{
    color: #171717;
    font-weight: 600;
}

.product__boton {
	display: inline-block;
	background-color: rgb(85, 211, 143);
	color: #fff;
	padding: 10px 80px 10px 80px;
	border-radius: 40px;
	font-weight:500;
    text-decoration: none;
}
</style>