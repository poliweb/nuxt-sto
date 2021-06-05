# Nuxt Sto 🧑‍💻
Тестовое задание 

<p align="center"><a href="https://focused-bhaskara-227f39.netlify.app/" target="_blank"><img src="https://github.com/poliweb/nuxt-sto/blob/master/assets/img/STO_Site.jpg" width="100%"></a></p>

## Тестовое задание для веб разрабочика (Web Developer) 👨‍💻

В качестве тестового задания нужно будет сверстать адаптивно макет, доступ к которому предоставлен по ссылке ниже:
"https://yadi.sk/d/gATTtURM-ASDXQ
Во вложении исходник макетов Фигма.
Задача - адаптивно сверстать, выложить себе на хостинг и прислать ссылку для просмотре.
Указать как тестировали верстку."

## Изпользуемые веб технологии

### Главная технология сайта Jamstack

#### JS-фреймворк
> GSAP,
> Nuxt.js,
> Vue.js

#### Шрифт
> Google Font API

#### Веб-фреймворк
> Nuxt.js

#### Веб-сервер
> Nuxt.js

#### Язык программирования
> Node.js

#### CDN
> Netlify

#### Генератор статических сайтов
> Nuxt.js

#### PaaS
> Netlify

#### UI Фреймворк
> tailwindcss

#### Прочее
> webpack

## Интеграция JS-фреймворк GSAP

> Использeтся модуль "nuxt-gsap-module" для замены CSS классов при скроленге на панели NAV 

```
    // For scrollTrigger
    animateOnScroll() {
      this.$gsap.to(".box", {
        scrollTrigger: {
          start: "top -150",
          end: 99999,
          toggleClass: {
            targets: ".main-tool-bar",
            className: "main-tool-bar--scrolled",
          },
          markers: false,
        },
      });
    },
```

## Изначальный проект на Figma

<img src="https://github.com/poliweb/nuxt-sto/blob/master/assets/img/STO_Site_Figma.jpg" width="100%">

Я - консультирую по веб — проектам, специализирующийся на HTML, CSS, JavaScript и PHP. Я создаю веб-приложения, написанные на популярных фреймворках, таких как Laravel, Tailwindcss, Jetstream, laravel-livewire.
Vue, Nuxt js, JAMstack.
Думайте о обо мне как о продолжении вашей команды.

<a href="https://focused-bhaskara-227f39.netlify.app/" target="_blank">Demo Project</a>


# Мой принцип: LIFELONG LEARNING

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
