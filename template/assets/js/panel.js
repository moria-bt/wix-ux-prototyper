/*
            "Add Panel" Setup
*/


window.onload = function() {
    add_categories(CATEGORIES, CONST.IMG);
    add_panel_to_leftbar("leftbar-item-add", open_add_panel);
    allow_drop(document.getElementsByClassName("stage")[0]);
};


/*
            Category Section: Initial Setup 
*/


function add_categories(categories, default_category) {
    var icon_class = "fas fa-chevron-right fa-xs";
    var ul = document.getElementById("categories").getElementsByTagName("ul")[0];
    for (var i = 0; i < categories.length; i++) {
        var span = document.createElement("span");
        span.innerText = categories[i].category_name;
        var icon = document.createElement("i");
        icon.setAttribute("class", icon_class);
        var li = document.createElement("li");
        li.appendChild(span).appendChild(icon);
        li.addEventListener("click", update_subcategory_section);
        li.addEventListener("mouseover", update_subcategory_section);
        if (categories[i].category_name == default_category) {
            mark_category(li);
            show_subcategories_title(default_category);
            show_subcategories(default_category);
        }
        ul.appendChild(li);
    }
}

function mark_category(element) {
    var ul = document.getElementById("categories").getElementsByTagName("ul")[0];
    var children = ul.children;
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("selected_category");
    }
    while (element.tagName != "LI") {
        element = element.parentNode;
    }
    element.classList.add("selected_category");
}


/*
            Subcategory Section: Dispaly Category Elements
*/


function update_subcategory_section(event) {
    var category_name = event.target.innerText;
    if (!category_name) {
        category_name = event.target.parentNode.innerText; 
    }
    mark_category(event.target)
    show_subcategories_title(category_name);
    show_subcategories(category_name);
}

function show_subcategories_title(category_name) {;
    var span = document.getElementById("sub-categories").getElementsByTagName("span")[0];
    if (["A", "E", "I", "O", "U"].includes(category_name[0])) {
        span.innerText = "Add an " + category_name;
    }
    else {
        span.innerText = "Add a " + category_name;
    }
}

function show_subcategories(category_name) {   
    var ul = document.getElementById("sub-categories").getElementsByTagName("ul")[0];   
    hide_subcategories(ul);
    create_subcategories(ul, category_name);
}

function create_subcategories(ul, category_name) {
    if (is_category_exist(category_name)){
        show_subcategory(category_name);
        return;
    }
    var subcategories = get_subcategories(category_name);
    for (var i = 0; i < subcategories.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", category_name+"-display");
        var span = document.createElement("span");
        span.innerText = subcategories[i];
        var hr = document.createElement("hr");
        var elements_div = document.createElement("div");
        var elements;
        switch(category_name) {
            case CONST.IMG:
                elements = create_images(subcategories[i]);
                break;
            case CONST.BTN:
                elements = create_buttons(subcategories[i]);
                break;
            case CONST.DD:
                elements = create_dropdowns(subcategories[i]);
                break;
        }
        for (var j = 0; j < elements.length; j++) {
            elements_div.appendChild(elements[j]);
        }
        li.appendChild(span);
        li.appendChild(hr);
        li.appendChild(elements_div);
        ul.appendChild(li);
    }
}

function get_subcategories(category_name) {
    for (var i = 0; i < CATEGORIES.length; i++) {
        if (CATEGORIES[i].category_name == category_name) {
            return CATEGORIES[i].subcategories;
        }
    }
}


/*
            Subcategory Section: Elements Creation
*/


function create_buttons(subcategory_name) {
    var buttons = [];
    var btn_settings = BTN_ELEMENTS[subcategory_name];
    var buttons_content = btn_settings.elements_content;
    for (var i = 0; i < buttons_content.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("class", btn_settings.class);
        btn.innerHTML = buttons_content[i] + ADD_TO_CART_ICON.icon;
        var add_icon = get_add_icon(btn);
        add_icon.addEventListener("click", add_element_to_cart);
        btn.addEventListener("mouseover", show_add_icon);
        btn.addEventListener("mouseout", hide_add_icon);
        buttons.push(btn);
    }
    return buttons;
}

