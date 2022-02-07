<template>
  <div class="admin">
    <div class="container">
      <div class="admin-content">
        <h3>Hello There</h3>
      </div>
    </div>
  </div>
  <admin-table />
</template>

<script>
import AdminTable from "@/components/reuseables/AdminTable.vue";
export default {
  name: "AdminView",
  components: {
    AdminTable,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
</style>
