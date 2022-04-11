// Place your DOM creation code here
window.onload = function() {
    const main = document.createElement("main");
    const section = document.createElement("section");
    main.appendChild(section);
    
    const header = document.createElement("h1");
    const header_text = document.createTextNode("Homework 01");
    header.appendChild(header_text);
    section.appendChild(header);

    const p = document.createElement("p");
    const p_text = document.createTextNode("For this homework, I want you to recreate this "+
    "HTML page using JavaScript and the DOM API. This means, the HTML should have a blank " +
    "body and minimal head. Once the page loads, use JavaScript to recreate all the " +
    "elements from the original page.");
    p.appendChild(p_text);
    section.appendChild(p);

    const p2 = document.createElement("p");
    const p2_text = document.createTextNode("To make it fun, and maybe a bit tricky, I've " +
    "added several types of elements. Some elements are pretty simple like these ");

    const code = document.createElement("code");
    const code_text = document.createTextNode("\<p\>")
    code.appendChild(code_text);

    const p2_text2 = document.createTextNode(" tags. Others are more going to require extra attributes " +
    "or mixing text nodes with element nodes.");


    p2.appendChild(p2_text);
    p2.appendChild(code);
    p2.appendChild(p2_text2);

    section.appendChild(p2);
    

    document.body.appendChild(section);

    const aside = document.createElement("aside");

    const img = document.createElement("img");
    img.src = ("assets/mario.png");
    img.alt = ("Mario");
    aside.appendChild(img);

    const blockquote = document.createElement("blockquote");
    const blockquote_text = document.createTextNode("Mario says \"Wahoo!\" to homework")
    blockquote.appendChild(blockquote_text);
    aside.appendChild(blockquote);

    const audio = document.createElement("audio");
    audio.controls = ("true");
    audio.autoplay = ("false");
    audio.src = ("assets/Super Mario Bros. medley.mp3");
    aside.appendChild(audio);

    document.body.appendChild(aside);

    const footer = document.createElement("footer");
    const footer_text = document.createTextNode("Rachel Mettler - UI Front End - Last Modified: 04/10/2022")
    footer.appendChild(footer_text);

    document.body.appendChild(footer);
}