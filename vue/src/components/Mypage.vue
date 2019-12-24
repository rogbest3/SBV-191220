<template>
  <div>
		<layout>
			<!-- slot은 template으로 바뀜 -->
			<template #header="header">
				<h1>{{header.title}}</h1>
				<ul class="menu">
					<li v-for="i of hmenu" :key="i.menu">
						<router-link :to="i.link">{{i.menu}}</router-link>
					</li>
				</ul>
			</template>
			<template #sidebar="sidebar">
				<h3>{{sidebar.title}}</h3>
				<ul class="menu">
					<li v-for="i of sidebars" :key="i.menu">
						<router-link :to="i.link">{{i.menu}}</router-link>
					</li>
				</ul>
			</template>
			<template #content="content">
				<h2>{{content.title}}</h2>
				<router-view/>
			</template>
			<template #footer="footer">
				<h3>{{footer.title}}</h3>
			</template>
		</layout>
	</div>
</template>

<script>
import Layout from "@/components/cmm/Layout.vue"
export default {
  components : {
    Layout
  }
}
</script>

<style scoped>
</style>
