<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="380" style='font-size: 20px; '>
                            ข้อมูลการอบรม/สัมมนา/ดูงาน
                        </v-sheet>
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
                                <v-list-item v-for="(data, index) in year" :key="index">
                                    <v-list-item-title @click="SeeworkState = 0">{{ data.year }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
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
                                                    <span class="text-h5">เเก้ไขข้อมูล</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container>
                                                        <v-form @submit.prevent="saveData()">
                                                            <v-row>
                                                                <v-col cols="2">
                                                                    <v-text-field class="text-center" v-model="year.position" label="สาขาวิชา"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.total" label="จำนวนเต็ม"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.train_people" label="คน"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.train_time" label="ครั้ง"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.seminar_people" label="คน"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.seminar_time" label="ครั้ง"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.observe_people" label="คน"></v-text-field>
                                                                    <v-text-field class="text-center" v-model="year.observe_time" label="ครั้ง"></v-text-field>

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
            <div v-if="SeeworkState == 0">
                <Core-Datasee-Dataseework />
            </div>
        </div>
    </v-sheet>
</div>
</template>

<script>
import {
    end_point,
    events,
} from '../../config/config';
const url = end_point + events
export default {
    data() {
        return {

            academicdialog: false,
            servicedialog: false,
            year: [],

        }

    },
    // methods: {
    //     getData() {
    //         this.axios.get(url).then((result) => {
    //             console.warn(result)
    //             this.users = result.data
    //         })
    //     },
    //     deleteUser(id) {
    //         this.axios.delete(url + id).then((result) => {
    //             this.getData();
    //         })
    //     }
    // },
    // mounted() {
    //     this.getData()
    // },

    async mounted() {
        try {
            const response = await fetch(
                url,
                // console.log(fetch)
            )
            const content = await response.json().then()
            console.log(content)
            this.year = content
            // this.year = content

        } catch (error) {

        }

    },
    computed: {
        SeeworkState: {
            get() {
                // this.ContactTabinformation = this.$nuxt.$store.state.information
                return this.$nuxt.$store.state.datasee
            },
            set(val) {
                // console.log('information', this.$nuxt.$store.state.information)
                this.$store.commit('set_datasee', val)
                // console.log('information', this.$nuxt.$store.state.information)
            },
            // saveData() {
            //     return this.$nuxt.$store.state.datasee
            // }
        },

    },
    methods: {
        async test(x) {
            console.log(x)
        }
    },

    // methods: {
    //     submitSearch() {
    //         this.$route.push({
    //             name: 'search',
    //             query: {
    //                 q: this.q
    //             }
    //         });

    //also tried the following
    //nuxt.$router.push({name: 'search', query: {q: this.q}});

    // }
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

tr th {
    text-align: center;
    background: #DEEBF7;
    border: 2px solid white;
}
</style>
