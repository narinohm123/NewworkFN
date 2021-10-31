<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="300" style='font-size: 20px; '>
                            ข้อมูลบุคลากรดีเด่น</v-sheet>

                    </div>

                    <div style="height:3vh;"></div>
                    <div style="display: flex; justify-content: space-around;">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on">
                                    คลิกเพื่อเลือกปีที่ต้องการ
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(data, index) in yearao" :key="index">
                                    <v-list-item-title @click="OutstanState = 0">{{ data.year }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div>
                        <div>
                            <template>
                                <v-row justify="center">
                                    <v-dialog v-model="dialog" fullscreen persistent max-width="100vw">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                                Open
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5">เเก้ไขข้อมูลบุคลากรดีเด่น ประจำปีงบประมาณ</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <h1 style=" font-size: 2em;">ข้อมูลบุคลากรดีเด่นบุคลากรสายวิชาการ</h1>
                                                    <v-form @submit.prevent="saveData()">

                                                        <v-row>
                                                            <v-col cols="2">
                                                                <v-text-field class="text-center" v-model="yearso.rank" label="ปีงบประมาณ"></v-text-field>
                                                                <v-text-field class="text-center" v-model="yearso.type_a" label="งบประมาณตั้งต้น"></v-text-field>
                                                                <v-text-field class="text-center" v-model="yearso.name" label="ใช้งบประมาณทั้งสิ้น"></v-text-field>

                                                            </v-col>

                                                        </v-row>
                                                        <v-btn block type="submit" color="success">Save</v-btn>
                                                    </v-form>
                                                    <div style="height: 1.5vh;"></div>
                                                    <h1 style=" font-size: 2em;">ข้อมูลบุคลากรดีเด่นบุคลากรสายบริการ</h1>
                                                    <v-form @submit.prevent="saveData()">

                                                        <v-row>
                                                            <v-col cols="2">
                                                                <v-text-field class="text-center" v-model="yearao.rank" label="ปีงบประมาณ"></v-text-field>
                                                                <v-text-field class="text-center" v-model="yearao.type_a" label="งบประมาณตั้งต้น"></v-text-field>
                                                                <v-text-field class="text-center" v-model="yearao.name" label="ใช้งบประมาณทั้งสิ้น"></v-text-field>

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
        </v-sheet>

    </div>
    <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="74.5vw">
        <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
            <div v-if="OutstanState == 0">
                <Core-Dataoutstanding-Dataoutstandingpersonel />
            </div>

        </div>
    </v-sheet>
</div>
</template>

<script>
import {
    end_point,
    academiceOutstand,
} from '../../config/config';
const url = end_point + academiceOutstand
export default {
    data() {
        return {
            academicdialog: false,
            servicedialog: false,
            year: [],
            yearso: [],
            yearao: []
        }

    },
    async created() {
        await this.yearfn();
    },
    async mounted() {
        // try {
        //     const response = await fetch(
        //         url,
        //         // console.log(fetch)
        //     )
        //     const content = await response.json().then()
        //     console.log(content)
        //     this.yearao = content
        //     // this.year = content

        // } catch (error) {

        // }
        // try {
        //     const response = await fetch(
        //         urls,
        //         // console.log(fetch)
        //     )
        //     const content = await response.json().then()
        //     console.log(content)
        //     this.yearso = content
        //     // this.year = content

        // } catch (error) {

        // }

    },
    computed: {
        OutstanState: {
            get() {
                // this.ContactTabinformation = this.$nuxt.$store.state.information
                return this.$nuxt.$store.state.outstan
            },
            set(val) {
                // console.log('information', this.$nuxt.$store.state.information)
                this.$store.commit('set_outstan', val)
                // console.log('information', this.$nuxt.$store.state.information)
            }
        },

    },
    methods: {
        async test(x) {
            console.log(x)
        },
        //this.year();
        async yearfn() {
            try {
                const response = await fetch(
                    urls,
                    // console.log(fetch)
                )
                const content = await response.json().then()
                console.log(content)
                this.yearso = content
                // this.year = content

            } catch (error) {

            }
            try {
                const response = await fetch(
                    url,
                    // console.log(fetch)
                )
                const content = await response.json().then()
                console.log(content)
                this.yearao = content
                // this.year = content

            } catch (error) {

            }
        }
    },
}
</script>

<style>
.Herd {
    display: flex;
    justify-content: center;
    flex-direction: column;

}

.Hto {
    display: flex;
    justify-content: center;
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

.Table {
    display: flex;
    justify-content: space-between;

}
</style>
