import axios from "axios";
import actions from './phonebookAction'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const fetchContacts = () => dispatch => {
        dispatch(actions.fetchContactsRequest());
        axios.get('/contacts')
        .then(({data})=> dispatch(actions.fetchContactsSuccess(data)))
        .catch(error => dispatch(actions.fetchContactsError(error)))
}
const btnValue = event => async (dispatch,getState) => {
        const { listReducer: { contacts } } = getState();
        const contact = {
                name: event.target[0].value,
                number: event.target[1].value
        };

        const testName = contacts.find((num) => {
                return num.name === contact.name
        })
        
        const testNumber = contacts.find((num) => {
                return num.number === contact.number
        })
            if (testName !== undefined || testNumber !== undefined) {
                dispatch(actions.valuephonebookSuccess({
                error: true,
                contacts: [...contacts],
                filter: []
                }))
                return
            }

        dispatch(actions.valuephonebookRequest());

        try {
                const respons = await axios.post('/contacts', contact);
                dispatch(actions.valuephonebookSuccess({
                error: false,
                contacts: [...contacts,respons.data],
                filter: []
                }));
        } catch (error) {
                dispatch(actions.valuephonebookError(error))
        }
}

const deleteContact = event => dispatch => {
        const id = event.target.id;
    dispatch(actions.deletephonebookRequest());
    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deletephonebookSuccess(id)))
    .catch((error)=> dispatch(actions.deletephonebookError(error)))

}
const listOperations = { fetchContacts,btnValue,deleteContact };

export default listOperations