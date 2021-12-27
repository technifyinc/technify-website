<template lang="">
  <div class="comment">
    <h3>Comments</h3>
    <form>
      <div class="input-field">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Name" />
      </div>
      <div class="input-field">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Email" />
      </div>
      <div class="input-field">
        <label for="comment">Comment</label>
        <textarea
          type="text"
          id="comment"
          placeholder="Comment"
          cols="5"
          rows="10"
        ></textarea>
      </div>
      <div class="submit">
        <div class="div-one">
          <input type="checkbox" />
          <label>Anonymous</label>
        </div>
        <input type="submit" value="Post Comment" class="btn" />
      </div>
    </form>
    <div class="commentee">
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <img :src="comment.src" :alt="index" />
          <div class="content">
            <h4>{{ comment.name }}</h4>
            <p>{{ comment.content }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [
        {
          src: require("@/assets/img/avatar.svg"),
          name: "Dele James",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
        },
        {
          src: require("@/assets/img/avatar.svg"),
          name: "Talabi Emmanuel",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
        },
        {
          src: require("@/assets/img/avatar.svg"),
          name: "Shoo Jung",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
@mixin flexbox() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment {
  form {
    margin-top: 2rem;
  }
  & .input-field input,
  & .input-field textarea {
    display: block;
    padding: 1rem;
    background: $input;
    border-radius: 5px;
    border: solid 1px $input;
    width: 100%;
    margin: 1rem 0 0;
    transition: border ease 0.5s;
    outline: none;
    &::placeholder {
      color: $placeholder;
    }
    &:focus {
      background: $white;
      border: solid 1px $input-border;
    }
  }
  & .input-field label {
    color: $label;
    font-size: 16px;
  }
  & .input-field {
    margin-bottom: 2rem;
  }
  .submit {
    .div-one {
      @include flexbox();
      justify-content: flex-start;
      input[type="checkbox"] {
        margin-right: 0.7rem;
        width: auto;
      }
    }
  }
}

.commentee {
  margin: 5rem 0;
  ul {
    list-style: none;
  }
  li {
    display: flex;
    align-items: flex-start;
    padding: 3rem 0;
    border-top: solid 1px rgba(99, 15, 150, 0.33);
    border-bottom: solid 1px rgba(99, 15, 150, 0.33);
    img {
      width: 30px;
      margin: 0.4rem 1.5rem 0 0;
    }
    .content {
      p {
        font-weight: 400;
        font-size: 11px;
        line-height: 18.7px;
      }
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 22.96px;
        margin-bottom: 1rem;
      }
    }
  }
}

@media screen and (min-width: 700px) {
  .submit {
    @include flexbox();
    justify-content: space-between;
    input {
      margin-right: 1rem;
      width: auto;
    }
  }
}

@media screen and (min-width: 1000px) {
  .submit {
    input[type="submit"] {
      padding: 1rem 2rem;
      font-size: 16px;
    }
  }
  .commentee {
    li {
      img {
        width: 50px;
      }
      .content {
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 30.01px;
        }
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 32.8px;
          margin-bottom: 1rem;
        }
      }
    }
  }
  .comment .input-field input {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    &::placeholder {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
    }
  }
}

@media screen and (min-width: 1400px) {
  .comment .input-field input {
    padding: 1.5rem 1rem;
  }
  .commentee {
    li {
      .content {
        p {
          font-size: 13px;
          line-height: 23.01px;
        }
        h4 {
          font-size: 20px;
          line-height: 32.8px;
        }
      }
    }
  }
}
</style>
