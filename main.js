const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item


function selectItem(e) {
    //add border to current tab
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //grab content item from dom

    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //add show class
    tabContentItem.classList.add('show');
}

// function selectContent(e) {
//     this.classList.add('show');
// }
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// tabContentItems.forEach(item => {
//     item.addEventListener('click', selectItem);
// });

tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


// const tabItems = document.querySelectorAll('.tab-item');
// const tabContentItems = document.querySelectorAll('.tab-content-item');

// // Select tab content item
// function selectItem(e) {
//     // Remove all show and border classes
//     removeBorder();
//     removeShow();
//     // Add border to current tab item
//     this.classList.add('tab-border');
//     // Grab content item from DOM
//     const tabContentItem = document.querySelector(`#${this.id}-content`);
//     // Add show class
//     tabContentItem.classList.add('show');
// }

// // Remove bottom borders from all tab items
// function removeBorder() {
//     tabItems.forEach(item => {
//         item.classList.remove('tab-border');
//     });
// }

// // Remove show class from all content items
// function removeShow() {
//     tabContentItems.forEach(item => {
//         item.classList.remove('show');
//     });
// }

// // Listen for tab item click
// tabItems.forEach(item => {
//     item.addEventListener('click', selectItem);
// });
