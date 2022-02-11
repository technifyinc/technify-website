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
      <form class="del-modal-form" @submit.prevent>
        <!-- <div class="input-field">
          <label for="password">Enter security password to continue:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password"
            @blur="v$.password.$touch()"
            @focus="v$.password.$reset()"
            :class="{ err: v$.password.$error || error }"
          />
          <small
            :class="{ 'err-mssg': v$.password.$error || error }"
            v-if="v$.password.$error || error"
            >Provide the correct password</small
          >
        </div> -->
        <div class="input-field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password"
            @blur="v$.password.$touch()"
            @focus="v$.password.$reset()"
            :class="{ err: v$.password.$error || error }"
          />
          <small
            :class="{ 'err-mssg': v$.password.$error || error }"
            v-if="v$.password.$error || error"
            >Provide the correct password</small
          >
        </div>
        <div class="btn-flex">
          <input
            type="button"
            class="btn"
            @click="resetDelModal"
            value="Cancel"
          />
          <input type="submit" class="btn" @click="delTable" value="Delete" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      password: "",
    };
  },
  validations() {
    return {
      password: { required },
    };
  },
  methods: {
    ...mapMutations(["toggleDelModal", "resetDelModal"]),
    ...mapActions(["deleteBlog"]),
    delTable() {
      if (this.v$.$invalid) {
        this.v$.$validate();
      } else {
        this.deleteBlog({ id: this.id, password: this.password });
      }
    },
  },
  computed: {
    ...mapGetters(["openDelModal", "error"]),
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
  &-form {
    .input-field label {
      color: $label;
      font-size: 13px;
      font-weight: 500;
      line-height: 22px;
    }
    .input-field input,
    .input-field select,
    .input-field textarea {
      background: #e8e8e8;
      margin-top: 0.8rem;
    }
  }
  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 2rem;
    input {
      display: inline;
      width: auto !important;
      margin: 0 !important;
    }
    input:first-child {
      font-size: 15px;
      font-weight: 600;
      line-height: 18px;
      color: $sub;
      border: none;
      background: none;
    }
    input:last-child {
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
.err {
  border: solid 1.5px #fa5d5d !important;
}
.err-mssg {
  color: #fa5d5d !important;
}
.errMssg {
  color: #d8000c;
  background-color: #ffd2d2;
  padding: 12px;
  animation: opacity ease 0.5s forwards;
  width: 100%;
  margin-top: 1rem;
  border-radius: 4px;
  border: solid 1.5px #ffd2d2;
}
.animate {
  animation: opacity ease 1s forwards;
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
      input:first-child {
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
      input:last-child {
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
