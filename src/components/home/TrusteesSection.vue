<template>
  <section class="trustees">
    <div class="container">
      <div class="trustees-content">
        <h3>Trusted by Big and Small businesses</h3>
        <div class="trustees-list" data-aos="zoom-in">
          <a href="https://tradelenda.com/" target="_blank" rel="noopener noreferrer"
                ><img src="https://res.cloudinary.com/trade-lenda/image/upload/v1628132872/landing_page_pic/Group_11434_2_umfio2.png" alt="tradelenda" /></a>
          <a href="https://www.onekioskafrica.com/" target="_blank" rel="noopener noreferrer"
                ><p>onekiosk</p></a>
          <a href="https://upbase.com.ng/" target="_blank" rel="noopener noreferrer"
                ><img src="https://upbase.com.ng/assets/img/upbase.png" alt="upbase" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"
                ><img src="@/assets/img/easyflip.svg" alt="easyflip" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrusteesSection',
}
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.trustees {
  background: $bg;
  padding: 2rem 0;
  &-content {
    text-align: center;
    & h3 {
      font-size: 30px;
    }
  }
  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    & img, p {
      width: 100px;
      display: block;
      padding: 1rem;
      margin: 1rem 0;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 700px) {
  .trustees {
    &-content {
      & h3 {
        font-size: 20px;
      }
      & p {
        font-size: 12px;
      }
    }
    &-list {
      flex-direction: row;
      & img, p {
        margin: 0 1rem;
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .trustees {
    &-content {
      & h3 {
        font-size: 30px;
      }
      & p {
        font-size: unset;
      }
    }
  }
}
</style>
