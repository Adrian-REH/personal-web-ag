const { animate } = require("@angular/animations");

let mauseX= 0;
let mauseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe;


init();
initGlobe();
onWindowResize();
animate();

function init() {
    render = new THREE.WebGLRenderer({ antialias: true });
    render.setPixelRatio(window.devicePixelRatio);
    render.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(render.domElement);
    
    scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    scene.background = new THREE.Color(0x040d21);

    camara = new THREE.PerspectiveCamara();
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();


    var dLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camara.add(dLight);

    var dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
    dLight1.position.set(-200, 500, 200);
    camara.add(dLight1);

    var dLight2 = new THREE.DirectionalLight(0x8566cc, 0.5);
    dLight2.position.set(-200, 500, 200);
    camara.add(dLight2);

    camara.position.z = 400;
    camara.position.x = 0;
    camara.position.y = 0;

    scene.add(camara);

    scene.fog = new THREE.Fog(0x535ef3, 400, 2000);

    controls = new OrbitControls(camara, render.domElement);
    controls.enableDamping = true;
    controls.dynamicDampingFactor = 0.1;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1;
    controls.autoRotate = false;

    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolaraNGLE = Math.PI - (Math.PI/ 3);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    //Que lin
}

function initGlobe() {
    Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: false,
    });

    Globe.rotateY(-Math.PI *(5 / 2));
    Globe.rotateX(-Math.PI / 6);
    const globeMaterial = Globe.globeMaterial();
    globeMaterial.color = new THREE.Color(0x3a227a);
    globeMaterial.emissive = new THREE.Color(0x220038);
    globeMaterial.emmisiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;

    scene.add(Globe);
}

function onMauseMove(event) {
    mauseX = event.clientX - windowHalfX;
    mauseY = event.clientY - windowHalfY;
}
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    render.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    camara.position.x += Math.abs(mauseX) <= windowHalfX/2? (mauseX/2 - camara.position.x)*0.005: 0;
    camara.position.y +=  (mauseY/2 - camara.position.y)*0.005;
    camara-lookAt(scene.position);
    controls.update();
    render.render(scene, camara);
    requestAnimationFrame(animate);
}