<template>
    <div class="data-add">
        <div class="form-title">
            <h3>上传MusicXML</h3>
        </div>
        <el-row>
            <el-form ref="form" label-width="80px">
                <el-form-item label="曲谱名称">
                    <el-input v-model="staffname"></el-input>
                </el-form-item>
            </el-form>
            <el-upload
                ref="upload" 
                action="/musicXml/uploadMusicXml.json"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :file-list="fileList"
                :data="{courseName: staffname}"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传.xml文件</div>
            </el-upload>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
      return {
        fileList: [],
        staffname: '',
        updata: {
            courseName: this.staffname
        }
      };
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
}
</script>

<style scoped>

</style>
