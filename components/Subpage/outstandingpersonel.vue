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
                    
                    <div>
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
            yearso:[],
            yearao:[]
        }

    },
    async created(){
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
