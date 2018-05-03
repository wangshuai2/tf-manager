<template>
    <div class="nav">
        <div class="top-nav">
            <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
            </el-menu>
        </div>
        <div class="sidebar">
            <el-row class="tac">
                <el-col :span="3">
                    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>学校管理</span>
                            </template>
                            <el-menu-item index="1-1" route="{name: 'Teacher'}">学校列表</el-menu-item>
                            <el-menu-item index="1-2"><a href="/#/school/add">添加学校</a></el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
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

<style scoped>
</style>

