<template>
  <div id="app">
    <nav-view v-if="url"></nav-view>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "app",
  data() {
      return {
          url: this.$route.fullPath.indexOf('/login') == -1
      }
  },
  components: {
    "nav-view": Nav
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
  padding: 70px 30px 50px 200px;
  box-sizing: border-box;
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
