<template>
    <div v-on:click="click()" :class="'toolbar-button ' + cssclass"><div :class="'icon-' + icon" style="width:100%;height:100%"></div></div>
</template>
<script>
export default {
    data: function () {
        return {}
    },
    props: ["onclick", "cssclass", "icon"],
    methods: {
        click: function (evt) {
            this.onclick();
        }
    }
}
</script>
<style scoped>
    .toolbar-button {
        background-color: white;
        box-shadow: 0px 0px 0.2em 0px rgba(128,128,170,0.8);
        height: 0.7em;
        width: 0.7em;
        margin-right: 3px;
        padding: 3px;
        display: inline-block;
        cursor: pointer
    }

        .toolbar-button:hover {
            background-color: lightsteelblue;
        }
</style>