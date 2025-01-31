// Ленивая подзагрузка изображений
// var lazyLoadInstance = new LazyLoad();

//---------------- Файл stylekit.html
//------- Копирование стиля в буфер обмен цветовых отступов
if (document.querySelector(".stylekit")) {
    function clipboardClass() {
        const styleClass = document.querySelectorAll(".indentation-system__class");
        let styleClassText = null;

        styleClass.forEach((elem) => {
            elem.onclick = function () {
                document.execCommand("copy");
            };

            elem.addEventListener("copy", function (event) {
                event.preventDefault();
                if (event.clipboardData) {
                    event.clipboardData.setData("text/plain", elem.textContent);
                    styleClassText = event.clipboardData.getData("text");
                    elem.innerHTML = "Скопированно";

                    const timer = setTimeout(() => {
                        elem.innerHTML = styleClassText;
                    }, 1000);
                }
            });
        });
    }

    try {
        clipboardClass();
    } catch (error) {
        console.error(error);
    }
}

//------- Мобильный header
if (document.querySelector(".header-mob")) {

    function mobHeader() {
        const mobHeader = document.querySelector('.header-mob');
        const mobHeaderBurger = document.querySelector('#menu__toggle');
        const mobHeaderBtn = document.querySelector('#mob-catalog__toggle');
        const mobBtnText = document.querySelector('.header-mob__button p');
        const mobBtn = document.querySelector('.header-mob__button');
        const mobCatalog = document.querySelector('.header-mob__catalog');
        const mobMenu = document.querySelector('.header-mob__menu');
        const mobHeaderBlock = document.querySelector('.header-mob__block');
        const body = document.querySelector('body');

        // console.log(mobHeader);

        const mobHeaderHeight = mobHeaderBlock.offsetHeight;
        // mobHeaderBlock.style.height = `${mobHeaderHeight}px`;
        // mobHeaderBlock.style.marginTop = `${-mobHeaderHeight}px`;

        mobHeaderBtn.addEventListener('click', () => {
            if (mobHeaderBtn.checked) {
                mobCatalog.classList.add('mob-catalog-animation');
                mobBtn.classList.add('header-mob-button-animation');
                mobMenu.style.opacity = '0';
                mobMenu.style.transition = '.8s';
                mobBtnText.innerHTML = 'В меню';
            } else {
                mobCatalog.classList.remove('mob-catalog-animation');
                mobBtn.classList.remove('header-mob-button-animation');
                mobMenu.style.opacity = '1';
                mobMenu.style.transition = '.8s';
                mobBtnText.innerHTML = 'Каталог';
            }
        })

        mobHeaderBurger.addEventListener('click', () => {
            if (mobHeaderBurger.checked) {
                mobHeaderBlock.style.marginLeft = '0';
                mobHeaderBlock.style.transition = 'ease-in-out 0.8s';
                body.style.overflow = 'hidden';
                mobHeader.style.height = 'unset';
            } else {
                // mobHeaderBlock.style.marginTop = `${-mobHeaderHeight}px`;
                mobHeaderBlock.style.marginLeft = `-100%`;
                mobHeaderBlock.style.transition = 'ease-in-out 0.8s';
                body.style.overflow = 'unset';
                mobHeader.style.height = '0';
            }
        })
    }

    try {
        mobHeader()
    } catch (err) {
        console.warn(err);
    }
}

// Выпадающий список городов
if (document.querySelector(".city")) {
    function ulCity() {
        const ulCity = document.querySelector('.city');
        const btnCity = document.querySelectorAll('.city-geo-block');
        const btnCityMob = document.querySelectorAll('.city-geo');
        const btnCityClose = document.querySelectorAll('.city__close');
        const body = document.querySelector('body');

        btnCity.forEach(elem => {
            elem.addEventListener('click', () => {
                ulCity.style.display = 'flex';
                body.style.overflow = 'hidden';
            })
        })

        // Внутри бургера
        btnCityMob.forEach(elem => {
            elem.addEventListener('click', () => {
                ulCity.style.display = 'flex';
                body.style.overflow = 'hidden';
            })
        })

        btnCityClose.forEach(elem => {
            elem.addEventListener('click', () => {
                ulCity.style.display = 'none';
                body.style.overflow = 'unset';
            })
        })
    }

    // try {
    //     ulCity()
    // } catch (err) {
    //     console.warn(err);
    // }
    ulCity()
}

// Header анимация каталога
if (document.querySelector('.header .technostyle-products')) {

    function headerCatalogMenu() {
        // const headerCatalogBtn = document.querySelector('#header__catalog-toggle');
        const headerCatalogBtn = document.querySelector('.header__catalog-btn');
        const headerCatalog = document.querySelector('.header .technostyle-products');

        const headerArrow = document.querySelector('.header .header__arrow');
        const headerElement = document.querySelectorAll('.header .header__element');

        // const HeaderHeight = headerCatalog.offsetHeight;
        // headerCatalog.style.marginTop = `${-HeaderHeight}px`;
        // console.log(HeaderHeight);

        // headerCatalogBtn.addEventListener('click', () => {
        //     if (document.querySelector('.header').classList.contains('header--white')) {
        //         if (headerCatalogBtn.checked) {
        //             headerCatalog.style.marginTop = '0';
        //             headerCatalog.style.opacity = '1';
        //             headerCatalog.style.transition = 'ease-in-out 0.8s';
        //             if (document.querySelector('.product-cover')) {
        //                 document.querySelector('.product-cover').style.background = 'rgba(255, 255, 255, 0.8)';
        //             }
        //         } else {
        //             // headerCatalog.style.marginTop = `-702px`;
        //             headerCatalog.style.marginTop = `-560px`;
        //             headerCatalog.style.opacity = '0';
        //             headerCatalog.style.transition = 'ease-in-out 0.8s';
        //             if (document.querySelector('.product-cover')) {
        //                 document.querySelector('.product-cover').style.background = 'unset';
        //             }
        //         }
        //     } else {
        //         if (headerCatalogBtn.checked) {
        //             headerCatalog.style.marginTop = '0';
        //             headerCatalog.style.opacity = '1';
        //             headerCatalog.style.transition = 'ease-in-out 0.8s';
        //             // document.querySelector('.product-cover').style.background = 'rgba(255, 255, 255, 0.8)';
        //         } else {
        //             headerCatalog.style.marginTop = `-560px`;
        //             // headerCatalog.style.marginTop = `-702px`;
        //             headerCatalog.style.opacity = '0';
        //             headerCatalog.style.transition = 'ease-in-out 0.8s';
        //             // document.querySelector('.product-cover').style.background = 'unset';
        //         }
        //     }
        // })

        let timeOut = null;

        headerCatalogBtn.addEventListener('mouseover', (event) => {
            if (timeOut) {
                clearTimeout(timeOut)
                if (headerCatalogBtn.dataset.active) {
                    hideElement()
                }
            }
            if (document.querySelector('.header').classList.contains('header--white')) {
                event.currentTarget.dataset.active = true;
                headerCatalog.style.marginTop = '0';
                headerCatalog.style.opacity = '1';
                headerCatalog.style.transition = 'ease-in-out 0.8s';
                headerArrow.style.transform = 'rotate(-180deg)';
                headerArrow.style.transition = 'all .5s';
                if (document.querySelector('.product-cover')) {
                    document.querySelector('.product-cover').style.background = 'rgba(255, 255, 255, 0.8)';
                }
            } else {
                headerCatalog.style.marginTop = '0';
                headerCatalog.style.opacity = '1';
                headerCatalog.style.transition = 'ease-in-out 0.8s';
                headerArrow.style.transform = 'rotate(-180deg)';
                headerArrow.style.transition = 'all .5s';
                // document.querySelector('.product-cover').style.background = 'rgba(255, 255, 255, 0.8)';
            }
        })

        headerCatalogBtn.addEventListener('mouseleave', () => {
            timeOut = setTimeout( () => hideElement(), 500)
        })

        function hideElement() {
            headerCatalogBtn.dataset.active = false;
            // headerCatalog.style.marginTop = `-702px`;
            headerCatalog.style.marginTop = `-560px`;
            headerCatalog.style.opacity = '0';
            headerCatalog.style.transition = 'ease-in-out 0.8s';
            headerArrow.style.transform = 'rotate(0deg)';
            headerArrow.style.transition = 'all .5s';
            if (document.querySelector('.product-cover')) {
                document.querySelector('.product-cover').style.background = 'unset';
            } else {
                headerCatalog.style.marginTop = `-560px`;
                // headerCatalog.style.marginTop = `-702px`;
                headerCatalog.style.opacity = '0';
                headerCatalog.style.transition = 'ease-in-out 0.8s';
                headerArrow.style.transform = 'rotate(0deg)';
                headerArrow.style.transition = 'all .5s';
                // document.querySelector('.product-cover').style.background = 'unset';
            }
        }

        headerCatalog.addEventListener('mouseover', () => {
            if (timeOut) {
                clearTimeout(timeOut)
            }
        })

        headerCatalog.addEventListener('mouseleave', () => {
            hideElement()
        })

        // headerElement.forEach(elem => {
        //     elem.addEventListener('mouseover', () => {
        //         // headerCatalog.style.marginTop = `-702px`;
        //         headerCatalog.style.marginTop = `-560px`;
        //         headerCatalog.style.opacity = '0';
        //         headerCatalog.style.transition = 'ease-in-out 0.8s';
        //         headerArrow.style.transform = 'rotate(0deg)';
        //         headerArrow.style.transition = 'all .5s';
        //         if (document.querySelector('.product-cover')) {
        //             document.querySelector('.product-cover').style.background = 'unset';
        //         } else {
        //             headerCatalog.style.marginTop = `-560px`;
        //             // headerCatalog.style.marginTop = `-702px`;
        //             headerCatalog.style.opacity = '0';
        //             headerCatalog.style.transition = 'ease-in-out 0.8s';
        //             headerArrow.style.transform = 'rotate(0deg)';
        //             headerArrow.style.transition = 'all .5s';
        //             // document.querySelector('.product-cover').style.background = 'unset';
        //         }
        //     })
        // })

        headerCatalog.addEventListener('mouseleave', () => {
            // headerCatalog.style.marginTop = `-702px`;
            headerCatalog.style.marginTop = `-560px`;
            headerCatalog.style.opacity = '0';
            headerCatalog.style.transition = 'ease-in-out 0.8s';
            headerArrow.style.transform = 'rotate(0deg)';
            headerArrow.style.transition = 'all .5s';
            if (document.querySelector('.product-cover')) {
                document.querySelector('.product-cover').style.background = 'unset';
            } else {
                headerCatalog.style.marginTop = `-560px`;
                // headerCatalog.style.marginTop = `-702px`;
                headerCatalog.style.opacity = '0';
                headerCatalog.style.transition = 'ease-in-out 0.8s';
                headerArrow.style.transform = 'rotate(0deg)';
                headerArrow.style.transition = 'all .5s';
                // document.querySelector('.product-cover').style.background = 'unset';
            }
        })

        if (document.querySelector('.header').classList.contains('header--white')) {
            // document.querySelector('.technostyle-products').addEventListener('click', () => {
            //     console.log(headerCatalogBtn.checked);
            //     headerCatalogBtn.checked = false;
            //     headerCatalog.style.marginTop = `-560px`;
            //     headerCatalog.style.opacity = '0';
            //     headerCatalog.style.transition = 'ease-in-out 0.8s';
            //     document.querySelector('.product-cover').style.background = 'unset';
            // })

            document.querySelector('.product-cover').addEventListener('click', () => {
                console.log(headerCatalogBtn.checked);
                headerCatalogBtn.checked = false;
                headerCatalog.style.marginTop = `-560px`;
                headerCatalog.style.opacity = '0';
                headerCatalog.style.transition = 'ease-in-out 0.8s';
                document.querySelector('.product-cover').style.background = 'unset';
            })
        } else {
            // document.querySelector('.technostyle-products').addEventListener('click', () => {
            //     console.log(headerCatalogBtn.checked);
            //     headerCatalogBtn.checked = false;
            //     headerCatalog.style.marginTop = `-560px`;
            //     headerCatalog.style.opacity = '0';
            //     headerCatalog.style.transition = 'ease-in-out 0.8s';
            //     // document.querySelector('.product-cover').style.background = 'unset';
            // })

            // document.querySelector('.product-cover').addEventListener('click', () => {
            //     console.log(headerCatalogBtn.checked);
            //     headerCatalogBtn.checked = false;
            //     headerCatalog.style.marginTop = `-560px`;
            //     headerCatalog.style.opacity = '0';
            //     headerCatalog.style.transition = 'ease-in-out 0.8s';
            //     // document.querySelector('.product-cover').style.background = 'unset';
            // })
        }

    }

    // headerCatalogMenu()
    try {
        headerCatalogMenu()
    } catch (err) {
        console.warn(err);
    }
}

