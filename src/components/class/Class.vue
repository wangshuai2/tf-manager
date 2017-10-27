<template>
    <div class="list">
        <div class="list-title">
            <h3>班级列表</h3>
        </div>
        <div class="list-header">
            <select id="" v-model="schoolId" @change="getListBySchoolId">
                <option value="0">选择学校</option>
                <option v-for="school in schoolList" :key="school.id" :value="school.id">{{school.name}}</option>
            </select>
            <select id="" v-model="classStatus" @change="getListByStatus">
                <option value="0">班级状态</option>
                <option value="1">正常</option>
                <option value="2">删除</option>
            </select>
        </div>
        <table class="list-data" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td>#</td>
                    <td>班级名称</td>
                    <td>年级名称</td>
                    <td>学校名称</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, n) in list" v-bind:key="n">
                    <td>{{n+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.gname}}</td>
                    <td>{{item.schoolName}}</td>
                    <td>
                        <router-link :to="{name: 'EditClass', params: {id: item.id}}">编辑</router-link>
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
            totalPage: 1,
            schoolList: [],
            schoolId: '0',
            classStatus: '0'
        }
    },
    methods: {
        delData: function(id) {
            const r = confirm('确定要删除这条记录吗？');
            if(r) {
                this.$http.get('/class/delClass.json?cid=' + id).then(response => {
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
            let url = '/class/classList.json?pageNo=' + data.page;
            if(this.schoolId != 0) {
                url += ('&sid=' + this.schoolId);
            }
            if(this.classStatus != 0) {
                url += ('&state=' + this.classStatus);
            }
            this.$http.get(url).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.list = body.detail.rows;
                    this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
                }
            }, response => {})
        },
        getListBySchoolId: function() {
            if(this.schoolId != 0) {
                this.page = 1;
                let url = '/class/classList.json?pageNo=1&sid=' + this.schoolId;
                if(this.classStatus != 0) {
                    url += ('&state=' + this.classStatus);
                }
                this.$http.get(url).then(response => {
                    const body = response.body;
                    if(body.code == 200) {
                        this.list = body.detail.rows;
                        this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
                    }
                }, response => {})
            }
        },
        getListByStatus: function() {
            this.page = 1;
            let url = '/class/classList.json?pageNo=1&state=' + this.classStatus;
            if(this.schoolId != 0) {
                url += ('&sid=' + this.schoolId);
            }
            this.$http.get(url).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.list = body.detail.rows;
                    this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
                }
            }, response => {})
        }
    },
    mounted: function(){
        this.$http.get('/class/classList.json?pageNo=' + this.page).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.list = body.detail.rows;
                this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
            }
        }, response => {});
        this.$http.get('/school/schools.json').then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.schoolList = body.detail;
            }
        }, response => {})
    },
    components: {
        'pager': pager
    }
}
</script>
