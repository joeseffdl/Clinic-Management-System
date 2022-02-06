// Patient Lists
export function addClient( {commit},client) {
    commit("addClient", client);
}
export function removeClient( {commit} , props) {
    commit("removeClient", props);  
}
export function updateClient( {commit} , payload) {
    commit("updateClient", payload)
}

// Calendar
export function addSchedule( {commit}, events) {
    commit("addSchedule", events);
}

export function removeSchedule( {commit} , events) {
    commit("removeSchedule", events);  
}

export function updateSchedule( {commit} , events) {
    commit("updateSchedule", events)
}