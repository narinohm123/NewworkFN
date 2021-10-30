<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="300" style='font-size: 18px; '>
                            สถานะดำเนินการ
                        </v-sheet>

                    </div>
                    <div style="height:2vh;"></div>
                    <div style="display: flex; justify-content: space-around;">
                        <div class="Hto">
                            
                                    <v-btn @click="ActionstatusState = 0">
                                        การขอประเมินผลการสอนฯ
                                    </v-btn>

                            <!-- <h1 class="p-1 m-1 w-1/1 h-full" style='font-size: 18px; '>บุคลากรสายวิชาการ</h1> -->
                        </div>
                    </div>
                    <div>
                        <div class="Hto">

                            
                                    <v-btn @click="ActionstatusState = 1">
                                        การขอกำหนดตำแหน่งทางวิชาการ

                                    </v-btn>
                                
                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </v-sheet>

    </div>
    <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="74.5vw">
        <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
            <div v-if="ActionstatusState == 0">
                <Core-Dataaction-Dataactionstatus />
            </div>
            <div v-if="ActionstatusState == 1">
                <Core-Dataaction-Dataactionstatuss />
            </div>
        </div>
    </v-sheet>
</div>
</template>

<script>
import {
    end_point,
    pending,

} from '../../config/config';
const url = end_point + pending

export default {
    data() {
        return {
            data: {},
            academicdialog: false,
            servicedialog: false,
            powerratelist: ['ข้อมูลบุคลากร', 'บุคลลากรสายสนับสนุน'],
            yearac: [],

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

    },
    computed: {
        ActionstatusState: {
            get() {
                // this.ContactTabinformation = this.$nuxt.$store.state.information
                return this.$nuxt.$store.state.actionstatus
            },
            set(val) {
                // console.log('information', this.$nuxt.$store.state.information)
                this.$store.commit('set_actionstatus', val)
                // console.log('information', this.$nuxt.$store.state.information)
            }
        },
        

    },
    methods: {
        async test(x) {
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
    height: 5vh;
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

.Hp {
    display: flex;
    align-items: center;
}
</style>
