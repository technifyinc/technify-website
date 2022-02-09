<template>
  <div class="header">
    <div class="container">
      <img src="@/assets/img/logo.png" alt="logo" />
    </div>
  </div>
  <div class="admin-view">
    <div class="container wrapper">
      <div class="admin-view-head">
        <h2>Blog Form</h2>
      </div>
      <form
        class="admin-view-content"
        @submit.prevent
        enctype="multipart/form-data"
      >
        <div class="input-field">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            v-model="title"
            @blur="v$.title.$touch()"
            @focus="v$.title.$reset()"
            :class="{ err: v$.title.$error }"
          />
          <small :class="{ 'err-mssg': v$.title.$error }" v-if="v$.title.$error"
            >Title is required</small
          >
        </div>
        <div class="input-field">
          <label for="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            v-model="author"
            @blur="v$.author.$touch()"
            @focus="v$.author.$reset()"
            :class="{ err: v$.author.$error }"
          />
          <small
            :class="{ 'err-mssg': v$.author.$error }"
            v-if="v$.author.$error"
            >Author is required</small
          >
        </div>
        <div class="input-field">
          <label for="details">Blog Details</label>
          <textarea
            type="text"
            name="details"
            id="details"
            placeholder="Blog details goes here..."
            rows="10"
            v-model="details"
            @blur="v$.details.$touch()"
            @focus="v$.details.$reset()"
            :class="{ err: v$.details.$error }"
          ></textarea>
          <small
            :class="{ 'err-mssg': v$.details.$error }"
            v-if="v$.details.$error"
            >Details is required</small
          >
        </div>
        <div class="input-field">
          <label for="file">Upload Image</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="file"
            @change="(e) => (imageUpload = e.target.files)"
            @blur="v$.imageUpload.$touch()"
            @focus="v$.imageUpload.$reset()"
            :class="{ err: v$.imageUpload.$error }"
            accept="image/*"
          />
          <small
            :class="{ 'err-mssg': v$.imageUpload.$error }"
            v-if="v$.imageUpload.$error"
            >Image is required</small
          >
        </div>
        <!-- <div class="input-field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password"
            @blur="v$.password.$touch()"
            @focus="v$.password.$reset()"
            :class="{ err: v$.password.$error }"
          />
          <small
            :class="{ 'err-mssg': v$.password.$error }"
            v-if="v$.password.$error"
            >Password is required</small
          >
        </div> -->
        <div class="flex-btn">
          <input type="submit" value="Post" class="btn" @click="post" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";

export default {
  name: "AdminForm",
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  // },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      title: "",
      author: "",
      details: "",
      password: "",
      imageUpload: [],
    };
  },
  validations() {
    return {
      title: { required },
      author: { required },
      details: { required },
      // password: { required },
      imageUpload: {
        required: requiredIf(() => {
          return this.imageUpload.length == 0;
        }),
      },
    };
  },
  methods: {
    ...mapActions(["postBlog"]),
    // uploadImage() {
    //   const file = document.querySelector("input[type=file]").files[0];
    //   const reader = new FileReader();
    //   let rawImg;
    //   reader.onloadend = () => {
    //     rawImg = reader.result;
    //     this.imageUpload = rawImg;
    //   };
    //   reader.readAsDataURL(file);
    //   console.log(file);
    // },
    post() {
      if (this.v$.$invalid) {
        this.v$.$validate();
      } else {
        this.postBlog({
          title: this.title,
          author: this.author,
          details: this.details,
          image: this.imageUpload,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
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
    padding: 1rem;
    margin: 1.5rem 0;
    .input-field {
      margin: 2rem 0;
    }
    .input-field label {
      color: $label;
      font-size: 13px;
      font-weight: 500;
      line-height: 22px;
    }
    .input-field input,
    .input-field textarea {
      background: #e8e8e8;
      margin-top: 0.8rem;
    }
    .flex-btn {
      input[type="submit"] {
        padding: 1rem;
      }
    }
    .or {
      margin: 1rem 0 0;
      color: $sec-color;
      letter-spacing: 1px;
    }
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
      padding: 2rem 3rem;
      .input-field label {
        font-size: 16px;
      }
      .flex-btn {
        display: flex;
        justify-content: flex-end;
        input[type="submit"] {
          width: auto;
          font-size: 16px;
          line-height: 20px;
          padding: 0.7rem 2rem;
        }
      }
    }
  }
}
</style>
