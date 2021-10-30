<template>
<div>

    <div class="d-flex flex-row">
        <div class="p-2 m-0 w-1/4 h-full w-full h-full  ">
            <div style="display: flex; justify-content: center;">
                <v-sheet class="w-full h-full w-max p-1 d-flex flex-row p-2 " style="display: flex;justify-content: center;" color="white" elevation="2" height="30vh" width="20vw">
                    <div style="display: flex; justify-content: center; width:100%; height:100%;">
                        <img :src="`${profile.image}`" width="50%">
                    </div>
                </v-sheet>
            </div>
        </div>

        <!-- <pre>
          {{profile}}
      
        </pre> -->

        <div class="p-0.5 m-1 w-3/4 w-full h-full border-1 line rounded " style="height:76vh; width:75vw; ">

            <div class="d-flex flex-row ">
                <div class="w-max d-flex flex-column items-center " width="30vw">
                    <v-sheet class="w-full h-full w-max p-1 d-flex flex-row p-2 " style="display: flex;justify-content: center;" color="white" elevation="2" height="6vh" width="24vw">
                        <div class="w-max d-flex " width="30vw">
                            <v-card class="p-2 border rounded text-1 bg-yellow-800 w-max " style="background:#F8CBAD; display: flex; justify-content: center;width:10vw; ">ข้อมูลทั่วไป</v-card>
                        </div>
                    </v-sheet>
                    <div class="d-flex flex-row p-1">
                        <v-sheet class="w-full h-full w-max p-1 d-flex flex-row p-2" color="white" elevation="2" height="68.4vh" width="24vw">

                            <div class="w-max p-1 ">
                                <p class="m-0 mb-0 p-1 ">เลขที่ตำแหน่ง</p>
                                <p class="m-0 mb-0 p-1 ">ชื่อ-สกุล(TH)</p>
                                <p class="m-0 mb-0 p-1 ">ชื่อ-สกุล(EN)</p>
                                <p class="m-0 mb-0 p-1 ">ประเภทบุคลากร</p>
                                <p class="m-0 mb-0 p-1 ">สายงาน</p>
                                <p class="m-0 mb-0 p-1 ">ตำแหน่งงาน</p>
                                <p class="m-0 mb-0 p-1 ">ตำแหน่งทางวิชาาการ</p>
                                <p class="m-0 mb-0 p-1 ">ตำแหน่งบริหาร</p>
                                <p class="m-0 mb-0 p-1 ">วันที่เข้าทำงาน</p>
                                <p class="m-0 mb-0 p-1 ">วันที่บรรจุ</p>
                                <p class="m-0 mb-0 p-1 ">สถานะปฏิบัติงาน</p>
                                <p class="m-0 mb-0 p-1 ">วันเดือนปีเกิด</p>
                                <p class="m-0 mb-0 p-1 ">สัญชาติ</p>
                                <p class="m-0 mb-0 p-1 ">ศาสนา</p>
                                <p class="m-0 mb-0 p-1 ">เบอร์โทร</p>
                                <p class="m-0 mb-0 p-1 ">อีเมล ม.พะเยา</p>
                                <p class="m-0 mb-0 p-1 ">อีเมล ส่วนตัว</p>
                                <p class="m-0 mb-0 p-1 ">ที่อยู่ปัจจุบัน</p>
                            </div>
                            <div class="border-l-2 p-1 ">
                                <p class="m-0 mb-0 p-1 ">{{profile.id_Position}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.first_name}} {{profile.last_name}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.name_en}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.personal_type}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.line_of_work}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.position}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.academic_position}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.director_position}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.start_work_date}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.placement_date}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.status_job}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.date_birth}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.nationality}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.religion_con}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.phone}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.email_UP}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.email}}</p>
                                <p class="m-0 mb-0 p-1 ">{{ profile.address}}</p>
                            </div>
                        </v-sheet>
                    </div>
                </div>
                <div class="w-max d-flex flex-column items-center ">
                    <div>
                        <v-sheet class="w-full h-full w-max p-1 d-flex flex-row p-2 " style="display: flex;justify-content: center; " color="white" elevation="2" height="6vh" width="49.5vw">
                            <div class="w-max d-flex " width="30vw">
                                <v-card class="p-2 border rounded text-1 bg-yellow-800 w-max " style="background:#F8CBAD; display: flex; justify-content: center;width:10vw; ">ข้อมูลวุฒิการศึกษา</v-card>
                            </div>
                        </v-sheet>
                    </div>
                    <div class="d-flex flex-row p-1 ">
                        <v-sheet class="w-full h-full w-max p-2 d-flex flex-row " color="white" elevation="2" height="68.4vh" width="49.5vw">
                            <div style="width: 17vw;">
                                <div class="m-2">

                                    &ocir; ปริญญาตรี

                                </div>
                                <div class="d-flex flex-row " width="30vw">

                                    <div class="w-max p-1">
                                        <p class="m-0 mb-0 p-1">วุฒิการศึกษา</p>
                                        <p class="m-0 mb-0 p-1">สาขาวิชา</p>
                                        <p class="m-0 mb-0 p-1">สถานศึกษา</p>
                                        <p class="m-0 mb-0 p-1">จังหวัด</p>
                                        <p class="m-0 mb-0 p-1">ประเทศ</p>
                                        <p class="m-0 mb-0 p-1">วันที่เข้าศึกษา</p>
                                        <p class="m-0 mb-0 p-1">วันที่จบการศึกษา</p>
                                        <p class="m-0 mb-0 p-1">เกรดเฉลี่ย</p>
                                        <p class="m-0 mb-0 p-1">เกียรตินิยม</p>
                                        <p class="m-0 mb-0 p-1">วุฒิที่ใช้บรรจุ</p>
                                    </div>
                                    <div class="border-l-2 p-1 ">
                                        <!-- <p  class="m-0 mb-0 p-1">{{ profile.degree}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.faculty}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.university}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.province}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.country}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.study_date}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.graduate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.gpa}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.honors}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.use_choice_con}}</p> -->
                                    </div>

                                </div>

                            </div>
                            <div style="width: 17vw;">
                                <div class="m-2">
                                    &ocir; ปริญญาโท
                                </div>
                                <div class="d-flex flex-row ">
                                    <div class="w-max p-1">
                                        <p class="m-0 mb-0 p-1">วุฒิการศึกษา</p>
                                        <p class="m-0 mb-0 p-1">สาขาวิชา</p>
                                        <p class="m-0 mb-0 p-1">สถานศึกษา</p>
                                        <p class="m-0 mb-0 p-1">จังหวัด</p>
                                        <p class="m-0 mb-0 p-1">ประเทศ</p>
                                        <p class="m-0 mb-0 p-1">วันที่เข้าศึกษา</p>
                                        <p class="m-0 mb-0 p-1">วันที่จบการศึกษา</p>
                                        <p class="m-0 mb-0 p-1">เกรดเฉลี่ย</p>
                                        <p class="m-0 mb-0 p-1">เกียรตินิยม</p>
                                        <p class="m-0 mb-0 p-1">วุฒิที่ใช้บรรจุ</p>
                                    </div>
                                    <div class="border-l-2 p-1 ">
                                        <!-- <p  class="m-0 mb-0 p-1">{{ profile.degree_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.faculty_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.university_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.province_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.country_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.study_date_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.graduate_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.gpa_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.honors_Master}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.use_choice_con_Master}}</p> -->
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="m-2">
                                    &ocir; ปริญญาเอก
                                </div>
                                <div class="d-flex flex-row ">
                                    <div class="w-max p-1">
                                        <p class="m-0 mb-0 p-1">วุฒิการศึกษา</p>
                                        <p class="m-0 mb-0 p-1">สาขาวิชา</p>
                                        <p class="m-0 mb-0 p-1">สถานศึกษา</p>
                                        <p class="m-0 mb-0 p-1">จังหวัด</p>
                                        <p class="m-0 mb-0 p-1">ประเทศ</p>
                                        <p class="m-0 mb-0 p-1">วันที่เข้าศึกษา</p>
                                        <p class="m-0 mb-0 p-1">วันที่จบการศึกษา</p>
                                        <p class="m-0 mb-0 p-1">เกรดเฉลี่ย</p>
                                        <p class="m-0 mb-0 p-1">เกียรตินิยม</p>
                                        <p class="m-0 mb-0 p-1">วุฒิที่ใช้บรรจุ</p>
                                    </div>
                                    <div class="border-l-2 p-1 ">
                                        <!-- <p  class="m-0 mb-0 p-1">{{ profile.degree_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.faculty_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.university_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.province_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.country_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.study_date_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.graduate_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.gpa_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.honors_doctorate}}</p>
                                        <p  class="m-0 mb-0 p-1">{{ profile.use_choice_con_doctorate}}</p> -->
                                    </div>
                                </div>
                            </div>
                            <template>
                                <v-row justify="center">
                                    <v-dialog v-model="dialog" fullscreen persistent max-width="100vw">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                                Open Dialog
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5">User Profile</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-form @submit.prevent="saveData()">
                                                        <v-row>
                                                            <v-col cols="2">
                                                                <v-text-field v-model="profile.id_position" label="เลขที่ตำแหน่ง"></v-text-field>
                                                                <v-text-field v-model="profile.first_name" label="ชื่อ"></v-text-field>
                                                                <v-text-field v-model="profile.last_name" label="นามสกุล"></v-text-field>
                                                                <v-text-field v-model="profile.name_en" label="ชื่อ-กลุ่ม(en)"></v-text-field>
                                                                <v-text-field v-model="profile.personal_type" label="ประเภทบุคลากร"></v-text-field>
                                                                <v-text-field v-model="profile.line_of_work" label="สายงาน"></v-text-field>
                                                                <v-text-field v-model="profile.position" label="ตำแหน่งงาน"></v-text-field>
                                                                <v-text-field v-model="profile.academic_position" label="ตำแหน่งทางวิชาการ"></v-text-field>
                                                                <v-text-field v-model="profile.director_position" label="ตำแหน่งบริหาร"></v-text-field>
                                                            </v-col>
                                                            <v-col cols="2">
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.start_work_date" label="วันที่เข้าทำงาน" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.start_work_date" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-select :items="status" item-text="name" item-value="value" v-model="profile.status" label="สถานะปฎิบัติงาน"></v-select>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.placement_date" label="วันที่บรรจุ" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.placement_date" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.date_birth" label="วันเดือนปีเกิด" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.date_birth" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-text-field v-model="profile.nationality" label="สัญชาติ"></v-text-field>
                                                                <v-text-field v-model="profile.religion_con" label="ศาสนา"></v-text-field>
                                                                <v-text-field v-model="profile.phone" label="เบอร์โทร"></v-text-field>
                                                                <v-text-field v-model="profile.email_UP" label="อีเมล ม.พะเยา"></v-text-field>
                                                                <v-text-field v-model="profile.email" label="อีเมล ส่วนตัว"></v-text-field>

                                                            </v-col>
                                                            <v-col cols="2">
                                                                <v-textarea solo name="input-7-4" label="ที่อยู่"></v-textarea>

                                                            </v-col>
                                                            <v-col cols="2">
                                                                ปริญญาตรี
                                                                <v-text-field v-model="profile.degree" label="วุฒิการศึกษา"></v-text-field>
                                                                <v-text-field v-model="profile.faculty" label="สาขาวิชา"></v-text-field>
                                                                <v-text-field v-model="profile.university" label="สถานศึกษา"></v-text-field>
                                                                <v-text-field v-model="profile.province" label="จังหวัด"></v-text-field>
                                                                <v-text-field v-model="profile.country" label="ประเทศ"></v-text-field>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.study_date" label="วันที่เข้าศึกษา" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.study_date" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.graduate" label="วันที่จบการศึกษา" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.graduate" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-text-field v-model="profile.gpa" label="เกรดเฉลี่ย"></v-text-field>
                                                                <v-text-field v-model="profile.honors" label="เกียรตินิยม"></v-text-field>
                                                                <v-select :items="use" item-text="name" item-value="value" v-model="profile.use_choice_con" label="วุฒิที่ใช้"></v-select>
                                                            </v-col>
                                                            <v-col cols="2">
                                                                ปริญญาโท
                                                                <v-text-field v-model="profile.degree_Master" label="วุฒิการศึกษา"></v-text-field>
                                                                <v-text-field v-model="profile.faculty_Master" label="สาขาวิชา"></v-text-field>
                                                                <v-text-field v-model="profile.university_Master" label="สถานศึกษา"></v-text-field>
                                                                <v-text-field v-model="profile.province_Master" label="จังหวัด"></v-text-field>
                                                                <v-text-field v-model="profile.country_Master" label="ประเทศ"></v-text-field>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.study_date_Master" label="วันที่เข้าศึกษา" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.study_date_Master" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.graduate_Master" label="วันที่จบการศึกษา" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.graduate_Master" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-text-field v-model="profile.gpa_Master" label="เกรดเฉลี่ย"></v-text-field>
                                                                <v-text-field v-model="profile.honors_Master" label="เกียรตินิยม"></v-text-field>
                                                                <v-select :items="use" item-text="name" item-value="value" v-model="profile.use_choice_con_Master" label="วุฒิที่ใช้"></v-select>
                                                            </v-col>
                                                            <v-col cols="2">
                                                                ปริญญาเอก
                                                                <v-text-field v-model="profile.degree_doctorate" label="วุฒิการศึกษา"></v-text-field>
                                                                <v-text-field v-model="profile.faculty_doctorate" label="สาขาวิชา"></v-text-field>
                                                                <v-text-field v-model="profile.university_doctorate" label="สถานศึกษา"></v-text-field>
                                                                <v-text-field v-model="profile.province_doctorate" label="จังหวัด"></v-text-field>
                                                                <v-text-field v-model="profile.country_doctorate" label="ประเทศ"></v-text-field>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.study_date_doctorate" label="วันที่เข้าศึกษา" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.study_date_doctorate" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-text-field v-model="profile.graduate_doctorate" label="วันที่จบการศึกษา" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                                    </template>
                                                                    <v-date-picker v-model="profile.graduate_doctorate" no-title scrollable>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn text color="primary" @click="menu = false">
                                                                            Cancel
                                                                        </v-btn>
                                                                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                                                                            OK
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                                <v-text-field v-model="profile.gpa_doctorate" label="เกรดเฉลี่ย"></v-text-field>
                                                                <v-text-field v-model="profile.honors_doctorate" label="เกียรตินิยม"></v-text-field>
                                                                <v-select :items="use" item-text="name" item-value="value" v-model="profile.use_choice_con_doctorate" label="วุฒิที่ใช้"></v-select>
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
                        </v-sheet>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <pre> {{profile}} </pre>
</div>
</template>

<script>
import {
    get,
    post
} from '../../config/service'
import {
    end_point,
    user,
    updateuser
} from '../../config/config';
import axios from '@nuxtjs/axios'
import Swal from 'sweetalert2'
const url = end_point + user
const data = end_point + updateuser

export default {
    data() {
        return {
            profile: {},
            dialog: false,
            form: {},
            status: [{
                    name: "ปฎิบัติงาน",
                    value: 'ปฎิบัติงาน'
                },
                {
                    name: "ลาศึกษา",
                    value: 'ลาศึกษา'
                },
            ],
            use: [{
                    name: "ใช้",
                    value: 'ใช้'
                },
                {
                    name: "ไม่ใช้",
                    value: 'ไม่ใช้'
                },
            ],
        }
    },
    async mounted() {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            })
            const content = await response.json();
            console.log(content)
            this.profile = content

            this.$nuxt.$emit('auth', true);
        } catch (error) {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'ไม่พบข้อมูล',
                showConfirmButton: false,
                timer: 1000
            })
        }

    },
    methods: {
        async saveData() {
            this.profile = this.form
            this.form.push(data)
            this.dialog = false
        }
    }

}
</script>

<style>
/* .line {
    border: 2px solid black;

} */
</style>
