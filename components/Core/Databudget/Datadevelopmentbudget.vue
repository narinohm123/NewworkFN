<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลการใช้งบประมาณพัฒนาศักยภาพบุคลากร</h1>
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
            <tbody style="background:#F2F2F2; border: 2px solid white;">
                
                <tr v-for="datas,i in data" :key="i">
                    <td class="text-center">{{ datas.budgetyear }}</td>
                    <td class="text-center">{{ datas.initial_budget }}</td>
                    <td class="text-center">{{ datas.total_budget }}</td>
                    <td class="text-center">{{ datas.balance }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</div>
    <pre>{{data}}</pre>
    <pre>{{year}}</pre>
    <!-- <pre>{{year}}</pre> -->
</div>
</template>

<script>
import {
    end_point,
    budgets
} from '../../../config/config';
const url = end_point + budgets
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
.HTable{
    margin: 10px;
    padding: 10px;
}
</style>
