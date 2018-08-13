<template>
    <div class="data-add">
        <div class="form-title">
            <h3>上传课件</h3>
        </div>
        <!-- <form action="/cccourse/upload" method="post" enctype="multipart/form-data"> -->
            <input type="file" name="sampleFile" accept="application/pdf" class="fileUpload" @change="fileSelected($event)">
            <!-- <button id="attSubmit" type="button" class="btn btn-default">上传</button> -->
        <!-- </form> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        fileSelected: function(userfile) {
            console.log(userfile);
            this.uploadFile(userfile);
        },
        uploadFile: function(userfile) {
            var fd = new FormData();
            fd.append("sampleFile", userfile.target.files[0]); //文件追到到FormData
            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener("progress", this.uploadProgress, false);
            xhr.addEventListener("load", this.uploadComplete, false);
            xhr.addEventListener("error", this.uploadFailed, false);
            xhr.addEventListener("abort", this.uploadCanceled, false);
            xhr.open("POST", "/cccourse/upload");
            xhr.send(fd);
        },
        uploadProgress: function(evt) {
            if (evt.lengthComputable) {
                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                console.log(percentComplete)
            } else {}
        },
        uploadComplete: function(evt) {
            var json = eval('(' + evt.target.responseText + ')');
            //图片上传完成服务器相应
            console.log(json);
            this.$router.push({path: '/course'});
        },
        uploadFailed: function(evt) {
            alert("上传失败");
        },
        uploadCanceled: function(evt) {
            // alert("已经取消上传");
        }
    }
}
</script>

<style scoped>

</style>
