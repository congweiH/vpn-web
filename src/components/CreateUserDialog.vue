<script setup>
import { ref } from 'vue';

import { ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElDatePicker } from 'element-plus';

import { VpnApi } from '../api/VpnApi';


const dialogVisible = defineModel();

const formData = ref({
    "email": "",
    "deadline": ""
});

async function handleConfirm() {
    dialogVisible.value = false;

    await VpnApi.addUser(formData.value);


}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加用户"
    width="500"
  >
    <el-form :model="formData">
      <el-form-item label="邮箱" :label-width="100">
        <el-input v-model.trim="formData.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="过期时间" :label-width="100">
        <el-date-picker
            v-model="formData.deadline"
            type="date"
            placeholder="请选择日期"
            value-format="YYYY-MM-DD"
        />
      </el-form-item>
    </el-form>
    <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">
          确定
        </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
