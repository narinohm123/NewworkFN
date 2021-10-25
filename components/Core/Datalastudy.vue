<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลการลาศึกษาต่อของบุคลากร</h1>
        </div>
    </div>
    <div class="HTable">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center" style=" font-size: 1em; width:3vw;" rowspan="2">ที่</th>
                        <th class="text-center" style=" font-size: 1em;" rowspan="2">ชื่อ-สกุล</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">ระยะเวลาศึกษาต่อ</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;" rowspan="2">รวมเวลา</th>
                        <th class="text-center" style=" font-size: 1em; width:6vw;" rowspan="2">ประเภททุน</th>
                        <th class="text-center" style=" font-size: 1em; " colspan="3">ขอขยายระยะเวลา</th>
                        <th class="text-center" style=" font-size: 1em; width:6vw;" rowspan="2">วันที่กลับเข้าปฏิบัติงาน</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;" rowspan="2">หนังสืออนุมัติจบวันที่</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;" rowspan="2">วันที่ขอปรับวุฒิ</th>

                    </tr>
                    <tr>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">เริ่มต้น</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">สิ้นสุด</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">ครั้งที่ขยาย</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">เริ่มต้น</th>
                        <th class="text-center" style=" font-size: 1em; width:5vw;">สิ้นสุด</th>

                    </tr>

                </thead>
                <tbody style="background:#F2F2F2; border: 2px solid white;">
                    <td>xdvxv</td>
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
