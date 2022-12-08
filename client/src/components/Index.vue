<template>
<div>
    <div id="inicio" class="hero-image">
        <div class="hero-text">
            <h1 id="titulo">El Grano de Mostaza</h1>
            <p id="subtitulo">Centro naturista y temazcal</p>
            <button class="btn btn-success" onclick="document.location='/productos'">Ver productos</button>
        </div>
    </div>
    <div id="servicios" class="container-fluid mt-5 scrollspie" style="padding:100px 20px;">
        <h1 class="text-center">Servicios</h1><br>
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-4">
                <div>
                    <h3>Temazcal</h3>
                    <p>El temazcal es un baño de vapor que se ha utilizado 
                        ampliamente en Mesoamérica desde hace milenios, con
                        propósitos medicinales de desintoxicación por 
                        sudoración por las infusiones de hierbas.</p>
                </div>
                <div>
                    <h3>Iridología</h3>
                    <p>Examen realizado por computadora para determinar 
                        información sobre la salud sistémica de un paciente 
                        examinando los patrones, colores y otras 
                        características del iris del ojo.</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div>
                    <h3>Naturopatía</h3>
                    <p>Significa “curación natural” y comprende modalidades 
                        terapéuticas que guían al cuerpo humano hacia su 
                        estado original de equilibrio. Sobre todo, trata de 
                        estimular las capacidades de autocuración y 
                        recuperación de cada persona. </p>
                </div>
                <div>
                    <h3>Homeopatía</h3>
                    <p>Creado en 1796 por Samuel Hahnemann basado en su 
                        doctrina de «lo similar cura lo similar», que 
                        sostiene que una sustancia que causa los síntomas de
                        una enfermedad en personas sanas curará lo similar 
                        en personas enfermas.</p>
                </div>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
      
    <!-- Sobre nosotros -->
    <div id="nosotros" class="container-fluid mt-5 bg-light" style="padding:100px 20px;">
        <div class="row ">
            <div class="col-sm-2"></div>
            <div class="col-sm-4">
                <h1>Sobre nosotros</h1><br>    
                <p>Después de que el médico Juventino Covarrubias Rodríguez 
                    realizó sus estudios universitarios en México como 
                    médico homeópata naturista y viendo la necesidad de la 
                    gente de una desintoxicación profunda para curar sus 
                    enfermedades y habiendo recibido instrucción y el legado
                    de la terapia del temazcal decidió construir un temazcal
                    para ayudar a la curación de todas las enfermedades 
                    incluyendo las catalogadas incurables.</p>
                <p>Se construyó en Providencia, Sonora desde hace 27 años 
                    dónde también instaló su consultorio médico y se decidió
                    poner el nombre del “El Grano de Mostaza” haciendo 
                    alusión a que el paciente cuando tenga fe de curarse 
                    creyendo que así sucederá su recuperación será más 
                    rápido y posible.</p>
                <p class="display-6">Misión</p>
                <p>Ofrecer el servicio del Temazcal para ayudar a recuperar 
                    la salud física, emocional y espiritual para todas las 
                    edades de ambos sexos, especialmente para atender 
                    enfermedades degenerativas (pie diabetico, lupus, asma, 
                    cáncer, angina de pecho, fibromialgía, artritis, 
                    entre otros).</p>
                <p class="display-6">Visión</p>
                <p>Poder llegar a todas las comunidades de Estado de Sonora,
                    a los sectores públicos y privados, y dar a conocer que 
                    sí hay curación para todas las enfermedades a través del
                    tratamiento de la medicina alternativa (Naturópata, 
                    Homeopatía y la terapia del Temazcal).</p>
            </div>
            <div class="col-sm-4">
                <img class="img-fluid" src="../assets/doctor.jpg" alt="doctor" width="500">
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
      
    <!-- Contacto -->
    <div id="contacto" class="container mt-5">
        <div class="row">
            <div class="col">
                <h1>Contáctanos</h1>
                <form action="#">
                    <div class="mb-3 mt-3">
                        <label for="name">Nombre completo</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Nombre completo" required>
                    </div>
                    <div class="mb-3">
                        <label for="email">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo electrónico" required>
                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su información con nadie más.</small>
                    </div>
                    <div class="mb-3">
                        <label for="message">Mensaje</label>
                        <textarea class="form-control" id="message" rows="6" required></textarea>
                    </div>
                    <div class="mx-auto">
                        <button type="submit" class="btn btn-primary text-right">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="col">
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" 
                                src="https://maps.google.com/maps?q=El%20Grano%20De%20Mostaza%20y%20Temazcal&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://www.embedgooglemap.net">map embed iframe</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <!-- Footer -->
    <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Todos los derechos reservados</p>
    </div>
</div>
</template>
  
<script>
export default {
    name: 'Index'
}
</script>
  
<style scoped>
body, html {
    height: 100vh;
}

.nav-derecha{
    color: white;
}

/* The hero image */
.hero-image {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/header.jpg");

    /* Set a specific height */
    height: 100vh;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

/* Place text in the middle of the image */
.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

#titulo {
    font-weight: bolder;
    font-size: 5em;
}

#subtitulo{
    font-size: 1.5em;
}

.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}

a{
    text-decoration: none;
}
</style>
