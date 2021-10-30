<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">สถานะการดำเนินการประเมินผลการสอนและเอกสารที่ใช้ประเมินผลการสอน</h1>
        </div>
    </div>
    <div class="HTable">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center" style=" font-size: 1em; width:3vw;" rowspan="2">ที่</th>
                        <th class="text-center" style=" font-size: 1em; width:13vw;" rowspan="2">ชื่อ-สกุล</th>
                        <th class="text-center" style=" font-size: 1em; width:6vw;" rowspan="2">วันที่ยื่นขอ</th>
                        <th class="text-center" style=" font-size: 1em; width:10vw;" rowspan="2">ตำแหน่งที่ขอรับการพิจารณา</th>
                        <th class="text-center" style=" font-size: 1em; width:15vw;" rowspan="2">สถานะดำเนินการ</th>

                    </tr>

                </thead>
                <tbody style="background:#F2F2F2; border: 2px solid white;">

                    <tr v-for="datas,i in data" :key="i">
                        <td class="text-center">{{ datas.id }}</td>
                        <td>{{ datas.name }}</td>
                        <td class="text-center">{{ datas.date_request }}</td>
                        <td class="text-center">{{ datas.position_rc }}</td>
                        <td class="text-center">{{ datas.situation }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
    <pre>{{data}}</pre>
    <!-- <pre>{{year}}</pre> -->
</div>
</template>

<script>
import {
    end_point,
    pending
} from '../../../config/config';
const url = end_point + pending
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            data: {},
            // year: {
            //     year: ""
            // }

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
            // this.year = content

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