if (document.querySelector('.application-lskp')) {
    const lskpAppBtn = document.querySelector('#application-lskp__toggle');
    const lskpAppInfo = document.querySelector('.application-lskp__info');

    lskpAppBtn.addEventListener('click', () => {
        if (lskpAppBtn.checked) {
            lskpAppInfo.style.display = 'block';
        } else {
            lskpAppInfo.style.display = 'none';
        }
    })
}

//------- Фильтрация каталога
if (document.querySelector(".header")) {
    function headerCatalog() {
        const productItem = document.querySelectorAll(".technostyle-products__product");
        const chips = document.querySelectorAll(".technostyle-products__category-product");

        productItem.forEach(elem => {
            elem.classList.add('product-item-animation')
        })

        const filterJumpProduct = () => {
            const chipsActive = document.querySelector(".chip-block__blue-active");

            productItem.forEach(elem => {
                elem.style.display = "none";

                if (chipsActive.dataset.id === elem.dataset.id) {
                    elem.style.display = "block";
                }
            });
        }

        // Фильтрация карточек при клике на чип
        chips.forEach(chipElem => {
            chipElem.addEventListener('click', () => {

                chips.forEach((chipElem) => {
                    chipElem.classList.remove('chip-block__blue-active');
                });
                if (chipElem.dataset.id === "sandwich-paneli") {
                    chipElem.classList.add('chip-block__blue-active');
                    productItem.forEach((elem) => {
                        elem.style.display = "none";
                        if (elem.dataset.id === "sandwich-paneli") {
                            elem.style.display = "block";
                        }
                    });
                } else if (chipElem.dataset.id === "other") {
                    chipElem.classList.add('chip-block__blue-active');
                    productItem.forEach((elem) => {
                        elem.style.display = "none";
                        if (elem.dataset.id === "other") {
                            elem.style.display = "block";
                        }
                    });
                } else if (chipElem.dataset.id === "ready") {
                    chipElem.classList.add('chip-block__blue-active');
                    productItem.forEach((elem) => {
                        elem.style.display = "none";
                        if (elem.dataset.id === "ready") {
                            elem.style.display = "block";
                        }
                    });
                }
            });
        });

        if (document.readyState === 'complete') {
            filterJumpProduct();
        } else {
            window.addEventListener('load', filterJumpProduct);
        }
    }
    headerCatalog()
}

// Header анимация по скролу
if (document.querySelector(".header--white")) {
    const controller = new ScrollMagic.Controller();

    const header = document.querySelector('.header');

    const appearanceThirdSection = () => {
        const controller = new ScrollMagic.Controller();
        const sceneHeader = new ScrollMagic.Scene({ triggerElement: '.toggleHeader' })

        sceneHeader.on('enter', () => {
            if (header.classList.contains("header--white")) {
                header.classList.remove('header--white');
            }
            // human.addEventListener('animationend', () => {
            //     // descriptionS3.classList.add('s3-muscles__description-animation');
            // });
        });
        sceneHeader.on('leave', () => {
            header.classList.add('header--white');
        })
            .addTo(controller);
    }

    try {
        appearanceThirdSection()
    } catch (err) {
        console.warn(err);
    }
}

