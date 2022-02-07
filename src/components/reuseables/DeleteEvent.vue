<template lang="html">
  <div class="del-modal" v-show="openDelModal" @click.self="resetDelModal">
    <div class="del-modal-content">
      <div class="del-modal-body">
        <img src="@/assets/img/del.svg" alt="delete-icon" />
        <h3>Delete Post</h3>
        <p>
          Are you sure you want to delete this post? <br />
          Once deleted it can not be recovered.
        </p>
      </div>
      <div class="btn-flex">
        <button class="btn" @click="resetDelModal">Cancel</button>
        <button class="btn" @click="delTable">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["toggleDelModal", "resetDelModal", "deleteEvent"]),
    delTable() {
      this.deleteEvent(this.id);
      this.resetDelModal();
    },
  },
  computed: {
    ...mapGetters(["openDelModal"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
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
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
      color: #e80000;
      margin: 1rem 0;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: $sub;
      margin: 1rem 0;
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

.show-modal-leave-active {
  transform: zoom-in 0.5s reverse;
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
  .del-modal {
    &-content {
      width: 500px;
    }
    &-body {
      img {
        width: 30px;
      }
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
    .btn-flex {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      button:first-child {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: #e80000;
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
