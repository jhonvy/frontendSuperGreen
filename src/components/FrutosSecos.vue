<template>
    <body>
        <section>
            <div class="contenedor__frutosSecos">
                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/nueces.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Nueces Del Brasil FRESCAMPO</h3>
                    <p>200 Gr</p>
                    <h2 class="product__precio">$8.700</h2>
                    <p>Gramo a $8.700</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/almendra.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Almendra Natural FRESCAMPO</h3>
                    <p>200 Gr</p>
                    <h2 class="product__precio">$9.300</h2>
                    <p>Gramo a $9.300</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/mani.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Maní Light en sodio</h3>
                    <p>200 Gr</p>
                    <h2 class="product__precio">$4.200</h2>
                    <p>Gramo a $4.200</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/almendra2.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Almendra Tajada FRESCAMPO</h3>
                    <p>100 Gr</p>
                    <h2 class="product__precio">$7.200</h2>
                    <p>Gramo a $7.200</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                   <div class="product__img">
                        <img src="../assets/productos/frutosSecos/pistacho.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Pistacho salado NUTS GARDEN</h3>
                    <p>400 Gr</p>
                    <h2 class="product__precio">$28.000</h2>
                    <p>Gramo a $28.000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/cacaguate.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Cacahuate</h3>
                    <p>300 Gr</p>
                    <h2 class="product__precio">$4000</h2>
                    <p>Gramo a $4000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/castañas.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Castaña de Cajú</h3>
                    <p>200 Gr</p>
                    <h2 class="product__precio">$3500</h2>
                    <p>Gramo a $3500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/frutosSecos/anarcados.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Anacardos</h3>
                    <p>100 Gr</p>
                    <h2 class="product__precio">$1500</h2>
                    <p>Gramo a $1500</p>
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
.contenedor__frutosSecos{
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