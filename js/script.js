/// <reference types="jquery" />

$(function() {
    var navbar = document.getElementById('navbar');
    var aboutMe = document.getElementById('central__name');
    var skills = document.getElementById('skills');
    var projects = document.getElementById('projects');
    var work = document.getElementById('work');
    var contact = document.getElementById('contact');
    
    var shown = true;
    
    const mediaQuery = window.matchMedia(`(max-width: ${remToPx(50)}px)`);
    
    lightbox.option({
        'resizeDuration': 0,
        'imageFadeDuration': 0,
        'fadeDuration': 0,
        'wrapAround': false
    });
    
    function remToPx(rem) {
        // Get the computed font size of the root element
        var fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        // Multiply the rem value by the computed font size
        return rem * fontSize;
    };

    window.onresize = function (){
        if (mediaQuery.matches) {
            $('#navbar__index').hide()
        }else{
            $('#navbar__index').show()
        }
    };

    $('#about-me-link').on('click', function(){
        scrollTo(aboutMe);
    });

    $('#skills-link').on('click', function(){
        scrollTo(skills);
    });

    $('#projects-link').on('click', function(){
        scrollTo(projects);
    });

    $('#work-link').on('click', function(){
        scrollTo(work);
    });

    $('#contact-link').on('click', function(){
        scrollTo(contact);
    });

    $('#navbar__name').on('click', function(){
        toggleNav();
    });

    toggleNav();

    function toggleNav(){
        if(mediaQuery.matches){
            if(shown){
                $('#navbar__index').hide()
            }else{
                $('#navbar__index').show()
            }
            shown = !shown
        }
    };

    function scrollTo(element) {
        var navbarRect = navbar.getBoundingClientRect();
        var elementRect = element.getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var targetScrollTop = elementRect.top + scrollTop - navbarRect.height

        window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
        });
    };
});