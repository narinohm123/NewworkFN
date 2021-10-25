<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลอัตรากำลังบุคลากรสายวิชาการ ประจำปีงบประมาณ </h1>
        </div>
    </div>
    <v-simple-table class="grey">
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
                    <th class="text-center" style=" font-size: 1em;" rowspan="2">ปี</th>

                </tr>
                    <th class="text-center" style=" font-size: 1em;">ปริญญาโท</th>
                    <th class="text-center" style=" font-size: 1em;">ปริญญาเอก</th>
                    <th class="text-center" style=" font-size: 1em;">ผศ.</th>
                    <th class="text-center" style=" font-size: 1em;">รศ.</th>
                    <th class="text-center" style=" font-size: 1em;">ปฏิบัติงาน</th>
                    <th class="text-center" style=" font-size: 1em;">ลาศึกษา</th>
                
               

                <!-- <tr>
                                                    <th rowspan="2">สาขาวิชา</th>
                                                    <th colspan="2">ระดับการศึกษา</th>
                                                    <th rowspan="2">ผู้ช่วยสอน</th>
                                                    <th rowspan="2">อาจารย์</th>
                                                    <th colspan="2">ตำแหน่งทางวิชาการ</th>
                                                    <th colspan="2">สถานะ</th>
                                                    <th rowspan="2">รวม</th>
                                                    <th rowspan="2">ปี</th>
                                                    <th rowspan="2">Update</th>
                                                    <th rowspan="2">Delete</th>
                                                </tr>
                                                <tr>
                                                    <th>ปริญญาโท</th>
                                                    <th>ปริญญาเอก</th>
                                                    <th>ผศ.</th>
                                                    <th>รศ.</th>
                                                    <th>ปฏิบัติงาน</th>
                                                    <th>ลาศึกษา</th>
                                                </tr> -->

            </thead>
            <tbody>
                <tr v-for="datas,i in data" :key="i">
                    <td>{{ datas.faculty }}</td>
                    <td>{{ datas.master }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    <!-- <pre>{{data}}</pre> -->
    <pre>{{year}}</pre>
</div>
</template>

<script>
import { end_point , academicpower } from '../../config/config';
const url  = end_point + academicpower
import Swal from 'sweetalert2'
export default {
    data(){
        return {
            data: {},
            year: {
                year:""
            }

        }
    },  
    async mounted(){
        try {
            const response = await fetch(
                url,
                console.log(fetch)
                )
                const content = await response.json()
                console.log(content)
                this.data = content
                this.year = content

        }catch (error){

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

tr th {
    text-align: center;
}
</style>
