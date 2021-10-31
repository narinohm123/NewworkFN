<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลอัตรากำลังบุคลากรสายวิชาการ ประจำปีงบประมาณ{{year}} </h1>
        </div>
    </div>
    <div class="HTable">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center font-weight-black" style=" font-size: 1em;" rowspan="2">สาขาวิชา</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">ระดับการศึกษา</th>
                        <th class="text-center" style=" font-size: 1em;" rowspan="2">ผู้ช่วยสอน</th>
                        <th class="text-center" style=" font-size: 1em;" rowspan="2">อาจารย์</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">ตำแหน่งทางวิชาการ</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">สถานะ</th>
                        <th class="text-center" style=" font-size: 1em;" rowspan="2">รวม</th>

                    </tr>
                    <tr>
                        <th class="text-center" style=" font-size: 1em;">ปริญญาโท</th>
                        <th class="text-center" style=" font-size: 1em;">ปริญญาเอก</th>
                        <th class="text-center" style=" font-size: 1em;">ผศ.</th>
                        <th class="text-center" style=" font-size: 1em;">รศ.</th>
                        <th class="text-center" style=" font-size: 1em;">ปฏิบัติงาน</th>
                        <th class="text-center" style=" font-size: 1em;">ลาศึกษา</th>
                    </tr>

                </thead>
                <tbody style="background:#F2F2F2; border: 2px solid white;">
                    <tr v-for="datas,i in data" :key="i">
                        <td>{{ datas.faculty }}</td>
                        <td class="text-center">{{ datas.master }}</td>
                        <td class="text-center">{{ datas.phd }}</td>
                        <td class="text-center">{{ datas.exteach }}</td>
                        <td class="text-center">{{ datas.teach }}</td>
                        <td class="text-center">{{ datas.asst_prof }}</td>
                        <td class="text-center">{{ datas.assoc_prof }}</td>
                        <td class="text-center">{{ datas.work }}</td>
                        <td class="text-center">{{ datas.leave }}</td>
                        <td class="text-center">{{ datas.total }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
    <!-- <pre>{{data}}</pre> -->
    <pre>{{data}}</pre>
    <pre>{{year}}</pre>
</div>
</template>

<script>
import {
    end_point,
    academicpower
} from '../../../config/config';
const url = end_point + academicpower
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            data: {},
            // year: {
            //     data: ""
            // }

        }
    },

    computed: {
        powerRateState: {
            get() {
                return this.$nuxt.$store.state.powerrate
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
 