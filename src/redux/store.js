import { createStore } from 'redux'
import account from './reducers/account'


const store = createStore(account);



export default store