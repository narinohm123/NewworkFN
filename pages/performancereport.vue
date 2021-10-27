<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="300" style='font-size: 20px; '>
                            รายงานผลการดำเนินงาน</v-sheet>

                    </div>
                    <div>
                        <div class="Hto">
                        </div>
                    </div>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">2557</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">2558</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">2559</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">2560</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">2561</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">2562</v-btn>

                    <div>

                    </div>

                </div>
            </div>
        </v-sheet>

    </div>
    <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="74.5vw">
        <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
            <Core-WebViewerreport :path="`${publicPath}webviewerreport`" url="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"/>
        </div>
    </v-sheet>
</div>
</template>

<script>
export default {
    name: '',
    data (){
        return {
            publicPath: process.env.BASE_URL
        }
    }

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


.Hdata {
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
</style>
