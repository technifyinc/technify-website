<template>
  <div class="header">
    <div class="container">
      <img
        src="@/assets/img/logo.png"
        alt="logo"
        @click="$router.push({ name: 'home' })"
      />
    </div>
  </div>
  <div class="admin-view">
    <div class="container wrapper">
      <div class="admin-view-head">
        <h2>Admin</h2>
      </div>
      <div class="admin-view-content">
        <ul>
          <li
            v-for="(tab, index) in tabList"
            :key="index"
            :class="{
              active: index + 1 === activeTab,
              inactive: index + 1 !== activeTab,
            }"
          >
            <label :for="index">{{ tab }}</label>
            <input
              :id="index"
              type="radio"
              name="question-tab"
              :value="index + 1"
              v-model="activeTab"
              class="hidden"
            />
          </li>
        </ul>
        <tab-slot :tabList="tabList" :activeTab="activeTab">
          <template v-slot:tab-form-1>
            <blog-table />
          </template>
          <template v-slot:tab-form-2>
            <event-table />
          </template>
        </tab-slot>
      </div>
    </div>
  </div>
</template>
<script>
import BlogTable from "@/components/blogs/BlogTable.vue";
import EventTable from "@/components/events/EventTable.vue";
import TabSlot from "@/components/reuseables/TabSlot.vue";
export default {
  name: "AdminView",
  components: {
    BlogTable,
    EventTable,
    TabSlot,
  },
  data() {
    return {
      tabList: ["Blog", "Event"],
      activeTab: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
@mixin beforeEffect() {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  height: 3.5px;
  width: 0;
  background: $sec-color;
  transition: width 0.5s ease-in-out;
}
@mixin gridTwo() {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
@mixin afterEffect() {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  height: 3.5px;
  width: 100%;
  background: $sec-color;
  transition: width 0.5s ease-in-out;
}
.header {
  height: 78px;
  background: $white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 4px 0px 6px 2px rgba(0, 0, 0, 0.04);
  z-index: 100;
  img {
    width: 100px;
    cursor: pointer;
  }
}
.admin-view {
  background: #d2d2d2;
  height: 100%;
  padding: 3rem 0;
  margin-top: 78px;
  height: calc(100% - 78px);
  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
    button {
      font-weight: 800;
      font-size: 13px;
      line-height: 16px;
    }
  }
  &-content {
    background: $white;
    border-radius: 5px;
    box-shadow: 4px 0px 6px 2px rgba(0, 0, 0, 0.04);
    padding: 1rem 0;
    margin: 1.5rem 0;
    ul {
      list-style: none;
      @include gridTwo();
      grid-gap: 0;
      text-align: center;
      li {
        label {
          display: block;
          border-bottom: solid 1px rgba(99, 15, 150, 0.22);
          position: relative;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          transition: all ease 0.5s;
          padding-bottom: 1rem;
          &:hover {
            color: $sec-color;
          }
        }
      }
      .active {
        position: relative;
        color: $sec-color;
        &::after {
          @include afterEffect();
        }
      }
      .inactive {
        position: relative;
        color: $sub;
      }
      .hidden {
        display: none;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .wrapper {
    width: 800px;
    margin: auto;
  }
  .admin-view {
    &-head {
      h2 {
        font-size: 22px;
        line-height: 26px;
      }
    }
    &-content {
      ul {
        li {
          label {
            cursor: pointer;
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }
  }
}
</style>
