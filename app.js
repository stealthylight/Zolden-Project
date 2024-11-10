function display_menu(){
    x=document.getElementById("menu-1");
    if(x.style.display==="block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}
// Get access To the selection man-woman
selection_genre = document.getElementById("selection").children; //array[0,1]: 0 = men | 1 = women
// Get access to the store man-woman
shop = document.getElementsByClassName("shop-var"); // array[0,1]: 0 = men | 1 = women
current_genre = 0;
var page,num_page;
page_n = 0;
change_genre(0);

//Function to change genre
function change_genre(index){
    // Before
    selection_genre[current_genre].removeAttribute("current-genre");
    shop[current_genre].removeAttribute("current");
    
    //After
    current_genre = index;
    page_n = 0;
    selection_genre[current_genre].setAttribute("current-genre","o");
    shop[current_genre].setAttribute("current",0);
    show();
    num_page = ceil(shop[current_genre].children.length,8);
    add_pages(num_page);
    page = document.getElementsByClassName("page");
}

function add_pages(len){
    a = '<div id="slide-left" onclick="move(-1)"><a href="#container-right-below">&lt;</a></div>';
    a+='<span class="page" current="5"></span>';
    for(let i=0;i<len-1;i++){
        a += '<span class="page"></span>';
    }
    a += '<div id="slide-right" onclick="move(1)"><a href="#container-right-below">&gt;</a></div>';
    document.getElementById("container-right-below-slide").innerHTML=a;
}

function show(){
    for(let i=0;i<shop[current_genre].children.length;i++){
        if(i>=page_n*8 && i<(page_n + 1)*8){
            shop[current_genre].children[i].style.display = "flex";
        }
        else{
            shop[current_genre].children[i].style.display = "none";
        } 
    }
}

function move(index){
    page[page_n].removeAttribute("current");
    page_n = (page_n + index + num_page)%num_page;
    page[page_n].setAttribute("current","0");
    show();
}

function ceil(m,n){
    console.log('m: ',m,' ,n: ',n);
    if(m%n>0){
        return parseInt(m/n)+1;
    }
    return m/n;
}