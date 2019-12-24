<template>
    <div id="auth-box">
        <a @click.prevent="logout"><h3>로그아웃</h3></a>
        <a @click.prevent="widthdrawal"><h3>회원탈퇴</h3></a>
    </div>
</template>

<script>
import {store} from "../../store"
import Axios from 'axios'
export default{
	data(){
		return {

		}
	},
	methods : {
		logout(){
			store.state.customer.cemail = ''
			store.state.customer.cpwd = ''
			store.state.customer.cname = ''
			store.state.customer.cphone = ''
			store.state.customer.id = ''
			store.state.authCheck = false
			alert(`loginedCemail : ${store.state.customer.cemail}, loginedCpwd : ${store.state.customer.cpwd}`)
			this.$router.push('/')
		},
		withdrawal(){	// 자바에 정보가 하나도 없기 때문에 정보를 전부 줘야함 -> POST 사용
			alert('회원탈퇴')
			
			Axios
			.delete(`${this.context}/withdrawal/${store.state.customer.cemail}`)
			.then(()=>{
				alert(`회원탈퇴 성공`)
			})
			.catch(()=>{
				alert('AXIOS 실패')
			})
			
		}
	}
}
</script>