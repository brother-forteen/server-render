<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2020/3/2
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div>
        {{item.title}}
    </div>
</template>

<script>
    export default {
        name: "Item",
        asyncData({ store, route }) {
            return store.dispatch('fetchItem', route.params.id);
        },
        computed:{
            item(){
                return this.$store.state.items[this.$store.params.id]
            }
        }
    }
</script>

<style lang="scss">

</style>
