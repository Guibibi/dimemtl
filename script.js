AOS.init();

// vanilla JS
// init with element
var grid = document.querySelector(".grid");
var msnry = new Masonry(grid, {
  // options...
  itemSelector: ".grid-item",
  columnWidth: 400
});

// init with selector
var msnry = new Masonry(".grid", {
  // options...
});
