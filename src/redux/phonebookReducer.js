import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebookAction';

const {
    fetchContactsSuccess,
    valuephonebookSuccess,
    deletephonebookSuccess,} = actions

const contactsReducer = createReducer(
{
    error: false,
    contacts: [],
    filter: [],
}, {
        [fetchContactsSuccess]: (state, { payload }) => {
         return state = {
                error: false,
                contacts: [...payload],
                filter: []
                }
        },
        [valuephonebookSuccess]: (state, { payload }) => {
            return payload
        // if (name.length === 0 || number.length === 0) {
        //        return state = {
        //         error: true,
        //         contacts: [...state.contacts],
        //         filter: []
        //         }
        //     }
        },
        [actions.errorAlert]: (state,_) => {
       return state = {
                error: false,
                contacts: [...state.contacts],
                filter: []
                }  
        },
        [deletephonebookSuccess]: (state, { payload }) => {
        const total = state.contacts.filter((num) => {
            return num.id !== payload
            })
        return state = {
            error: false,
            contacts: [...total],
            filter: []
        }
        },
        [actions.findContact]: (state, { payload }) => {
        if (payload === "") {
                return state = {
                error: false,
                contacts: [...state.contacts],
                filter: []
            }
                }
                const filter = state.contacts.filter(num => {
                return num.valueName.toLowerCase().includes(payload)
                })
                 return state = {
                error: false,
                contacts: [...state.contacts],
                filter: [...filter]
            }
        }
})
        
export default contactsReducer