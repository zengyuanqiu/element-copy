<template>
	<span class="el-breadcrumb__item">
		<span ref='link' role='link'
			:class="['el-breadcrumb__inner', to ? 'is-link' : '']">
			<slot></slot>
		</span>
		<i class="el-breadcrumb__separator" :class="separatorClass" v-if="separatorClass"></i>
		<span class="el-breadcrumb__separator" role='presentation'>{{separator}}</span>
	</span>
</template>

<script>
	export default {
		name: 'ElBreadcrumbItem',
		props: {
			to: {},
			replace: Boolean
		},
		data: _ => ({
			separator: '',
			separatorClass: ''
		}),
		
		inject: ['elBreadcrumb'],
		mounted() {
			this.separator = this.elBreadcrumb.separator;
			this.separatorClass = this.elBreadcrumb.separatorClass;
			const link = this.$refs.link;
			link.setAttribute('role', 'link');
			link.addEventListener('click', _ => {
				const {to, $router} = this;
				if(!to || !$router) return;
				this.replace ? $router.replace(to) : $router.push(to)
			})
		}
	}
</script>