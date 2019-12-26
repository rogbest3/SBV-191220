<template>
	<div class="themoin-mypage">
		<div class="tab-container">
			<div class="tab">
				<a class="active" @click.prevent="admin_a">관리자 변경</a>
				<a class="" @click.prevent="pwdchg_a">비밀번호 변경</a>
				<a class="" @click.prevent="studentList_a">학생 목록</a>
				<a class="" @click.prevent="hakList_a">조건별 학생 검색</a>
				<a class="" @click.prevent="scoreEdit_a">학생 성적 수정</a>
				<a class="" @click.prevent="idSearch_a">ID 학생 검색</a>
				
				<div class="spacer"></div>
				<img src="https://img.themoin.com/public/img/img-man-s.svg">
				<p>rogbest@naver.com</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			active : ''
		}
	},
	methods : {	// cusinfo_a, pwdchg_a, authmgmt_a, alarm_a, refmgmt_a
		admin_a(){
			this.$router.push('/admin')	
		},
		pwdchg_a(){
			this.$router.push('/pwdchg')
		},
		studentList_a(){
			this.$router.push('/studentlist')
		},
		hakList_a(){
			this.$router.push('/haklist')
		},
		banList_a(){
			this.$router.push('/banlist')
		}
	}
}
</script>
<style scoped></style>