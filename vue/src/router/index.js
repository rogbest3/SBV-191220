/* import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/member/Login.vue'
import Join from '@/components/member/Join.vue'

import List from '@/components/board/List.vue'
import Remove from '@/components/board/Remove.vue'
import Search from '@/components/board/Search.vue'
import Update from '@/components/board/Update.vue'
import Write from '@/components/board/Write.vue'

Vue.use(Router)

export default new Router({
	mode : 'history',
	routes : [

		{ path : '/login', name : 'login', component : Login },
		{ path : '/join', name : 'join', component : Join },
		{ path : '/list', name : 'list', component : List },
		{ path : '/remove', name : 'remove', component : Remove },
		{ path : '/search', name : 'search', component : Search },
		{ path : '/update', name : 'update', component : Update },
		{ path : '/write', name : 'write', component : Write }
	]
}) */

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Main1 from "@/components/main/Main1"
import Main2 from "@/components/main/Main2"
import Login from "@/components/auth/Login"
import Join1 from "@/components/auth/Join1"
import Join2 from "@/components/auth/Join2"
import AuthMgmt from "@/components/mypage/AuthMgmt"
import Alarm from "@/components/mypage/Alarm"
import CusInfo from "@/components/mypage/CusInfo"
import PwdChg from "@/components/mypage/PwdChg"
import RefMgmt from "@/components/mypage/RefMgmt"
import CusInfoChg from "@/components/mypage/CusInfoChg"

Vue.use(Router)

export default new Router({
	mode : 'history',
	routes : [ { path : '/', name : 'mai1n', component : Main1 },
				{ path : '/main2', name : 'main2', component : Main2 },
				{ path : '/login', name : 'login', component : Login },
				{ path : '/join1', name : 'join1', component : Join1 },
				{ path : '/join2', name : 'join2', component : Join2 },
				{ path : '/authmgmt', name : 'authmgmt', component : AuthMgmt },
				{ path : '/alarm', name : 'alarm', component : Alarm },
				{ path : '/cusinfo', name : 'cusinfo', component : CusInfo },
				{ path : '/cusinfochg', name : 'cusinfochg', component : CusInfoChg },
				{ path : '/pwdchg', name : 'pwdchg', component : PwdChg },
				{ path : '/refmgmt', name : 'refmgmt', component : RefMgmt } ]
})