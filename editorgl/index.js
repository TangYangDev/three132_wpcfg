const THREE = require('./libs/index');

let camera, scene, renderer;
let geometry, material, mesh;

//初始化渲染场景
function initRenderer() {
    //antialias 是否开启反锯齿，设置为true开启
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
        .getElementById('test1')
        .appendChild(renderer.domElement);
}

//初始化相机
function initCamera() {
    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / innerHeight,
        0.01,
        100
    );
    camera.position.z = 1;
}

//初始化场景
function initScene() {
    scene = new THREE.Scene();
}

//初始化几何体
function initGeometry() {
    geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

//渲染
function render() {
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
}

window.onload = () => {
    initRenderer();
    initCamera();
    initScene();
    initGeometry();
    render();
};
