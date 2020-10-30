import MiniTutorial from "mini-tutorial.js";
import "mini-tutorial.js/themes/slideshow.css";
import "mini-tutorial.js/themes/common.css";
import "mini-tutorial.js/themes/fontello/css/fontello.css";

import "./style.css";

window.addEventListener("load", () => {
    // mini-tutorial.js
    let mt = new MiniTutorial({
        tocStyle: "hamburger",
        sectionTitle: "#page-title"
    });

    mt.start();
});
