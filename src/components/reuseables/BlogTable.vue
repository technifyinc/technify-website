<template lang="html">
  <div class="add-btn">
    <button class="btn" @click="$router.push({ name: 'add-blog' })">
      Add Blog Post
    </button>
  </div>
  <div class="table-wrapper" v-if="blogTables.length">
    <div class="table-container">
      <table cellpadding="1" cellspacing="1" class="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(table, index) in blogTables" :key="index">
            <td data-label="image-source">
              <img :src="require(`@/assets/img/${table.src}`)" />
            </td>
            <td data-label="title">{{ table.title }}</td>
            <td data-label="author">{{ table.author }}</td>
            <td data-label="date-added">{{ table.dateAdded }}</td>
            <td data-label="icon" class="table-icon">
              <span
                class="mdi mdi-pencil-outline"
                @click="edit(table.id)"
              ></span>
              <span
                class="mdi mdi-trash-can"
                @click="toggleModal(table.id)"
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <div class="prev">
        <span class="mdi mdi-chevron-left"></span>
        <span>Prev 1</span>
      </div>
      <div class="next">
        <span>2 Next</span>
        <span class="mdi mdi-chevron-right"></span>
      </div>
    </div>
  </div>
  <empty-content v-else>
    <h3>Oops!</h3>
    <p>No contact available</p>
  </empty-content>
  <transition name="show-modal">
    <delete-modal :id="id" />
  </transition>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import DeleteModal from "@/components/reuseables/DeleteModal.vue";
import EmptyContent from "@/components/reuseables/EmptyContent.vue";
export default {
  name: "ContactTable",
  components: {
    EmptyContent,
    DeleteModal,
  },
  data() {
    return {
      id: "",
    };
  },
  methods: {
    ...mapMutations(["toggleDelModal", "resetDelModal", "deleteBlog"]),
    delTable() {
      this.deleteBlog(this.id);
      this.resetDelModal();
    },
    toggleModal(id) {
      this.id = id;
      this.toggleDelModal();
    },
    edit(id) {
      this.$router.push({ name: "edit-contact", params: { id } });
    },
  },
  computed: {
    ...mapGetters(["blogTables", "openDelModal"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.table-wrapper {
  overflow: hidden;
  position: relative;
  margin-top: 1rem;
  width: 100%;
  & > .table-container {
    overflow-x: auto;
  }
  & > .table-container::-webkit-scrollbar {
    width: auto;
    height: 2px;
    background: transparent;
  }
  & > .table-container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: $input-border;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    &,
    th,
    td {
      border-bottom: 1px solid #eed3ff;
    }
    & th,
    & td {
      vertical-align: center;
      white-space: nowrap;
      padding: 1rem;
    }
    & th {
      background: rgba(190, 83, 255, 0.08);
      font-size: 15px;
      font-weight: 600;
      line-height: 18px;
      color: $pri-color;
      text-align: left;
      white-space: nowrap;
    }
    & td {
      font-size: 13px;
      font-weight: 400;
      line-height: 15px;
      color: $sub;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
  .table-icon {
    span:first-child {
      color: #3dd514;
      position: relative;
      margin-right: 0.5rem;
      &::after {
        position: absolute;
        width: 100%;
        content: "";
        bottom: 0;
        left: 0;
        height: 1px;
        background: #3dd514;
      }
    }
    span:last-child {
      color: #e83636;
    }
  }
  .pagination {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    span {
      font-size: 15px;
      font-weight: 600;
      line-height: 18px;
      color: $sub;
    }
    span.mdi {
      font-size: 18px;
    }
    .prev {
      margin-right: 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
    }
    .next {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      span {
        color: $pri-color;
      }
    }
  }
}

.add-btn {
  padding: 1rem;
}

.del-modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(128, 128, 128, 0.65);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  &-content {
    position: absolute;
    width: 90%;
    margin: auto;
    background: $white;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    margin-bottom: 1rem;
  }
  &-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    img {
      width: 30px;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      color: #e80000;
      margin: 1rem 0;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      color: $sub;
    }
  }
  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 2rem;
    button {
      display: inline;
      width: auto !important;
      margin: 0 !important;
    }
    button:first-child {
      font-size: 15px;
      font-weight: 600;
      line-height: 18px;
      color: $sub;
      border: none;
      background: none;
    }
    button:last-child {
      font-size: 15px;
      font-weight: 600;
      line-height: 18px;
      color: $white;
      background: #db0000;
      border-radius: 5px;
      padding: 0.6rem 2rem;
      margin-top: 0.5rem !important;
    }
  }
}
.show-modal-enter-active {
  animation: zoom-in 0.5s ease;
}

@keyframes zoom-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media screen and (min-width: 1000px) {
  .table-wrapper {
    table {
      & th {
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        color: $pri-color;
      }
      & td {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: $sub;
      }
      img {
        width: 81px;
        height: 73px;
      }
    }
    .table-icon {
      span {
        cursor: pointer;
      }
    }
    .pagination {
      .prev,
      .next {
        cursor: pointer;
      }
    }
  }
  .del-modal {
    &-content {
      width: 500px;
    }
    &-close {
      span {
        cursor: pointer;
      }
    }
    &-body {
      img {
        width: 30px;
        h3 {
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
          color: #e80000;
        }
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          color: $sub;
        }
      }
    }
    .btn-flex {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      button:first-child {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: $sub;
        border: 1px solid $sub;
        border-radius: 5px;
        margin-right: 0.5rem !important;
        padding: 0.8rem 2rem;
        transition: all ease 0.5s;
        &:hover {
          background: $sub;
          color: $white;
        }
      }
      button:last-child {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: $white;
        background: #db0000;
        border-radius: 5px;
        border: 1px solid #db0000;
        padding: 0.8rem 2rem;
        transition: all ease 0.5s;
        margin: 0 !important;
        &:hover {
          background: $white;
          color: #db0000;
        }
      }
    }
  }
}
</style>
