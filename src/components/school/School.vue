<template>
    <div class="list">
        <div class="list-title">
            <h3>学校列表</h3>
        </div>
        <table class="list-data" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td>#</td>
                    <td>学校名称</td>
                    <td>服务到期时间</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, n) in list" v-bind:key="n">
                    <td>{{n+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.endTime}}</td>
                    <td>
                        <router-link :to="{name: 'EditSchool', params: {id: item.id}}">编辑</router-link>
                        <a href="javascript:void(0)" @click="delData(item.id)">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="list-page">
            <pager
                :total-page="totalPage"
                :init-page="page"
                @go-page="goPage"></pager>
        </div>
        <div class="list-footer"></div>
    </div>
</template>

<script>
import pager from 'vue-simple-pager';
export default {
    data() {
        return {
            list: [],
            page: 1,
            totalPage: 0
        }
    },
    methods: {
        delData: function(id) {
            const r = confirm('确定要删除这条记录吗？');
            if(r) {
                this.$http.get('/school/delSchool.json?sid=' + id).then(response => {
                    const body = response.body;
                    if(body.code == 200) {
                        this.$router.go(0);
                    }
                })
            }else{
                console.log('用户取消了操作');
            }
        },
        goPage: function(data) {
            this.page = data.page;
            this.$http.get('/school/schoolList.json?pageNo=' + this.page).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.list = body.detail.rows;
            }
        }, response => {})
        }
    },
    mounted: function(){
        this.$http.get('/school/schoolList.json?pageNo=' + this.page).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.list = body.detail.rows;
                this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
            }
        }, response => {})
    },
    components: {
        'pager': pager
    }
}
</script>
