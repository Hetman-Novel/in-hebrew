"use strict"

document.addEventListener("DOMContentLoaded", function() {

    const links_user_menu = document.getElementById('links-user-menu')
    if (links_user_menu) {
 
        links_user_menu.addEventListener('click', () => {
            links_user_menu.parentNode.classList.toggle('show')

            if (window.matchMedia("(max-width: 1600px)").matches) {
                if (document.querySelector('.header__blockCreateAtask').classList.contains('show')) {
                    document.querySelector('.header__blockCreateAtask').classList.remove('show')
                }
                if (document.querySelector('.header__blockCreateAtask').classList.contains('the-list-is-open')) {
                    document.querySelector('.header__blockCreateAtask').classList.remove('the-list-is-open')
                }
                if (document.getElementById('create-a-task').classList.contains('active')) {
                    document.getElementById('create-a-task').classList.remove('active')
                }
            }
        })

        if (window.matchMedia("(max-width: 1600px)").matches) {
            document.querySelectorAll('.header__there-subparagraphs').forEach(function(header_subparagraphs) {
                links_user_menu.addEventListener('click', function() {
                    header_subparagraphs.classList.remove('hover')
                })
            })
        }
    }

    const home_video = document.getElementById('home-video')
    if (home_video) {
        const play_home_video = document.getElementById('play-home-video')
        const block_video_wrap_content = document.getElementById('block-video-wrap-content')
        play_home_video.addEventListener('click', () => {
            home_video.setAttribute("controls", "controls")
            home_video.pause()
            home_video.load()
            home_video.play()
            block_video_wrap_content.remove()
        })
    }

    const dateOfBirth = document.getElementById("date-of-birth")
    if (dateOfBirth) {
        dateOfBirth.addEventListener("input", function() {
            let inputValue = dateOfBirth.value
            inputValue = inputValue.replace(/\D/g, "")
            if (inputValue.length > 2) {
                inputValue = inputValue.substring(0, 2) + ':' + inputValue.substring(2)
            }
            if (inputValue.length > 5) {
                inputValue = inputValue.substring(0, 5) + ':' + inputValue.substring(5)
            }
            dateOfBirth.value = inputValue
        })
    }

    const years_of_work_experience = document.getElementById("years-of-work-experience")
    if (years_of_work_experience) {
        function limiter(field, size) {
            if (field.value.length > size) {
                field.value = field.value.substring(0, size);
            }
        }
    }

    const filling_stages = document.getElementById('filling-stages')
    if (filling_stages) {
        const filling_stages_block = document.querySelector('.filling-stages__block')
        const step_one = document.getElementById('step-one')
        const step_two = document.getElementById('step-two')
        const step_three = document.getElementById('step-three')
        const step_four = document.getElementById('step-four')
        const step_five = document.getElementById('step-five')


        // Next

        // to - two step
        const btn_to_two = document.getElementById('btn-to-two')
        btn_to_two.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-one')
            filling_stages_block.classList.add('step-two')

            step_one.classList.remove('step-active')
            step_two.classList.add('step-active')
        })

        // to - three step
        const btn_to_three = document.getElementById('btn-to-three')
        btn_to_three.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-two')
            filling_stages_block.classList.add('step-three')

            step_two.classList.remove('step-active')
            step_three.classList.add('step-active')
        })

        // to - four step
        const btn_to_four = document.getElementById('btn-to-four')
        btn_to_four.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-three')
            filling_stages_block.classList.add('step-four')

            step_three.classList.remove('step-active')
            step_four.classList.add('step-active')
        })

        // to - five step
        const btn_to_five = document.getElementById('btn-to-five')
        btn_to_five.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-four')
            filling_stages_block.classList.add('step-five')

            step_four.classList.remove('step-active')
            step_five.classList.add('step-active')
        })


        // Prev

        // to - one step
        const btn_prev_to_one = document.getElementById('btn-prev-to-one')
        btn_prev_to_one.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-two')
            filling_stages_block.classList.add('step-one')

            step_two.classList.remove('step-active')
            step_one.classList.add('step-active')
        })

        // to - two step
        const btn_prev_to_two = document.getElementById('btn-prev-to-two')
        btn_prev_to_two.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-three')
            filling_stages_block.classList.add('step-two')

            step_three.classList.remove('step-active')
            step_two.classList.add('step-active')
        })

        // to - three step
        const btn_prev_to_three = document.getElementById('btn-prev-to-three')
        btn_prev_to_three.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-four')
            filling_stages_block.classList.add('step-three')

            step_four.classList.remove('step-active')
            step_three.classList.add('step-active')
        })

        // to - four step
        const btn_prev_to_four = document.getElementById('btn-prev-to-four')
        btn_prev_to_four.addEventListener('click', () => {
            filling_stages_block.classList.remove('step-five')
            filling_stages_block.classList.add('step-four')

            step_five.classList.remove('step-active')
            step_four.classList.add('step-active')
        })

        // 
        const checkboxes = document.querySelectorAll('.custom-checkbox__input')
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const parent = this.parentElement
                if (this.checked) {
                    parent.classList.add('checked')
                } else {
                    parent.classList.remove('checked')
                }
            })
        })
        const blockItems = document.querySelectorAll('.block__item')
        blockItems.forEach(blockItem => {
            const checkboxes = blockItem.querySelectorAll('.custom-checkbox__input');
            const titleElement = blockItem.querySelector('.block__title');
            let activeCheckboxCount = 0
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function () {
                    if (this.checked) {
                        activeCheckboxCount++
                    } else {
                        activeCheckboxCount--
                    }
                    if (activeCheckboxCount > 0) {
                        titleElement.textContent = `${titleElement.textContent.replace(/\(\d+\)/, '')} (${activeCheckboxCount})`
                    } else {
                        titleElement.textContent = titleElement.textContent.replace(/\(\d+\)/, '')
                    }
                })
                if (checkbox.checked) {
                    activeCheckboxCount++
                }
            })
            if (activeCheckboxCount > 0) {
                titleElement.textContent = `${titleElement.textContent} (${activeCheckboxCount})`
            }
        })
    }

    const js_list_line_limit = document.getElementById("js-list-line-limit")
    if (js_list_line_limit) {

        const showSubcategoriesLinks = document.querySelectorAll('.employee__show-subcategories');
        showSubcategoriesLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var parentBlock = event.target.parentElement;
                if (parentBlock) {
                    parentBlock.classList.toggle('only-three-lines');
                }
            })
        })
    }

    const chat_open_sidebar = document.querySelector(".chat__open-sidebar")
    if (chat_open_sidebar) {
        chat_open_sidebar.addEventListener('click', function() {
            document.body.classList.toggle('no-scroll')
            document.getElementById('chat-sidebar').classList.toggle('open')
        })
    }

    const user_message = document.getElementById("user-message")
    if (user_message) {
        user_message.addEventListener('click', function() {
            document.body.classList.toggle('no-scroll')
            user_message.classList.toggle('active')
            document.querySelector('.executor__messages').classList.toggle('show')
        })
    }

    const create_a_task = document.getElementById("create-a-task")
    if (create_a_task) {
        create_a_task.addEventListener('click', function(even) {
            even.preventDefault();
            create_a_task.classList.toggle('active')
            document.querySelector('.header__blockCreateAtask').classList.toggle('show')
            document.querySelector('.header__blockCreateAtask').classList.remove('the-list-is-open')
        })
        document.querySelectorAll('.header__there-subparagraphs').forEach(function(header_subparagraphs) {
            create_a_task.addEventListener('click', function() {
                header_subparagraphs.classList.remove('hover')
            })
        })

        const header_block_create_atask_list = document.querySelector('.header__blockCreateAtaskList')
        if (header_block_create_atask_list) {
            const header_there_subparagraphs = document.querySelectorAll('.header__there-subparagraphs')
            let currentActiveSubparagraph = null
            header_there_subparagraphs.forEach(function(subparagraphs) {
                subparagraphs.addEventListener('click', (enents) => {
                    enents.preventDefault()
                    document.querySelector('.header__blockCreateAtask').classList.add('the-list-is-open')
                    var parentLink = enents.target.parentElement
                    var parentLinkNode = parentLink.parentNode
                    if (currentActiveSubparagraph) {
                        currentActiveSubparagraph.classList.remove('hover')
                    }
                    parentLinkNode.classList.toggle('hover')
                    currentActiveSubparagraph = parentLinkNode
                })
            })
        }
    }

    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');
    
        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });
        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }
        function selectChoose() {
            let text = this.innerText, select = this.closest('.select'), currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
        }
    }; select();

    const all_actions_tab = document.getElementById('all-actions-tab')
    const filling_up_an_account_tab = document.getElementById('filling-up-an-account-tab')
    const delete_account_tab = document.getElementById('delete-account-tab')
    if (all_actions_tab) {
        all_actions_tab.addEventListener('click', (ev1) => {
            ev1.preventDefault();
            filling_up_an_account_tab.classList.remove('active-tab-info')
            delete_account_tab.classList.remove('active-tab-info')
            all_actions_tab.classList.add('active-tab-info')
            document.getElementById('delete-account-content').classList.remove('active-tab-content')
            document.getElementById('filling-up-an-account-content').classList.remove('active-tab-content')
            document.getElementById('all-actions-content').classList.add('active-tab-content')
        })
    }
    if (filling_up_an_account_tab) {
        filling_up_an_account_tab.addEventListener('click', (ev2) => {
            ev2.preventDefault();
            all_actions_tab.classList.remove('active-tab-info')
            delete_account_tab.classList.remove('active-tab-info')
            filling_up_an_account_tab.classList.add('active-tab-info')
            document.getElementById('all-actions-content').classList.remove('active-tab-content')
            document.getElementById('delete-account-content').classList.remove('active-tab-content')
            document.getElementById('filling-up-an-account-content').classList.add('active-tab-content')
        })
    }
    if (delete_account_tab) {
        delete_account_tab.addEventListener('click', (ev3) => {
            ev3.preventDefault();
            all_actions_tab.classList.remove('active-tab-info')
            filling_up_an_account_tab.classList.remove('active-tab-info')
            delete_account_tab.classList.add('active-tab-info')
            document.getElementById('all-actions-content').classList.remove('active-tab-content')
            document.getElementById('filling-up-an-account-content').classList.remove('active-tab-content')
            document.getElementById('delete-account-content').classList.add('active-tab-content')
        })
    }

    const cabinet_tabs_btn_settings = document.querySelector(".cabinet__tabs-button.settings")
    if (cabinet_tabs_btn_settings) {
        cabinet_tabs_btn_settings.addEventListener('click', function() {
            document.querySelector('.cabinet__btn-delete-profile').classList.add('show-btn-delete')
        })
    }

    function toggleInputTypeAndClass(inputId, buttonId) {
        const input = document.getElementById(inputId)
        const button = document.getElementById(buttonId)
        if (input.type === "text") {
            input.type = "password"
        } else {
            input.type = "text"
        }
        button.classList.toggle("active")
    }
    const old_password_button = document.getElementById("old-password-button")
    if (old_password_button) {
        old_password_button.addEventListener("click", function() {
            toggleInputTypeAndClass("old-password-field", "old-password-button")
        })
    }
    const new_password_button = document.getElementById("new-password-button")
    if (new_password_button) {
        new_password_button.addEventListener("click", function() {
            toggleInputTypeAndClass("new-password-field", "new-password-button")
        })
    }
    const repeat_new_password_button = document.getElementById("repeat-new-password-button")
    if (repeat_new_password_button) {
        repeat_new_password_button.addEventListener("click", function() {
            toggleInputTypeAndClass("repeat-new-password-field", "repeat-new-password-button")
        })
    }

    const show_map_btn = document.getElementById("show-map-btn")
    if (show_map_btn) {
        show_map_btn.addEventListener("click", function() {
            document.getElementById("vacancies").classList.toggle('open-map')
        })
    }
})

