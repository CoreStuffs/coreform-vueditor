<template>
    <div>
        <div class="uk-margin-small-bottom">
            <label for="chkShowSeparator" class="uk-form-label"><input id="chkShowSeparator" class="uk-checkbox" type="checkbox" v-model="showSeparator"/> Show separator</label>
        </div>
    </div>
</template>
<script>
export default {
        inject:["$getNextId"],
        data: function () {
            return this.value;
        },
        props: ["value"],
        created:function(){
            if(typeof(this.showSeparator)==="undefined") this["showSeparator"] = true;
            //var i = 1;
            // this.columns.forEach(element => {
            //     if(!element.id) {
            //         element.id =  this.id + 1000 + i++;
            //     }
            // });
        }
}
</script>