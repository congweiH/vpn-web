<script setup>
import { onMounted, ref } from 'vue';

import { ElButton, ElTable, ElTableColumn } from 'element-plus';

import { VpnApi } from './api/VpnApi';
import CreateUserDialog from './components/CreateUserDialog.vue';


const tableData = ref();

const createUserDialogVisible = ref(false);

onMounted(async () => {
  tableData.value = await VpnApi.queryList();
})

async function handleDelete(email) {
  await VpnApi.deleteUser(email);
}
</script>

<template>
  <el-button type="primary" @click="createUserDialogVisible = true">添加</el-button>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="email" label="邮箱" width="180" />
    <el-table-column prop="deadline" label="到期时间" width="180" />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleDelete(row.email)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <CreateUserDialog v-model="createUserDialogVisible" />
</template>

<style scoped>

</style>
