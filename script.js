document.addEventListener('DOMContentLoaded', function() {
    // Existing code to toggle hero image on click
    const heroImage = document.querySelector('#hero img');
    heroImage.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });


    // Arrow toggle for collapsible elements
    $('.collapse').on('show.bs.collapse', function() {
        $(this).prev().find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }).on('hide.bs.collapse', function() {
        $(this).prev().find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    function animateProgressBar(pb) {
        if (!$(pb).hasClass('animated')) {
            $(pb).addClass('animated');
            $(pb).css('width', $(pb).attr('aria-valuenow') + '%');
        }
    }

    $(window).scroll(function() {
        $('.progress-bar').each(function() {
            if (isScrolledIntoView(this)) {
                animateProgressBar(this);
            }
        });
    });

    function isScrolledIntoView(elem) {
        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();
        let elemTop = $(elem).offset().top;
        let elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
});


// Smooth scrolling for nav links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
