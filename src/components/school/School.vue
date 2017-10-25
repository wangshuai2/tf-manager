<template>
    <div class="list">
        <div>{{list}}</div>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>学校名称</td>
                    <td>服务到期时间</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, n) in list" v-bind:key="n">
                    <td></td>
                    <td>{{item.name}}</td>
                    <td>{{item.endTime}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>

                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            pageno: 1
        }
    },
    mounted: function(){
        this.$http.get('/school/schoolList.json?pageNo=' + this.pageno).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.list = body.detail.rows;
            }
        }, response => {})
    }
}
</script>
