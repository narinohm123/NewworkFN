<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="300" style='font-size: 20px; '>
                            แผนพัฒนาบุคลากร</v-sheet>

                    </div>
                    <div style="height:3vh;"></div>
                    <div style="display: flex; justify-content: space-around;">
                        <div class="Hto">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on">
                                        กรุณาเลือกปี
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(academicd, index) in yearac" :key="index">
                                        <v-list-item-title @click="DevelopmentplanState = 0">{{ academicd.year }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
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
            <div style="display: flex; justify-content: center;">
                <Core-WebViewer :path="`${publicPath}webviewer`" url="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf" />
            </div>
        </div>
    </v-sheet>
</div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        DevelopmentplanState: {
            get() {
                // this.ContactTabinformation = this.$nuxt.$store.state.information
                return this.$nuxt.$store.state.Developmentplan
            },
            set(val) {
                // console.log('information', this.$nuxt.$store.state.information)
                this.$store.commit('set_Developmentplan', val)
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
</style>
