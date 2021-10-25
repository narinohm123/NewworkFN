<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลการใช้งบประมาณพัฒนาศักยภาพบุคลากรสายบริการ</h1>
        </div>
    </div>
<div class="HTable">
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-center" style=" font-size: 1em;" rowspan="2">ปีงบประมาณ</th>
                    <th class="text-center" style=" font-size: 1em;" rowspan="2">งบประมาณตั่งต้น</th>
                    <th class="text-center" style=" font-size: 1em;" rowspan="2">ใช้งบประมาณทั้งสิ้น</th>
                    <th class="text-center" style=" font-size: 1em;" rowspan="2">คงเหลือ</th>

                </tr>

            </thead>
            <tbody>
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
    border: 1px solid black;
}
.HTable{
    margin: 10px;
    padding: 10px;
}
</style>
