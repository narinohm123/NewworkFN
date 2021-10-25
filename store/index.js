export const state = () => ({
    drawer: false,
    information: 0,
    development: null,
    position: null,
})

export const mutations = {
    set_drawer(state, newDrawerState){
        state.drawer = newDrawerState
    },
    set_information(state, newInformationState){
        state.development = null
        state.position = null
        state.information = newInformationState
    },
    set_development(state, newInformationState){
        state.information = null
        state.position = null
        state.development = newInformationState
    },
    set_position(state, newInformationState){
        state.development = null
        state.information = null
        state.position = newInformationState
    }
}