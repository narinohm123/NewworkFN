<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลบุคลากรดีเด่น ประจำปีงบประมาณ</h1>
        </div>
    </div>
    <div class="Table">
        <div>
            <v-simple-table>
                <template v-slot:default>

                    <thead>

                        <tr>
                            <th class="text-center" style=" font-size: 1em; width: 2vw;" rowspan="2">ที่</th>
                            <th class="text-center" style=" font-size: 1em; width: 16vw;" rowspan="2">ประเภท</th>
                            <th class="text-center" style=" font-size: 1em; width: 14vw;" rowspan="2">บุคลากรสายวิชาการ</th>
                        </tr>

                    </thead>

                    <tbody style="background:#F2F2F2; border: 2px solid white;">

                        <tr v-for="data,i in ao" :key="i" v-if="data.typeps === 'บุคลากรสายวิชาการ'">
                            <td>{{ data.rank }}</td>
                            <td>{{ data.type_a }}</td>
                            <td>{{ data.name }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
        <div>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center" style=" font-size: 1em; width: 2vw;" rowspan="2">ที่</th>
                            <th class="text-center" style=" font-size: 1em; width: 16vw;" rowspan="2">ประเภท</th>
                            <th class="text-center" style=" font-size: 1em; width: 14vw;" rowspan="2">บุคลากรสายบริการ</th>
                        </tr>
                    </thead>

                    <tbody style="background:#F2F2F2; border: 2px solid white;">
                         <tr v-for="data,i in ao" :key="i"  v-if="data.typeps === 'บุคลากรสายบริการ'">
                            <td>{{ data.rank }}</td>
                            <td>{{ data.type_a }}</td>
                            <td>{{ data.name }}</td>
                        </tr>
                    
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
    ao<pre>{{ao}}</pre>
    <!-- <pre>{{year}}</pre> -->
</div>
</template>

<script>
import {
    end_point,
    academiceOutstand,
} from '../../../config/config';
const url = end_point + academiceOutstand
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            ao: {},
            year: {
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
            this.ao = content
            // this.year = content

        } catch (error) {

        }
    },

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

.Table {
    display: flex;
    justify-content: space-around;
    margin: 10px;
    padding: 10px;

}
</style>
