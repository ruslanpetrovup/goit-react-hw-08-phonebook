const getAuthSelect = state => state.authReducer.isActive;

const getUserName = state => state.authReducer.user.name;



const listSelections = {
    getAuthSelect,
    getUserName
}
export default listSelections