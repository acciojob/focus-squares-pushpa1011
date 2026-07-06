//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {

    square.addEventListener("mouseenter", () => {

        squares.forEach((box) => {

            if (box !== square) {
                box.style.backgroundColor = "#6F4E37"; // Coffee
            } else {
                box.style.backgroundColor = "#E6E6FA"; // Lavender
            }

        });

    });

    square.addEventListener("mouseleave", () => {

        squares.forEach((box) => {
            box.style.backgroundColor = "#E6E6FA";
        });

    });

});