
export function addClient( {commit},client) {
    commit("addClient", client);
}
export function removeClient( {commit} , props) {
    commit("removeClient", props);  
}
export function updateClient( {commit} , payload) {
    commit("updateClient", payload)
}