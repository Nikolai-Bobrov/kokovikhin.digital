(function () {
    "use strict";

    const cards = document.querySelectorAll('.car-card');
    if(cards != null){
        cards.forEach((card) => {
            card.addEventListener("click", function () {
                let href = card.querySelector('.car-card__title').href;
                window.location = href;
            });
        });
    }

    new AirDatepicker('#date', {
        range: true,
        multipleDatesSeparator: ' - '
    });


})();