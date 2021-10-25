<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="300" style='font-size: 18px; '>
                            ข้อมูลการลาศึกษา
                        </v-sheet>

                    </div>
                    <div>
                        <div class="Hto">
                        </div>
                    </div>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">คอมพิวเตอร์ธุรกิจ</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">เทคโนโลยีสารสนเทศ</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">วิทยาการคอมพิวเตอร์</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">ภูมิสารสนเทศศาสตร์</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">วิศวกรรมคอมพิวเตอร์</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">วิศวกรรมซอฟต์แวร์</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">วิศวกรรมสารสนเทศและการสื่อสาร</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">คอมพิวเตอร์กราฟิกและมัลติมีเดีย</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">สำนักงานคณะ</v-btn>

                    <div>

                    </div>
                </div>
            </div>
        </v-sheet>

    </div>
    <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="74.5vw">
        <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh;">
            <Core-Datalastudy/>
        </div>
    </v-sheet>
</div>
</template>

<script>
export default {

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
