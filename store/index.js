export const state = () => ({
    drawer: false,
    information: 0,
    development: null,
    position: null,
    powerrate: -1,
    datasee: -1,
    develop: -1,
    outstan: -1,
    actionstatus: -1,
    datadocumentationpeople: -1,
    incumbent: -1,
    Developmentplan: -1,
    Performancereport: -1

})

export const mutations = {
    set_drawer(state, newDrawerState){
        state.drawer = newDrawerState
    },
    set_information(state, newInformationState){
        state.development = null
        state.position = null
        state.information = newInformationState
        state.powerrate = -1
        state.datasee = -1
        state.develop = -1
        state.actionstatus = -1
        state.datadocumentationpeople = -1
        state.incumbent = -1
        state.Developmentplan = -1
        state.Performancereport = -1
    },
    set_development(state, newInformationState){
        state.information = null
        state.position = null
        state.development = newInformationState
        state.powerrate = -1
        state.datasee = -1
        state.develop = -1
        state.actionstatus = -1
        state.datadocumentationpeople = -1
        state.incumbent = -1
        state.Developmentplan = -1
        state.Performancereport = -1
    },
    set_position(state, newInformationState){
        state.development = null
        state.information = null
        state.position = newInformationState
        state.powerrate = -1
        state.datasee = -1
        state.develop = -1
        state.actionstatus = -1
        state.datadocumentationpeople = -1
        state.incumbent = -1
        state.Developmentplan = -1
        state.Performancereport = -1
    },
    set_powerrate(state, newPowerrateState){
        state.powerrate = newPowerrateState
    },
    set_datasee(state, newSeeworkState){
        state.datasee = newSeeworkState
    },
    set_develop(state, DevelopState){
        state.develop = DevelopState
    },
    set_outstan(state, OutstanState){
        state.outstan = OutstanState
    },
    set_actionstatus(state, ActionstatusState){
        state.actionstatus = ActionstatusState
    },
    set_datadocumentationpeople(state, DatadocumentationpeopleState){
        state.datadocumentationpeople = DatadocumentationpeopleState
    },
    set_incumbent(state, IncumbentState){
        state.incumbent = IncumbentState
    },
    set_Developmentplan(state, DevelopmentplanState){
        state.Developmentplan = DevelopmentplanState
    },
    set_Performancereport(state, PerformancereportState){
        state.Performancereport = PerformancereportState
    }

}