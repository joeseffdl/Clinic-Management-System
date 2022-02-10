import { uid } from 'quasar'

// Patient Lists
export function addClient (state, client){
    state.allClients.push({ id: uid(),...client});
}

export function removeClient (state,props){
    props = state.allClients.map(item => item.id).indexOf(props.id);
    state.allClients.splice(props, 1);
}

export function updateClient (state, payload){
    let index = state.allClients.findIndex(
        (i) => i.id == payload.id);
    if (index != -1) {
        state.allClients[index] = payload;
    }
}

// Calendar
export function addSchedule (state, events){
    state.events.push({ ...events });
}

export function removeSchedule( state , events) {
    // state.events.filter((item) => item !== events); 
    events = state.events.map(item => item.id).indexOf(events.id);
    state.events.splice(events, 1);
}

export function updateSchedule (state, events){
    let index = state.events.findIndex(
        (i) => i.id == events.id);
    if (index != -1) {
        state.events[index] = events;
        
        console.log(events)
    }
}