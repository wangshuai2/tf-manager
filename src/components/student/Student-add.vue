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
                <input type="text" id="studentAddress" v-model="sAddress" placeholder="请输入地址">
            </div>
            <div class="form-group">
                <label for="classId"><code>*</code>所在学校</label>
                <select id="classId" v-model="schoolId" @change="getClassBySchoolId">
                    <option value="0">请选择学校</option>
                    <option v-for="school in schoolList" :key="school.id" :value="school.id">{{school.name}}</option>
                </select>
                <span>{{smerr}}</span>
            </div>
            <div class="form-group">
                <label for="classId"><code>*</code>所在年级班级</label>
                <select id="classId" v-model="cId">
                    <option value="0">请选择年级班级</option>
                    <option v-for="c in classList" :key="c.id" :value="c.id">{{c.className}}</option>
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
            schoolList: [],
            classList: [],
            schoolId: '0',
            classId: '0',
            sName: '',
            sPhone: '',
            sGender: 1,
            sAge: '',
            sAddress: '',
            cId: '0',
            eTime: '',
            snerr: '',
            smerr: '',
            sperr: '',
            err: ''
        }
    },
    methods: {
        cancelBtn: function() {
            this.$router.back();
        },
        submitBtn: function() {
            if(this.Sname == '') {
                this.snerr = '学生姓名不能为空！';
                return false;
            } else {
                this.snerr = '';
            }
            if(this.sPhone == '') {
                this.sperr = '学生手机号/帐号不能为空！';
                return false;
            } else {
                this.sperr = '';
            }

            const data = {
                stuName: this.sName,
                phone: this.sPhone,
                gender: this.sGender,
                age: this.sAge,
                address: this.sAddress,
                classId: this.cId,
                entranceTime: this.eTime
            }

            this.$http.post('/student/addStu.json', data, {emulateJSON: false}).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.$router.push({path: '/student'});
                } else {
                    this.err = body.description;
                }
            }, response => {
                this.err = '网络链接错误，请稍候重试。'
            })
        },
        getClassBySchoolId: function() {
            this.$http.get('/class/findGradeClass.json?sid=' + this.schoolId).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.classList = body.detail;
                }
            })
        }
    },
    mounted: function() {
        const date = new Date();
        this.eTime = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getDate().toString();
        
        this.$http.get('/school/schools.json').then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.schoolList = body.detail;
            }else{
                this.smerr = '学校信息获取失败，请刷新重试'
            }
        }, response => {
            this.smerr = '网络链接错误，请刷新重试'
        })
    }
}
</script>

<style scoped>

</style>
