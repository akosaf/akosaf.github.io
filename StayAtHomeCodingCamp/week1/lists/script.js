/*
- Hozz létre egy tömböt, ami tartalmazza a saját neved,
valamint azon kívül néhány másik nevet is
- A forEach ciklus használatával add hozzá a
neveket egy listához (<ul>)
- A saját neved legyen félkövér

- Adj új tartalmat az oldal végéhez: a title legyen egy
fejlécben (pl. <h1>), a text pedig egy bekezdésben (<p>)
*/

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

let arr = ["Akos", "Dominika", "Robert", "Kristof", "Geza"];

arr.forEach((name) => {
    if (name == "Akos") {
        $('ul').append(`<li><b>${name}</b></li>`);
    } else {
        $('ul').append(`<li>${name}</li>`);
    }
});

$('main').append(`<h1>${additionalBlock.title}</h1>`);
$('main').append(`<p>${additionalBlock.text}</p>`);

