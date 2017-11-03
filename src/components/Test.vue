<template>
  <div>
      <h1>{{url}}</h1>
  </div>
</template>


<script>
export default {
    data() {
        return {
            url: this.$route.fullPath.indexOf('/test1')
        }
    }
}
</script>
