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
            }
        },
        
    },
    methods: {
        async test(x){
            console.log(x)
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

tr th {
    text-align: center;
    background: #DEEBF7;
    border: 2px solid white;
}
</style>
