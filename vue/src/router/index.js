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
import Main1 from "@/components/main/Main1.vue"
import Main2 from "@/components/main/Main2.vue"
import Login from "@/components/auth/Login.vue"
import Join1 from "@/components/auth/Join1.vue"
import Join2 from "@/components/auth/Join2.vue"
import AuthMgmt from "@/components/mypage/AuthMgmt.vue"
import Alarm from "@/components/mypage/Alarm.vue"
import CusInfo from "@/components/mypage/CusInfo.vue"
import PwdChg from "@/components/mypage/PwdChg.vue"
import RefMgmt from "@/components/mypage/RefMgmt.vue"

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
				{ path : '/pwdchg', name : 'pwdchg', component : PwdChg },
				{ path : '/refmgmt', name : 'refmgmt', component : RefMgmt } ]
})