display_choice = document.getElementsByClassName("section-2-category");
display_options = document.getElementsByClassName("section-2-selector-options");
category_index = 0;
promotion_show = document.getElementsByClassName("promotion-content");
promotion_index = 0;
halloween_more = document.getElementsByClassName("more");
function show_selected(index){
    display_choice[category_index].removeAttribute("current_choice");
    display_options[category_index].removeAttribute("active");
    display_choice[index].setAttribute("current_choice","0");
    display_options[index].setAttribute("active","0");
    category_index = index;
}
function show_promotion(index){
    promotion_show[promotion_index].removeAttribute("shown");
    promotion_show[index].setAttribute("shown","0");
    promotion_index = index;
}
function show_more(classname){
    document.getElementsByClassName("show_more")[0].style.display="none";
    halloween_more[0].style.display ="flex";
}