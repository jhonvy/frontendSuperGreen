<template>
    <body>
        <section>
            <div class="contenedor__frutas">
                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/lecheAlmendra.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Bebida de almendras sin dulce</h3>
                    <p>1.89 lt</p>
                    <h2 class="product__precio">$22.000</h2>
                    <p>Unidad a $22.000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/lecheCoco.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Bebida de coco original</h3>
                    <p>1.89 lt</p>
                    <h2 class="product__precio">$24.000</h2>
                    <p>Unidad a $24.000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/lecheSoya.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Bebida de soya orgánica sin azúcar</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$12.000</h2>
                    <p>Unidad a $12.000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/lecheAlmendra2.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Bebida de almendras y marañones</h3>
                    <p>1.89 lt</p>
                    <h2 class="product__precio">$22.500</h2>
                    <p>Unidad a $22.500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                   <div class="product__img">
                        <img src="../assets/productos/bebidas/lecheAvena.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Bebida de avena sin dulce</h3>
                    <p>litro</p>
                    <h2 class="product__precio">$9.900</h2>
                    <p>Unidad a $9.900</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/avenaOjuelas2.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Avena de ojuelas</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$2000</h2>
                    <p>Unidad a $2000</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/Activia.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Activia</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$2500</h2>
                    <p>Unidad a $2500</p>
                     <div>
                        <a href="" class="product__boton ">Agregar</a>
                    </div>
                </div>

                <div class="product">
                    <div class="product__img">
                        <img src="../assets/productos/bebidas/creamyYogurt.png" alt="" class="product__img-f">
                    </div>
                    <h3 class="product__titulo">Creamy Yogurt</h3>
                    <p>1 Und</p>
                    <h2 class="product__precio">$3000</h2>
                    <p>Unidad a $3000</p>
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