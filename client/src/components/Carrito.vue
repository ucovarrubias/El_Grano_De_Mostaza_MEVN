<template>
    <div>
        <div class="container" style="padding-top:100px;">
            <h2>Todos los productos del carrito</h2>
            <div class="row">
                <div class="col-md-3 my-3" v-for="c in carrito">
                    <div class="card w-100" style="width: 18rem;">
                        <img class="card-img-top" :src=c.imagen alt="imagen">
                        <div class="card-body">
                            <h5 class="card-title">{{(c.nombre)}}</h5>
                            <h6>Precio: {{c.precio}}</h6>
                            <form action="agregarCarrito?tarea=actualizarCarrito" method="POST">
                                <input type="hidden" name="id" value="<%= c.getId() %>" />
                                <div class="align-items-center d-flex justify-content-between">
                                    Cantidad: <input type="text" pattern="[0-9]{1,2}" title="La cantidad no debe ser menor a 0" name="cantidad" class="form-control mx-1" v-model="c.cantidad"/>
                                    <button type="submit" class="mx-1 btn btn-light btn-sm">Actualizar</button>
                                </div>
                            </form>
                            <small><a class="text-danger" style="text-decoration: none;" @click="eliminarProducto(c._id)">Eliminar art&iacute;culo</a></small>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr>   
            <div>
                <p>Subtotal: <strong></strong></p>
                <button type="button" onclick="document.location='pedido.jsp'" class="btn btn-primary btn-sm">Proceder al pago</button>
            </div>
        </div>
    </div>
</template>

<script>
import API from "../api"

export default {
    name: "Carrito",
    data() {
        return {
            carrito: [{
                id: '',
                nombre: '',
                precio: '',
                cantidad: '',
                imagen: ''
            }]
        }
    },
    async created() {
        if(localStorage.getItem('id') === null){
            this.session = false
            this.$router.replace({name: 'index'})
        } else {
            this.session = true
        }
        this.carrito = await API.getCarrito(localStorage.getItem('id'))
    }, methods: {
        async eliminarProducto(idProducto){
            const producto = {
               '_id': idProducto 
            }
            await API.deleteItemCarrito(localStorage.getItem('id'), producto)
        }
    }
}
</script>