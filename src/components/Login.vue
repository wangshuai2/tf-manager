<template>
    <div class="login">
        <div class="login-cont">
            <div class="logo">天赋音乐管理后台</div>
            <form>
                <div class="form-item">
                    <label for="loginName">用户名</label>
                    <input type="text" id="loginName" placeholder="请输入用户名" v-model="loginName">
                </div>
                <div class="form-item">
                    <label for="loginPwd">密码</label>
                    <input type="password" id="loginPwd" placeholder="请输入密码" v-model="loginPwd" @keypress.enter="loginBtn">
                </div>
                <div class="form-item">
                    <button type="button" class="form-btn" @click="loginBtn">登录</button>
                </div>
            </form>
            <!-- <a href="/#/test">go test</a> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginName: '',
            loginPwd: '',
            err: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.isLogin
        }
    },
    methods: {
        loginBtn: function() {
            console.log(this.loginName);
            console.log(this.loginPwd);
            this.$http.post('/login.json', {userName: this.loginName, password: this.loginPwd}).then(response => {
            // this.$http.get('/login.json?userName=' + this.loginName + '&password=' + this.loginPwd).then(response => {
                const body = response.body;
                if(body.code == 200) {
                    console.log(body);
                    // this.$store.commit('loginStatus', true);
                    // this.$store.commit('userStatus', body.detail);
                    sessionStorage.setItem('isLogin', true);
                    sessionStorage.setItem('user', JSON.stringify(body.detail));
                    this.loginName = '';
                    this.loginPwd = '';
                    this.$router.push({ name: 'School' });
                }
            }, response => {
                console.log('error');
            })
        },

    }
}
</script>


<style scoped>
    
    .login {
        width: 100%;
        height: 100%;
        background: url('../assets/1508912127240-1.jpg') no-repeat center center;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .login-cont {
        width: 500px;
        padding: 40px 20px 35px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 2px rgba(0, 0, 0, .4);
        border-radius: 8px;
        background: rgba(255, 255, 255, .3);
        position: fixed;
        z-index: 2;
        top: 30%;
        left: 50%;
        margin-left: -250px;
    }

    .logo {
        text-align: center;
        font-size: 30px;
        height: 60px;
        line-height: 60px;
        color: #333;
        margin-bottom: 40px;
    }

    .form-item {
        width: 325px;
        margin: 0 auto;
        height: 40px;
        margin-bottom: 20px;
    }

    .form-item::before, .form-item::after {
        content: ' ';
        display: block;
        clear: both;
    }

    .form-item label {
        width: 75px;
        height: 40px;
        float: left;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
    }
    .form-item input {
        width: 200px;
        height: 38px;
        padding: 0 15px;
        float: left;
        border: 1px solid #e2af38;
        border-radius: 3px;
        font-size: 16px;
        outline: none;
    }
    .form-item button {
        width: 290px;
        height: 40px;
        display: block;
        margin: 0 auto;
        border-radius: 5px;
        background:#e2af38;
        border: none;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        outline: none;
    }
    .form-item button:hover {
        background: #facc62;
    }
    .form-item button:active {
        background: #e2a10a;
    }
</style>

