<template>
    <body>
        <section>
            <div class="contenedor__frutas">
                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/mango.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Mango Tommy</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$2.500</h2>
                    <p>Unidad a $2500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>
 
                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/piña.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Piña</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$5.800</h2>
                    <p>Unidad a $5.800</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/banano.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Banano</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$700</h2>
                    <p>Unidad a $700</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/fresa.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Fresa</h3>
                    <p>500 Gr</p>
                    <h2 class="product__precio">$6.300</h2>
                    <p>Unidad a $6.300</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                   <div class="product__img">
                        <img src="../assets/productos/frutas/uva.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Uva</h3>
                    <p>500 Gr</p>
                    <h2 class="product__precio">$12.500</h2>
                    <p>Unidad a $12.500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/pera.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Pera</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$3500</h2>
                    <p>Unidad a $3500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/naranja.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Naranja</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$3000</h2>
                    <p>Unidad a $3000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutas/limon.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Limon</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$1500</h2>
                    <p>Unidad a $1500</p>
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
.contenedor__frutas{
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