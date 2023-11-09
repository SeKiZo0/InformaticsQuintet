
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
loader.load("Images and svgs/3D/bmw_f22_eurofighter/scene.gltf",function(gltf){
    obj = gltf.scene;
    obj.rotation.y += 0.01
    scene.add(gltf.scene);
    obj.position.x =0
});
scene.background = new THREE.Color(0xffffff)

const light = new THREE.DirectionalLight( 0xffffff, 5);
//var light = new THREE.PointLight(0xffffff,2500,100)
//light x y z
light.position.set(2,1,0.5)
light.castShadow = true; 
//var light = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(light);
//camera x y z
camera.position.set(0,1,5)

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

var rotation = 0
var shouldRotate = true

const loop = () => {
  if (rotation >= 4) {
    shouldRotate = false
  } else {
    requestAnimationFrame(loop);
    obj.rotation.y += 0.07
    rotation = rotation + 0.07
    
  }
    
}


canvas.addEventListener("click",() => { 
  loop()
})

