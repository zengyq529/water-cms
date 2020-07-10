<template>
<div>
  <div class="data-panel-content">
    <global-top-search-bar>
      <el-button type="primary" slot="left">添加用户</el-button>
    </global-top-search-bar>

    <el-table :data="listInfo.list" width="100%">
      <el-table-column prop="name" label="用户名" fixed/>
      <el-table-column  prop="deleted" label="已删除" />
      <el-table-column  prop="create_user" label="创建人" />
      <el-table-column  prop="create_time" label="创建时间" />
      <el-table-column  prop="modify_user" label="最后修改人" />
      <el-table-column  prop="modify_time" label="最后修改时间" />
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="editAct(scope.row)">
            编辑
          </el-button>
          <el-button type="danger" size="mini" @click="detAct(scope.row.id)">
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
        list: [
          {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        {
          name:'用户1',
          deleted:'已删除',
          create_user:'创建人',
          create_time:'2020-11-11',
          modify_user:'创建人',
          modify_time:'2020-11-11',
        },
        
        ],
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
 <style scoped>
 .data-panel-content{
   background: #fff;
   padding: 10px;
 }
 </style>
