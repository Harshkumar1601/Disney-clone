$(document).ready(function() {
    const carousel = $('.carousel');
    let sliders = [];
    let slideIndex = 0;

    const createSlide = () => {
        if (slideIndex >= movies.length) {
            slideIndex = 0;
        }

        let slide = $('<div>').addClass('slider');
        let imgElement = $('<img>').addClass('slider-img');
        let content = $('<div>').addClass('slide-content');
        let h1 = $('<h1>').addClass('movie-title').text(movies[slideIndex].name);
        let p = $('<p>').addClass('movie-des').text(movies[slideIndex].des);

        imgElement.attr('src', movies[slideIndex].image);

        content.append(h1);
        content.append(p);
        slide.append(imgElement);
        slide.append(content);
        carousel.append(slide);

        slideIndex++;
        sliders.push(slide);

        if (sliders.length) {
            sliders[0].css('margin-left', `calc(-${100 * (sliders.length - 2)}%  - ${30* (sliders.length - 2 )}px)`);
        }
    };

    for (let i = 0; i < 3; i++) {
        createSlide();
    }

    setInterval(createSlide, 3000);

    // Video Cards
    $('.video-card').mouseover(function() {
        $(this).children('video')[0].play();
    }).mouseleave(function() {
        $(this).children('video')[0].pause();
    });

  
    
});

