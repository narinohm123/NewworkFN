<template>
<div>

 <div v-if="informationState == 0">
        <Pageone-profile/>
    </div>

    <div v-if="informationState == 1">
        <Subpage-fielded/>
    </div>

    <div v-if="informationState == 2">
        <Subpage-powerrate/>
    </div>



    <div v-if="developmentState == 0"> 
        <Subpage-seework/> 
    </div>

    <div v-if="developmentState == 1">
        <Subpage-developmentbudget/>
    </div>

    <div v-if="developmentState == 2">
        <Subpage-lastudy/>
    </div>

    <div v-if="developmentState == 3">
        <Subpage-outstandingpersonel/>
    </div>




    <div v-if="positionState == 0">
        <Subpage-actionstatus/>
    </div>


    <div v-if="positionState == 1">
        <Subpage-documentation/>
    </div>
    

    <div v-if="positionState == 2">
        <Subpage-incumbent/>
        
    </div>

<!-- <div v-if="positionState == 2"><Subpage-incumbent/>
        <div class="d-flex flex-row">
            <div class="p-0 m-0 w-1/4 h-full  ">
                <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="10" height="76vh" width="23vw">
                    <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                        
                    </div>
                </v-sheet>

            </div>
            <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="10" height="76vh" width="74.5vw">
                <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
                 component 
                </div>
            </v-sheet>
        </div>
    </div> -->
</div>
</template>

<script>
export default {
computed: {
        informationState: {
            get() {
                return this.$nuxt.$store.state.information
            }
        },
        developmentState: {
            get() {
                return this.$nuxt.$store.state.development
            }
        },
        positionState: {
            get() {
                return this.$nuxt.$store.state.position
            }
        }
    }
}

</script>

<style>
.line {
    border: 2px solid rgb(221, 185, 185);
}
</style>
