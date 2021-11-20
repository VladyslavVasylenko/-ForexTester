const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

const list1 = document.getElementById('hidden1');
const list2 = document.getElementById('hidden2');
const list3 = document.getElementById('hidden3');

link1.addEventListener('click', function (e) {
  e.preventDefault();
  list1.classList.toggle("show");
});

link2.addEventListener('click', function (e) {
  e.preventDefault();
  list2.classList.toggle("show");
});

link3.addEventListener('click', function (e) {
  e.preventDefault();
  list3.classList.toggle("show");
});
