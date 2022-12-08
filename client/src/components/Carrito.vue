<template>
    <div>
        <div class="container" style="padding-top:100px;">
            <h2>Todos los productos del carrito</h2>
            <div class="row">
                <div class="col-md-3 my-3">
                    <div class="card w-100" style="width: 18rem;">
                        <img class="card-img-top" src="<%= producto.getImagen() %>" alt="imagen">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <h6>Precio: </h6>
                            <form action="agregarCarrito?tarea=actualizarCarrito" method="POST">
                                <input type="hidden" name="id" value="<%= c.getId() %>" />
                                <div class="align-items-center d-flex justify-content-between">
                                    Cantidad: <input type="text" pattern="[0-9]{1,2}" title="La cantidad no debe ser menor a 0" name="cantidad" class="form-control mx-1" value="<%= c.getCantidad()%>"/>
                                    <button type="submit" class="mx-1 btn btn-light btn-sm">Actualizar</button>
                                </div>
                            </form>
                            <small><a class="text-danger" style="text-decoration: none;" href="agregarCarrito?tarea=eliminarCarrito&id=<%= c.getId()%>">Eliminar art&iacute;culo</a></small>
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
export default {
    name: "Carrito",
    data() {
        return {
            carrito: [{
                id: '',
                nombre: '',
                precio: '',
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
        this.productos = await API.getCarrito(localStorage.getItem('id'))
    }
}
</script>