<template>
  <div>{{queryid}}</div>
</template>

<script>
export default {
  data(){
      return {
          queryid: this.$route.params.id
      }
  }
}
</script>
