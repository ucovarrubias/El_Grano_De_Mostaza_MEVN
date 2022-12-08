<template>
  <div>
    <!-- Barra de navegación -->
    <nav class="navbar fixed-top navbar-expand-sm bg-dark navbar-dark justify-content-center">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="./assets/logotipo.png" alt="Logo" style="width:50px;" class="pill"> 
            </a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/#inicio">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#servicios">Servicios</a>
                </li>
                <li class="nav-item">
                    <router-link to="/productos"><a class="nav-link">Productos</a></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#nosotros">Sobre nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#contacto">Contacto</a>
                </li>
            </ul>

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a v-if="!session" class="nav-link nav-derecha" data-bs-toggle="offcanvas" data-bs-target="#demo" href="#"><i class="fas fa-shopping-cart"></i></a>
                    <a v-else class="nav-link nav-derecha" href="/carrito"><i class="fas fa-shopping-cart"></i></a>
                </li>
                <li class="nav-item ">
                    <a v-if="!session" class="nav-link nav-derecha" data-bs-toggle="offcanvas" data-bs-target="#demo" href="#"><i class="fas fa-user"></i></a>
                    <a v-else class="nav-link nav-derecha" href="/home"><i class="fas fa-user"></i></a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Off-canvas de inicio de sesión-->
    <div class="offcanvas offcanvas-end" id="demo">
        <div class="offcanvas-header">
            <div class="container">
                <form @submit.prevent="handleSubmit">
                    <div class="my-3">
                        <label for="usuario" class="form-label">Usuario:</label>
                        <input type="text" class="form-control" id="usuario" placeholder="Usuario" v-model="usuario" required>
                    </div>
                    <div class="mb-3">
                        <label for="contrasenia" class="form-label">Contrase&ntilde;a:</label>
                        <input type="password" class="form-control" id="contrasenia" placeholder="Contraseña" v-model="contrasenia" required>
                    </div>

                    <div class="d-grid">
                        <button type="submit" data-bs-dismiss="offcanvas" class="btn btn-primary btn-block my-1">Iniciar sesión</button>
                    </div>
                </form>
                
                <p class="text-center mt-1"><a href="#">¿Ha olvidado su contrase&ntilde;a?</a></p>
                <hr>
                <div class="text-center">
                    <button type="button" class="btn btn-success btn-block my-1" data-bs-toggle="modal" data-bs-target="#registro">Registrarse</button>
                </div>

            </div>
        </div>
    </div>

    <!-- The Modal -->
    <div class="modal" id="registro">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Crear nueva cuenta</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form action="/api/cliente/" method="POST">
                        <!-- Usuario -->
                        <input type="text" maxlength="20" 
                                pattern="[a-zA-Z0-9_]{5,20}"
                                title="El nombre de usuario debe ser mayor a 5 y menor a 20 caracteres, sin caracteres especiales."
                                class="form-control mb-2" id="reg_usuario" placeholder="Usuario" name="usuario" required>
                        
                        <!-- Nombre -->
                        <input type="text" maxlength="20" 
                                pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,50}"
                                title="El nombre debe ser mayor a 3 y menor a 20 caracteres, sin dígitos."
                                class="form-control mb-2" id="nombre" placeholder="Nombre" name="nombre" required>
                        
                        <!-- Apellido -->
                        <input type="text" maxlength="50" 
                                pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,50}"
                                title="El apellido debe ser mayor a 3 y menor a 20 caracteres, sin dígitos."
                                class="form-control mb-2" id="apellido" placeholder="Apellido" name="apellido" required>
                        
                        <!-- Email -->
                        <input type="email" maxlength="50" 
                                title="Favor de introducir un correo v&aaálido"
                                class="form-control mb-2" id="email" placeholder="Correo electrónico" name="email" required>
                        
                        <!-- Contraseña -->
                        <input type="password" maxlength="15" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$"
                                title="La contraseña debe ser mayor a 6 caracteres y debe incluir por lo menos una mayúscula y un dígito. Máximo 15 caracteres."
                                class="form-control mb-2" id="reg_contrasenia" placeholder="Contraseña" name="reg_contrasenia" required>
                        
                        <!-- Confirmar contraseña -->
                        <input type="password" maxlength="15" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$"
                                title="La contraseña debe ser mayor a 6 caracteres y debe incluir por lo menos una mayúscula y un dígito. Máximo 15 caracteres."
                                class="form-control mb-2" id="reg_confirmar_contrasenia" placeholder="Confirmar contraseña" name="contrasenia" required>
                        
                        <!-- Calle -->
                        <input type="text" maxlength="20" 
                                pattern="[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,20}"
                                title="La calle debe ser mínimo 5 caracteres, máximo 20."
                                class="form-control mb-2" id="calle" placeholder="Calle" name="direccion.calle" required>
                        
                        <!-- Número -->
                        <input type="text" maxlength="5" 
                                pattern="^[a-zA-Z0-9-]*$"
                                class="form-control mb-2" id="numero" placeholder="Número" name="direccion.num_ext" required>
                        
                        <!-- Código Postal -->
                        <input type="text" maxlength="5" 
                                pattern="[0-9]{5}"
                                title="El código postal debe contener sólo 5 números."
                                class="form-control mb-2" id="codpostal" placeholder="Código Postal" name="direccion.codigo_postal" required>
                        
                        <!-- Ciudad -->
                        <input type="text" maxlength="30" 
                                pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}"
                                title="La ciudad debe ser mayor a 5 caracteres, máximo 30."
                                class="form-control mb-2" id="ciudad" placeholder="Ciudad" name="direccion.ciudad" required>
                        
                        <!-- Estado -->
                        <input type="text" maxlength="30" 
                                pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}"
                                title="El estado debe ser mayor a 5 caracteres, máximo 30."
                                class="form-control mb-2" id="estado" placeholder="Estado" name="direccion.estado" required>
                        
                        <!-- País -->
                        <input type="text" maxlength="30" 
                                pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}"
                                title="El país debe ser mayor a 5 caracteres, máximo 30."
                                class="form-control mb-2" id="pais" placeholder="País" name="direccion.pais" required>
                        
                        <!-- Teléfono -->
                        <input type="tel" pattern="[0-9]{10}" 
                                title="El número de telefóno debe ser a 10 dígitos."
                                class="form-control mb-2" id="telefono" placeholder="Teléfono" name="telefono" required>
                        
                        <!-- Modal footer -->
                        <div class="modal-footer justify-content-center mt-4">
                            <button type="submit" class="btn btn-success">Registrarse</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: "App",
  data() {
        return {
            usuario: '',
            contrasenia: '',
            session: ''
        }
    },
    async created(){
        if(localStorage.getItem('id') === null){
            this.session = false
        } else {
            this.session = true
        }
    },
    methods: {
        async handleSubmit() {
            const response = await API.authenticateCliente({'usuario': this.usuario, 'contrasenia': this.contrasenia})
            console.log(response[0]._id.toString())
            localStorage.setItem('id', response[0]._id.toString())
            this.$router.push({name: 'home', params: { message: "Inicio de sesión exitoso"}})
        }
    }
}
</script>

<style>
a{
    text-decoration: none;
}

.nav-derecha{
    color: white;
}
</style>