//---------------- Файл index.html, about.html
//------- Слайдер на странице "Главная", "О компании", блок "Благодарственные письма от наших клиентов"
if (document.querySelector(".letters")) {
    var swiper = new Swiper(".letters-mySwiper", {
        // direction: "vertical",
        loop: true,
        allowTouchMove: true,
        // slidesPerView: 3,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1025: {
                direction: "horizontal",
                allowTouchMove: true,
                slidesPerView: 3,
                allowTouchMove: false,

            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//---------------- Файл about.html
//------- Слайдер на странице "О компании", блок "Сотни бизнесов"
if (document.querySelector(".hundreds-businesses")) {
    var swiper = new Swiper(".hundreds-businesses-mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
        loop: true,
    });
}

//---------------- Файл about.html
//------- Слайдер на странице "О компании", блок "Система качества"
if (document.querySelector(".quality-system")) {
    var swiper = new Swiper(".quality-system-mySwiper", {
        slidesPerView: "auto",
        // spaceBetween: 20,
        speed: 500,
        // mousewheel: true,
        // autoplay: {
        //     delay: 2000,
        // },
        allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//---------------- Файл на продуктовых
//------- Слайдер на странице блок "Соединения"
if (document.querySelector(".quality-system-v2")) {
    var swiper = new Swiper(".quality-system-v2-mySwiper", {
        slidesPerView: "auto",
        // spaceBetween: 20,
        speed: 500,
        // autoplay: {
        //     delay: 2000,
        // },
        allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//---------------- Файл about.html
//------- Слайдер на странице "О компании", блок "Команда, которая отвечает за свои решения"
if (document.querySelector(".team-responds")) {
    var swiper = new Swiper(".team-responds-mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 20,
        speed: 500,
        // autoplay: {
        //     delay: 2000,
        // },
        allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//---------------- Файл production.html
//------- Слайдер на странице "Производство", блок "Лаборатория контроля качества"
if (document.querySelector(".control-laboratory")) {
    var swiper = new Swiper(".control-laboratory-mySwiper", {
        // slidesPerView: 'auto',
        // spaceBetween: 20,
        speed: 500,
        // autoplay: {
        //     delay: 2000,
        // },
        // allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//---------------- Файл production.html
//------- Слайдер на странице "Производство", блок "Лаборатория контроля качества"
if (document.querySelector(".production-puma")) {
    window.addEventListener("DOMContentLoaded", function () {
        var swiperPuma = new Swiper(".production-puma-mySwiper", {
            breakpoints: {
                1025: {
                    autoplay: false,
                    loop: false,
                },
            },
            loop: true,
            speed: 500,
            autoplay: {
                delay: 2000,
            },
            // mousewheel: {
            //     // forceToAxis: true,
            //     sensitivity: 1,
            //     releaseOnEdges: true,
            // },
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
        });

        const slidesPuma = document.querySelectorAll('.production-puma-mySwiper .production-puma__item')
        slidesPuma.forEach(elem => {
            elem.addEventListener('click', () => {
                switch (elem.dataset.slide) {
                    case '0':
                        swiperPuma.slideTo(0);
                        break;
                    case '1':
                        swiperPuma.slideTo(1);
                        break;
                    case '2':
                        swiperPuma.slideTo(2);
                        break;
                    case '3':
                        swiperPuma.slideTo(3);
                        break;
                    case '4':
                        swiperPuma.slideTo(4);
                        break;
                    case '5':
                        swiperPuma.slideTo(5);
                        break;
                    case '6':
                        swiperPuma.slideTo(6);
                        break;
                    default:
                        console.log('error');
                }
            })
        })

        // function goToSlide(index) {
        //     swiperPuma.slideTo(index); // Этот метод переключит Swiper на указанный слайд
        // }

        // goToSlide(6);
    })
}

//---------------- Файл production.html
//------- Страница "О компании", блок "Сертификаты"
// Описание - выравнивание по высоте блока с документами .certificates__ul c блоком .certificates__info
if (document.querySelector(".certificates")) {

    window.addEventListener("resize", function () {
        someFunc();
    });

    function someFunc() {
        const infoHeight = document.querySelector(
            ".certificates__info"
        ).offsetHeight;
        const ulHeight = document.querySelector(".certificates__ul");
        ulHeight.style.height = `${infoHeight}px`;
    }

    setTimeout(someFunc, 2000);
}

//---------------- Файл events.html
// Описание - фильтрация карточек новости и статьи
if (document.querySelector(".events")) {

    const productItem = document.querySelectorAll(".events__item");
    const chips = document.querySelectorAll(".chip-block__blue");

    const filterJump = () => {
        const link = window.location.href;
        const arr = link.split('#');

        productItem.forEach(elem => {
            elem.parentElement.style.display = "none";

            if (arr[1] === elem.parentElement.dataset.id) {
                elem.parentElement.style.display = "block";
            } else if (link.split('/events')[1] === '' || link.split('/events')[1] === '.html') {
                if (elem.parentElement.dataset.id === "news") {
                    elem.parentElement.style.display = "block";
                }
            }
        });

        chips.forEach(chipElem => {
            chipElem.classList.remove('chip-block__blue-active');

            if (arr[1] === chipElem.parentElement.dataset.id) {
                chipElem.classList.add('chip-block__blue-active');
            } else if (link.split('/events')[1] === '' || link.split('/events')[1] === '.html') {
                if (chipElem.parentElement.dataset.id === 'news') {
                    chipElem.classList.add('chip-block__blue-active');
                }
            }
        });
    }

    // Фильтрация карточек при клике на чип
    chips.forEach(chipElem => {
        chipElem.addEventListener('click', () => {
            chips.forEach((chipElem) => {
                chipElem.classList.remove('chip-block__blue-active');
            });
            if (chipElem.parentElement.dataset.id === "news") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "news") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "articles") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "articles") {
                        elem.parentElement.style.display = "block";
                    }
                });
            }
        });
    });

    // window.addEventListener('load', function () {
    //     // Фильтрация карточек при переходе с другой страницы
    //     filterJump()
    // });
    if (document.readyState === 'complete') {
        filterJump();
    } else {
        window.addEventListener('load', filterJump);
    }
}

//---------------- Файл products.html
//------- Слайдер на странице "Продукты", блок с карточками
if (document.querySelector(".products-list-mySwiper")) {
    var swiper = new Swiper(".products-list-mySwiper", {
        slidesPerView: 'auto',
        // slidesPerView: '3',
        spaceBetween: 10,
        // speed: 1000,
        // autoplay: {
        //   delay: 2000,
        // },
        // loop: true,
    });
}

//---------------- Файл products.html
// Описание - выравнивание по высоте карточек карточек
if (document.querySelector(".products-list")) {

    window.addEventListener('load', function () {
        // Выравнивание по высоте заголовка карточек
        someFunc();
    });

    window.addEventListener("resize", function () {
        someFunc();
    });

    function someFunc() {
        if (window.innerWidth > 767) {
            const infoHeight = document.querySelectorAll('.products-list__item .font-h4');
            const arr = [];

            for (i = 0; i < infoHeight.length; i++) {
                arr.push(infoHeight[i].offsetHeight);
            }

            infoHeight.forEach(elem => {
                elem.style.minHeight = `${Math.max(...arr)}px`;
            })
        }
    }
}

//---------------- Файл products.html
// Описание - фильтрация продуктовых карточек
if (document.querySelector(".products-list")) {

    const productItem = document.querySelectorAll(".products-list__item");
    const chips = document.querySelectorAll(".chip-block__blue");

    const filterJump = () => {
        const link = window.location.href;
        const arr = link.split('#');

        productItem.forEach(elem => {
            elem.parentElement.style.display = "none";

            if (arr[1] === elem.parentElement.dataset.id) {
                elem.parentElement.style.display = "block";
            } else if (link.split('/products')[1] === '' || link.split('/products')[1] === '.html') {
                elem.parentElement.style.display = "block";
            }
        });

        chips.forEach(chipElem => {
            if (chipElem.parentElement.dataset.id === "mineralnaya-vata") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "mineralnaya-vata") {
                        elem.parentElement.style.display = "block";
                    }
                });
            }
        });

        // chips.forEach(chipElem => {
        //     chipElem.classList.remove('chip-block__blue-active');

        //     if (arr[1] === chipElem.parentElement.dataset.id) {
        //         chipElem.classList.add('chip-block__blue-active');
        //     } else {
        //         chipElem.classList.remove('chip-block__blue-active');
        //     }
        // });
    }

    // Фильтрация карточек при клике на чип
    chips.forEach(chipElem => {
        chipElem.addEventListener('click', () => {
            // location.replace('#mineralnaya-vata');
            chips.forEach((chipElem) => {
                chipElem.classList.remove('chip-block__blue-active');
            });
            if (chipElem.parentElement.dataset.id === "mineralnaya-vata") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "mineralnaya-vata") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "penopolistirol") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "penopolistirol") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "pir-pur") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "pir-pur") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "ready") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "ready") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "other") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "other") {
                        elem.parentElement.style.display = "block";
                    }
                });
            }
        });
    });

    // window.addEventListener('load', function () {
    //     // Фильтрация карточек при переходе с другой страницы
    //     filterJump()
    // });
    if (document.readyState === 'complete') {
        filterJump();
    } else {
        window.addEventListener('load', filterJump);
    }
}

//---------------- Файл objects.html
//------- Слайдер на странице "Объекты", блок с карточками
if (document.querySelector(".objects-list-mySwiper")) {
    var swiper = new Swiper(".objects-list-mySwiper", {
        slidesPerView: 'auto',
        // slidesPerView: '3',
        spaceBetween: 10,
        // speed: 1000,
        // autoplay: {
        //   delay: 2000,
        // },
        // loop: true,
    });
}

//---------------- Файл objects.html
// Описание - выравнивание по высоте карточек
if (document.querySelector(".objects-list")) {

    window.addEventListener('load', function () {
        someFunc();
    })

    window.addEventListener("resize", function () {
        someFunc();
    });

    function someFunc() {
        if (window.innerWidth > 767) {
            const infoHeight = document.querySelectorAll('.objects-list__info');
            const arr = [];

            for (i = 0; i < infoHeight.length; i++) {
                arr.push(infoHeight[i].offsetHeight);
            }

            infoHeight.forEach(elem => {
                elem.style.minHeight = `${Math.max(...arr)}px`;
            })
        }
    }

    // setTimeout(someFunc, 2000);
}

//---------------- Файл objects.html
// Описание - выравнивание по высоте карточек
if (document.querySelector(".control-laboratory")) {

    window.addEventListener('load', function () {
        someFunc();
    })

    window.addEventListener("resize", function () {
        someFunc();
    });

    function someFunc() {
        if (window.innerWidth > 767) {
            const infoHeight = document.querySelectorAll('.control-laboratory__info');
            const arr = [];

            for (i = 0; i < infoHeight.length; i++) {
                arr.push(infoHeight[i].offsetHeight);
            }

            infoHeight.forEach(elem => {
                elem.style.minHeight = `${Math.max(...arr)}px`;
            })
        }
    }

    // setTimeout(someFunc, 2000);
}

//---------------- Файл ...
// Описание - выравнивание заголовка в блоке с картой
if (document.querySelector(".object-map")) {

    window.addEventListener('load', function () {
        someFunc();
    })

    window.addEventListener("resize", function () {
        someFunc();
    });

    function someFunc() {
        // if (window.innerWidth > 767) {
        const infoHeight = document.querySelectorAll('.object-map h2');
        const infoHeight2 = document.querySelectorAll('.object-map .desc');
        const infoHeight3 = document.querySelectorAll('.object-map__info');
        const arr = [];
        const arr2 = [];
        const arr3 = [];

        for (i = 0; i < infoHeight.length; i++) {
            arr.push(infoHeight[i].offsetHeight);
        }
        for (i = 0; i < infoHeight2.length; i++) {
            arr2.push(infoHeight2[i].offsetHeight);
        }
        for (i = 0; i < infoHeight3.length; i++) {
            arr3.push(infoHeight3[i].offsetHeight);
        }

        infoHeight.forEach(elem => {
            elem.style.minHeight = `${Math.max(...arr)}px`;
        })
        infoHeight2.forEach(elem => {
            elem.style.minHeight = `${Math.max(...arr2)}px`;
        })
        infoHeight3.forEach(elem => {
            elem.style.minHeight = `${Math.max(...arr3)}px`;
        })
        // }
    }

    // setTimeout(someFunc, 2000);
}

