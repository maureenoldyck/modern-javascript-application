const accordionFunction = (selector, collaps) => {

    document.querySelector(selector).addEventListener("click", () => {
        document.querySelector(selector).classList.toggle("active");
        if (document.querySelector(selector).classList.contains("active")) {
            collaps.style.maxHeight = "200px";
        } else {
            collaps.style.maxHeight = 0;
        }
    });

};

export { accordionFunction };