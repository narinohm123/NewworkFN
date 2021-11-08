<template>
<div>
    <div>
        <div style="height: 1.5vh;"></div>
        <div class="Hed">
            <h1 class="font-weight-black" style=" font-size: 1.2em;">ข้อมูลการอบรม/สัมมนา/ดูงาน ของบุคลากร ประจำปีงบประมาณ</h1>
        </div>
    </div>
    <div class="HTable">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center font-weight-black" style=" font-size: 1em;" rowspan="2">สังกัด</th>
                        <th class="text-center" style=" font-size: 1em;" rowspan="2">จำนวนเต็ม</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">อบรม</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">สัมมนา</th>
                        <th class="text-center" style=" font-size: 1em;" colspan="2">ดูงาน</th>

                    </tr>
                    <tr>
                        <th class="text-center" style=" font-size: 1em;">คน</th>
                        <th class="text-center" style=" font-size: 1em;">ครั้ง</th>
                        <th class="text-center" style=" font-size: 1em;">คน</th>
                        <th class="text-center" style=" font-size: 1em;">ครั้ง</th>
                        <th class="text-center" style=" font-size: 1em;">คน</th>
                        <th class="text-center" style=" font-size: 1em;">ครั้ง</th>
                    </tr>

                </thead>
                <tbody style="background:#F2F2F2; border: 2px solid white;">

                    <tr v-for="datas,i in data" :key="i">
                        <td>{{ datas.faculty }}</td>
                        <td class="text-center">{{ datas.total }}</td>
                        <td class="text-center">{{ datas.train_people }}</td>
                        <td class="text-center">{{ datas.train_time }}</td>
                        <td class="text-center">{{ datas.seminar_people }}</td>
                        <td class="text-center">{{ datas.seminar_time }}</td>
                        <td class="text-center">{{ datas.observe_people }}</td>
                        <td class="text-center">{{ datas.observe_time }}</td>

                    </tr>
                </tbody>
                
            </template>
        </v-simple-table>
    </div>
    
    <!-- <v-text-field v-model="newevent" label="Enter Task (press enter)" @keypress.enter="addevent"> -->
    <!-- <v-text-field> -->
    <pre>{{data}}</pre>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
} from 'vuex'
import {
    end_point,
    events
} from '../../../config/config';
const url = end_point + events
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            data: {},
            newEvent: {
                year: '',
                faculty: '',
                total: '',
                train_people: '',
                train_time: '',
                seminar_people: '',
                seminar_time: '',
                observe_people: '',
                observe_time: ''
            },
            editingEvent: {
                index: -1,
                title: ''
            }
            // year: {
            //     year: ""
            // }

        }
    },
    methods: {
        ...mapState('Event', ['Event']),
        ...mapState('projects', ['projects']),
        ...mapGetters('Event', ['sortedEvent'])
    },
    created() {
        this.getAllEvent()
        this.getProjects()
    },
    methods: {
        ...mapMutations('event', ['edit', 'toggle']),
        ...mapActions('Event',
            ['getAllEvent', 'postNewEvent', 'deleteEvent', 'patchEvent']
        ),
        ...mapActions('projects',
            ['getProjects']
        ),
        filteredEvent(cat) {
            let category = cat || 1
            if (this.tab === 1) {
                category = 2
            } else if (this.tab === 3) {
                category = 3
            }
            return this.sortedEvent.filter((Event) => {
                return Event.category === category
            })
        },
        toggleNewEvent() {
            this.newEvent.show = !this.newEvent.show
            if (this.newEvent.show) {
                this.$nextTick(function () {
                    this.$refs.newEventTitle.focus()
                })
            }
        },

        addEvent() {
            this.postNewEvent(this.newEvent)
            this.newEvent = ''
        },
        editEvent(index) {
            this.editingEvent = {
                ...this.Event[index]
            }
        },
        removeEvent(EventId) {
            this.deleteEvent(EventId)
        },
        cancelEdit() {
            this.editingEvent = {}
        },
        saveEdit() {
            const payload = {
                id: this.editingEvent.id,
                EventData: this.editingEvent
            }
            delete payload.EventData.id
            this.patchEvent(payload)
            this.cancelEdit()

        },
        toggleChecked(Event) {
            const payload = {
                id: Event.id,
                Event: {
                    completed: !Event.completed
                }
            }
            this.patchEvent(payload)
        }
    },
    // async mounted() {
    //     try {
    //         const response = await fetch(
    //             url,
    //             console.log(fetch)
    //         )
    //         const content = await response.json()
    //         console.log(content)
    //         this.data = content
            // this.year = content

        // } catch (error) {

    //     }
    // }

}
</script>

<style>
.Hed {
    display: flex;
    justify-content: center;
    height: 3vh;
}

tr th {
    text-align: center;
    background: #DEEBF7;
    border: 2px solid white;
}

.HTable {
    margin: 10px;
    padding: 10px;
}
</style>
