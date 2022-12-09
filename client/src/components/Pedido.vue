<template>
    <div>
        <div class="container" style="padding-top:100px;">
            <h1 class="mt-5">Selecciona una dirección de envío</h1>
            <div class="row">
                <div class="col">
                    <table class="table">
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
                
                    <button class="btn btn-warning" onclick="document.location='pago.jsp'">Entregar a esta direcci&oacute;n</button>
                </div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/api';

export default {
    name: 'Pedido',
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
    }
}
</script>