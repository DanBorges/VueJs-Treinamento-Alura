<template>
<div> 
    <div class="col-md-2" style="float:left; margin-top:120px">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div v-for ="rota in rotas">
                <router-link :to = "rota.path ? rota.path : '/'"> 
                    <a class="nav-link" id="v-pills-home-tab"  href="#" role="tab" aria-selected="false">{{ rota.titulo }}</a>
                </router-link> 
            </div>
        </div>
     </div>
</div>
    


</template>

<script>
export default{
    props:{
        rotas:{
            type:Array,
            required:true
        }
    }
}
</script>

<style>

.nav-link{
    background-color: #ccc;
}
.nav-link:hover{
    background-color: #123
}
</style>

