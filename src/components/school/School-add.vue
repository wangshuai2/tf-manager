<template>
    <div class="data-add">
        <div class="form-title">
            <h3>添加学校</h3>
        </div>
        <form class="data-form">
            <div class="form-group">
                <label for="schoolName"><code>*</code>学校名称</label>
                <input type="text" id="schoolName" v-model="sName" placeholder="请输入学校名称">
                <span>{{snerr}}</span>
            </div>
            <div class="form-group">
                <label for="schoolType"><code>*</code>课程类型</label>
                <select id="schoolType" v-model="sType">
                    <option value="1">小学</option>
                </select>
            </div>
            <div class="form-group">
                <label for="startTime"><code>*</code>服务开始时间</label>
                <input type="date" id="startTime" v-model="sTime">
            </div>
            <div class="form-group">
                <label for="endTime"><code>*</code>服务结束时间</label>
                <input type="date" id="endTime" v-model="eTime">
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
            sType: 1,
            sTime: '',
            eTime: '',
            snerr: '',
            err: ''
        }
    },
    mounted: function() {
        const date = new Date();
        this.sTime = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getDate().toString();
        this.eTime = (date.getFullYear() + 1).toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getDate().toString();
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
                this.snerr = '学校名称不能为空！';
                return false;
            } else {
                this.snerr = '';
            }

            this.$http.post('/school/addSchool.json', {schoolName: name, courseType: type, startTime: stime, endTime: etime}, {emulateJSON: false}).then(response => {
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
