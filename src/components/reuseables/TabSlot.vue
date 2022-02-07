<template>
  <div class="tabs">
    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab">
        <slot :name="`tab-form-${index + 1}`" />
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "TabSlot",
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