//---------------- Файл objects.html
// Описание - фильтрация карточек объектов
if (document.querySelector(".objects-list")) {

    const productItem = document.querySelectorAll(".objects-list__item");
    const chips = document.querySelectorAll(".chip-block__blue");

    const filterJump = () => {
        const link = window.location.href;
        const arr = link.split('#');

        productItem.forEach(elem => {
            elem.parentElement.style.display = "none";

            if (arr[1] === elem.parentElement.dataset.id) {
                elem.parentElement.style.display = "block";
            } else if (arr[1] === 'all') {
                elem.parentElement.style.display = "block";
            } else if (link.split('/objects')[1] === '' || link.split('/objects')[1] === '.html') {
                elem.parentElement.style.display = "block";
            }
        });

        chips.forEach(chipElem => {
            chipElem.classList.remove('chip-block__blue-active');

            if (arr[1] === chipElem.parentElement.dataset.id) {
                chipElem.classList.add('chip-block__blue-active');
            } else if (link.split('/objects')[1] === '' || link.split('/objects')[1] === '.html') {
                if (chipElem.parentElement.dataset.id === 'all') {
                    chipElem.classList.add('chip-block__blue-active');
                }
            } else {
                chipElem.classList.remove('chip-block__blue-active');
            }
        });
    }

    // Фильтрация карточек при клике на чип
    chips.forEach(chipElem => {
        chipElem.addEventListener('click', () => {
            // location.replace('#mineralnaya-vata');

            chips.forEach((chipElem) => {
                chipElem.classList.remove('chip-block__blue-active');
            });

            if (chipElem.parentElement.dataset.id === "all") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "block";
                });
            } else if (chipElem.parentElement.dataset.id === "selskiye") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "selskiye") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "skladskiye") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "skladskiye") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "avtotransport") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "avtotransport") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "social") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "social") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "sports") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "sports") {
                        elem.parentElement.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "trading") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.parentElement.style.display = "none";
                    if (elem.parentElement.dataset.id === "trading") {
                        elem.parentElement.style.display = "block";
                    }
                });
            }
        });
    });

    if (document.readyState === 'complete') {
        filterJump();
    } else {
        window.addEventListener('load', filterJump);
    }

    // Пагинация
    // const blocksPerPage = 6;
    // const blocks = document.querySelectorAll('.objects-list__card');
    // const pageCount = Math.ceil(blocks.length / blocksPerPage);

    // function showPage(page) {
    //     const startIndex = (page - 1) * blocksPerPage;
    //     const endIndex = startIndex + blocksPerPage;

    //     blocks.forEach((block, index) => {
    //         if (index >= startIndex && index < endIndex) {
    //             block.classList.remove('hidden');
    //         } else {
    //             block.classList.add('hidden');
    //         }
    //     });
    // }

    // function createPagination() {
    //     const pagination = document.getElementById('pagination');

    //     for (let i = 1; i <= pageCount; i++) {
    //         const pageLink = document.createElement('span');
    //         pageLink.textContent = i;
    //         pageLink.classList.add('page-link');

    //         pageLink.addEventListener('click', function () {
    //             showPage(i);
    //         });

    //         pagination.appendChild(pageLink);
    //     }
    // }

    // createPagination();
    // showPage(1); // Показать первую страницу по умолчанию
}

//---------------- Файл sandwich-paneli.html
//------- Слайдер на странице "Сэндвич панели", чипы
if (document.querySelector(".product-filter-mySwiper")) {
    var swiper = new Swiper(".product-filter-mySwiper", {
        slidesPerView: 'auto',
        // slidesPerView: '3',
        spaceBetween: 10,
        // speed: 1000,
        // autoplay: {
        //   delay: 2000,
        // },
        // loop: true,
    });
}

//---------------- Файл sandwich-paneli.html
//------- Фильтрация
if (document.querySelector(".top-advantage")) {

    const productItem = document.querySelectorAll(".product-item");
    const chips = document.querySelectorAll(".chip-block__orange");

    productItem.forEach(elem => {
        elem.classList.add('product-item-animation');
    })

    const filterJumpProduct = () => {
        const link = window.location.href;
        const arrId = link.split('#');

        productItem.forEach(elem => {
            // console.log(elem);
            elem.style.display = "none";

            if (arrId[1] === elem.dataset.id) {
                elem.style.display = "block";
            } else if (arrId[1] === undefined) {
                if (elem.dataset.id === "stenovye") {
                    elem.style.display = "block";
                }
            }

            // Временная доработка
            if (arrId[1] === 'uglovye') {
                document.querySelector(".palette").style.display = 'none';
            }
        });

        chips.forEach(chipElem => {
            chipElem.classList.remove('chip-block__orange-active');

            if (arrId[1] === chipElem.parentElement.dataset.id) {
                chipElem.classList.add('chip-block__orange-active');
            }

            else if (arrId[1] === undefined) {
                if (chipElem.parentElement.dataset.id === "stenovye") {
                    chipElem.classList.add('chip-block__orange-active');
                }
            }
        });
    }

    // Фильтрация карточек при клике на чип
    chips.forEach(chipElem => {
        chipElem.addEventListener('click', () => {
            // location.replace('#mineralnaya-vata');

            chips.forEach((chipElem) => {
                chipElem.classList.remove('chip-block__orange-active');
            });

            if (chipElem.parentElement.dataset.id === "stenovye") {
                chipElem.classList.add('chip-block__orange-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "stenovye") {
                        elem.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "krovelnye") {
                chipElem.classList.add('chip-block__orange-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "krovelnye") {
                        elem.style.display = "block";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "uglovye") {
                chipElem.classList.add('chip-block__orange-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "uglovye") {
                        elem.style.display = "block";
                    }
                });
            }

            setTimeout(function () {
                location.reload();
            }, 100);
        });
    });

    // window.addEventListener('load', function () {
    //     // Фильтрация карточек при переходе с другой страницы
    //     filterJump()
    // });
    if (document.readyState === 'complete') {
        filterJumpProduct();
    } else {
        window.addEventListener('load', filterJumpProduct);
    }


    // Код Михаила
    // chips.forEach(chipElem => {
    //     chipElem.addEventListener('click', eventHandler);
    //     chipElem.addEventListener('touchstart', eventHandler);
    // });

    // function eventHandler(event) {
    //     const chips = document.querySelectorAll(".chip-block__orange")
    //     const products = Array.from(document.querySelectorAll(".product-item"))

    //     chips.forEach(chipElem => {
    //         chipElem.classList.remove('chip-block__orange-active');
    //         products.find(el => el.dataset.id === chipElem.parentElement.dataset.id).style.display = "none";
    //     });

    //     e.currentTarget.classList.add('chip-block__orange-active');
    //     products.find(el => el.dataset.id === event.currentTarget.parentElement.dataset.id).style.display = "block";
    // }
}

//---------------- Файл sandwich-paneli.html
//------- Слайдер на странице "Сэндвич панели", преимущества
if (document.querySelector(".top-advantage")) {
    var swiper = new Swiper(".top-advantage-mySwiper", {
        // direction: "vertical",
        // slidesPerView: 'auto',
        // spaceBetween: 20,
        // watchOverflow: false,
        breakpoints: {
            1025: {
                direction: "vertical",
                slidesPerView: 'auto',
                allowTouchMove: false,
                // autoplay: {
                //     delay: false,
                // },
                // loop: false,
                // speed: false,
            },
        },
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20,
        // mousewheel: true,
        // freeMode: true, // Свободный режим прокрутки
        // freeModeSticky: true, // Делаем прокрутку "липкой"
        // loop: true,
        // speed: 500,
        // autoplay: {
        //     delay: 2000,
        // },

        // loop: true,
        //   allowTouchMove: false,
        //   navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   },
    });
}

//---------------- Файл sandwich-paneli.html
//------- Слайдер на странице "Сэндвич панели", слайдер popup
if (document.querySelector(".product-filter-popup-mySwiper")) {
    var swiper = new Swiper(".product-filter-popup-mySwiper", {
        slidesPerView: 'auto',
        // slidesPerView: '3',
        spaceBetween: 22,
        // speed: 1000,
        // autoplay: {
        //   delay: 2000,
        // },
        // loop: true,
    });
}

