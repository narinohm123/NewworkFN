<template>
<div>
    
    <div class="HTable">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    

                </thead>
                <tbody style="background:#F2F2F2; border: 2px solid white;">
                    
                    <!-- <tr v-for="datas,i in data" :key="i">
                    <td>{{ datas.faculty }}</td>
                    <td>{{ datas.master }}</td>
                </tr> -->
                </tbody>
            </template>
        </v-simple-table>
    </div>
    <!-- <pre>{{data}}</pre> -->
    <!-- <pre>{{year}}</pre> -->
</div>
</template>

<script>
import {
    end_point,
    academicpower
} from '../../config/config';
const url = end_point + academicpower
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            data: {},
            year: {
                year: ""
            }

        }
    },
    async mounted() {
        try {
            const response = await fetch(
                url,
                console.log(fetch)
            )
            const content = await response.json()
            console.log(content)
            this.data = content
            this.year = content

        } catch (error) {

        }
    }

}
</script>

<style>
.Hed {
    display: flex;
    justify-content: center;
    height: 3vh;
}

thead tr th {
    text-align: center;
    background: #DEEBF7;
    border: 2px solid white;
}

.HTable {
    margin: 10px;
    padding: 10px;
}
</style>
