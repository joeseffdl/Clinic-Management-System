
export function setCurrentClient (state, payload) {
    state.currentClient = payload;
    
}

export function addClient (state, payload){
    state.allClients.push(payload.newClient);
    //state.currentClient = state.allClients;
}

export function removeClient (state,props){
    props = state.allClients.map(item => item.id).indexOf(props.id);
    state.allClients.splice(props, 1);
}

export function updateClient (state, client){
    let index = state.allClients.findIndex(
        (i) => i.id == client.id);
    if (index != -1) {
        state.allClients[index] = client;
    }
}