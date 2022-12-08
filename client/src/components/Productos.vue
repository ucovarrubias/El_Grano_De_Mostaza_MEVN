<template>
    <div>
        <div class="container" style="padding-top:100px;">
            <h1 style="text-align: center;">Todos los productos</h1>
            <div class="row">
                <div class="col-md-3 my-3" v-for="p in productos" :key="p.id">
                    <div class="card w-100" style="width: 18rem;">
                        <img class="card-img-top" :src=p.imagen alt="imagen">
                        <div class="card-body">
                            <h5 class="card-title">{{p.nombre}}</h5>
                            <h6>Precio: ${{p.precio}}</h6>
                            <div class="mt-3 d-flex justify-content-between">
                                <form @submit.prevent="agregarCarrito">
                                    <input type="text" v-model="p._id" />
                                    <input type="text" v-model="p.precio"/>
                                    <button v-if="(session === true)" type="submit" class="btn btn-primary btn-sm">Agregar al carrito</button>
                                    <button v-else type="button" class="btn btn-primary btn-sm" data-bs-toggle="offcanvas" data-bs-target="#demo">Agregar al carrito</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from "../api"
export default {
    name: "Productos",
    data() {
        return {
            productos: [{
                id: '',
                nombre: '',
                precio: '',
                imagen: ''
            }],
            p: {
                id: '',
                precio: ''
            }
            
        }
    },
    async created() {
        if(localStorage.getItem('id') === null){
            this.session = false
        } else {
            this.session = true
        }
        this.productos = await API.getAllProductos()
    },
    methods: {
        async agregarCarrito(){
            console.log(this.p.precio)
            const carrito = {
                'id': this.p._id,
                'cantidad': 1,
                'precio': this.p.precio
            }
            this.cliente = await API.updateCarrito(localStorage.getItem('id'), carrito)
        }
    }
}
</script>