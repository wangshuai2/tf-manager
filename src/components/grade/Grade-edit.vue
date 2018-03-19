<template>
    <div class="data-add">
        <div class="form-title">
            <h3>修改年级信息</h3>
        </div>
        <form class="data-form">
            <div class="form-group">
                <label for="schoolId"><code>*</code>所在学校</label>
                <select id="schoolId" v-model="schoolId" disabled>
                    <option value="0">选择学校</option>
                    <option v-for="school in schoolList" :key="school.id" :value="school.id">{{school.name}}</option>
                </select>
                <span>{{snerr}}</span>
            </div>
            <div class="form-group">
                <label for="gradeName"><code>*</code>年级名称</label>
                <input type="text" id="gradeName" v-model="gName" placeholder="请输入年级名称">
                <span>{{gnerr}}</span>
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
            schoolList: [],
            schoolId: '0',
            gName: '',
            snerr: '',
            gnerr: '',
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
            if(this.gName == '') {
                this.gnerr = '年级名称不能为空';
                return false;
            } else {
                this.gnerr = '';
            }

            this.$http.post('/grade/updateGrade.json', {gid: this.$route.params.id, name: this.gName}).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    this.$router.push({path: '/grade'});
                } else {
                    this.err = body.description;
                }
            }, response => {
                this.err = '网络链接错误，请稍候重试。'
            })
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
        });
        this.$http.get('/grade/findGrade.json?gid=' + this.$route.params.id).then(response => {
            const body = response.body;
            if(body.code = 200) {
                this.gName = body.detail.name;
                this.schoolId = body.detail.schoolId;
            }
        }, response => {})
    }
}
</script>

<style scoped>

</style>
