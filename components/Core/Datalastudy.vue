<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลการลาศึกษาต่อของบุคลากร</h1>
        </div>
    </div>
    <v-simple-table >
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
                <!-- <tr v-for="datas,i in data" :key="i">
                    <td>{{ datas.faculty }}</td>
                    <td>{{ datas.master }}</td>
                </tr> -->
            </tbody>
        </template>
    </v-simple-table>
    <!-- <pre>{{data}}</pre> -->
    <!-- <pre>{{year}}</pre> -->
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

thead tr th  {
    text-align: center;
    border: 1px solid black;
}



</style>
