# WIX UX Prototyping Home Assignment / Moria Bros Tzur

### Overview
The project demonstrate new approach for the Editor’s ‘Add Panel’.
My solution introduce a new ‘Add Panel’ interface that contains three sections: 
1. Categories
2. Sub-Categories
3. My Cart - Provide alternative way for user to add elements from panel to stage and then drag & drop them on the stage. 

### Code Description
The solution designed in a way that the HTML file contain static elements, which will be populated with dynamic content stored in the js files once the website is loaded. Panel style is located in external CSS files that linked to the main HTML file. This way the solution is generic, meaning it is possible to add more categories, sub-categories or any other content related to the panel.

### Files 
- index.html - Added static DIV elements which will be populated with dynamic content by panel.js.
- panel_elements.js – Data structures that contains all required data: categories, sub-categories and more.
- panel.js - Contain the functions that create the content and define the behavior of ‘Add Panel’.
- stage.js - Contain the functions that allowed to drag and drop the chosen elements.
- panel.css - Panel style.
- stage.css - Basic style for the stage element so it will be possible to drag and drop on top of it.

### Assumptions
1. Left bar buttons open category name on hover which are hidden behind the ‘Add panel’ in open mode. Assignment scope include solution only for the ‘Add Button’, but not for the rest of the buttons. 
2. The elements in every sub-categories (buttons, images, dropdowns) look alike for simplicity, but each element can be modified with a different style by adding more feature design and CSS class accordingly.
3. Image implementation add the example image from the sub-category section to the cart, however it assumed that the actual behavior is to direct the user to intermediate pop-up (like Wix Editor) and then add the chosen image.
4. Currently, cart contains maximum 5 elements at a given time, however it can be configured to a different value easily.
5. Resize stage elements is not implemented.
6. Stage dropdown clone include only the main button and not the dropdown list for simplicity.
