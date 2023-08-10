// export const myGetters = ( state ) => {
// ...
// }

export const getEntriesByTerm = ( state ) => ( term = '') => {
    // console.info(state.entries)
    if(term.length === 0) return state.entries
    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEntryById = ( state ) => ( id = '' ) => {
    // console.info(state)
    // return state.entries.filter( entry => entry.id = id)
    const entry = state.entries.find( entry => entry.id === id )
    if(!entry) return
    return { ...entry }
}