<template>
    <div class="list">
        <div class="list-title">
            <h3>教师列表</h3>
        </div>
        <div class="list-header">
            <select id="" v-model="schoolId" @change="getListBySchoolId">
                <option value="0">选择学校</option>
                <option v-for="school in schoolList" :key="school.id" :value="school.id">{{school.name}}</option>
            </select>
            <select id="" v-model="teacherStatus" @change="getListByStatus">
                <option value="0">教师状态</option>
                <option value="1">正常</option>
                <option value="2">删除</option>
            </select>
            <input type="number" placeholder="教师手机号/帐号" v-model="teacherPhone" @input="getListByPhone">
        </div>
        <table class="list-data" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td>#</td>
                    <td>教师姓名</td>
                    <td>手机号/帐号</td>
                    <td>性别</td>
                    <td>就职学校</td>
                    <td>状态</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, n) in list" v-bind:key="n">
                    <td>{{n+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.gender == 1 ? '男' : '女'}}</td>
                    <td>{{item.school}}</td>
                    <td>{{item.state == 1 ? '正常': '删除'}}</td>
                    <td>
                        <router-link :to="{name: 'EditTeacher', params: {id: item.id}}">编辑</router-link>
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
            totalPage: 0,
            schoolList: [],
            schoolId: '0',
            teacherStatus: '0',
            teacherPhone: ''
        }
    },
    methods: {
        delData: function(id) {
            const r = confirm('确定要删除这条记录吗？');
            if(r) {
                this.$http.post('/teacher/delTeacher.json', {teacherId: id}).then(response => {
                    const body = response.body;
                    if(body.code == 200) {
                        this.$router.push({path: '/teacher'});
                    }
                })
            }else{
                console.log('用户取消了操作');
            }
        },
        goPage: function(data) {
            this.page = data.page;
            let url = '/teacher/findAllTeachers.json?pageNo=' + data.page;
            if(this.teacherStatus != 0) {
                url += ('&state=' + this.teacherStatus);
            }
            if(this.schoolId != 0) {
                url += ('&sid=' + this.schoolId);
            }
            this.$http.get(url).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.list = body.detail.rows;
                }
            }, response => {})
        },
        getListBySchoolId: function() {
            if(this.schoolId != 0) {
            }
            this.page = 1;
            let url = '/teacher/findAllTeachers.json?pageNo=1&sid=' + this.schoolId;
            if(this.teacherStatus != 0) {
                url += ('&state=' + this.teacherStatus);
            }
            this.$http.get(url).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.list = body.detail.rows;
                    this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
                }
            }, response => {})
        },
        getListByStatus: function() {
            this.page = 1;
            let url = '/teacher/findAllTeachers.json?pageNo=1';
            if(this.teacherStatus != 0) {
                url += ('&state=' + this.teacherStatus);
            }
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
        },
        getListByPhone: function() {
            this.page = 1;
            this.$http.get('/teacher/findAllTeachers.json?pageNo=1&phone=' + this.teacherPhone).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.list = body.detail.rows;
                this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
            }
        }, response => {})
        }
    },
    mounted: function(){
        this.$http.get('/teacher/findAllTeachers.json?pageNo=' + this.page).then(response => {
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
