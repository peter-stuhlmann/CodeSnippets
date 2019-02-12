// e.g. add a span to the site title of your Wordpress page and style individual letters

function add_a_span_to_a_part_of_a_word_with_javascript() {
    var str = document.querySelector("#site-title").innerHTML;
    var title = str.slice(0, 6);
    var hotpink = str.slice(6, 15);
    document.querySelector("#site-title").innerHTML = title + '<span>' + hotpink + '</span>';
}
add_a_span_to_a_part_of_a_word_with_javascript()
