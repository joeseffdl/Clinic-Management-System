import { uid } from 'quasar'
// export function setCurrentClient (state, payload) {
//     state.currentClient = payload;

export function addClient (state, client){
    state.allClients.push({ id: uid(),...client});
    //state.currentClient = state.allClients;
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