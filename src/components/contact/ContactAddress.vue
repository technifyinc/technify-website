<template>
  <div class="contact-address">
    <div class="container">
      <ul class="contact-address-content">
        <li>
          <img src="@/assets/img/contact-mail.svg" alt="mail" />
          <a href="mailto:info@easyflip.ng">info@easyflip.ng</a>
        </li>
        <li>
          <img src="@/assets/img/contact-phone.svg" alt="phone" />
          <a href="tel:+2348165083087">+2348165083087</a>
        </li>
        <li>
          <img src="@/assets/img/contact-map.svg" alt="map" />
          <span>17 Makurdi Street, Ebutte Metta 100001, Lagos State</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.contact-address {
  text-align: left;
  margin-top: 1rem;
  & ul {
    list-style: none;
  }
  & ul li {
    display: flex;
    align-items: center;
    padding-bottom: 1.5rem;
  }
  & ul li a,
  & ul li span {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: $sub;
  }
  &-content img {
    width: 30.8px;
    height: 30.8px;
    margin-right: 1rem;
  }
}

@media screen and (min-width: 1000px) {
  .contact-address {
    width: 900px;
    margin: auto;
    & ul {
      display: flex;
      justify-content: space-between;
      & li {
        flex-basis: 33.33%;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .contact-address {
    width: 900px;
  }
}

@media screen and (min-width: 1400px) {
  .contact-address ul li a,
  .contact-address ul li span {
    font-size: 18px;
    line-height: 31.3px;
  }
}  
</style>