function create_images(subcategory_name) {
    var images = [];
    var img_icon_class = "fas fa-chevron-right fa-md";
    var img_settings = IMG_ELEMENTS[subcategory_name];
    var images_content = img_settings.elements_content;
    for (var i = 0; i < images_content.length; i++) {
        var img_div = document.createElement("div");
        img_div.setAttribute("class", img_settings.class);
        var img = document.createElement("img");
        img.setAttribute("class", images_content[i].img.class);
        img.setAttribute("src", images_content[i].img.src);
        var add_icon = document.createElement("i");
        add_icon.setAttribute("class", ADD_TO_CART_ICON.class_img);
        add_icon.addEventListener("click", add_element_to_cart);
        var paragraph = document.createElement("p");
        var title = "<span>" + images_content[i].paragraph.title + "</span>";
        paragraph.innerHTML = title + images_content[i].paragraph.text;
        var icon = document.createElement("i");
        icon.setAttribute("class", img_icon_class);
        img_div.appendChild(img);
        img_div.appendChild(add_icon);
        img_div.appendChild(paragraph);
        img_div.appendChild(icon);
        img_div.addEventListener("mouseover", show_add_icon);
        img_div.addEventListener("mouseout", hide_add_icon);
        images.push(img_div);

    }
    return images;
}

function create_dropdowns(subcategory_name) {
    var dropdowns = [];
    var dd_settings = DD_ELEMENTS[subcategory_name];
    var dropdowns_content = dd_settings.elements_content;
    for (var i = 0; i < dropdowns_content.length; i++) {
        // create dd button
        var dd = document.createElement("div");
        dd.setAttribute("class", dd_settings.class);
        var btn = document.createElement("button");
        btn.setAttribute("class", dropdowns_content[i].btn.class);
        btn.innerHTML = dropdowns_content[i].btn.content.join("") + ADD_TO_CART_ICON.icon;
        var add_icon = get_add_icon(btn);
        add_icon.addEventListener("click", add_element_to_cart);
        btn.addEventListener("mouseover", show_add_icon);
        btn.addEventListener("mouseout", hide_add_icon);
        // create dd options
        var dd_list = document.createElement("div");
        dd_list.setAttribute("class", dropdowns_content[i].dd_list.class);
        for (var j = 0; j < dropdowns_content[i].dd_list.content.length; j++) {
            var dd_option = document.createElement("a");
            dd_option.innerHTML = dropdowns_content[i].dd_list.content[j];
            dd_option.setAttribute("href", "#");
            dd_list.appendChild(dd_option);
        }
        dd.appendChild(btn);
        dd.appendChild(dd_list);
        dropdowns.push(dd);
    }
    return dropdowns;
}


/*
            Subcategory Section: Show/Hide Subcategories If Exists
*/


