import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const journalModule = {
    namespaced: true,
    actions, // acciones async que puede llamar mutaciones
    getters, // para traer info del state
    mutations, // sync modifican el state
    state, // datos
}

export default journalModule