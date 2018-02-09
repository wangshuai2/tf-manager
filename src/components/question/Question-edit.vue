<template>
    <div class="data-add">
        <div class="form-title">
            <h3>添加问题</h3>
        </div>
        <form class="data-form">
            <!-- <div class="form-group">
                <label for="courseId"><code>*</code>课程类型</label>
                <select id="courseId" v-model="courseId" @change="getCourseInfo">
                    <option value="0">请选择课程类型</option>
                    <option v-for="course in courseList" :key="course.id" :value="course.id">{{course.name}}</option>
                </select>
                <span>{{cerr}}</span>
            </div>
            <div class="form-group">
                <label for="courseInfo"><code>*</code>课程信息</label>
                <select id="courseInfo" v-model="iId" @change="getCoursePart">
                    <option value="0">请选择课程信息</option>
                    <option v-for="c in courseInfoList" :key="c.id" :value="c.id">{{c.name}}</option>
                </select>
                <span>{{ierr}}</span>
            </div>
            <div class="form-group">
                <label for="coursePart"><code>*</code>节课信息</label>
                <select id="coursePart" v-model="pId" @change="getCourseHuanjie">
                    <option value="0">请选择节课信息</option>
                    <option v-for="p in coursePartList" :key="p.id" :value="p.id">{{p.name}}</option>
                </select>
                <span>{{perr}}</span>
            </div>
            <div class="form-group">
                <label for="courseHuanjie"><code>*</code>节课环节</label>
                <select id="courseHuanjie" v-model="hId">
                    <option value="0">请选择节课信息</option>
                    <option v-for="h in courseHuanjieList" :key="h.id" :value="h.id">{{h.name}}</option>
                </select>
                <span>{{herr}}</span>
            </div> -->
            <div class="form-group">
                <label for="questionTitle"><code>*</code>问题标题</label>
                <input type="text" id="questionTitle" v-model="questionTitle" placeholder="请输入问题标题">
                <span>{{qterr}}</span>
            </div>
            <div class="form-group">
                <label for="questionDesc">问题描述</label>
                <input type="text" id="questionDesc" v-model="questionDesc" placeholder="请输入问题描述">
                <span>{{qderr}}</span>
            </div>
            <div class="form-group">
                <label for="optionType"><code>*</code>选项类型</label>
                <select id="optionType" v-model="oId">
                    <option value="1">文字型</option>
                    <option value="2" disabled>资源型</option>
                </select>
                <span>{{oerr}}</span>
            </div>
            <div class="form-group">
                <label for="optionReply1"><code>*</code>回答选项A</label>
                <input type="text" id="optionReply1" v-model="optionReply1" placeholder="选项A对应回答">
                <span>{{or1err}}</span>
            </div>
            <div class="form-group">
                <label for="optionReply2"><code>*</code>回答选项B</label>
                <input type="text" id="optionReply2" v-model="optionReply2" placeholder="选项B对应回答">
                <span>{{or2err}}</span>
            </div>
            <div class="form-group">
                <label for="optionReply3">回答选项C</label>
                <input type="text" id="optionReply3" v-model="optionReply3" placeholder="选项C对应回答">
                <!-- <span>{{orerr}}</span> -->
            </div>
            <div class="form-group">
                <label for="optionReply4">回答选项D</label>
                <input type="text" id="optionReply4" v-model="optionReply4" placeholder="选项D对应回答">
                <!-- <span>{{orerr}}</span> -->
            </div>
            <div class="form-group">
                <label for="optionReply5">回答选项E</label>
                <input type="text" id="optionReply5" v-model="optionReply5" placeholder="选项E对应回答">
                <!-- <span>{{orerr}}</span> -->
            </div>
            <div class="form-group">
                <label for="optionReply6">回答选项F</label>
                <input type="text" id="optionReply6" v-model="optionReply6" placeholder="选项F对应回答">
                <!-- <span>{{orerr}}</span> -->
            </div>
            <div class="form-group">
                <label for="rightKey"><code>*</code>正确答案</label>
                <select id="rightKey" v-model="rId">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
                <span>{{rerr}}</span>
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
            courseId: '0',
            courseList: [],
            iId: '0',
            courseInfoList: [],
            pId: '0',
            coursePartList: [],
            hId: '0',
            courseHuanjieList: [],
            questionTitle: '',
            qterr: '',
            questionDesc: '',
            qderr: '',
            oId: '1',
            rId: 'A',
            rerr: '',
            oerr: '',
            cerr: '',
            ierr: '',
            perr: '',
            herr: '',
            err: '',
            optionReply1: '',
            optionReply2: '',
            optionReply3: '',
            optionReply4: '',
            optionReply5: '',
            optionReply6: '',
            or1err: '',
            or2err: ''
        }
    },
    methods: {
        cancelBtn: function() {
            this.$router.back();
        },
        submitBtn: function() {

            if(this.questionTitle == '') {
                this.qterr = '问题题目不能为空';
                return false;
            }else{
                this.qterr = '';
            }

            if(this.questionTitle == '') {
                this.qterr = '问题题目不能为空';
                return false;
            }else{
                this.qterr = '';
            }

            let coursepartId = '';

            if(this.hId != '0') {
                coursepartId = this.hId;
            } else {
                if(this.pId != '0') {
                    coursepartId = this.pId;
                }else{
                    if(this.iId != '0') {
                        coursepartId = this.iId;
                    }else{
                        if(this.courseId != '0') {
                            coursepartId = this.courseId;
                            this.cerr = '';
                        }else{
                            this.cerr = '课程类型为必选！'
                            return false;
                        }
                    }
                }
            }

            let quesOptions = '';

            if(this.optionReply1 != ''){
                quesOptions += this.optionReply1;
                this.or1err = '';
            }else{
                this.or1err = '此选项为必选！';
            }

            if(this.optionReply2 != ''){
                quesOptions += '|' + this.optionReply2;
                this.or2err = '';
            }else{
                this.or2err = '此选项为必选！';
            }

            if(this.optionReply3 != ''){
                quesOptions += '|' + this.optionReply3;
            }

            if(this.optionReply4 != ''){
                quesOptions += '|' + this.optionReply4;
            }

            if(this.optionReply5 != ''){
                quesOptions += '|' + this.optionReply5;
            }

            if(this.optionReply6 != ''){
                quesOptions += '|' + this.optionReply6;
            }



            const data = {
                quesTitle: this.questionTitle,
                quesDesc: this.questionDesc,
                optionType: this.oId,
                quesOptions: quesOptions,
                correctOption: this.rId,
                coursepartId: coursepartId
            }

            this.$http.post('/question/insertQuestion.json', data, {emulateJSON: false}).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.$router.push({path: '/question'});
                } else {
                    this.err = body.description;
                }
            }, response => {
                this.err = '网络链接错误，请稍候重试。'
            })
        },
        getCourseInfo: function() {
            this.$http.get('/question/findCoursePartByCourseId.json?courseId=' + this.courseId).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.courseInfoList = body.detail;
                } else {
                    this.ierr = body.description;
                }
            }, response => {
                this.ierr = '网络链接错误，请稍候重试。'
            })
        },
        getCoursePart: function() {
            this.$http.get('/question/findXiaoKeByCourseId.json?courseId=' + this.iId).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.coursePartList = body.detail;
                } else {
                    this.perr = body.description;
                }
            }, response => {
                this.perr = '网络链接错误，请稍候重试。'
            })
        },
        getCourseHuanjie: function() {
            this.$http.get('/question/findXiaoKeByCourseId.json?courseId=' + this.pId).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.courseHuanjieList = body.detail;
                } else {
                    this.perr = body.description;
                }
            }, response => {
                this.perr = '网络链接错误，请稍候重试。'
            })
        }
    },
    mounted: function() {
        this.$http.get('/course/findAllCourse.json').then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.courseList = body.detail;
            }else{
                this.cerr = '学校信息获取失败，请刷新重试'
            }
        }, response => {
            this.cerr = '网络链接错误，请刷新重试'
        });

        this.$http.get('/question/findQuestion.json?id=' + this.$route.params.id).then(response => {
            const body = response.body;
            if(body.code == 200) {
                this.rId = body.detail.correctOption;
                this.oId = body.detail.optionType;
                this.questionTitle = body.detail.quesTitle;
                this.questionDesc = body.detail.quesDesc;

                const quesOptions = body.detail.quesOptions.split('|');
                this.optionReply1 = quesOptions[0];
                this.optionReply2 = quesOptions[1];
                if(quesOptions.length == 6) {
                    this.optionReply3 = quesOptions[2];
                    this.optionReply4 = quesOptions[3];
                    this.optionReply5 = quesOptions[4];
                    this.optionReply6 = quesOptions[5];
                }
                if(quesOptions.length == 5) {
                    this.optionReply3 = quesOptions[2];
                    this.optionReply4 = quesOptions[3];
                    this.optionReply5 = quesOptions[4];
                }
                if(quesOptions.length == 4) {
                    this.optionReply3 = quesOptions[2];
                    this.optionReply4 = quesOptions[3];
                }
                if(quesOptions.length == 3) {
                    this.optionReply3 = quesOptions[2];
                }
            }
        })
    }
}
</script>

<style scoped>

</style>
