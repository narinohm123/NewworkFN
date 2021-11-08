<template>
<div class="d-flex flex-row">
    <div class="p-0 m-0 w-1/4 h-full  ">
        <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="23vw">
            <div class="p-0 m-0 w-3/4 h-full border-5 line rounded " style="height:75vh; width:22.5vw; ">
                <div class="Herd">
                    <div class="Data">
                        <v-sheet class="Hdata" color="#AE78D6" elevation="4" height="50" rounded width="280" style='font-size: 20px; '>
                            ข้อมูลบุคลากร</v-sheet>

                    </div>
                    <div>
                        <div class="Hto">
                            <h1 class="p-1 m-1 w-1/1 h-full" style='font-size: 18px; '>บุคลากรสายวิชาการ</h1>
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

                    <div>
                        <div class="Htwo">
                            <h1 class="p-1 m-1 w-1/1 h-full" style='font-size: 18px; '>บุคลากรสายสนับสนุน</h1>
                        </div>
                    </div>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">งานบริหารทั่วไป</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">งานวิชาการ</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">งานแผนงาน</v-btn>
                    <v-btn block depressed elevation="1" large plain style="height:4vh;">งานปฏิบัติการ</v-btn>

                </div>
            </div>
        </v-sheet>

    </div>
    <v-sheet class="p-1 m-1 w-3/4 h-full" color="white" elevation="5" height="76vh" width="74.5vw">
        <div class=" p-0 m-0 w-3/4 h-full  border-3 line rounded " style="width:74vw; height:75vh; display:flex; justify-content: space-between;">
            <!-- <div class="d-flex wrap " v-for="(user,index) in users" :key="index">
               <Cards-User :fname="user.first_name" :lname="user.last_name" />
           </div> -->
            <!-- <Card-Pagination> -->
            <template>
                <div class="d-flex flex-wrap ">
                    <Cards-User v-for="(post, i) in users" :key="i" :post="post" />
                </div>
            </template>
            <!-- </Card-Pagination> -->

        </div>
    </v-sheet>
</div>
</template>

<script>
import {
    end_point,
    alluser
} from '../../config/config';
const url = end_point + alluser
export default {
    data: () => {
        return ({
            users: [],
        })
    },
    async mounted() {
        try {
            const response = await fetch(
                url,
                // console.log(fetch)
            )
            const content = await response.json().then()
            console.log(content)
            this.users = content
            // this.year = content

        } catch (error) {

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

.Htwo {
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
