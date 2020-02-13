window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });


    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e){
              e.preventDefault();
              $('.contacts').eq(i).toggleClass('contacts_plus');
            });
        });
    }
    
    toggleSlide('.contacts_link_bottom');
    toggleSlide('.contacts_link');
    toggleSlide('.contacts_close');

    $('[data-modal="consultation"]').on('click',function(){
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal_close').on('click', function(){
        $('.overlay, #consultation').fadeOut();
    });

    $('#consultation form').validate({
        rules: {
            name: "required",
            phone: {
                required: true,
                minlength: 9
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, впишите свое имя",
            phone :{
                required: "Пожалуйста, впишите номер телефона",
                minlength: "Номер должен состояти минимум из {0} цифр"
            },
            email :{
                required: "Пожалуйста, впишите свой e-mail",
                email: "Ваш  e-mail адресс должен быть формата - name@domain.com"
            }
        }
    });

    $('input[name=phone]').mask("+ 48 (999) 999 999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
    
            $('form').trigger('reset');
        });
        return false;
      });

});