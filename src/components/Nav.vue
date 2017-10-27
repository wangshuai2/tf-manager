<template>
    <div class="nav">
        <div class="top-nav">
            <div class="logo">
                天赋音乐管理后台
            </div>
        </div>
        <div class="sidebar">
            <div>
                <a href="/">首页</a>
            </div>
            <div>
                <span>学校管理</span>
                <ul>
                    <li><a href="/#/school">学校列表</a></li>
                    <li><a href="/#/school/add">添加学校</a></li>
                </ul>
            </div>
            <div>
                <span>教师管理</span>
                <ul>
                    <li><a href="/#/teacher">教师列表</a></li>
                    <li><a href="/#/teacher/add">添加教师</a></li>
                </ul>
            </div>
            <div>
                <span>学生管理</span>
                <ul>
                    <li><a href="/#/student">学生列表</a></li>
                    <li><a href="/#/student/add">添加学生</a></li>
                </ul>
            </div>
            <div>
                <span>年级管理</span>
                <ul>
                    <li><a href="/#/grade">年级列表</a></li>
                    <li><a href="/#/grade/add">添加年级</a></li>
                </ul>
            </div>
            <div>
                <span>班级管理</span>
                <ul>
                    <li><a href="/#/class">班级列表</a></li>
                    <li><a href="/#/class/add">添加班级</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .nav {}
    .top-nav {
        width: 100%;
        height: 50px;
        background: #333744;
        position: fixed;
        top: 0;
        left: 0;
    }
    .top-nav .logo {
        width: 500px;
        line-height: 50px;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 16px;
    }
    .sidebar {
        width: 180px;
        height: 100%;
        padding-top: 60px;
        box-sizing: border-box;
        background: #333744;
        position: fixed;
        top:0;
        left: 0;
        z-index: 5;
    }
    .sidebar div {}
    .sidebar div>span,
    .sidebar div>a {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 30px;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
        background: #42485B;
    }
    .sidebar div>a {
        cursor: pointer;
    }
    .sidebar ul {
        list-style: none;
    }
    .sidebar li {
        height: 40px;
        line-height: 40px;
        padding-left: 50px;
        box-sizing: border-box;
    }
    .sidebar a {
        color: #fff;
        font-size: 12px;
        outline: none;
        transition: none;
        text-decoration: none;
    }
</style>

