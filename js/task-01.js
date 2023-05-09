const category = document.querySelector("#categories");
const li = category.querySelectorAll(".item");

console.log(`Number of categories: ${li.length}`);

li.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const list = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${list}`);
});