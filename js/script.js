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
    };
    
    toggleSlide('.contacts_link_bottom');
    toggleSlide('.contacts_link');
    toggleSlide('.contacts_close');
    

    // $(hamburger).each(function() {
    //     $(this).on('click', function(e){
    //       e.preventDefault();
    //       $('.contacts').toggleClass('contacts_ham');
    //     });
    // });

});