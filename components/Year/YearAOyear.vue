<template>
  <div id="app">
    <div  v-for="datas,i in data" :key="i">
        <v-btn block depressed elevation="1" large plain style="height:4vh;">{{datas.year}}</v-btn>
    </div>
    
  </div>
</template>

<script>
import {
    end_point,
    AOyear
} from '../../config/config';
const url = end_point + AOyear
export default {
    data() {
        return {
            data:{}
        }
    },
    async mounted(){
         try {
            const response = await fetch(
                url,
                // console.log(fetch)
            )
            const content = await response.json()
            console.log(content)
            this.data = content
            // this.year = content

        } catch (error) {

        }
    }
}
</script>

<style>

</style>