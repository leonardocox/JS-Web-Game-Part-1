function newImage(src, left, bottom) {
  let element = document.createElement("img");
  element.src = src;
  element.style.position = "fixed";
  element.style.left = left;
  element.style.bottom = bottom;
  document.body.append(element);
  return element;
}

newImage("assets/green-character.gif", "100px", "100px");

newImage("assets/pine-tree.png", "450px", "200px");

newImage("assets/tree.png", "200px", "300px");

newImage("assets/pillar.png", "350px", "100px");

newImage("assets/crate.png", "150px", "200px");

newImage("assets/well.png", "500px", "425px");

function newItem(element) {
  element.addEventListener("dblclick", function () {
    element.remove();
  });
  return element;
}

newItem(newImage("assets/sword.png", "500px", "405px"));

newItem(newImage("assets/sheild.png", "165px", "185px"));

newItem(newImage("assets/staff.png", "600px", "100px"));
