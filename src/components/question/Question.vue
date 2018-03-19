<template>
    <div class="list">
        <div class="list-title">
            <h3>问题列表</h3>
        </div>
        <!-- <div class="list-header">
            <select id="" v-model="schoolId" @change="getListBySchoolId">
                <option value="0">状态</option>
                <option v-for="school in schoolList" :key="school.id" :value="school.id">{{school.name}}</option>
            </select>
            <input type="number" placeholder="学生手机号/帐号" v-model="studentPhone" @input="getListByPhone">
        </div> -->
        <table class="list-data" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td>#</td>
                    <td>选项类型</td>
                    <td>问题标题</td>
                    <td>问题选项</td>
                    <td>正确答案</td>
                    <td>位置</td>
                    <td>状态</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, n) in list" v-bind:key="n">
                    <td colspan="1">{{n+1}}</td>
                    <td>{{item.optionType == 1 ? '文字型' : '资源型'}}</td>
                    <td>{{item.quesTitle}}</td>
                    <td>{{item.quesOptions}}</td>
                    <td>{{item.correctOption}}</td>
                    <td>{{item.path}}</td>
                    <td>{{item.state == 1 ? '正常' : '已删除'}}</td>
                    <td>
                        <router-link :to="{name: 'EditQuestion', params: {id: item.id}}">编辑</router-link>
                        <a href="javascript:void(0)" @click="delData(item.id)">删除</a>
                    </td>
                </tr>
                <!-- <tr>
                    <td>{{item.quesTitle}}</td>
                </tr> -->
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
            studentPhone: ''
        }
    },
    methods: {
        delData: function(id) {
            const r = confirm('确定要删除这条记录吗？');
            if(r) {
                this.$http.post('/question/deleteQuestion.json', {id: id}).then(response => {
                    const body = response.body;
                    if(body.code == 200) {
                        this.$router.push({path: '/question'});
                    }
                })
            }else{
                console.log('用户取消了操作');
            }
        },
        goPage: function(data) {
            this.page = data.page;
            let url = '/question/findQuestionList.json?pageNo=' + data.page;
            // if(this.schoolId != 0) {
            //     url += ('&sid=' + this.schoolId);
            // }
            this.$http.get(url).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.list = body.detail.rows;
                    this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
                }
            }, response => {})
        },
        // getListBySchoolId: function() {
        //     if(this.schoolId != 0) {
        //         this.page = 1;
        //         let url = '/student/stuList.json?pageNo=1&sid=' + this.schoolId;
        //         // if(this.teacherStatus != 0) {
        //         //     url += ('&state=' + this.teacherStatus);
        //         // }
        //         this.$http.get(url).then(response => {
        //             const body = response.body;
        //             if(body.code == 200) {
        //                 this.list = body.detail.rows;
        //                 this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
        //             }
        //         }, response => {})
        //     }
        // },
        // getListByPhone: function() {
        //     this.page = 1;
        //     this.$http.get('/student/stuList.json?pageNo=1&phone=' + this.studentPhone).then(response => {
        //         const body = response.body;
        //         if(body.code == 200) {
        //             this.list = body.detail.rows;
        //             this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
        //         }
        //     }, response => {})
        // }
    },
    mounted: function(){
        this.$http.get('/question/findQuestionList.json?pageNo=' + this.page).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.list = body.detail.rows;
                this.totalPage = Math.ceil(body.detail.totalCount / body.detail.pageSize);
            }
        }, response => {});
        // this.$http.get('/question/findQuestionList.json').then(response => {
        //     const body = response.body;
        //     if(body.code == 200) {
        //         this.schoolList = body.detail;
        //     }
        // }, response => {})
    },
    components: {
        'pager': pager
    }
}
</script>
