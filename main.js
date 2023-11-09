
//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  sizes.width/sizes.height,
  0.01,
  1000
);
const canvas = document.querySelector(".webgl");
var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);

var loader = new THREE.GLTFLoader();
var obj;
loader.load("../Images and svgs/3D/bmw_m3gtr/scene.gltf",function(gltf){
    obj = gltf.scene;
    obj.rotation.y += 0.01
    scene.add(gltf.scene);
});
scene.background = new THREE.Color(0xffffff)
var light = new THREE.PointLight(0xffffff,202,100)
//light x y z
light.position.set(3,70,-7)
//var light = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(light);
//camera x y z
camera.position.set(0,20.5,50)

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
animate();

//important for when windo resizes
window.addEventListener("resize", () => {
 sizes.width = window.innerWidth
 sizes.height = window.innerHeight

 camera.aspect = sizes.width/sizes.height
 renderer.setSize(sizes.width, sizes.height);
 camera.updateProjectionMatrix()
 animate()
});

THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
  // All textures are finished loading when loaded === total
  console.log(loaded)
  console.log(total)

};


const loop = () => {
    requestAnimationFrame(loop);
    scene.rotation.y += 0.005
}
loop()
