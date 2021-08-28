const getError = state => state.listReducer.error;
const getContacts = state => state.listReducer.contacts;
const getFilter = state => state.listReducer.filter;



const listSelecetions = {
    getError,
    getContacts,
    getFilter,
}
export default listSelecetions