<template>
  <div class="header">
    <div class="container">
      <img src="@/assets/img/logo.png" alt="logo" />
    </div>
  </div>
  <div class="admin-view">
    <div class="container wrapper">
      <div class="admin-view-head">
        <h2>Edit Blog Post</h2>
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
            v-model="blog.title"
            @blur="v$.blog.title.$touch()"
            @focus="v$.blog.title.$reset()"
            :class="{ err: v$.blog.title.$error }"
          />
          <small
            :class="{ 'err-mssg': v$.blog.title.$error }"
            v-if="v$.blog.title.$error"
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
            v-model="blog.author"
            @blur="v$.blog.author.$touch()"
            @focus="v$.blog.author.$reset()"
            :class="{ err: v$.blog.author.$error }"
          />
          <small
            :class="{ 'err-mssg': v$.blog.author.$error }"
            v-if="v$.blog.author.$error"
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
            v-model="blog.details"
            @blur="v$.blog.details.$touch()"
            @focus="v$.blog.details.$reset()"
            :class="{ err: v$.blog.details.$error }"
          ></textarea>
          <small
            :class="{ 'err-mssg': v$.blog.details.$error }"
            v-if="v$.blog.details.$error"
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
            @change="(e) => (blog.image = e.target.files[0])"
            @blur="v$.blog.image.$touch()"
            @focus="v$.blog.image.$reset()"
            :class="{ err: v$.blog.image.$error }"
            accept="image/*"
          />
          <small
            :class="{ 'err-mssg': v$.blog.image.$error }"
            v-if="v$.blog.image.$error"
            >Image is required</small
          >
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="blog.password"
            @blur="v$.blog.password.$touch()"
            @focus="v$.blog.password.$reset()"
            :class="{ err: v$.blog.password.$error || error }"
          />
          <small
            :class="{ 'err-mssg': v$.blog.password.$error || error }"
            v-if="v$.blog.password.$error || error"
            >Provide the correct password</small
          >
        </div>
        <div class="flex-btn">
          <input type="submit" value="Post" class="btn" @click="post" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";

export default {
  name: "EditBlog",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {};
  },
  validations() {
    return {
      blog: {
        title: { required },
        author: { required },
        details: { required },
        password: { required },
        image: {
          required: requiredIf(() => {
            return this.blog.image.length == 0;
          }),
        },
      },
    };
  },
  methods: {
    ...mapActions(["getSingleBlog", "updateBlog"]),
    post() {
      if (this.v$.blog.$invalid) {
        this.v$.blog.$validate();
      } else {
        this.updateBlog({
          id: this.id,
          title: this.blog.title,
          author: this.blog.author,
          details: this.blog.details,
          image: this.blog.image,
          password: this.blog.password,
        });
      }
    },
  },
  computed: {
    ...mapGetters(["error", "blog"]),
  },
  mounted() {
    this.getSingleBlog(this.id);
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
    .input-field select,
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
