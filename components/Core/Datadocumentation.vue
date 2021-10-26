<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลการประเมินผลการสอนและเอกสารที่ใช้ประเมินผลการสอน</h1>
        </div>
    </div>
    <div class="HTable">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center" style=" font-size: 1em; width:10vw;">ชื่อ-สกุล</th>
                        <th class="text-center" style=" font-size: 1em; width:10vw;">ชื่อเรื่อง</th>
                        <th class="text-center" style=" font-size: 1em; width:10vw;">สังกัดสาขาวิชา</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">วันที่รับการประเมิน</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">วันที่ประเมิน</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">วันที่หมดอายุผลประเมิน</th>
                        <th class="text-center" style=" font-size: 1em; width:6vw;">ระดับผลการประเมินผลการสอน</th>
                        <th class="text-center" style=" font-size: 1em; width:6vw;">ระดับผลการประเมินเอกสาร</th>
                        <th class="text-center" style=" font-size: 1em; width:3vw;">ประเมินครั้งที่</th>
                    </tr>

                </thead>
                <tbody style="background:#F2F2F2; border: 2px solid white;">

                    <tr v-for="datas,i in data" :key="i">
                        <td>{{ datas.faculty }}</td>
                        <td>{{ datas.master }}</td>
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
    documents
} from '../../config/config';
const url = end_point + documents
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
