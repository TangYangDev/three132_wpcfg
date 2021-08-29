import utilTHREE from "../../utils/utilTHREE";
export default class boxGeometryWidget {
    constructor() {
        this.scene = utilTHREE.scene();
        this.renderer = utilTHREE.renderer({ antialias: true });
        this.camera = utilTHREE.perspectiveCamera(70, window.innerWidth / innerHeight, 0.01, 100);
        this.geometry = utilTHREE.geo.box(0.2, 0.2, 0.2);
        this.material = utilTHREE.material.normal();
        this.mesh = utilTHREE.mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
        this.camera.position.z = 1;
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
}