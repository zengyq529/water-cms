<template>
  <el-drawer
    :title="detail.id?'人员编辑':'添加人员'"
    :visible.sync="showAlert"
    width="544px"
    @close="$emit('close')"
  > 

    <div style="padding:0px 20px">
    
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" size="mini">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" placeholder></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="label">
          <el-input v-model="form.label" placeholder></el-input>
        </el-form-item>
        <el-form-item label="是否删除" prop="label">
          <el-checkbox v-model="form.deleted"></el-checkbox>
        </el-form-item>
        <el-form-item label="创建人" prop="label" v-if="id">{{form.create_user}}</el-form-item>
        <el-form-item label="创建时间" prop="label" v-if="id">{{form.create_time}}</el-form-item>
        <el-form-item label="最后修改人" prop="label" v-if="id">{{form.modify_user}}</el-form-item>
        <el-form-item label="最后修改时间" prop="label" v-if="id">{{form.modify_time}}</el-form-item>
      </el-form>
      <div class="bottom-absolute">
        <el-button round @click="$emit('close')">取消</el-button>
        <el-button round type="primary" @click="submit">确定</el-button>
      </div>
    </div>
  </el-drawer>
</template>
<script>
import server from './server';

export default {
  name: "EditAlert",
  components: {},
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showAlert: true,
      form: {
        label: "",
        name: ""
      },
      rules: {},
      sending: false
    };
  },
  mounted() {
    if (this.id) {
      server.getDetail(this.id)
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitAct();
        } else {
          return false;
        }
      });
    },
    async submitAct() {
      this.sending = true;
      const { name, label } = this.form;
      const isSus = await updateDetail({
        id: this.id,
        name,
        label
      });
      if (isSus) {
        this.$emit("close", { submitSusccess: true });
      }
      this.sending = false;
    }
  }
};
</script>
<style>
</style>