function is_category_exist(category_name) {
    var list_items_counter = document.getElementsByClassName(category_name + "-display");
    if (list_items_counter.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function hide_subcategories(ul) {
    var list_items = [];
    list_items = ul.children;
    for (var i = 0; i < list_items.length; i++) {
        list_items[i].style.display = "none";
    }
}

function show_subcategory(category_name) {
    var list_items = [];
    list_items = document.getElementsByClassName(category_name + "-display");
    for (var i = 0; i < list_items.length; i++) {
        list_items[i].style.display = "block";
    }
}


/*
            Subcategory Section: Add-To-Cart Icon
*/


function get_add_icon(element) {
    var icon_parent;
    switch (element.tagName) {
        case "LI":
        case "BUTTON":
            icon_parent = element;
            break;
        default:
            icon_parent = element.parentElement;
            break;
    }
    return icon_parent.getElementsByClassName(ADD_TO_CART_ICON.default_class)[0];
}

function show_add_icon(event) {
    var element_chosen_icon = get_add_icon(event.target);
    if (element_chosen_icon) {
        element_chosen_icon.style.visibility = 'visible';
    }
}

function hide_add_icon(event) {
    var element_chosen_icon = get_add_icon(event.target);
    if (element_chosen_icon) {
        element_chosen_icon.style.visibility = 'hidden';
    }
}


/*
            Cart Section: Add Element From Subcategory To Cart 
*/


function add_element_to_cart(event) {
    var ul = document.getElementById("my-cart").getElementsByTagName("ul")[0];
    if (ul.children.length < CONST.MAX_CART_ELEMENTS){
        var li = document.createElement("li");
        var element = strip_element(event.target.parentNode);
        var trash_btn = document.createElement("i");
        trash_btn.setAttribute("class", TRASH_ICON.class);
        trash_btn.setAttribute("title", "Delete from My Cart");
        trash_btn.addEventListener("click", delete_element_from_cart);
        var hr = document.createElement("hr");
        li.appendChild(element);
        li.appendChild(trash_btn);
        li.appendChild(hr);   
        ul.appendChild(li);
        update_cart_count(true, 1);
    }
}

function strip_element(element) {
    var stripped_element = element.cloneNode(true);
    switch (element.tagName) {
        case "BUTTON":
            var add_icon = get_add_icon(stripped_element);
            stripped_element.removeChild(add_icon);
            break;
        default:
            stripped_element = stripped_element.getElementsByTagName("img")[0];
            stripped_element.classList.remove("img-size");
            stripped_element.classList.add("img-size-stage");
    }
    return stripped_element;
}

function delete_element_from_cart(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    update_cart_count(false, 1);
}

function update_cart_count(is_element_added, number_of_elements_added) {
    var counter_span = document.getElementById("my-cart").getElementsByTagName("span")[1];
    var current_count = parseInt(counter_span.innerText[1]);
    if (is_element_added) {
        current_count = current_count + number_of_elements_added; 
    }
    else {
        current_count = current_count - number_of_elements_added; 
    }
    counter_span.innerText = "(" + current_count + "/5)";
}


/*
            Cart Section: Add Element From Cart To Stage 
*/

var STAGE_ID_COUNTER = 0;

function add_elements_to_stage() {
    var stage = document.getElementsByClassName("stage")[0];
    var ul = document.getElementById("my-cart").getElementsByTagName("ul")[0];
    var elements = ul.children;
    for (var i = 0; i < elements.length; i++){
        var stage_element = elements[i].childNodes[0].cloneNode(true);
        STAGE_ID_COUNTER++;
        stage_element.setAttribute("id", "stage_element" + STAGE_ID_COUNTER);
        stage_element.classList.add("drop-elements");
        stage_element.setAttribute("draggable","true");
        stage_element.setAttribute("ondragstart","drag(event)");
        stage.appendChild(stage_element);
    }
    update_cart_count(false, elements.length);
    ul.innerHTML = "";
    close_add_panel();
}


/*
            Panel: Register "Add Panel" to Leftbar
*/


function add_panel_to_leftbar(btn_class, open_panel_function) {
    var leftbar_btn = document.getElementsByClassName(btn_class)[0];
    leftbar_btn.addEventListener("click", open_panel_function);
}


/*
            Panel: Open/Close "Add Panel"
*/


function close_add_panel() {
    var add_btn = document.getElementsByClassName("leftbar-item-add")[0];
    add_btn.style.removeProperty("width");
    var add_btn_text = add_btn.getElementsByClassName("item-text")[0];
    add_btn_text.style.removeProperty("display");
    var add_btn_img = add_btn.getElementsByTagName("img")[0];
    add_btn_img.style.removeProperty("filter");
    document.getElementById("panel").style.visibility="hidden";
}

function open_add_panel(event) {
    var add_btn = document.getElementsByClassName("leftbar-item-add")[0];
    add_btn.style.width = "48px";
    var add_btn_text = add_btn.getElementsByClassName("item-text")[0];
    add_btn_text.style.display = "none";
    var add_btn_img = add_btn.getElementsByTagName("img")[0];
    add_btn_img.style.filter = "var(--leftbar-icon-hover-filter--add)";
    document.getElementById("panel").style.visibility="visible";
}