import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const fall311 = [
  "./fall311/statue1.png",
  "./fall311/statue2.png",
  "./fall311/statue3.png",
  "./fall311/statue4.png",
];

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Model 1
        <div class="three-model">
          <a href="https://example.com/page1" target="_blank">
            <img src="./houseDrawings/house1.jpg" id="model1" alt="Model 1 Image"/>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="https://example.com/page1" target="_blank">
              <img src="./cubeDrawings/cube1.webp" alt="cube1" />
            </a>
            <a href="https://example.com/page2" target="_blank">
              <img src="./cubeDrawings/cube2.webp" alt="cube2" />
            </a>
            <a href="https://example.com/page3" target="_blank">
              <img src="./cubeDrawings/cube3.webp" alt="cube3" />
            </a>
            <a href="https://example.com/page4" target="_blank">
              <img src="./cubeDrawings/cube4.webp" alt="cube4" />
            </a>
          </div>

      ${/*
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
    </section>
    */""}

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
