/*
            Panel Categories And Elements
*/
var CONST = {
    IMG: "Image",
    BTN: "Button",
    DD: "Dropdown",
    MAX_CART_ELEMENTS: 5
}

var CATEGORIES = [
    {
        category_name: CONST.IMG,
        subcategories: ["My Uploads", "Image Collections", "My Social Images"],
    },
    {
        category_name: CONST.BTN,
        subcategories: ["Themed Buttons", "Text Buttons", "Icon Buttons"],
    },
    {
        category_name: CONST.DD,
        subcategories: ["Dropdown Text", "Dropdown Menu"],
    },
];

var ADD_TO_CART_ICON = {
    icon: "<i class='fas fa-plus-circle add-to-cart-icon'></i>",
    default_class: "fas fa-plus-circle",
    class: "fas fa-plus-circle add-to-cart-icon",
    class_img: "fas fa-plus-circle add-to-cart-icon-img"
}

var TRASH_ICON = {
    class: "fas fa-trash-alt trashIcon"
}

var BTN_ELEMENTS = {
    "Themed Buttons": {
        class: "themedBTN-design",
        elements_content: [
            "Button",
            "Button",
            "Button",
            "Button"
        ]
    },
    "Text Buttons": {
        class: "textBTN-design",
        elements_content: [
            "Good Luck",
            "GO",
            "Click On Me",
            "Contact Us"
        ]
    },
    "Icon Buttons": {
        class: "iconBTN-design",
        elements_content: [
            "<i class='fas fa-bone'></i>",
            "<i class='fas fa-magic mr-1'></i>",
            "<i class='fas fa-star mr-1'></i>",
            "<i class='fab fa-angellist'></i>",
            "<i class='fas fa-bicycle'></i>"
        ]
    }
}

var IMG_ELEMENTS = {
    "My Uploads": {
        class: "upload-image-design",
        elements_content: [
            {
                img: {
                    class: "img-size",
                    src: "assets/img/kipi_dance_pink.gif"
                },
                paragraph: {
                    title: "My Images Uploads",
                    text: "Upload and add your own images to your site"
                }
            }
        ]
    },
    "Image Collections": {
        class: "collections-image-design",
        elements_content: [
            {
                img: {
                    class: "img-size",
                    src: "assets/img/kipi_dance_pink.gif"
                },
                paragraph: {
                    title: "Free WIX Images",
                    text: "Beautiful free images to use on your site"
                }
            },
            {
                img: {
                    class: "img-size",
                    src: "assets/img/kipi_dance_pink.gif"
                },
                paragraph: {
                    title: "Stock Images",
                    text: "High quality images to purchase and own"
                }
            }
        ]
    },
    "My Social Images": {
        class: "social-image-design",
        elements_content: [
            {
                img: {
                    class: "img-size",
                    src: "assets/img/kipi_dance_pink.gif"
                },
                paragraph: {
                    title: "My Facebook",
                    text: "Use images from your Facebook on your site"
                }
            },
            {
                img: {
                    class: "img-size",
                    src: "assets/img/kipi_dance_pink.gif"
                },
                paragraph: {
                    title: "My Instagram",
                    text: "Add beautiful images from your Instagram "
                }
            }
        ]
    }
}

var DD_ELEMENTS = {
    "Dropdown Text": {
        class: "dropdown-text",
        elements_content: [
            {
                btn: {
                    class: "dropbtn",
                    content: [
                        "Menu",
                        "<i class='fa fa-caret-down menu-arrow'></i>"
                    ]
                },
                dd_list: {
                    class: "dropdown-content",
                    content: [
                        "Home",
                        "Gallery",
                        "About Us",
                    ]
                }
            },

        ]
    },
    "Dropdown Menu": {
        class: "dropdown-Menu",
        elements_content: [
            {
                btn: {
                    class: "dropbtn dropbtn-menu",
                    content: [
                        "<i class='fas fa-bars'></i>"
                    ]
                },
                dd_list: {
                    class: "dropdown-content",
                    content: [
                        "Home",
                        "Gallery",
                        "About Us",
                    ]
                }
            },
            {
                btn: {
                    class: "dropbtn dropbtn-menu",
                    content: [
                        "<i class='fas fa-ellipsis-v'></i>"
                    ]
                },
                dd_list: {
                    class: "dropdown-content",
                    content: [
                        "<i class='fas fa-home'></i>Home",
                        "<i class='far fa-images'></i>Gallery",
                        "<i class='fas fa-info-circle'></i>About Us",
                    ]
                }
            },

        ]
    },
    
}