<template>
    <div class="data-add">
        <div class="form-title">
            <h3>添加年级</h3>
        </div>
        <form class="data-form">
            <div class="form-group">
                <label for="schoolId"><code>*</code>所在学校</label>
                <select id="schoolId" v-model="schoolId" @change="getGradeBySchoolId">
                    <option value="0">选择学校</option>
                    <option v-for="school in schoolList" :key="school.id" :value="school.id">{{school.name}}</option>
                </select>
                <span>{{snerr}}</span>
            </div>
            <div class="form-group">
                <label for="gradeId"><code>*</code>所在年级</label>
                <select id="gradeId" v-model="gradeId">
                    <option value="0">选择年级</option>
                    <option v-for="grade in gradeList" :key="grade.id" :value="grade.id">{{grade.name}}</option>
                </select>
                <span>{{gnerr}}</span>
            </div>
            <div class="form-group">
                <label for="className"><code>*</code>班级名称</label>
                <input type="text" id="className" v-model="cName" placeholder="请输入年级名称">
                <span>{{cnerr}}</span>
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
            schoolId: '0',
            gradeList: [],
            gradeId: '0',
            cName: '',
            snerr: '',
            gnerr: '',
            cnerr: '',
            err: ''
        }
    },
    methods: {
        cancelBtn: function() {
            this.$router.back();
        },
        submitBtn: function() {
            if(this.schoolId == '0') {
                this.snerr = '您尚未选择学校';
                return false;
            } else {
                this.snerr = '';
            }
            if(this.gradeId == '0') {
                this.gnerr = '您尚未选择年级';
                return false;
            } else {
                this.gnerr = '';
            }
            if(this.cName == '') {
                this.cnerr = '班级名称不能为空';
                return false;
            } else {
                this.cnerr = '';
            }

            this.$http.post('/class/addClass.json', {sid: this.schoolId, gid: this.gradeId, className: this.cName}).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.schoolList = [];
                    this.gradeList = [];
                    this.schoolId = '0';
                    this.gradeId = '0';
                    this.cName =  '';
                    this.snerr =  '';
                    this.gnerr =  '';
                    this.cnerr =  '';
                    this.err =  '';
                    this.$router.push({path: '/class'});
                } else {
                    this.err = body.description;
                }
            }, response => {
                this.err = '网络链接错误，请稍候重试。'
            })
        },
        getGradeBySchoolId: function() {
            if(this.schoolId != 0) {
                this.$http.get('/grade/findGradesBySid.json?sid=' + this.schoolId).then(response => {
                    const body = response.body;
                    if(body.code == 200) {
                        this.gradeList = body.detail;
                    } else {
                        this.gnerr = body.description;
                    }
                }, response => {
                    this.gnerr = '年级信息获取失败，请稍后重试';
                })
            }
        }
    },
    mounted: function() {
        this.$http.get('/school/schools.json').then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.schoolList = body.detail;
            }else{
                this.snerr = '学校信息获取失败，请刷新重试'
            }
        }, response => {
            this.snerr = '网络链接错误，请刷新重试'
        })
    }
}
</script>

<style scoped>

</style>
