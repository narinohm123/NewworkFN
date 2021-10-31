<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">

                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="280" style='font-size: 20px; '>
                            ข้อมูลอัตรากำลัง
                        </v-sheet>
                    </div>
                    <div style="height:3vh;"></div>
                    <div style="display: flex; justify-content: space-around;">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on">
                                    บุคลากรสายวิชาการ
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(academicd, index) in yearac" :key="index">
                                    <v-list-item-title @click="PowerrateState = 0">{{ academicd.year }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on">
                                    บุคลลากรสายสนับสนุน
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(service, index) in yearsv" :key="index">
                                    <v-list-item-title @click="PowerrateState = 1, test(service.year)">{{ service.year }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div >
                        <div style="display: flex; justify-content: space-around;height: 8vh;    align-items: center;">
                            <div>
                                <template>
                                    <v-row justify="center">
                                        <v-dialog v-model="dialog" fullscreen persistent max-width="100vw">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                                    เเก้ไข
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <span class="text-h5">เเก้ไขข้อมูลอัตรากำลัง</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container>
                                                        <v-form @submit.prevent="saveData()">
                                                            <v-row>
                                                                <v-col cols="2">
                                                                    <v-text-field class="text-center" v-model="data.position" label="สาขาวิชา"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.master" label="ปริญญาโท"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.phd" label="ปริญญาเอก"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.exteach" label="ผู้ช่วยสอน"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.teach" label="อาจารย์"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.asst_prof" label="ผศ."></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.assoc_prof" label="รศ."></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.work" label="ปฏิบัติงาน"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.leave" label="ลาศึกษา"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.total" label="รวม"></v-text-field>
                                                                </v-col>

                                                            </v-row>
                                                            <v-btn block type="submit" color="success">Save</v-btn>
                                                        </v-form>
                                                    </v-container>
                                                    <small>*indicates required field</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" text @click="dialog = false">
                                                        Close
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-row>
                                </template>
                            </div>
                            <div>
                                <template>
                                    <v-row justify="center">
                                        <v-dialog v-model="dialog" fullscreen persistent max-width="100vw">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                                    เเก้ไข
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <span class="text-h5">เเก้ไขข้อมูลอัตรากำลัง</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container>
                                                        <v-form @submit.prevent="saveData()">
                                                            <v-row>
                                                                <v-col cols="2">
                                                                    <v-text-field class="text-center" v-model="data.s_position" label="ตำแหน่ง"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_bhd" label="ปริญญาตรี"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_master" label="ปริญญาโท"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_sf" label="ชำนาญการ"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_specific_sf" label="ชำนาญการพิเศษ"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_prof" label="เชี่ยวชาญ"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_specific_prof" label="เชี่ยวชาญพิเศษ"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_work" label="ปฏิบัติงาน"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_leave" label="ลาศึกษา"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="data.s_total" label="รวม"></v-text-field>
                                                                </v-col>

                                                            </v-row>
                                                            <v-btn block type="submit" color="success">Save</v-btn>
                                                        </v-form>
                                                    </v-container>
                                                    <small>*indicates required field</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" text @click="dialog = false">
                                                        Close
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-row>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>
    </div>
    <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="74.5vw">
        <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
            <div v-if="PowerrateState == 0">
                <Core-Datapower-Datapo />
            </div>
            <div v-if="PowerrateState == 1">
                <Core-Datapower-Datasupport />
            </div>

        </div>
    </v-sheet>

</div>
</template>

<script>
import {
    end_point,
    academicpower,
    serviceManpower
} from '../../config/config';
const url = end_point + academicpower
const urls = end_point + serviceManpower
export default {
    data() {
        return {
            data: {},
            academicdialog: false,
            servicedialog: false,
            powerratelist: ['ข้อมูลบุคลากร', 'บุคลลากรสายสนับสนุน'],
            yearac: [],
            yearsv: []
        }

    },
    async mounted() {
        try {
            const response = await fetch(
                url,
                // console.log(fetch)
            )
            const content = await response.json().then()
            console.log(content)
            this.yearac = content
            // this.year = content

        } catch (error) {

        }
        try {
            const rs = await fetch(
                urls,
                // console.log(fetch)
            )
            const ct = await rs.json().then()
            console.log(ct)
            this.yearsv = content
            // this.year = content

        } catch (error) {

        }

    },
    computed: {
        PowerrateState: {
            get() {
                // this.ContactTabinformation = this.$nuxt.$store.state.information
                return this.$nuxt.$store.state.powerrate
            },
            set(val) {
                // console.log('information', this.$nuxt.$store.state.information)
                this.$store.commit('set_powerrate', val)
                // console.log('information', this.$nuxt.$store.state.information)
            }
        },

    },
    methods: {
        async saveData() {
            this.data = this.form
            this.form.push(data)
            this.dialog = false
        }
        // async test(x) {
        //     console.log(x)
        // }
    },
}
</script>

<style>
.Herd {
    display: flex;
    justify-content: center;
    flex-direction: column;

}

.Hp {
    display: flex;
    align-items: center;
}

.Hto {
    display: flex;
    justify-content: center;
    height: 10vh;

}

.Htwo {
    display: flex;
    justify-content: center;
    height: 10vh;
}

.Data {
    display: flex;
    justify-content: center;
}

.Hdata {
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

thead tr th {
    text-align: center;
    background: #DEEBF7;
    border: 2px solid white;
    
}
</style>
