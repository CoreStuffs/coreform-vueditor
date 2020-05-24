<template>
    <div>
        <div>
            Hello from App Vue
        </div>
        <builder id="test"></builder>
    </div>
</template>
<script>
    import builder from './components/builder.vue'
    var c = function(){return {builder};}
    export default {
        data() {
            return {
                message: 'Message from App.vue',
            };
        },
        components : c()
        
    };
</script>
