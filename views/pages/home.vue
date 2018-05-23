<template>
    <div>
        <HeaderHome />
        <section>
            <div class="container">
                <div class="">
                    <div class="col-md-12 boxHome">
                        <div class="row">
                            <div class="col-md-6 borderRigth">
                                <h4>Iniciar Sesion</h4>
                                <br>
                                <label for="">Correo Electronico:</label>
                                <input type="text" class="form-control" placeholder="Correo Electronico">
                                <br>
                                <label for="">Password:</label>
                                <input type="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="col-md-6">
                                <h4>Regístrate respondiendo a unas preguntas:</h4>
                                <br>
                                <button class="btn btn-ligth form-control">Opcion 1</button>
                                <br>
                                <button class="btn btn-ligth form-control">Opcion 2</button>
                                <br>
                                <button class="btn btn-ligth form-control">Opcion 3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import HeaderHome from '../components/HeaderHome.vue'
export default {
    data() {
        return {}
    },
    components:{
        Navbar,
        HeaderHome
    },
    created(){
        
    }
}
</script>


<style scoped>
    .boxHome{
        border-radius: 20px;
        background: #f8f8f8;
        box-shadow: 0px 2px 3px #ccc;
        position: relative;
        top: -180px;
        min-height: 500px;
        padding: 40px;
    }

    .boxHome .col-md-6{
        padding:60px;
    }

    .borderRigth{
        border-right: 1px solid #ccc;
        min-height: 400px;
    }
</style>
