<template>
<div>
  <div class="data-panel-content">
    <el-table :data="listInfo.list" width="100%">
      <el-table-column prop="title" label="标题" fixed />
      <el-table-column  prop="url" label="链接" />
      <el-table-column  prop="post_time" label="发布时间" />
      <el-table-column  prop="type" label="发文类型" />
      <el-table-column  prop="create_user" label="创建人" />
      <el-table-column  prop="create_time" label="创建日期" />
      <el-table-column  prop="modify_user" label="修改人" />
      <el-table-column  prop="modify_time" label="修改时间" />
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="editAct(scope.row)">
            编辑
          </el-button>
          <el-button v-if="scope.row.user" size="mini" @click="detAct(scope.row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <global-footer-page
      :size="listInfo.pageSize"
      :total="listInfo.total"
      :page="listInfo.page"
      @sizeChange="sizeChange"
      @pageChange="pageChange"
    >
    </global-footer-page>
  </div>
  <edit-alert v-if="showEdit" :detail="selectedDetail" @close="editCallback" />
</div>
</template>

<script>
import EditAlert from './edit.vue';
import server from './server';

export default {
  name: 'conf-conponent',
  components: {EditAlert},
  data () {
    return {
      search: {
      },
      listInfo: {
        list: [],
        page: 0,
        pageSize: 10,
        total: 1,
        status: 'start', // 'start' //初始状态 'loading' 加载中,'loadingend' 加载完成
      },
      showEdit: false,
      selectedDetail: {},
    };
  },
  watch: {},

  mounted () {
    this.getList();
  },
  methods: {
    // 统一拉列表接口
    async getList () {
      // TODO 列表类页面通用逻辑
      const { page, pageSize, status } = this.listInfo;
      if (status === 'loading') {
        return;
      }
      const { list, total } = await server.getList({
        page,
        pageSize,
      });
      this.listInfo.list = list;
      this.listInfo.total = total;
      this.listInfo.status = 'loadingend';
    },
    async detAct (id) {
        const isSus = await server.deletePage({ ids: id, isDel: 1 });
        if (isSus) {
          this.getList();
          this.$notify.success({ message: '删除成功' });
        }
    },
    editAct (item) {
      this.selectedDetail = item;
      this.showEdit = true;
    },
    editCallback ({ submitSusccess } = {}) {
      if (submitSusccess) {
        this.getList();
      }
      this.showEdit = false;
    },
    sizeChange (newSize) {
      this.listInfo.pageSize = newSize;
      this.listInfo.page = 1;
      this.getList();
    },
    pageChange (newPage) {
      this.listInfo.page = newPage;
      this.getList();
    },
    searchChange () {
      this.listInfo.page = 1;
      this.getList();
    },
  },
};
</script>
 
