$(document).ready(function() {
    // Video Cards
    

    $('.card-container').each(function() {
        let containerDimensions = $(this).outerWidth();
        let nxtBtn = $(this).siblings('.nxt-btn');
        let preBtn = $(this).siblings('.prv-btn');

        nxtBtn.click(function() {
            $(this).siblings('.card-container').scrollLeft(containerDimensions - 200);
        });

        preBtn.click(function() {
            $(this).siblings('.card-container').scrollLeft(-containerDimensions + 200);
        });
    });

    // You can add more JavaScript code here for any additional functionality you need.
});
