document.addEventListener('DOMContentLoaded', function() {
    // Existing code to toggle hero image on click
    const heroImage = document.querySelector('#hero img');
    heroImage.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });

    // Smooth scroll for links with hashes
    $('a.nav-link').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Arrow toggle for collapsible elements
    $('.collapse').on('show.bs.collapse', function() {
        $(this).prev().find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }).on('hide.bs.collapse', function() {
        $(this).prev().find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    // // Theme toggle script
    // const themeToggleBtn = document.getElementById('themeToggle');
    // themeToggleBtn.onclick = function() {
    //     document.body.classList.toggle('dark-theme');
    //     themeToggleBtn.innerText = document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
    // };
});

// Scroll to top button functionality
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; 
}
