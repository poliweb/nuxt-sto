# Nuxt Sto 🧑‍💻
Тестовое задание 

![Главная страница](https://github.com/poliweb/nuxt-sto/blob/master/assets/img/STO_Site.jpg "Главная страница тестового задания")

## Тестовое задание для веб разрабочика (Web Developer) 👨‍💻

В качестве тестового задания нужно будет сверстать адаптивно макет, доступ к которому предоставлен по ссылке ниже:
"https://yadi.sk/d/gATTtURM-ASDXQ
Во вложении исходник макетов Фигма.
Задача - адаптивно сверстать, выложить себе на хостинг и прислать ссылку для просмотре.
Указать как тестировали верстку."

## Для выполнения задания выбранные и используемые веб технологии

### Главная технология сайта Jamstack

> ***Jamstack - это архитектура, призванная сделать Интернет быстрее, безопаснее и легче масштабируемым. Он основан на многих инструментах и рабочих процессах, которые нравятся разработчикам и которые обеспечивают максимальную производительность. Основные принципы предварительного рендеринга и разделения позволяют предоставлять сайты и приложения с большей надежностью и отказоустойчивостью, чем когда-либо прежде. Архитектура Jamstack имеет множество преимуществ, независимо от того, создаете ли вы большой сайт электронной коммерции, приложение SaaS или личный блог.***

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

## Адаптивность сайта тестировано по сетке размеров экрана в PX

```

Breakpoint    prefix	         Minimum width	CSS
sm           640px          @media (min-width: 640px) { ... }
md           768px          @media (min-width: 768px) { ... }
lg           1024px         @media (min-width: 1024px) { ... }
xl           1280px         @media (min-width: 1280px) { ... }
2xl          1536px         @media (min-width: 1536px) { ... }
```
![Тестирование сайта на адоптивность](https://github.com/poliweb/nuxt-sto/blob/master/assets/img/adaptiv_sto.jpg "Главная страница тестового задания")

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

![Протатип в Figma](https://github.com/poliweb/nuxt-sto/blob/master/assets/img/STO_Site_Figma.jpg "Протатип в Figma")




## 👍 Аудит сайта в Lighthouse

Аудит сайта — без специальных подготовок к аудиту
![Аудит сайта](https://github.com/poliweb/nuxt-sto/blob/master/assets/img/STO_Site_Audit.jpg "Аудит сайта в Lighthouse")

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
