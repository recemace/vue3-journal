import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const journal = {
    namespaced: true,
    actions, // acciones async que puede llamar mutaciones
    getters, // para traer info del state
    mutations, // sync modifican el state
    state, // datos
}

export default journal