/*var coll = document.getElementsByClassName("question");

var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
     content.classList.toggle("active");
    
    
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}*/
function collapseAllOpenContent() {
  const colls = document.getElementsByClassName('question');
  for (const coll of colls) {
    if (coll.classList.contains('active')) {
      coll.classList.remove('active');
      toggleContent(coll.nextElementSibling);
    }
  }
}
function toggleContent(content) {
  if (content.style.display==="block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
const colls = document.getElementsByClassName('question');
for (const coll of colls) {
  coll.addEventListener('click', function() {
    if (!this.classList.contains('active')) {
      collapseAllOpenContent();
    }
    this.classList.toggle('active');
    toggleContent(this.nextElementSibling);
  });
}
