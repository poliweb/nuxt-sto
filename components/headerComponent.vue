<template>
  <div>
    <header class="shadow h-screen header flex flex-wrap content-center margin_b_74">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-0 text-center">
        <h1 class="sm:text-sm sm:font-bold text-h1">
          СТО “БМВ-центр Коми”
        </h1>
        <p class="header_text_p">Техническое обслуживание и ремонт иномарок.<br>
          Специализаия на БМВ. <br>
Подбор, продажа и бесплатная замена масел.</p>
        <button class="sm:hidden md:flex btn mx-auto focus:outline-none transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 z-5">Заказать звонок</button>
        <NuxtLink to="/backcall" class="md:hidden btn mx-auto focus:outline-none transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 z-5">Заказать звонок</NuxtLink>
      </div>
    </header>
  </div>
</template>


<script>
export default {};
</script>


<style>
.header {
  background-image: url("~assets/img/main-screen__bgc.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 140%;
  /* or 90px */

  text-align: center;
  text-decoration-line: underline;

  /* white */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header_text_p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 140%;
  /* or 67px */

  text-align: center;

  /* white */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 68px;
}

.Roboto {
  font-family: Roboto;
}

.btn {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  /* grad1 */
  background: linear-gradient(94.78deg, #df5950 11.19%, #451046 93.72%);
  border-radius: 50px;

  /* Text */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* white */

  color: #ffffff;
}

.btn:hover {
  background: linear-gradient(94.78deg, #451046 11.19%, #df5950 93.72%);
}

@media only screen and (max-width: 1024px) {
  .text-h1 {
    font-size: 48px;
    line-height: 140%;
  }
  .header_text_p{
    font-size: 38px;
    line-height: 140%;
  }
}

@media only screen and (max-width: 768px) {
  .text-h1 {
    font-size: 38px;
    line-height: 140%;
  }
  .header_text_p{
    font-size: 28px;
    line-height: 140%;
  }
}

@media only screen and (max-width: 640px) {
  .header {

  }
  .text-h1 {
    font-size: 28px;
    line-height: 140%;
  }
  .header_text_p{
    font-size: 24px;
    line-height: 140%;
  }
}
</style>
