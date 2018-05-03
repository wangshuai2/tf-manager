<template>
  <div id="app">
    <!-- <nav-view v-if="url"></nav-view>
     -->
    <el-row :gutter="24">
        <div class="top-nav" style="width:100%;height:70px;line-height:70px;text-align:center;color:#fff;background-color:#545c64">
            天赋音乐管理后台
        </div>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="4">
            <el-menu :default-active="activeNav" mode="vertical" class="manage-link" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>学校管理</span>
                    </template>
                    <el-menu-item index="/school">学校列表</el-menu-item>
                    <el-menu-item index="/school_add">添加学校</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>教师管理</span>
                    </template>
                    <el-menu-item index="/teacher" route="/teacher">教师列表</el-menu-item>
                    <el-menu-item index="/teacher_add" route="/teacher_add">添加教师</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>班级管理</span>
                    </template>
                    <el-menu-item index="/class" route="/class">班级列表</el-menu-item>
                    <el-menu-item index="/class_add" route="/class_add">添加班级</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>学生管理</span>
                    </template>
                    <el-menu-item index="/student" route="/student">学生列表</el-menu-item>
                    <el-menu-item index="/student_add" route="/student_add">添加学生</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>年级管理</span>
                    </template>
                    <el-menu-item index="/grade" route="/grade">年级列表</el-menu-item>
                    <el-menu-item index="/grade_add" route="/grade_add">添加年级</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>问答管理</span>
                    </template>
                    <el-menu-item index="/question" route="/question">问题列表</el-menu-item>
                    <el-menu-item index="/question_add" route="question_add">添加问题</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
        <el-col :span="14" :offset="2">
            <router-view/>
        </el-col>
    </el-row>
  </div>
</template>

<script>
// import Nav from "./components/Nav";

export default {
  name: "app",
  data() {
      return {
          activeNav: this.$route.path,
          url: this.$route.fullPath.indexOf('/login') == -1
      }
  },
  components: {
    // "nav-view": Nav
  },
  methods: {
    logOut: function() {
      this.$http.post("/logout.json").then(response => {
        if (response.body.code == 200) {
          this.$router.push({ path: "/login" });
        }
      });
    }
  }
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0; 
}
input[type="number"],
input[type="date"] {
    -moz-appearance:textfield;
}

#app {
  /* padding: 70px 30px 50px 200px; */
  box-sizing: border-box;
}
.manage-link a {
    color: #fff;
    text-decoration: none;
}
.manage-link li.is-active a {
    color: rgb(255, 208, 75);
}
.list {
  width: 100%;
}
.list-title {
    padding: 20px 0 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
}
.list-title h3 {
    font-size: 16px;
    font-weight: normal;
    color: #333;
    /* display: inline-block; */
    text-indent: 8px;
    border-left: 2px solid #88B7E0;
}
.list-header {
    width: 100%;
    margin-bottom: 30px;
}
.list-header::after,.list-header::before {
    content: '';
    display: block;
    clear: both;
}
.list-header input,
.list-header select {
    width: 200px;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}
.list-data {
  width: 100%;
  border: 1px solid #eee;
  border-collapse: collapse;
  font-size: 14px;
}
.list-data tr,
.list-data td {
  margin: 0;
  padding: 0;
}
.list-data td {
  padding: 8px 0;
  text-align: center;
  border: 1px solid #eee;
  vertical-align: middle;
}
/* .list-data tr td:nth-child(1) {

    width: 10%;
  }
  .list-data tr td:nth-child(2) {
    width: 40%;
  }
  .list-data tr td:nth-child(3) {
    width: 40%;
  }
  .list-data tr td:nth-child(4) {
    width: 10%;
  } */
.list-data a {
  font-size: 12px;
  margin: 0 5px;
  color: #06c;
  text-decoration: none;
}

.data-add {
    
}
.data-form {
    width: 550px;
    margin: 0 auto;
}
.form-title {
    padding: 20px 0 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
}
.form-title h3 {
    font-size: 16px;
    font-weight: normal;
    color: #333;
    /* display: inline-block; */
    text-indent: 8px;
    border-left: 2px solid #88B7E0;
}
.form-group {
    margin-bottom: 30px;
    position: relative;
}
.form-group::before, .form-group::after {
    content: '';
    display: block;
    clear: both;
}
.form-group label {
    width: 150px;
    height: 40px;
    line-height: 40px;
    float: left;
    font-size: 14px;
    padding-right: 20px;
    box-sizing: border-box;
    text-align: right;
}
.form-group code {
    margin-right: 5px;
    color: #d9534f;
}
.form-group input,
.form-group select {
    width: 400px;
    height: 40px;
    line-height: 40px;
    float: left;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
}
.form-group span {
    color: #d9534f;
    position: absolute;
    top: 45px;
    left: 155px;
    font-size: 12px;
}
.form-group button {
    height: 35px;
    padding: 0 30px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
.form-group button:first-child {
    margin-left: 150px;
    margin-right: 15px;
}
.form-group .btn-cancel {
    color: #333;
    border: 1px solid #ddd;
    background-color: #f7f7f7;
}
.form-group .btn-submit {
    color: #fff;
    border: 1px solid #09c;
    background-color: #09c;
}
.list-page {
    font-size: 12px;
}
.list-page .pager-wrapper a, .list-page .pager-wrapper strong {
    min-width: 0;
    height: 23px;
    line-height: 23px;
    padding: 0 9px;
}
.list-page .pager-wrapper a {
    cursor: pointer;
}
.list-page .pager-jump .jump-input {
    width: 30px;
    height: 23px;
    padding: 0 8px;
    font-size: 12px;
    text-align: center;
}
.list-page .pager-jump span {
    line-height: 25px;
}
.list-page .pager-pages, .list-page .pager-jump {
    height: 25px;
}
</style>
