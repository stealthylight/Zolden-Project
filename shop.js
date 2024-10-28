shop_variables=document.getElementsByClassName("shop-var");
pages=document.getElementsByClassName("page");
right_button = document.getElementById("slide-right");
left_button = document.getElementById("slide-left");
var index;
index=0;
for (let i = 0; i < pages.length; i++) {
    const element = pages[i];
    if(element.hasAttribute("current")){
        console.log(i+" Is the current page");
    }
}
function change_page(move){
    pages[index].removeAttribute("current");
    shop_variables[index].removeAttribute("current");
    index= index+move;
    if(index<0){
        index = shop_variables.length -1;
    }
    else if(index>=shop_variables.length){
        index = 0;
    }
    console.log("Current Page: " + index);
    pages[index].setAttribute("current","o");
    shop_variables[index].setAttribute("current","1");
}