<template>
    <div class="list">
        <div class="list-title">
            <h3>课件列表</h3>
        </div>
        <table class="list-data" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td>#</td>
                    <td>课件名称</td>
                    <td>下载</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, n) in list" v-bind:key="n">
                    <td>{{n+1}}</td>
                    <td>{{item.name}}</td>
                    <td>
                        <a :href="item.url" :download="item.name">下载</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="list-footer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    mounted: function(){
        this.$http.get('/cccourse').then(response => {
            this.list = response.body;
        }, response => {});
    }
}
</script>
