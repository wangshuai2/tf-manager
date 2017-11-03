<template>
    <div class="data-add">
        <div class="form-title">
            <h3>修改教师信息</h3>
        </div>
        <form class="data-form">
            <div class="form-group">
                <label for="teacherName"><code>*</code>教师姓名</label>
                <input type="text" id="teacherName" v-model="tName" placeholder="请输入教师姓名">
                <span>{{tnerr}}</span>
            </div>
            <div class="form-group">
                <label for="TeacherGender">性别</label>
                <select id="TeacherGender" v-model="tGender">
                    <option value="1">男</option>
                    <option value="2">女</option>
                </select>
            </div>
            <div class="form-group">
                <label for="teacherAge">年龄</label>
                <input type="number" id="teacherAge" v-model="tAge" placeholder="请输入教师年龄，例：20">
            </div>
            <div class="form-group">
                <label for="teacherPhone"><code>*</code>手机号</label>
                <input type="number" id="teacherPhone" v-model="tPhone" placeholder="请输入教师的手机号，例：13012345678">
                <span>{{tperr}}</span>
            </div>
            <div class="form-group">
                <label for="teacherAddress">地址</label>
                <input type="text" id="teacherAddress" v-model="tAddress" placeholder="请输入地址">
            </div>
            <div class="form-group">
                <label for="TeacherSchool">就职学校</label>
                <select id="TeacherSchool" v-model="tSchool" @change="getClassList">
                    <option v-for="school in schoolList" v-bind:key="school.id" v-bind:value="school.id">{{school.name}}</option>
                </select>
                <span>{{tserr}}</span>
            </div>
            <div class="form-group">
                <label for="TeacherClass">授课班级</label>
                <select id="TeacherClass" multiple v-model="tClass">
                    <option v-for="item in classList" :key="item.id" :value="item.id">{{item.className}}</option>
                </select>
                <span>{{tcerr}}</span>
            </div>
            <!-- <div class="form-group">
                <label for="TeacherGender">教师级别</label>
                <select id="TeacherGender" v-model="tGender">
                    <option value="1">男</option>
                    <option value="2">女</option>
                </select>
            </div> -->
            <div class="form-group">
                <label for="teacherGraduated">毕业院校</label>
                <input type="text" id="teacherGraduated" v-model="tGraduated" placeholder="请输入教师的毕业院校">
            </div>
            <div class="form-group">
                <label for="teachTime">教龄</label>
                <input type="number" id="teachTime" v-model="tTime" placeholder="请输入教师的教龄">
            </div>
            <div class="form-group">
                <button type="button" @click="cancelBtn" class="btn-cancel">取消</button>
                <button type="button" @click="submitBtn" class="btn-submit">确认修改</button>
                <span>{{err}}</span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tName: '',
            tGender: 1,
            tAge: '',
            tPhone: '',
            tAddress: '',
            tLevel: '',
            tClass: [],
            tSchool: '',
            tGraduated: '',
            tTime: '',
            schoolList: [],
            classList: [],
            tnerr: '',
            tperr: '',
            tserr: '',
            tcerr: '',
            err: '',
            id: this.$route.params.id
        }
    },
    methods: {
        cancelBtn: function() {
            this.$router.back();
        },
        submitBtn: function() {
            if(this.tName == '') {
                this.tnerr = '教师的姓名不能为空';
                return false;
            } else {
                this.tnerr = '';
            }
            if(this.tPhone == '') {
                this.tperr = '教师的手机号不能为空';
                return false;
            } else {
                this.tperr = '';
            }

            const data = {
                teacherId: this.id,
                teacherName: this.tName,
                gender: this.tGender,
                age: this.tAge,
                phone: this.tPhone,
                address: this.tAddress,
                // level: this.tLevel,
                classIds: this.tClass,
                schoolId: this.tSchool,
                graduated: this.tGraduated,
                teachTime: this.tTime
            }

            this.$http.post('/teacher/updateTeacher.json', data, {emulateJSON: false}).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.$router.push({path: '/teacher'});
                } else {
                    this.err = body.description;
                }
            }, response => {
                this.err = '网络链接错误，请稍候重试。';
            })
        },
        getClassList: function() {
            this.$http.get('/class/findGradeClass.json?sid=' + this.tSchool).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.classList = body.detail;
                }else{
                    this.tcerr = '获取班级列表失败，请刷新重试！';
                }
            }, response => {
                this.tcerr = '获取班级列表失败，请刷新重试！';
            })
        }
    },
    mounted: function() {
        this.$http.get('/school/schools.json').then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.schoolList = body.detail;
            } else {
                this.tserr = '获取学校列表失败，请刷新重试！';
            }
        }, response => {
            this.tserr = '获取学校列表失败，请刷新重试！';
        });
        this.$http.get('/teacher/findTeacher.json?teacherId=' + this.id).then(response => {
            const body = response.body;
            if(body.code == 200) {
                const data = body.detail;
                this.tName = data.name;
                this.tGender = data.gender;
                this.tAge = data.age;
                this.tPhone = data.phone;
                this.tAddress = data.address;
                this.tClass = data.classIds;
                this.tSchool = data.school_id;
                this.tGraduated = data.graduated;
                this.tTime = data.teach_time;
                
                this.getClassList();
            }
        }, response => {});
    }
}
</script>

<style scoped>

</style>
