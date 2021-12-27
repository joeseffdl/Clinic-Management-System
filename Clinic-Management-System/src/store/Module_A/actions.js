import { uid } from 'quasar'
export function setCurrentClient (context, payload) {
    context.commit("setCurrentClient", payload);
}
export function addClient( {commit} , client) {
    let id = uid()
    let payload = {
        newClient: {id,client}
    }
    commit("addClient", payload);
}
export function removeClient( {commit} , props) {
    commit("removeClient", props);
    
}
export function updateClient( {commit} , id) {
    commit("updateClient", id)
}