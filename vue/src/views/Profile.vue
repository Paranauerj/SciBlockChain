<template>
	<div>
		<div class="container">
			<!-- this line is used by starport scaffolding # 4 -->
			<h3>My Profile</h3>
			<ProfileForm/>
		</div>
	</div>
</template>

<script>
import ProfileForm from '../components/ProfileForm.vue';


export default {
	name: 'Types',
	components: { ProfileForm }
}
</script>