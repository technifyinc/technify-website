<template>
  <div class="header">
    <div class="container">
      <img src="@/assets/img/logo.png" alt="logo" />
    </div>
  </div>
  <div class="admin-view">
    <div class="container wrapper">
      <div class="admin-view-head">
        <h2>Event Form</h2>
      </div>
      <form class="admin-view-content">
        <div class="input-field">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>
        <div class="input-field">
          <label for="details">Event Details</label>
          <textarea
            type="text"
            name="details"
            id="details"
            placeholder="Blog details goes here..."
            rows="10"
          ></textarea>
        </div>
        <div class="input-field">
          <label for="file">Add Image</label>
          <input type="file" name="file" id="file" placeholder="file" />
        </div>
        <p class="or">- OR -</p>
        <div class="input-field">
          <label for="link">Image URL</label>
          <input
            type="text"
            name="link"
            id="link"
            placeholder="https://image-url.png"
          />
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="flex-btn">
          <input type="submit" value="Post" class="btn" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminForm",
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
