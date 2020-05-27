<template>
    <div>
        <div>
            Hello from App Vue
        </div>
        <builder id="test"></builder>
    </div>
</template>
<script>
    //import UIkit from 'uikit';

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

<style lang="scss">
@import "../node_modules/uikit/src/scss/variables-theme.scss";
@import "../node_modules/uikit/src/scss/mixins-theme.scss";
@import "../node_modules/uikit/src/scss/uikit-theme.scss";
</style>