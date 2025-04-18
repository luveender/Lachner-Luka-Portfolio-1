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

    <section id="projects2">
      <div id="project-row-3">
      REGROWTH:  Revitalization and Utilization of Art Nouveau into Ideals 
        </div>
          <div id="images-row">
            <a href="./A1/CadavreExquis1.png" target="_blank">
              <img src="./A1/CadavreExquis1.png" id="mainimage" alt="CadavreExquis1 Image"/>
              <div id="images-column">
                <a href="./A1/CadavreExquis2.png" target="_blank">
                  <img src="./A1/CadavreExquis2.png" alt="CadavreExquis2" />
                  <a href="./A1/CadavreExquis3.png" target="_blank">
                    <img src="./A1/CadavreExquis3.png" alt="CadavreExquis3" />
                  <a href="./A1/CadavreExquis4.pdf" target="_blank">
                    <img src="./A1/CadavreExquis4.png" alt="CadavreExquis4" />
                  <a href="./A1/CadavreExquis5.pdf" target="_blank">
                    <img src="./A1/CadavreExquis5.png" alt="CadavreExquis5" />
                  </div>
      </section>

    <section id="projects2">
      <div id="project-row-3">
      </a></li>
      INTEROP(ERABILITY): Creation and Analysis of Digital 3D Forms
        </div>
          <div id="images-row">
            <a href="./A2/Interop(erability)_01.pdf" target="_blank">
              <img src="./A2/Interop(erability)_01.png" id="mainimage" alt="CadavreExquis1 Image"/>
              <div id="images-column">
                <a href="./A2/Interop(erability)_02.pdf" target="_blank">
                  <img src="./A2/Interop(erability)_02.png" alt="CadavreExquis2" />
                  <a href="./A2/Interop(erability)_03.pdf" target="_blank">
                    <img src="./A2/Interop(erability)_03.png" alt="CadavreExquis4" />
                  <a href="./A2/Interop(erability)_04.pdf" target="_blank">
                    <img src="./A2/Interop(erability)_04.png" alt="CadavreExquis3" />
                  <a href="./A2/Interop(erability)_05.pdf" target="_blank">
                    <img src="./A2/Interop(erability)_05.png" alt="CadavreExquis5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="three-model">
          <div id="model1"></div>
        <div class="three-model">
          <div id="model2"></div>
        <div class="three-model">
          <div id="model3"></div>
        </section>

    <section id="projects2">
      <div id="project-row-3">
      </a></li>
      METAMORPHOSIS: Provokative Headpiece to Conceal Identity through Biological Camouflage
        </div>
          <div id="images-row">
            <a href="./A3/ObjectDesign_01.pdf" target="_blank">
              <img src="./A3/ObjectDesign_01.png" id="mainimage" alt="CadavreExquis1 Image"/>
              <div id="images-column">
                <a href="./A3/ObjectDesign_02.pdf" target="_blank">
                  <img src="./A3/ObjectDesign_02.png" alt="CadavreExquis2" />
                  <a href="./A3/ObjectDesign_03.pdf" target="_blank">
                    <img src="./A3/ObjectDesign_03.png" alt="CadavreExquis4" />
                  <a href="./A3/ObjectDesign_04.pdf" target="_blank">
                    <img src="./A3/ObjectDesign_04.png" alt="CadavreExquis3" />
                </section>

    <section id="projects2">
      <div id="project-row-3">
      </a></li>
      NYMPHAEA: Placemaking Based on Art Nouveau Ideals & Ecological Integration
        </div>
          <div id="images-row">
            <a href="./A4/PlaceMaking_01.pdf" target="_blank">
              <img src="./A4/PlaceMaking_01.png" id="mainimage" alt="CadavreExquis1 Image"/>
              <div id="images-column">
                <a href="./A4/PlaceMaking_02.pdf" target="_blank">
                  <img src="./A4/PlaceMaking_02.png" alt="CadavreExquis2" />
                  <a href="./A4/PlaceMaking_03.pdf" target="_blank">
                    <img src="./A4/PlaceMaking_03.png" alt="CadavreExquis4" />
                  <a href="./A4/PlaceMaking_04.png" target="_blank">
                    <img src="./A4/PlaceMaking_04.png" alt="CadavreExquis3" />
                  <a href="./A4/PlaceMaking_05.pdf" target="_blank">
                    <img src="./A4/PlaceMaking_05.png" alt="CadavreExquis5" />
                </section>

    <section id="projects2">
      <div id="project-row-3">
      </a></li>
      LILY LEAP: Game Design & Exhibition of Coursework
        </div>
          <div id="images-row">
            <a href="./A5/GameEngines_01.pdf" target="_blank">
              <img src="./A5/GameEngines_01.png" id="mainimage" alt="CadavreExquis1 Image"/>
              <div id="images-column">
                <a href="./A5/GameEngines_02.pdf" target="_blank">
                  <img src="./A5/GameEngines_02.png" alt="CadavreExquis2" />
                  <a href="./A5/GameEngines_03.pdf" target="_blank">
                    <img src="./A5/GameEngines_03.png" alt="CadavreExquis4" />
                  <a href="./A5/GameEngines_04.png" target="_blank">
                    <img src="./A5/GameEngines_04.png" alt="CadavreExquis3" />
                  <a href="./A5/GameEngines_05.pdf" target="_blank">
                    <img src="./A5/GameEngines_05.png" alt="CadavreExquis5" />
                </section>

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
    </a></li>
      <li>Email: ${data.contact.email}</li>
    </a></li>
      <li>Phone: ${data.contact.phone}</li>
    </a></li>
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
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
/*createThreeScene("#model4", "/3DModels/project4/head.obj");*/
/*createThreeScene("#model5", "/3DModels/3dprint3 - Copy");*/
