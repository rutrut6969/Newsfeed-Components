/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  








  
*/
function menuCom(arr) {
    // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 


    const menu = document.createElement('div');
    const list = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = arr[i];
        list.append(listItem);
    }
    // Add those items to the <ul>
    menu.append(list);

    menu.classList.add('menu')
        // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
    const menubtn = document.querySelector('.menu-button');

    function openMenu() {
        menu.classList.toggle('menu--open')
    }
    // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
    menubtn.addEventListener('click', openMenu);

    // Step 5: return the menu component.
    return menu;
}

// Step 6: add the menu component to the DOM.
const body = document.querySelector('body');
body.append(menuCom(menuItems));