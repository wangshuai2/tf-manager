<template>
  <div>
      {{user.userName}}
  </div>
</template>


<script>
export default {
    computed: {
        user() {
            return JSON.parse(sessionStorage.getItem('user'))
        }
    }
}
</script>
