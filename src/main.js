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
      REGROWTH:  Revitalization and Utilization of Art Nouveau into Ideals 
        <div class="three-model">
          <a href="./A1/CadavreExquis1.png" target="_blank">
            <img src="./A1/CadavreExquis1.png" id="model1" alt="CadavreExquis1 Image"/>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./A1/CadavreExquis2.png" target="_blank">
              <img src="./A1/CadavreExquis2.png" alt="CadavreExquis2" />
            </a>
              <a href="./A1/CadavreExquis4.pdf" target="_blank">
                <img src="./A1/CadavreExquis4.png" alt="CadavreExquis4" />
              </a>
            </div>
              <div id="images-description">
                <div id="images">
                  <a href="./A1/CadavreExquis3.png" target="_blank">
                    <img src="./A1/CadavreExquis3.png" alt="CadavreExquis3" />
                  </a>
                  <a href="./A1/CadavreExquis5.pdf" target="_blank">
                    <img src="./A1/CadavreExquis5.png" alt="CadavreExquis5" />
                  </a>

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
