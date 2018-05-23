<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light nav-white">
                        <a class="navbar-brand" href="#">{{data.app.name}}</a>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">perm_identity</i>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        this.data = this.$options.parent;
    }
}
</script>


<style scoped>
    .header{
        min-height: 300px;
        /*background: url(assets/img/bg.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;*/
        background: -moz-linear-gradient(top, rgba(155,89,182,1) 37%, rgba(155,89,182,1) 37%, rgba(142,68,173,1) 100%);
        background: -webkit-linear-gradient(top, rgba(155,89,182,1) 37%,rgba(155,89,182,1) 37%,rgba(142,68,173,1) 100%);
        background: linear-gradient(to bottom, rgba(155,89,182,1) 37%,rgba(155,89,182,1) 37%,rgba(142,68,173,1) 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b59b6', endColorstr='#8e44ad',GradientType=0 );

    }

    .navbar-brand{
        font-size: 60px;
        font-weight: 700;
    }

    .nav-white *{
        color: #fff!important;
        font-weight: 200!important;
    }

    .dropdown-menu * {
        color: #222!important;
        font-weight: 200!important;
    }

    .dropdown-menu{left: -70px;}
        
</style>


