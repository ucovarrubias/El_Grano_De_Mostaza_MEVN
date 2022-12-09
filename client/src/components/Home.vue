<template>
<div>
    <div class="container-fluid m-0 px-0" style="padding-top:80px;">
        <nav class="navbar navbar-expand-sm bg-none justify-content-center mb-2">
            <h5 class="h5 px-3"><i class="fa-solid fa-circle-user"></i> Mi perfil</h5>
            <h5 class="h5 px-3"><a href="buscarPedidos" style=" text-decoration: none; color: inherit;"><i class="fa-solid fa-box"></i> Mis pedidos</a></h5>
        </nav>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
            <h1>¡Bienvenido! {{cliente.usuario}}</h1>
                <div>
                    <p>Los detalles de tu cuenta son los siguientes:</p>
                    <table class="table">
                        <tr>
                            <td>Usuario: </td>
                            <td>{{cliente.usuario}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarUsuario" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Correo electr&oacute;nico: </td>
                            <td>{{cliente.email}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarEmail" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Nombre: </td>
                            <td>{{cliente.nombre}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarNombre" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Nombre: </td>
                            <td>{{cliente.apellido}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarApellido" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Calle: </td>
                            <td>{{cliente.direccion.calle}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarCalle" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>N&uacute;mero exterior: </td>
                            <td>{{cliente.direccion.num_ext}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarNumExterior" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>C&oacute;digo postal: </td>
                            <td>{{cliente.direccion.codigo_postal}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarCodigoPostal" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Ciudad: </td>
                            <td>{{cliente.direccion.ciudad}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarCiudad" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Estado:</td>
                            <td>{{cliente.direccion.estado}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarEstado" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Pa&iacute;s: </td>
                            <td>{{cliente.direccion.pais}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarPais" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                        <tr>
                            <td>Tel&eacute;fono: </td>
                            <td>{{cliente.telefono}}</td>
                            <td><a data-bs-toggle="modal" data-bs-target="#cambiarTelefono" href="#"><i class="fas fa-chevron-right"></i></a></td>
                        </tr>
                    </table>
                    <div class="d-flex justify-content-between">
                        <small><a class="text-info" @click="cerrarSesion()" style="text-decoration: none;">Cerrar sesi&oacute;n</a></small>
                        <small><a class="text-danger" data-bs-toggle="modal" data-bs-target="#eliminarCuenta" href="#" style="text-decoration: none;">Eliminar cuenta</a></small>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                
            </div>
        </div>
    </div>
    
    <!-- Modal usuario -->
    <div class="modal fade" id="cambiarUsuario">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modificar usuario</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form @submit.prevent="updateFormUsuario">
                    <small>Usuario</small>
                    <input type="text" class="form-control mb-2" id="usuario" placeholder="Usuario" v-model="cliente.usuario" required>
                    <div class="mt-5">
                        <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
                            
    <!-- Modal email -->
    <div class="modal fade" id="cambiarEmail">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modificar email</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form @submit.prevent="updateFormEmail">
                    <small>Email</small>
                    <input type="text" class="form-control mb-2" id="email" placeholder="Correo electr&oacute;nico" v-model="cliente.email" required>
                    <div class="mt-5">
                        <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>                    
    
    <!-- Modal nombre -->
    <div class="modal fade" id="cambiarNombre">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modificar nombre</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form @submit.prevent="updateFormNombre">
                    <small>Nombre</small>
                    <input type="text" class="form-control mb-2" id="nombre" placeholder="Nombre" v-model="cliente.nombre" required>
                    <div class="mt-5">
                        <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
                    
    <!-- Modal apellido -->
    <div class="modal fade" id="cambiarApellido">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modificar apellido</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form @submit.prevent="updateFormApellido">
                    <small>Apellido</small>
                    <input type="text" class="form-control mb-2" id="apellido" placeholder="Apellido" v-model="cliente.apellido" required>
                    <div class="mt-5">
                        <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
                    
    <!-- Modal calle -->
    <div class="modal fade" id="cambiarCalle">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar calle</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormCalle">
                        <small>Calle</small>
                        <input type="text" class="form-control mb-2" id="calle" placeholder="Calle" v-model="cliente.direccion.calle" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal número exterior -->
    <div class="modal fade" id="cambiarNumExterior">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar n&uacute;mero exterior</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormNumExt">
                        <small>N&uacute;mero exterior</small>
                        <input type="text" class="form-control mb-2" id="numExterior" placeholder="NumExterior" v-model="cliente.direccion.num_ext" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal código postal -->
    <div class="modal fade" id="cambiarCodigoPostal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar c&oacute;digo postal</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormCodigoPostal">
                        <small>C&oacute;digo postal</small>
                        <input type="text" class="form-control mb-2" id="codigoPostal" placeholder="CodigoPostal" v-model="cliente.direccion.codigo_postal" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal ciudad -->
    <div class="modal fade" id="cambiarCiudad">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar ciudad</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormCiudad">
                        <small>Ciudad</small>
                        <input type="text" class="form-control mb-2" id="ciudad" placeholder="Ciudad" v-model="cliente.direccion.ciudad" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal estado -->
    <div class="modal fade" id="cambiarEstado">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar estado</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormEstado">
                        <small>Estado</small>
                        <input type="text" class="form-control mb-2" id="estado" placeholder="Estado" v-model="cliente.direccion.estado" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal país -->
    <div class="modal fade" id="cambiarPais">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar pa&iacute;s</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormPais">
                        <small>Pa&iacute;s</small>
                        <input type="text" class="form-control mb-2" id="pais" placeholder="Pais" v-model="cliente.direccion.pais" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal teléfono -->
    <div class="modal fade" id="cambiarTelefono">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modificar tel&eacute;fono</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="updateFormTelefono">
                        <small>Tel&eacute;fono</small>
                        <input type="text" class="form-control mb-2" id="telefono" placeholder="Tel&eacute;fono" v-model="cliente.telefono" required>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg" data-bs-dismiss="modal">Guardar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                        
    <!-- Modal eliminar cuenta -->
    <div class="modal fade" id="eliminarCuenta">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title text-danger">¡Advertencia!</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="deleteFormUsuario">
                        <p>¿Está seguro de realizar esta acción?</p>
                        <div class="mt-5">
                            <button type="submit" class="btn btn-danger btn-lg" data-bs-dismiss="modal">Confirmar</button>
                            <button type="button" class="btn btn-light btn-lg" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import API from '@/api';

export default {
    name: 'Home',
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
    },
    methods: {
        async cerrarSesion(){
            localStorage.clear()
            this.$router.push({name: 'index', params: { message: "Cierre de sesión exitoso"}})
        },
        async updateFormUsuario(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'usuario': this.cliente.usuario})
            console.log(response)
        },
        async updateFormEmail(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'email': this.cliente.email})
            console.log(response)
        },
        async updateFormNombre(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'nombre': this.cliente.nombre})
            console.log(response)
        },
        async updateFormApellido(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'apellido': this.cliente.apellido})
            console.log(response)
        },
        async updateFormCalle(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'direccion.calle': this.cliente.direccion.calle})
            console.log(response)
        },
        async updateFormNumExt(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'direccion.num_ext': this.cliente.direccion.num_ext})
            console.log(response)
        },
        async updateFormCodigoPostal(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'direccion.codigo_postal': this.cliente.direccion.codigo_postal})
            console.log(response)
        },
        async updateFormCiudad(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'direccion.ciudad': this.cliente.direccion.ciudad})
            console.log(response)
        },
        async updateFormEstado(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'direccion.estado': this.cliente.direccion.estado})
            console.log(response)
        },
        async updateFormPais(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'direccion.pais': this.cliente.direccion.pais})
            console.log(response)
        },
        async updateFormTelefono(){
            const response = await API.updateCliente(localStorage.getItem('id'), {'telefono': this.cliente.telefono})
            console.log(response)
        },
        async deleteFormUsuario(){
            const response = await API.deleteCliente(localStorage.getItem('id'))
            localStorage.clear()
            console.log(response)
            this.$router.replace({name: 'index'})
        }   
    }
}
</script>