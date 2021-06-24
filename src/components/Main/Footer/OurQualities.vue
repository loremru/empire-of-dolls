<template>
  <div class="OurQualities">
    <div class="qualities content">
      <div class="qualities-item">
        <img src="@/assets/images/assortment.svg" alt="assortment" />
        <div class="qualities-item_text">
          <span class="qualities-item_text_header">Ассортимент</span>
          <p class="qualities-item_text_description">
            Всегда в наличии широкий выбор кукол и игрушек
          </p>
        </div>
      </div>
      <div class="qualities-item">
        <img src="@/assets/images/delivery.svg" alt="assortment" />
        <div class="qualities-item_text">
          <span class="qualities-item_text_header">Доставка</span>
          <p class="qualities-item_text_description">
            Мы доставим строительные материалы на адрес или ближайший пункт
            выдали заказов.
          </p>
        </div>
      </div>
      <div class="qualities-item">
        <img src="@/assets/images/quality.svg" alt="assortment" />
        <div class="qualities-item_text">
          <span class="qualities-item_text_header">Качество</span>
          <p class="qualities-item_text_description">
            Многоуровневая система управления качеством
          </p>
        </div>
      </div>
      <div class="qualities-item">
        <img src="@/assets/images/purchaseReturns.svg" alt="assortment" />
        <div class="qualities-item_text">
          <span class="qualities-item_text_header">Возврат товара</span>
          <p class="qualities-item_text_description">
            Вы можете вернуть товар в течении 30 дней
          </p>
        </div>
      </div>
    </div>
    <div class="qualities-end"></div>
  </div>
</template>

<script>
export default {
  name: 'OurQualities',
}
</script>

<style scoped lang="scss">
.OurQualities {
  background: #fff;
  border-top: 2px solid $border-color;
  padding: 25px 0;
}
.qualities {
  display: flex;
  flex-wrap: wrap;
}
.qualities-item {
  display: flex;
  align-items: center;
  width: 50%;
  margin: 19px 0;
  padding: 0 10px;
}
.qualities-item_text {
  margin-left: 14px;
}
.qualities-item_text_header {
  font-size: 20px;
  font-weight: 600;
}
.qualities-item_text_description {
  font-size: 18.5px;
}
.qualities-end {
  height: 2px;
  background: linear-gradient(
    to right,
    #ffffff,
    #d7c3cd,
    #d7c3cd,
    #d7c3cd,
    #ffffff
  );
  color: transparent;
  margin: 40px auto 0 auto;
  width: 80%;
}
@media (max-width: $media-tablet) {
  .qualities-item_text_description {
    font-size: 16.5px;
  }
  .qualities-item_text_header {
    font-size: 16.5px;
  }
}
</style>
