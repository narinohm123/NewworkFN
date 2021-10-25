<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">สถานะการดำเนินการประเมินผลการสอนและเอกสารที่ใช้ประเมินผลการสอน</h1>
        </div>
    </div>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-center" style=" font-size: 1em; " colspan="2">ข้อมูลการขอกำหนดตำแหน่งทางวิชาการ</th>

                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">ชื่อ-สกุล</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">ตำแหน่ง</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">สาขาตำแหน่งวิชาการ</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">วันที่ยื่นขอกำหนดตำแหน่ง</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">วันที่อนุมัติตำแหน่ง</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">ผลงานที่ยื่น</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw;">การเผยแพร่</th>
                    <th style=" font-size: 1em;"></th>
                </tr>
                <th></th>

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
</style>
