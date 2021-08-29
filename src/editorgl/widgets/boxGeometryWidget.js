import THREEBaseObject from "../../base/THREEBaseObject";
import utilTHREE from "../../utils/utilTHREE";


export default class boxGeometryWidget extends THREEBaseObject {
    constructor() {
        super();
        this.scene = utilTHREE.scene();
        this.renderer = utilTHREE.renderer({ antialias: true });
        this.camera = utilTHREE.perspectiveCamera(70, window.innerWidth / innerHeight, 0.01, 100);
        this.geometry = utilTHREE.geo.box(0.2, 0.2, 0.2);
        this.material = utilTHREE.material.normal();
        this.mesh = this.meshAddGeometryAndMaterial();
        this.camera.position.z = 1;
    }

    render() {
        this.sceneAddMeshes();
        this.animationFrame();
    }
}

// export default boxBaseObj = {
//     scene: utilTHREE.scene(),
//     renderer: utilTHREE.renderer({ antialias: true }),
//     camera: utilTHREE.perspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100),
//     geometry: utilTHREE.geo.box(0.2, 0.2, 0.2),
//     material: utilTHREE.material.normal(),
//     mesh: THREEBaseObject.GeometryAndMaterialAddMesh(),

//     sceneAddMeshes() {
//         THREEBaseObject.SceneAddMeshes();
//     }
// }