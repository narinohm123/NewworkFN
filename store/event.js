import axios from 'axios'


const API_URL = 'http://localhost:8000'

export const state = () => ({
  Event : []
})

export const getters = {
  sortedEvent (state) {
    const Event = [...state.Event]
    return Event.sort((EventA, EventB) => {
      if (EventA.completed) {
        return 1
      }
      return -1
    })
  }
}

export const actions = {
  async getAllEvent ({ commit }) {
    const { data } = await axios.get(`${API_URL}/event/`)
    commit('set', data)
  },
  async postNewEvent ({ commit }, payload) {
    const { data } = await axios.post(`${API_URL}/event/`, payload)
    commit('add', data)
  },
  async deleteEvent ({ commit }, id) {
    await axios.delete(`${API_URL}/events/${id}/`)
    commit('remove', id)
  },
  async patchEvent ({ commit }, payload) {
    const { id, Event } = payload
    await axios.patch(`${API_URL}/events/${id}/`, Event)
    commit('edit', payload)
  }
}

export const mutations = {
  set (state, Event) {
    state.Event = Event
  },
  add (state, Event) {
    state.Event.push(Event)
  },
  edit (state, payload) {
    const { id, Event } = payload

    const index = state.Event.findIndex((Event) => {
      return Event.id === id
    })
    const updatedEvent = {
      ...state.Event[index],
      ...Event
    }
    state.Event.splice(index, 1, updatedEvent)
  },
  remove (state, id) {
    const index = state.Event.findIndex((Event) => {
      return Event.id === id
    })
    state.Event.splice(index, 1)
  }
}
