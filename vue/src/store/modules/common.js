import * as types from "@/store/modules/mutation_types"

const state = {
	authCheck : false,
    sidebar : 'preSidebar',
    nav : 'nav',
    showSidebar : false,
    context : 'http://localhost:8080/',
	errorState : '',
	sidebarList : []
}
const getters = {
	getErrorState :state =>state.getErrorState,
	getAuthCheck : state => state.AuthCheck,
	getContext : state => state.context,
	getSidebar :state=> state.getSidebar,
	getShowSidebar : state=>state.ShowSidebar,
	getNav : state => state.getNav,
	getSidebarList : state => state.getSidebarList
}
const actions = {}
const mutations = { 
	// [types.CUSTOMER] ( state, customer ){
	// 	state.customer = customer
	// },
	[types.ERROR_STATE] ( state, error_state ){
		state.error_state = error_state
	},
	[types.IS_AUTH] ( state, is_auth ){
		state.is_auth = is_auth
	},
	[types.AUTHCHECK] ( state, authcheck ){
		state.authcheck = authcheck
	},
	[types.SIDEBAR] ( state, sidebar ){
		state.sidebar = sidebar
	},
	[types.NAV] ( state, nav ){
		state.nav = nav
	},
	[types.SHOWSIDEBAR] ( state, showsidebar ){
		state.showsidebar = showsidebar
	},
	[types.SIDEBARLIST] ( state, sidebarlist ){
		state.sidebarlist = sidebarlist
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}