//---------------- Файл sandwich-paneli.html
//------- Попап product-filter - СКРЫТ
if (document.querySelector(".product-filter-popup")) {
    //     const btnOpen = document.querySelector('.product-filter .chip-block__orange-arrow');
    //     const filterPopup = document.querySelector('.product-filter-popup');
    //     const shadowPopup = document.querySelector('.page-shadow');
    //     const closePopup = document.querySelector('.product-filter-popup-close');

    //     shadowPopup.addEventListener('click', () => {
    //         filterPopup.classList.remove('filter-popup-animation');
    //         shadowPopup.classList.remove('page-shadow-animation');
    //     });

    //     closePopup.addEventListener('click', () => {
    //         filterPopup.classList.remove('filter-popup-animation');
    //         shadowPopup.classList.remove('page-shadow-animation');
    //     });

    //     btnOpen.addEventListener('click', (event) => {
    //         event.preventDefault()
    //         filterPopup.classList.add('filter-popup-animation');
    //         shadowPopup.classList.add('page-shadow-animation');
    //     });
}

//---------------- Файл sandwich-paneli.html
//------- Слайдер + карта
if (document.querySelector(".object-map")) {
    var swiper = new Swiper(".object-map-mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        // speed: 2000,
        // autoplay: {
        //     delay: 2000,
        // },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// Плавная прокрутка к якорю
if (document.querySelector('a.scroll-to')) {
    // console.log(1);
    const anchors = document.querySelectorAll('a.scroll-to')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

//---------------- Файл urban.html
//------- Слайдер "Цветовые решения"
if (document.querySelector(".color-solutions")) {
    var swiper = new Swiper(".color-solutions-mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        direction: "vertical",
        // speed: 2000,
        // autoplay: {
        //     delay: 2000,
        // },
        // loop: true,
        // effect: "fade",
        // fadeEffect: {
        //     crossFade: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1025: {
                loop: true,
            },
        },
    });
}

//---------------- Файл urban.html
// Описание - Слайдер "с пагинацией", выравнивание заголовка по высоте
if (document.querySelector(".pagination")) {

    window.addEventListener('load', function () {
        paginationResize();
    })

    window.addEventListener("resize", function () {
        paginationResize();
    });

    function paginationResize() {
        if (window.innerWidth > 767) {
            const infoHeight = document.querySelectorAll('.pagination__info');
            const arr = [];

            for (i = 0; i < infoHeight.length; i++) {
                arr.push(infoHeight[i].offsetHeight);
            }

            infoHeight.forEach(elem => {
                elem.style.minHeight = `${Math.max(...arr)}px`;
            })
        }
    }
}

//---------------- Файл urban.html
//------- Слайдер "с пагинацией"
if (document.querySelector(".pagination")) {
    var swiper = new Swiper(".pagination-mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 500,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },
    });
}

//---------------- Файл other.html
//------- Слайдер "Фасонные элементы техностиль"
if (document.querySelector(".shaped-elements")) {
    var swiper = new Swiper(".shaped-elements-mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        // direction: "vertical",
        // speed: 2000,
        // autoplay: {
        //     delay: 2000,
        // },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // breakpoints: {
        //     1025: {
        //         loop: true,
        //     },
        // },
    });
}

//---------------- Файл contacts.html
//------- Фильтрация
if (document.querySelector(".addres-prod")) {

    const productItem = document.querySelectorAll(".product-item");
    const chips = document.querySelectorAll(".chip-block__blue");

    productItem.forEach(elem => {
        elem.classList.add('product-item-animation')
    })

    const filterJumpProduct = () => {
        const link = window.location.href;
        const arrId = link.split('#');

        productItem.forEach(elem => {
            // console.log(elem);
            elem.style.display = "none";

            if (arrId[1] === elem.dataset.id) {
                elem.style.display = "flex";
            } else if (arrId[1] === undefined) {
                if (elem.dataset.id === "mbps") {
                    elem.style.display = "flex";
                }
            } else if (arrId[1] === 'form') {
                if (elem.dataset.id === "mbps") {
                    elem.style.display = "flex";
                }
            }
        });

        chips.forEach(chipElem => {
            chipElem.classList.remove('chip-block__blue-active');

            if (arrId[1] === chipElem.parentElement.dataset.id) {
                chipElem.classList.add('chip-block__blue-active');
            } else if (arrId[1] === undefined) {
                if (chipElem.parentElement.dataset.id === "mbps") {
                    chipElem.classList.add('chip-block__blue-active');
                }
            } else if (arrId[1] === 'form') {
                if (chipElem.parentElement.dataset.id === "mbps") {
                    chipElem.classList.add('chip-block__blue-active');
                }
            }
        });
    }

    // Фильтрация карточек при клике на чип
    chips.forEach(chipElem => {
        chipElem.addEventListener('click', () => {
            // location.replace('#mineralnaya-vata');

            chips.forEach((chipElem) => {
                chipElem.classList.remove('chip-block__blue-active');
            });

            if (chipElem.parentElement.dataset.id === "mbps") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "mbps") {
                        elem.style.display = "flex";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "urban") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "urban") {
                        elem.style.display = "flex";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "pirpur") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "pirpur") {
                        elem.style.display = "flex";
                    }
                });
            } else if (chipElem.parentElement.dataset.id === "stal") {
                chipElem.classList.add('chip-block__blue-active');
                productItem.forEach((elem) => {
                    elem.style.display = "none";
                    if (elem.dataset.id === "stal") {
                        elem.style.display = "flex";
                    }
                });
            }
        });
    });

    if (document.readyState === 'complete') {
        filterJumpProduct();
    } else {
        window.addEventListener('load', filterJumpProduct);
    }
}

