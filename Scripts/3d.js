
//sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.01,
  1000
);
const canvas = document.querySelector(".webgl");
var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);


var loader = new THREE.GLTFLoader();
var obj;
loader.load("Images and svgs/3D/gaming_desktop_pc/scene.gltf", function (gltf) {
  obj = gltf.scene;
  obj.rotation.y += 5
  scene.add(gltf.scene);
  obj.position.x = 0
  console.log(obj.children[0].children[0].children[0].children)
});
scene.background = new THREE.Color(0xffffff)

const light = new THREE.DirectionalLight(0xffffff, 5);
//var light = new THREE.PointLight(0xffffff,2500,100)
//light x y z
light.position.set(2, 1, 0.5)
light.castShadow = true;
//var light = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(light);
//camera x y z
camera.position.set(0, 5, 15)


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

//important for when windo resizes
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height);
  camera.updateProjectionMatrix()
  animate()
});

THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
  // All textures are finished loading when loaded === total
  console.log(loaded)
  console.log(total)

};

var rotation = 0
var shouldRotate = true

const loop = () => {
  if (rotation >= 5) {
    shouldRotate = false
  } else {
    requestAnimationFrame(loop);
    obj.rotation.y += 0.07
    rotation = rotation + 0.07

  }

}

//Setting up anchors
let d = document;
let anchor1 = d.getElementById('Stephen');
let anchor2 = d.getElementById('Ross');
let anchor3 = d.getElementById('Rico');
let anchor4 = d.getElementById('Connor');
let anchor5 = d.getElementById('Morris');

canvas.addEventListener("click", onCanvasClick)

function onCanvasClick(event) {
  const rect = canvas.getBoundingClientRect();

  // Calculate mouse coordinates relative to the canvas
  const mouse = new THREE.Vector2();
  mouse.x = ((event.clientX - rect.left) / canvas.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / canvas.height) * 2 + 1;// Set a constant z-coordinate for the near/far clipping planes

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);



  const intersects = raycaster.intersectObjects(scene.children, true);
  //This is what happens when you click on a certain part of the model, it will scroll to the assigned person
  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object.parent.name;
    if (/Cube011/.test(clickedMesh) || /Cube012/.test(clickedMesh) || /Cube021/.test(clickedMesh) || /Cube020/.test(clickedMesh) || /Cube061/.test(clickedMesh) || /Cube047/.test(clickedMesh) || /aorus/.test(clickedMesh) || /metal-mesh/.test(clickedMesh)) {
      console.log('case')
      location.href = "#Stephen"
    }
    if (/Cube088/.test(clickedMesh) || /Cube066/.test(clickedMesh) || /Cube065/.test(clickedMesh) || /Cube064/.test(clickedMesh) || /Cube063/.test(clickedMesh) || /Plane/.test(clickedMesh) || /BezierCurve004/.test(clickedMesh)) {
      console.log('mouse')
      location.href = "#Ross"
    }
    if (/Cube044/.test(clickedMesh) || /Cylinder004/.test(clickedMesh) || /Cube043/.test(clickedMesh)) {
      console.log('Speaker')
      location.href = "#Rico"
    }
    if (/Object/.test(clickedMesh)) {
      console.log('Keyboard')
      location.href = "#Connor"
    }
    if (/MY_SCREEN/.test(clickedMesh)) {
      console.log('Screen')
      location.href = "#Morris"
    }
    else {
      console.log(clickedMesh)
    }
  }
}



//declaring all the parts on the pc
