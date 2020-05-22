<template>
    <div>
        Page B

                 <ul id="example-1">
					<input v-model="query">
                     <li v-for="item in countries">
                         {{ item.alpha3Code }} - {{ item.name }}
                     </li>
                 </ul>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: 'PageB',
        data: function() {
            return {
				query:'',
                countries: []
            };
        },
        watch: {
			query: function(val, oldVal) {
				axios.get("https://restcountries.eu/rest/v2/name/" + val)
					.then(response => {
							this.countries = response.data
					})
				}
		}
		,
    };
</script>