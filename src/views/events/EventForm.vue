<template>
  <form>
    <h3>Register</h3>
    <div class="flex-form">
      <div class="input-field">
        <label for="fname">First Name</label>
        <input type="text" id="fname" placeholder="Enter First Name" />
      </div>
      <div class="input-field">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" placeholder="Enter Last Name" />
      </div>
    </div>
    <div class="flex-form">
      <div class="input-field">
        <label for="tel">Phone Number</label>
        <input type="tel" id="tel" placeholder="Phone Number" />
      </div>
      <div class="input-field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter Email" />
      </div>
    </div>
    <div class="flex-form">
      <div class="input-field">
        <label for="company">Company</label>
        <input type="text" id="company" placeholder="Company" />
      </div>
      <div class="input-field">
        <label for="role">Role</label>
        <input type="text" id="role" placeholder="Enter Role" />
      </div>
    </div>
    <div class="input-field submit">
      <input type="submit" value="Send" class="btn" />
    </div>
  </form>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
form {
  text-align: left;
  padding: 4rem 0;
  & .input-field input,
  & .input-field textarea {
    border: solid 1px $input;
    background: $input;
    margin-top: 1rem;
    &::placeholder {
      color: $placeholder;
    }
    &:focus {
      background: $white;
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
  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: $header;
    font-weight: 600;
    font-size: 28px;
    line-height: 38.08px;
  }
  .submit {
    input.btn {
      background: $sec-color;
    }
  }
}
@media screen and (min-width: 700px) {
  form {
    margin: 0;
    & .input-field textarea {
      height: 216px;
    }
    .flex-form {
      display: flex;
      .input-field {
        flex-basis: 50%;
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
    .submit {
      text-align: center;
      input.btn {
        width: 200px;
        font-size: 20px;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  form {
    h3 {
      font-size: 30px;
      line-height: 49px;
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
    h3 {
      font-size: 36px;
      line-height: 49px;
    } 
  }
}
</style>