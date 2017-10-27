<template>
    <div class="data-add">
        <div class="form-title">
            <h3>添加学生</h3>
        </div>
        <form class="data-form">
            <div class="form-group">
                <label for="studentName"><code>*</code>学生姓名</label>
                <input type="text" id="studentName" v-model="sName" placeholder="请输入学生姓名">
                <span>{{snerr}}</span>
            </div>
            <div class="form-group">
                <label for="studentPhone"><code>*</code>手机号/帐号</label>
                <input type="number" id="studentPhone" v-model="sPhone" placeholder="请输入学生的手机号/帐号">
                <span>{{sperr}}</span>
            </div>
            <div class="form-group">
                <label for="studentGender">性别</label>
                <select id="studentGender" v-model="sGender">
                    <option value="1">男</option>
                    <option value="2">女</option>
                </select>
            </div>
            <div class="form-group">
                <label for="studentAge">年龄</label>
                <input type="number" id="studentAge" v-model="sAge" placeholder="请输入学生年龄">
            </div>
            <div class="form-group">
                <label for="studentAddress">地址</label>
                <input type="number" id="studentAddress" v-model="sAddress" placeholder="请输入地址">
            </div>
            <div class="form-group">
                <label for="classId"><code>*</code>所在班级</label>
                <select id="classId" v-model="cId">
                </select>
            </div>
            <div class="form-group">
                <label for="entranceTime">入学时间</label>
                <input type="date" id="entranceTime" v-model="eTime">
            </div>
            <div class="form-group">
                <button type="button" @click="cancelBtn" class="btn-cancel">取消</button>
                <button type="button" @click="submitBtn" class="btn-submit">添加</button>
                <span>{{err}}</span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sName: '',
            sPhone: '',
            sGender: 1,
            sAge: '',
            sAddress: '',
            cId: '',
            eTime: '',
            snerr: '',
            sperr: '',
            err: ''
        }
    },
    mounted: function() {
        const date = new Date();
        this.eTime = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getDate().toString();
    },
    methods: {
        cancelBtn: function() {
            this.$router.back();
        },
        submitBtn: function() {
            const name = this.sName;
            const type = this.sType;
            const stime = this.sTime;
            const etime = this.eTime;
            if(name == '') {
                this.snerr = '学生姓名不能为空！';
                return false;
            } else {
                this.snerr = '';
            }

            this.$http.post('/school/addSchool.json', {schoolName: name, courseType: type, startTime: stime, endTime: etime}).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.sName = '';
                    this.sType = 1;
                    this.sTime =  '';
                    this.eTime =  '';
                    this.snerr =  '';
                    this.err =  '';
                    this.$router.push({path: '/school'});
                } else {
                    this.err = body.description;
                }
            }, response => {
                this.err = '网络链接错误，请稍候重试。'
            })
        }
    }
}
</script>

<style scoped>

</style>