function dynamicAdapt() {
    // Dynamic Adapt v.1
    // HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
    // e.x. data-da="item, 2, 991"
    // Andrikanych Yevhen 2020
    // https://www.youtube.com/c/freelancerlifestyle
 
    "use strict";
 
    (function () {
       let originalPositions = [];
       let daElements = document.querySelectorAll('[data-da]');
       let daElementsArray = [];
       let daMatchMedia = [];
       //Заполняем массивы
       if (daElements.length > 0) {
          let number = 0;
          for (let index = 0; index < daElements.length; index++) {
             const daElement = daElements[index];
             const daMove = daElement.getAttribute('data-da');
             const daArray = daMove.split(',');
             const daPlace = daArray[1] ? daArray[1].trim() : 'last';
             const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
             if (daArray.length > 0) {
                daElement.setAttribute('data-da-index', number);
                //Заполняем массив первоначальных позиций
                originalPositions[number] = {
                   "parent": daElement.parentNode,
                   "index": indexInParent(daElement)
                };
                //Заполняем массив элементов 
                daElementsArray[number] = {
                   "element": daElement,
                   "destination": document.querySelector('.' + daArray[0].trim()),
                   "place": daPlace,
                   "breakpoint": daBreakpoint
                }
                number++;
             }
          }
          dynamicAdaptSort(daElementsArray);
 
          //Создаем события в точке брейкпоинта
          for (let index = 0; index < daElementsArray.length; index++) {
             const el = daElementsArray[index];
             const daBreakpoint = el.breakpoint;
             const daType = "max"; //Для MobileFirst поменять на min
 
             daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
             daMatchMedia[index].addListener(dynamicAdapt);
          }
       }
       //Основная функция
       function dynamicAdapt(e) {
          for (let index = 0; index < daElementsArray.length; index++) {
             const el = daElementsArray[index];
             const daElement = el.element;
             const daDestination = el.destination;
             const daPlace = el.place;
             const daBreakpoint = el.breakpoint;
             const daClassname = "_dynamic_adapt_" + daBreakpoint;
 
             if (daMatchMedia[index].matches) {
                //Перебрасываем элементы
                if (!daElement.classList.contains(daClassname)) {
                   let actualIndex = indexOfElements(daDestination)[daPlace];
                   if (daPlace === 'first') {
                      actualIndex = indexOfElements(daDestination)[0];
                   } else if (daPlace === 'last') {
                      actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                   }
                   daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                   daElement.classList.add(daClassname);
                }
             } else {
                //Возвращаем на место
                if (daElement.classList.contains(daClassname)) {
                   dynamicAdaptBack(daElement);
                   daElement.classList.remove(daClassname);
                }
             }
          }
          customAdapt();
       }
 
       //Вызов основной функции
       dynamicAdapt();
 
       //Функция возврата на место
       function dynamicAdaptBack(el) {
          const daIndex = el.getAttribute('data-da-index');
          const originalPlace = originalPositions[daIndex];
          const parentPlace = originalPlace['parent'];
          const indexPlace = originalPlace['index'];
          const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
          parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
       }
       //Функция получения индекса внутри родителя
       function indexInParent(el) {
          var children = Array.prototype.slice.call(el.parentNode.children);
          return children.indexOf(el);
       }
       //Функция получения массива индексов элементов внутри родителя 
       function indexOfElements(parent, back) {
          const children = parent.children;
          const childrenArray = [];
          for (let i = 0; i < children.length; i++) {
             const childrenElement = children[i];
             if (back) {
                childrenArray.push(i);
             } else {
                //Исключая перенесенный элемент
                if (childrenElement.getAttribute('data-da') == null) {
                   childrenArray.push(i);
                }
             }
          }
          return childrenArray;
       }
       //Сортировка объекта
       function dynamicAdaptSort(arr) {
          arr.sort(function (a, b) {
             if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
          });
          arr.sort(function (a, b) {
             if (a.place > b.place) { return 1 } else { return -1 }
          });
       }
       //Дополнительные сценарии адаптации
       function customAdapt() {
          const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
       }
    }());
} dynamicAdapt()

jQuery(document).ready(function($) {

    $('#chat-sidebar a').click(function (e) {
        e.preventDefault();
        $('#chat-sidebar a').removeClass('active');
        $(this).addClass('active');
        var el = $(this).attr('href');
        el = el.replace(/[^\#]*/, '');
        $('.chat__content').removeClass('show-sms');
        $(el).addClass('show-sms');
    });
});