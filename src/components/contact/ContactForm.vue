<template>
  <form>
    <div class="input-field">
      <label for="name">Full Name</label>
      <input type="text" id="name" placeholder="Enter Full Name" />
    </div>
    <div class="input-field">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Enter Email" />
    </div>
    <div class="input-field">
      <label for="subject">Subject</label>
      <input type="text" id="subject" placeholder="Enter Subject" />
    </div>
    <div class="input-field">
      <label for="message">Message</label>
      <textarea
        name="textarea"
        id="message"
        cols="30"
        rows="10"
        placeholder="Enter message"
      ></textarea>
    </div>
    <div class="input-field">
      <input type="submit" value="Submit" class="btn" />
    </div>
  </form>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
form {
  text-align: left;
  margin-top: 3rem;
  & .input-field input,
  & .input-field textarea {
    border: solid 1px $sec-color;
    margin-top: 1rem;
    &::placeholder {
      color: #737373;
    }
  }
  & .input-field label {
    color: $sub;
    font-weight: 500;
    font-size: 16px;
    line-break: 21.76px;
  }
  & .input-field {
    margin: 1.5rem 0;
  }
}
@media screen and (min-width: 700px) {
  form {
    margin: 0;
    & .input-field textarea {
      height: 216px;
    }
  }
}
@media screen and (min-width: 1400px) {
  form {
    & .input-field input {
      height: 55px;
    }
    & .input-field input,
    & .input-field label,
    & .input-field textarea {
      font-size: 16px;
      line-height: 31.3px;
      &::placeholder {
        font-size: 16px;
        line-height: 31.3px;
      }
    }
  }
}
</style>
