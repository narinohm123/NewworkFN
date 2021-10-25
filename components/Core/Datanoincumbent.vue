<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;"></h1>
        </div>
    </div>

<div class="HTable">
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-center" style=" font-size: 1em; " colspan="2">ข้อมูลการขอกำหนดตำแหน่งทางวิชาการ</th>

                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">ชื่อ-สกุล</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;">gg</td>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">ตำแหน่ง</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;"></td>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">สาขาตำแหน่งวิชาการ</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;"></td>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">วันที่ยื่นขอกำหนดตำแหน่ง</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;"></td>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">วันที่อนุมัติตำแหน่ง</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;"></td>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">ผลงานที่ยื่น</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;"></td>
                </tr>
                <tr>
                    <th style=" font-size: 1em; width:20vw; background:#F2F2F2; border: 2px solid white;">การเผยแพร่</th>
                    <td style=" font-size: 1em; background:#F2F2F2; border: 2px solid white;"></td>
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
