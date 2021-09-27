<template>
	<div>
		<div class="container">
			<!-- this line is used by starport scaffolding # 4 -->
			<!--<SpType modulePath="cosmonaut.blog.blog" moduleType="Profile"  />-->
			<h3>Articles</h3>
			<ArticleForm/>
			<ArticleList/>
		</div>
	</div>
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue';
import ArticleList from '../components/ArticleList.vue';


export default {
	name: 'Types',
	components: { ArticleForm, ArticleList }
}
</script>