//---------------- Файл mineral.html и остальные продуктовые стр
//------- Swiper
if (document.querySelector(".palette")) {
    var swiper = new Swiper(".palette-mySwiper", {
        // loop: true,
        // preventInteractionOnTransition: false,
        // direction: "vertical",
        // spaceBetween: 20,
        slidesPerView: 'auto',
        allowTouchMove: false,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".palette-mySwiper2", {
        loop: true,
        spaceBetween: 10,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

// Определение ГЕО
function init(regions) {
    const headerRegion = document.querySelectorAll('.city-geo');
    const headerPhone = document.querySelectorAll('.tel-geo');
    const headerPhoneTwo = document.querySelectorAll('.tel-geo-two');
    const headerAddres = document.querySelectorAll('.addres-geo');
    const headerEmail = document.querySelectorAll('.email-geo');
    const ulCity = document.querySelectorAll('.ul-city');

    const contactItemTwo = document.querySelector('.sales-offices__item-two');
    const contactPhoneTwo = document.querySelector('.tel-geo-two');

    // console.log('Все данные с городами', regions);

    // Список городов из json файла
    const optionsData = [];
    regions.forEach(elem => optionsData.push(elem.city));
    // console.log(optionsData);



    let city = undefined;
    // Проверяем, вызывалась ли функция ранее
    if (!localStorage.getItem('region')) {
        // Если не вызывалась, выполняем нужные действия
        // Определение города по ip
        const loadingCity = ymaps.geolocation.city;
        // const loadingCity = 'Ярославль';
        // console.log(optionsData.filter(item => item === loadingCity).length > 0);
        if (optionsData.filter(item => item === loadingCity).length > 0) {
            localStorage.setItem('city', loadingCity);
            console.log(`Первый запуск ${localStorage.getItem('city')}`);
        } else {
            localStorage.setItem('city', 'Москва');
            console.log('Первый запуск, по умолчанию Москва');
        }

        // Устанавливаем флаг, что функция была вызвана
        localStorage.setItem('region', 'true');
    }

    const allUlCity = document.querySelectorAll('.ul-city li');
    const cityClick = null;
    allUlCity.forEach(elem => {
        elem.addEventListener('click', () => {
            console.log(elem.innerHTML);
            localStorage.setItem('city', elem.innerHTML);
            location.reload();
        })
    })

    if (localStorage.getItem('city') === 'undefined') {
        city = undefined;
    } else if (localStorage.getItem('city') === undefined) {
        city = undefined;
    } else {
        city = localStorage.getItem('city');
    }
    console.log(`Переменная city ${city}`);

    let filterCity
    // Если город не определился
    if (city === undefined) {
        // Если город не определен, по умолчанию Москву
        filterCity = regions.filter(region => region.city === 'Москва');
        console.log('Город по умолчанию, если undefined', filterCity);

    } else {
        // Если город определен, получаем данные
        filterCity = regions.filter(region => region.city == city);
        console.log('Данные из файла', filterCity[0]);
    }

    const region = {
        city: filterCity[0].city,
        addres: filterCity[0].adress,
        lat: filterCity[0].lat,
        lng: filterCity[0].lng,
        phone: filterCity[0].phone,
        email: filterCity[0].email,
    };

    if (filterCity[1]) {
        const regionAdd = {
            addres: filterCity[1].adress,
            phone: filterCity[1].phone,
            email: filterCity[1].email,
        };

        localStorage.setItem('regionAdd', JSON.stringify(regionAdd));
        const saveRegionAdd = JSON.parse(localStorage.getItem('regionAdd'));
        console.log('Данные из дополнительного localStorage', saveRegionAdd);

        if (document.querySelector('.sales-offices__item-two')) {
            contactItemTwo.classList.add('sales-offices__item');
            document.querySelector('.addres-geo-add').innerHTML = saveRegionAdd.addres;
            document.querySelector('.tel-geo-add').innerHTML = saveRegionAdd.phone[0];
            document.querySelector('.email-geo-add').innerHTML = saveRegionAdd.email;
        }
    }

    // Сохранение в localStorage
    localStorage.setItem('region', JSON.stringify(region));
    const saveRegion = JSON.parse(localStorage.getItem('region'));
    console.log('Данные из localStorage', saveRegion);
    // console.log(localStorage.getItem('region'));

    // Десктуризация координат
    const { lat, lng } = saveRegion

    // Отображение города на сайте
    headerRegion.forEach(el => {
        el.innerHTML = saveRegion.city
    })
    // Отображение телефона на сайте
    headerPhone.forEach(el => {
        el.innerHTML = saveRegion.phone[0]
        el.href = `tel:${saveRegion.phone[0]}`
    })
    // Отображение второго телефона на странице контакты
    headerPhoneTwo.forEach(el => {
        el.innerHTML = saveRegion.phone[1]
        el.href = `tel:${saveRegion.phone[1]}`
    })
    // Отображение адреса на сайте
    headerAddres.forEach(el => {
        el.innerHTML = saveRegion.addres
    })
    // Отображение email на сайте
    headerEmail.forEach(el => {
        el.innerHTML = saveRegion.email
    })

    if (contactPhoneTwo) {
        if (contactPhoneTwo.innerText === 'undefined') {
            contactPhoneTwo.classList.add('d-none')
        }
    }

    if (document.querySelector('.map')) {
        ymaps.ready(initMap);
        function initMap() {

            var myMap = new ymaps.Map("map", {
                center: [lat, lng],
                zoom: 18,
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.controls
                // Кнопка изменения масштаба.
                .add('zoomControl', { left: 5, top: 200 })
                // Список типов карты
                .add('typeSelector')
                // Стандартный набор кнопок
                .add('mapTools', { left: 5, top: 5 });

            filterCity.forEach(city => {
                const { lat, lng } = city
                const marker = new ymaps.Placemark([lat, lng], null, {
                    iconLayout: 'default#image',
                    iconImageHref: "/image/icon_map.svg",
                    iconImageSize: [40, 40],
                    // iconImageOffset: [-15, -44]
                })
                myMap.geoObjects.add(marker);
            })
        }
    }

}

// Загрузка городов
window.onload = function () {

    let arrRegions

    // fetch(`./data/regions.json`)
    fetch('/data/regions.json')
        .then(res => res.json())
        .then(data => init(data))

}

// Основная анимация
function animation() {

    // Подключение ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    //___________________________ Частичная анимация обложки
    tl.fromTo('.product-cover__info',
        {
            x: -100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
        },
    )

    //___________________________ Частичная анимация header
    tl.fromTo(
        '.header__bottom a',
        {
            y: -50,
            x: -50,
            opacity: 0,
        },
        {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.25,
            stagger: 0.15,
        },
        0.25
    )

    // Анимация новой "Главной"
    if (document.querySelector(".cover-main")) {
        if (window.innerWidth > 767) {
            gsap.from(".main-page__image-title", { y: -500, scale: 2, duration: 1.5, delay: 1.5 })
            gsap.from(".main-page__image", { scale: 2, duration: 1.5, delay: 1.5 })
            gsap.to(".product-main__blur", { y: 500, duration: 1.5 })
            var tlm = new TimelineMax();
            tlm.from(".cover-main__blur", { y: 500, duration: 1.5, delay: 1.5 })
                .from(".advantage-item-3", { y: 500, opacity: 1, duration: .6 })
                .from(".advantage-item-2", { y: 500, opacity: 1, duration: .6 })
                .from(".advantage-item-1", { y: 500, opacity: 1, duration: .6 })

            var swiper = new Swiper(".main-mySwiper", {
                direction: "vertical",
                mousewheel: true,
                speed: 1000,
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
                // mousewheel: {
                //     sensitivity: 1,
                //     releaseOnEdges: true,
                // },
                pagination: {
                    el: ".swiper-pagination",
                },
                on: {
                    slideChange: function () {
                        const currentSlide = this.slides[this.activeIndex];
                        const slideNumber = currentSlide.getAttribute('data-slide');

                        switch (slideNumber) {
                            case '1':
                                gsap.to(".main-page__image-title", { y: 0, scale: 1, duration: 1.5 })
                                gsap.to(".main-page__image", { scale: 1, duration: 1.5 })
                                gsap.to(".cover-main__blur", { y: 0, duration: 1.5 })
                                gsap.to(".product-main__blur", { y: 500, duration: 1.5 })
                                gsap.to(".main-header", { opacity: 0, duration: .1 })
                                break;
                            case '2':
                                gsap.to(".main-page__image-title", { y: -500, scale: 2, duration: 1.5 })
                                gsap.to(".main-page__image", { scale: 1.2, duration: 1.5 })
                                gsap.to(".cover-main__blur", { y: 500, duration: 1.5 })
                                gsap.to(".product-main__blur", { y: 0, duration: 1.5 })
                                gsap.to(".main-header", { opacity: 1, duration: .5 })
                                gsap.to('.object-map__image-map', { x: -420, scaleX: 1.34328, scaleY: 1.239, duration: 1, ease: "slow(0.7,0.7,true)" })
                                gsap.to('.object-map__text-block', { x: -1000, opacity: 0, duration: 1, ease: "slow(0.7,0.7,true)", })
                                gsap.to('.object-map-mySwiper', { x: -1000, scale: .5, opacity: 0, duration: 1, ease: "slow(0.7,0.7,true)", })
                                gsap.to(".object-map__blur", { y: 1000, duration: 1 })
                                break;
                            case '3':
                                gsap.to(".product-main__blur", { y: 500, duration: 1 })
                                gsap.to(".object-map__blur", { y: 0, duration: 1 })
                                gsap.to('.object-map__image-map', { x: 0, scaleX: 1, scaleY: 1, duration: 1, ease: "slow(0.7,0.7,true)", })
                                gsap.to('.object-map__text-block', { x: 0, y: 30, opacity: 1, scale: 0.7, duration: 1, ease: "slow(0.7,0.7,true)", })
                                gsap.to('.object-map-mySwiper', { x: 0, scale: 0.75, opacity: 1, duration: 2, ease: "slow(0.7,0.7,true)", })
                                break;
                            case '4':
                                gsap.to('.object-map__image-map', { x: -420, scaleX: 1.34328, scaleY: 1.239, duration: 1, ease: "slow(0.7,0.7,true)" })
                                gsap.to('.object-map__text-block', { x: -1000, opacity: 0, duration: 1, ease: "slow(0.7,0.7,true)", })
                                gsap.to('.object-map-mySwiper', { x: -1000, scale: .5, opacity: 0, duration: 1, ease: "slow(0.7,0.7,true)", })
                                break;
                        }
                    }
                }
            });

            var swiper2 = new Swiper(".main-product-mySwiper", {
                breakpoints: {
                    1025: {
                        slidesPerView: 3,

                    },
                },
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 2.5,
                spaceBetween: 60,
                initialSlide: 1,
                loop: true,
                speed: 1000,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    scale: 0.9,
                    slideShadows: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next', // Селектор для элемента "Next" стрелки
                    prevEl: '.swiper-button-prev', // Селектор для элемента "Prev" стрелки
                },
            });
        }

        // Для мобильной версии
        if (window.innerWidth < 767) {
            var swiper2 = new Swiper(".main-product-mySwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                initialSlide: 1,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    scale: 0.9,
                    slideShadows: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next', // Селектор для элемента "Next" стрелки
                    prevEl: '.swiper-button-prev', // Селектор для элемента "Prev" стрелки
                },
            });
        }

    }

    //___________________________ Анимация на десктопе
    if (window.innerWidth > 1279) {

        //___________________________ Анимация продуктовых обложек

        gsap.to('.product-cover__image', {
            scrollTrigger: {
                trigger: '.product-cover',
                start: 'top top',
                scrub: true,
            },
            scale: 2,
        });
        gsap.to('.product-cover__image-urban', {
            scrollTrigger: {
                trigger: '.product-cover',
                start: 'top top',
                scrub: true,
            },
            scale: 1.1,
        });
        gsap.to('.product-cover__title-urban', {
            scrollTrigger: {
                trigger: '.product-cover',
                // markers: true,
                start: 'top top',
                scrub: true,
            },
            yPercent: 20,
            // opacity: 0,
            scale: 2,
        });
        gsap.to('.product-cover__title', {
            scrollTrigger: {
                trigger: '.product-cover',
                // markers: true,
                start: 'top top',
                scrub: true,
            },
            yPercent: 80,
            // opacity: 0,
            scale: 2,
        });
        gsap.to('.product-cover__desk', {
            scrollTrigger: {
                trigger: '.product-cover',
                start: 'top top',
                scrub: true,
            },
            scale: 0.5,
            yPercent: -600,
            opacity: 0,
        });
        gsap.to('.product-cover__button', {
            scrollTrigger: {
                trigger: '.product-cover',
                // markers: true,
                start: 'top top',
                scrub: true,
            },
            scale: 0.5,
            yPercent: -900,
            opacity: 0,
        });

        //___________________________ Анимация обложки на главной

        // if (document.querySelector(".cover-main")) {

        //     gsap.from(".cover-main__image-title", { y: -500, scale: 2, duration: 1.5, delay: 1.5 })
        //     gsap.from(".cover-main__image", { scale: 2, duration: 1.5, delay: 1.5 })
        //     var tlm = new TimelineMax();
        //     tlm.from(".cover-main__blur", { y: 500, duration: 1.5, delay: 1.5 })
        //         .from(".advantage-item-3", { y: 500, opacity: 1, duration: .6 })
        //         .from(".advantage-item-2", { y: 500, opacity: 1, duration: .6 })
        //         .from(".advantage-item-1", { y: 500, opacity: 1, duration: .6 })

        //     gsap.to(window, {
        //         scrollTrigger: {
        //             trigger: "cover-main",
        //             start: "top top",
        //             end: "bottom top",
        //             // markers: true,
        //             onEnter: () => {
        //                 gsap.to(window, { scrollTo: "#catalog", duration: 1 });
        //             },
        //             once: true // Для выполнения анимации только один раз
        //         }
        //     });

        //     gsap.to('.main-header', {
        //         scrollTrigger: {
        //             trigger: '#catalog',
        //             start: 'top',
        //             end: 'top',
        //             scrub: true,
        //             // markers: true,
        //         },
        //         opacity: 1,
        //         // scrollTo: 400
        //     });
        // }

        // Старая обложка для главной
        // gsap.to('.cover-main__image', {
        //     scrollTrigger: {
        //         trigger: '.cover-main',
        //         start: 'top top',
        //         scrub: true,
        //     },
        //     y: -1200,
        //     opacity: 0
        // });

        // gsap.to('.cover-main__image-item', {
        //     scrollTrigger: {
        //         trigger: '.cover-main',
        //         start: 'top top',
        //         scrub: true,
        //     },
        //     y: -1200,
        //     opacity: 0
        // });

        // gsap.to('.cover-main__image-title', {
        //     scrollTrigger: {
        //         trigger: '.cover-main',
        //         start: 'top top',
        //         scrub: true,
        //     },
        //     scale: 1.5,
        //     y: 800,
        //     opacity: 0,
        // });

        //___________________________ Анимация плитки на Главной

        // gsap.from('.cover-main__image-item-1', {
        //     x: -700,
        //     duration: 0.2,
        //     scale: 6,
        //     ease: "slow(0.7,0.7,false)",
        // })
        // gsap.from('.cover-main__image-item-2', {
        //     x: -700,
        //     duration: 0.4,
        //     scale: 4,
        //     ease: "slow(0.7,0.7,false)",
        // })
        // gsap.from('.cover-main__image-item-3', {
        //     x: -700,
        //     duration: 0.6,
        //     scale: 5,
        //     ease: "slow(0.7,0.7,false)",
        // })
        // gsap.from('.cover-main__image-item-4', {
        //     x: -700,
        //     duration: 0.8,
        //     scale: 5,
        //     ease: "slow(0.7,0.7,false)",
        // })
        // gsap.from('.cover-main__image-item-6', {
        //     x: -700,
        //     duration: 1,
        //     scale: 3,
        //     ease: "slow(0.7,0.7,false)",
        // })
        // gsap.from('.cover-main__image-item-5', {
        //     x: -700,
        //     duration: 1.2,
        //     scale: 5,
        //     ease: "slow(0.7,0.7,false)",
        // })


        //___________________________ Анимация карты на продуктовых

        if (document.querySelector(".product-cover") || document.querySelector(".top-advantage")) {
            gsap.from('.object-map__image-map', {
                scrollTrigger: {
                    trigger: '.object-map',
                    start: 'top 20%',
                    scrub: 2,
                    // end: 'top 10%',
                    // markers: true,
                },
                x: -420,
                scaleX: 1.34328,
                scaleY: 1.239,
                duration: 2,
                ease: "slow(0.7,0.7,true)",
            })
            gsap.from('.object-map__text-block', {
                scrollTrigger: {
                    trigger: '.object-map',
                    start: 'top 30%',
                    // markers: true,
                    // end: 'top 10%',
                    // scrub: true,
                },
                x: -1000,
                opacity: 0,
                duration: 1,
                ease: "slow(0.7,0.7,true)",
            })
            gsap.to('.object-map-mySwiper', {
                scrollTrigger: {
                    // trigger: '.object-map',
                    // start: 'top 10%',
                    // start: 'top 20%',
                    // end: 'top',
                    // scrub: true,
                    // markers: true,
                    scrub: 1,
                    pin: true,
                    trigger: ".object-map",
                    start: "50% 50%",
                    end: "bottom -50%",
                },
                scale: 0.9,
                opacity: 1,
                duration: 2,
                ease: "slow(0.7,0.7,true)",
            });
        }


        //___________________________ Пример последовательной анимации
        // const tlMap = gsap.timeline({
        //     scrollTrigger: {
        //         scrub: 1,
        //         pin: true,
        //         trigger: ".object-map",
        //         start: "50% 50%",
        //         // start: 'top 20%',
        //         //   endTrigger: "#pin-windmill-wrap",
        //         end: "bottom -50%",
        //     },
        // });

        // tlMap.from(".object-map__image-map", {
        //     x: -420,
        //     scaleX: 1.34328,
        //     scaleY: 1.239,
        //     duration: 2,
        //     ease: "slow(0.7,0.7,false)",
        // });

        // tlMap.to(".object-map-mySwiper", {
        //     // rotateZ: 900,
        //     scale: 1,
        //     opacity: 1,
        //     duration: 2,
        //     ease: "slow(0.7,0.7,true)",
        // });

    }

    //___________________________ Анимация "Окрашенная рулонная сталь" /products/painted-steel

    gsap.from('.polymer__title', {
        scrollTrigger: {
            trigger: '.product-cover',
            start: 'center',
            // scrub: true,
            // markers: true,
        },
        y: -100,
        x: -800,
        opacity: 0,
        duration: 1,
    })

    //___________________________ Анимация "Модульный фасад Urban" /products/urban

    gsap.from('.facade__title', {
        scrollTrigger: {
            trigger: '.product-cover',
            start: 'center',
            // scrub: true,
            // markers: true,
        },
        // y: -200,
        x: -800,
        // rotate: -20,
        opacity: 0,
        duration: 1,
    })
    gsap.from('.facade__desk', {
        scrollTrigger: {
            trigger: '.product-cover',
            start: 'center',
            // scrub: true,
            // markers: true,
        },
        x: -800,
        opacity: 0,
        duration: 1.25,
    })
    gsap.from('.facade__block-btn', {
        scrollTrigger: {
            trigger: '.product-cover',
            start: 'center',
            // scrub: true,
            // markers: true,
        },
        // y: 200,
        x: -800,
        // rotate: 20,
        opacity: 0,
        duration: 1.5,
    })
    gsap.from('.facade__image', {
        scrollTrigger: {
            trigger: '.product-cover',
            start: 'center',
            // scrub: true,
            // markers: true,
        },
        // rotate: 20,
        // x: 800,
        opacity: 0,
        duration: 4,
    })

    // console.clear()
}

try {
    animation()
} catch {
    console.log(error);
}

// Выделение страницы на которой находится user (header, footer)
function userLink() {
    const url = window.location.pathname;
    console.log(url);

    const linkPage = document.querySelectorAll('.header a, .header-mob a, .footer a, .technostyle-products a');
    linkPage.forEach(link => {
        if (link.pathname === url) {
            link.style.fontWeight = '900';
        }
    });

    const linkPageProducts = document.querySelectorAll('.technostyle-products a');
    linkPageProducts.forEach(link => {
        if (link.pathname === url) {
            link.children[0].children[0].style.fontWeight = '900';
        }
    })
}

try {
    userLink()
} catch {
    console.log(error);
}

// Форма заявки
if (document.getElementById('form')) {
    // Данные с формы
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Отмена стандартной отправки формы

        // Создание объекта и сохранение данных из формы (пример)
        var formData = {
            firstName: document.getElementById('firstName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            comment: document.getElementById('comment').value
        };

        // Ваша логика обработки объекта formData после отправки формы
        console.log(formData); // Пример: вывод объекта с данными в консоль для проверки
        // Дополнительные действия с объектом formData

        // Очистка значений полей формы
        document.getElementById('firstName').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('comment').value = "";
    });

    // Прикрепить файл
    function handleFileUpload() {
        event.preventDefault();
        document.getElementById('fileInput').click();
    }

    document.getElementById('fileInput').addEventListener('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var uploadedFile = e.target.result;
                // Обработка файла
                console.log("Файл успешно загружен: ", uploadedFile);
            }
        }
    });
}

