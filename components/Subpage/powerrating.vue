<template>
   <div v-if="informationState == 2">
        <div class="d-flex flex-row">
            <div class="p-0 m-0 w-1/4 h-full  ">
                <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="10" height="76vh" width="23vw">
                    <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                        <div class="Herd">
                          <div class="Data" >
                            <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="280" style='font-size: 20px; '>
                            ข้อมูลอัตรากำลัง
                        </v-sheet>
                          
                            </div>
                            <div>
                            <div class="Hto">
                                <h1 class="p-1 m-1 w-1/1 h-full" style='font-size: 18px; '>บุคลากรสายวิชาการ</h1>
                                </div>
                                  </div>                          
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2563</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2562</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2561</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2560</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2559</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2558</v-btn>

                                          
                              <div>
                            <div class="Htwo">
                                <h1 class="p-1 m-1 w-1/1 h-full"  style='font-size: 18px; '>บุคลากรสายสนับสนุน</h1>
                                </div>
                                  </div>                          
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2563</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2562</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2561</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2560</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2559</v-btn>
                                  <v-btn block depressed elevation="1"  large plain style="height:4vh;">2558</v-btn>

                            </div>
                        </div>
                    </v-sheet>                    
            </div>
            <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="10" height="76vh" width="74.5vw">
                <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
                  <!-- <Core-Datasupport> -->
                </div>
            </v-sheet>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.Herd{
  display: flex;
  justify-content: center;
  flex-direction: column;
  
}
.Hto{
  display: flex;
  justify-content: center;
}
.Htwo{
  display: flex;
  justify-content: center;
}
.Data{
    display: flex;
    justify-content: center;
}
.Hdata{
  margin: 5px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  font-weight : bold;
} 
</style>