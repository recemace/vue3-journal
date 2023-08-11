import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue3-journal-80929-default-rtdb.firebaseio.com/'
})

export default journalApi