// Калькулятор
if (document.querySelector(".calc")) {
    // const t1 = gsap.timeline({ defaults: { duration: 1 }});
    // t1.from('.product-cover__title', { opacity: 0, x: 60 })
    //     .from('.product-cover__desk', { opacity: 0, x: -30 })
    //     .from('.product-cover__button', { opacity: 0, y: 30 })


    // const headerScroll = gsap.timeline({
    //     scrollTrigger: {
    //         scrub: 1,
    //         pin: true,
    //         trigger: ".product-cover__info",
    //         start: "10%",
    //         end: "bottom 90vh",
    //         // endTrigger: ".product-cover",
    //     },
    // });

    // headerScroll.to(".product-cover__info", { opacity: 0, scale: 1.8, });
    // headerScroll.to(".product-cover__title", { opacity: 0, scale: 1.8, });
    // headerScroll.to(".product-cover__desk", { opacity: 0, scale: 1.8, });
    // headerScroll.to(".product-cover__button", { opacity: 0, scale: 1.8, });


    //___________________________ Калькулятор ________________________

    //стрелочка выпадающего списка у select
    document.getElementById('roofTypeSelect').addEventListener('click', function () {
        this.parentNode.classList.toggle('open');
    });

    //ручной ввод и увелечение/уменьшение на 50 в input "Высота свеса"
    document.getElementById('roofOverhangHeightInput').addEventListener('input', function (event) {
        let value = this.value;

        value = value.replace(/\s/g, '');

        value = value.replace(/\D/g, '');

        if (!value.endsWith('см')) {
            value += ' см';
        }

        value = value.replace(/(\d)(?=(\d{3})+(?!\d|см))/g, '$1 ');

        this.value = value;

        this.setSelectionRange(value.indexOf('см'), value.indexOf('см'));
    });

    document.querySelector('.calc__plusBtn').addEventListener('click', function () {
        let value = document.getElementById('roofOverhangHeightInput').value;
        let newValue = parseInt(value.replace(/\s|см/g, '')) + 50;
        document.getElementById('roofOverhangHeightInput').value = addSpaces(newValue) + ' см';
    });

    document.querySelector('.calc__minusBtn').addEventListener('click', function () {
        let value = document.getElementById('roofOverhangHeightInput').value;
        let newValue = parseInt(value.replace(/\s|см/g, '')) - 50;
        if (newValue < 0) {
            newValue = 0;
        }
        document.getElementById('roofOverhangHeightInput').value = addSpaces(newValue) + ' см';
    });

    function addSpaces(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    //======== увеличение и уменьшение на 10м длины и ширины крыши + Функция для обновления площади

    function updateArea() {
        let length = parseInt(document.getElementById('lengthInput').value.replace(/\s|м/g, ''));
        let width = parseInt(document.getElementById('widthInput').value.replace(/\s|м/g, ''));

        let area = length * width;

        document.querySelector('.calc__resultBox p').textContent = 'S ' + area + ' м2';
    }

    document.querySelectorAll('.calc__plusBtnSquare').forEach(function (button) {
        button.addEventListener('click', function () {

            let input = this.parentElement.querySelector('.calc__input');
            let value = parseInt(input.value.replace(/\s|м/g, ''));

            value += 1;

            input.value = value + ' м';

            updateArea();
        });
    });

    document.querySelectorAll('.calc__minusBtnSquare').forEach(function (button) {
        button.addEventListener('click', function () {

            let input = this.parentElement.querySelector('.calc__input');
            let value = parseInt(input.value.replace(/\s|м/g, ''));

            value -= 1;

            if (value < 0) {
                value = 0;
            }

            input.value = value + ' м';

            updateArea();
        });
    });

    //Выбор толщины панелей и другие показатели

    document.querySelectorAll('.roofingPanels').forEach(function (button) {
        button.addEventListener('click', function () {

            let input = this.parentElement.querySelector('.calc__input');
            let value = parseInt(input.value.replace(/\s|м/g, ''));

            let possibleValues = [50, 60, 80, 100, 120, 150, 180, 200, 250, 300];

            let prevValue = possibleValues.reverse().find(val => val < value);

            value = prevValue !== undefined ? prevValue : value;

            input.value = value + ' мм';
        });
    });

    document.querySelectorAll('.roofingPanelsPlus').forEach(function (button) {
        button.addEventListener('click', function () {

            let input = this.parentElement.querySelector('.calc__input');
            let value = parseInt(input.value.replace(/\s|м/g, ''));

            let possibleValues = [50, 60, 80, 100, 120, 150, 180, 200, 250, 300];

            let nextValue = possibleValues.find(val => val > value);

            value = nextValue !== undefined ? nextValue : value;

            input.value = value + ' мм';
        });
    });

    document.querySelectorAll('.wallPanelsMinus').forEach(function (button) {
        button.addEventListener('click', function () {

            let input = this.parentElement.querySelector('.calc__input');
            let value = parseInt(input.value.replace(/\s|м/g, ''));

            let possibleValues = [50, 60, 80, 100, 120, 150, 180, 200, 250, 300];

            let prevValue = possibleValues.reverse().find(val => val < value);

            value = prevValue !== undefined ? prevValue : value;

            input.value = value + ' мм';
        });
    });

    document.querySelectorAll('.wallPanelsPlus').forEach(function (button) {
        button.addEventListener('click', function () {

            let input = this.parentElement.querySelector('.calc__input');
            let value = parseInt(input.value.replace(/\s|м/g, ''));

            let possibleValues = [50, 60, 80, 100, 120, 150, 180, 200, 250, 300];

            let nextValue = possibleValues.find(val => val > value);

            value = nextValue !== undefined ? nextValue : value;

            input.value = value + ' мм';
        });
    });

    // ============= Выбор цвета ===========

    const colorsArray = [
        { ral: "RAL1037", hex: "#F09200" },
        { ral: "Дерево", hex: "#8b4513" },
        { ral: "RAL9017", hex: "#1E1E1E" },
        { ral: "RAL7001", hex: "#959BA2" },
        { ral: "RAL5017", hex: "#316490" },
        { ral: "RAL3005", hex: "#603F43" },
        { ral: "RAL8017", hex: "#514643" },
        { ral: "RAL1014", hex: "#D8C7A5" },
        { ral: "RAL6010", hex: "#5B744B" },
        { ral: "RAL9003", hex: "#EEEEEC" },
        { ral: "RAL9006", hex: "#A1A2A1" },
        { ral: "RAL9010", hex: "#F1EFE9" },
        { ral: "RAL1015", hex: "#E2D6BE" },
        { ral: "RAL2007", hex: "#F19B38" },
        { ral: "RAL9002", hex: "#D8D8D1" },
        { ral: "RAL7004", hex: "#A0A0A0" },
    ];

    const colorBar = document.querySelector('.calc__color-bar');

    const ralInput = document.querySelector('.calc__ral-input');

    colorsArray.forEach(color => {
        const colorSample = document.createElement('div');
        colorSample.classList.add('calc__color-sample');
        colorSample.style.backgroundColor = color.hex;

        colorSample.addEventListener('click', () => {
            ralInput.value = color.ral;
        });

        colorBar.appendChild(colorSample);
    });

    //======= переключения между блоками калькулятора (далее/назад)

    const nextButtons = document.querySelectorAll('.nextBtn');
    const backButtons = document.querySelectorAll('.backBtn');

    function goToNextForm(currentForm) {
        currentForm.style.display = 'none';
        const nextForm = currentForm.nextElementSibling;
        if (nextForm) {
            nextForm.style.display = 'block';
        }
    }

    function goToPreviousForm(currentForm) {
        currentForm.style.display = 'none';
        const previousForm = currentForm.previousElementSibling;
        if (previousForm) {
            previousForm.style.display = 'block';
        }
    }

    // кнопка "далее"
    nextButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const currentForm = this.closest('.calc__wrapper');
            goToNextForm(currentForm);
        });
    });

    // кнопка "назад"
    backButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const currentForm = this.closest('.calc__wrapper');
            goToPreviousForm(currentForm);
        });
    });

    // ============== сбор данных ============
    //инпуты 1-го окна
    const roofType = document.querySelector('#roofTypeSelect');
    const overhangHeight = document.querySelector('#roofOverhangHeightInput');
    const columnStep = document.querySelector('#columnStepInput');
    const roofWidth = document.querySelector('#widthInput');
    const roofLength = document.querySelector('#lengthInput');

    //инпуты 2-го окна
    const roofingPanelsWidth = document.querySelector('#roofingPanels');
    const wallPanelsWidth = document.querySelector('#wallPanels');
    const sealingMaterials = document.querySelector('#sealingMaterials');
    const fasteningElements = document.querySelector('#fasteningElements');
    const cornerPanels = document.querySelector('#cornerPanels');
    const cornerPanelsNegative = document.querySelector('#cornerPanelsNegative');
    const shapedElements = document.querySelector('#shapedElements');
    const shapedElementsNegative = document.querySelector('#shapedElementsNegative');

    //инпуты 3-го окна
    const ralColor = document.querySelector('#ralColor');
    const mineralFiller = document.querySelector('#mineral');
    const polystyrene = document.querySelector('#polystyrene');
    const pirPur = document.querySelector('#pirPur');

    function calculateRoofPanels() {
        if (roofType.value === 'Односкатная') {
            let roofPanels = (parseFloat(roofWidth.value) + 1.2) * (parseFloat(roofLength.value) + 1);
            console.log(roofPanels);
        }
    }

    roofType.addEventListener('change', calculateRoofPanels);
    roofWidth.addEventListener('input', calculateRoofPanels);
    roofLength.addEventListener('input', calculateRoofPanels);
}

// Ограничение по высоте хлебных крошек
function breadcrumb() {
    if (document.querySelector(".breadcrumb--position")) {
        var block = document.querySelector(".breadcrumb--position");
        var maxTop = 1150; // Максимальное значение top

        function limitTop() {
            var currentTop = block.offsetTop;
            if (currentTop > maxTop) {
                block.style.top = maxTop + "px";
            }
        }

        // Вызываем функцию при скролле или других действиях, которые могут изменить значение top
        window.onscroll = limitTop;
        block.addEventListener("change", limitTop);
    }
}

try {
    breadcrumb()
} catch {
    console.log(error);
}

// function toggleSearch() {
//     const searchInput = document.querySelector('.search-input');
//     searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
// }