<template>
    <div>
        <div class="container" style="padding-top:100px;">
            <h3 class="mt-5">Revisa tu pedido</h3>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <table class="table">
                        <small><strong>Direcci&oacute;n de env&iacute;o</strong></small>
                        <tr>
                            <td>Nombre: </td>
                            <td>{{cliente.nombre}} {{cliente.apellido}}</td>
                        </tr>
                        <tr>
                            <td>Direcci&oacute;n: </td>
                            <td>{{cliente.direccion.calle}}</td>
                        </tr>
                        <tr>
                            <td>N&uacute;mero exterior: </td>
                            <td>{{cliente.direccion.num_ext}}</td>
                        </tr>
                        <tr>
                            <td>C&oacute;digo postal: </td>
                            <td>{{cliente.direccion.codigo_postal}}</td>
                        </tr>
                        <tr>
                            <td>Ciudad: </td>
                            <td>{{cliente.direccion.ciudad}}</td>
                        </tr>
                        <tr>
                            <td>Estado:</td>
                            <td>{{cliente.direccion.estado}}</td>
                        </tr>
                        <tr>
                            <td>Pa&iacute;s: </td>
                            <td>{{cliente.direccion.pais}}</td>
                        </tr>
                        <tr>
                            <td>Tel&eacute;fono: </td>
                            <td>{{cliente.telefono}}</td>
                        </tr>
                    </table>
                </div>
                <div class="col-sm-8">
                    <div class="card-header my-3">Productos del carrito</div>
                    <div class="container">
                        <div class="row">
                            <div class="card" style="width: 10rem;" v-for="c in carrito">
                                <img class="card-img-top mt-3" :src=c.imagen alt="imagen">
                                <div class="card-body">
                                    <h6 class="card-title"></h6>
                                    <p class="my-0">Precio: {{c.precio}}</p>
                                    <p class="mb-0">Cantidad: {{c.cantidad}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <hr>   
                <div class="text-end mb-5">
                    <p>Subtotal: <strong>${{subtotal}}<select v-model="subtotal"></select></strong></p>
                    <p>Envio: <strong>${{envio}}</strong></p>
                    <p>Total: <strong>${{(total= envio+subtotal)}}<select v-model="total"></select></strong></p>
                    <h3>Formas de pago:</h3>
                    <hr>
                    <div>
                        <button type="button" @click="botonPago()" class="btn btn-primary">Simular pago</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/api';

export default {
    name: 'Pago',
    data() {
        return {
            cliente: {
                usuario: '',
                email: '',
                nombre: '',
                apellido: '',
                telefono: '',
                direccion: {
                    calle: '',
                    num_ext: '',
                    codigo_postal: '',
                    ciudad: '',
                    estado: '',
                    pais: ''
                }
            },
            carrito: [{
                id: '',
                nombre: '',
                precio: '',
                cantidad: '',
                imagen: ''
            }],
            subtotal: null,
            envio: 150,
            total: null,
            pedido: {

            }
        }
    },
    async created() {
        if(localStorage.getItem('id') === null){
            this.session = false
            this.$router.replace({name: 'index'})
        } else {
            this.session = true
        }
        const id = localStorage.getItem('id')
        this.cliente = await API.getClientebyID(id)
        this.carrito = await API.getCarrito(localStorage.getItem('id'))
        for (let c of this.carrito) {
            this.subtotal += Number.parseInt(c.precio);
        }
    },
    methods: {
        async botonPago(){
            await API.deleteCarrito(localStorage.getItem('id'))
            this.$router.replace({name: 'confirmacion'})
        }
    }
}
</script>