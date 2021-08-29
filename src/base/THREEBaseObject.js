/**
 * 把THREE封装成基础类
 */

import * as THREE from 'three';

export default class THREEBaseObject {
    constructor() {
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;
    }

    //setter/getter
    /**
     * [setter方法 setScene ]
     * @author tangyang 
     * @date 2021-08-29 
     * @param {Object}  scence [THREE.Scene()对象]
     * @returns {null}
     */
    set scene(scence) {
        this._scene = scence;
    }

    /**
     * [getter方法 getScene ]
     * @author tangyang 
     * @date 2021-08-29 
     * @returns {Object} [THREE.Scene()对象]
     */
    get scene() {
        return this._scene;
    }

    /**
     * [setter方法 setRenderer ]
     * @author tangyang 
     * @date 2021-08-29 
     * @param {Object}  renderer [THREE.WebGLRenderer()对象]
     * @returns {null}
     */
    set renderer(renderer) {
        this._renderer = renderer;
    }

    /**
     * [getter方法 getRenderer ]
     * @author tangyang 
     * @date 2021-08-29 
     * @returns {Object}  renderer [THREE.WebGLRenderer()对象]
     */
    get renderer() {
        return this._renderer;
    }

    set camera(camera) {
        this._camera = camera;
    }

    get camera() {
        return this._camera;
    }

    set geometry(geometry) {
        this._geometry = geometry;
    }

    get geometry() {
        return this._geometry;
    }

    set material(material) {
        this._material = material;
    }

    get material() {
        return this._material;
    }

    set mesh(mesh) {
        this._mesh = mesh;
    }

    get mesh() {
        return this._mesh;
    }

    //实例方法
    /**
     * [geometryAndMaterialAddMesh  把几何体和材质添加到网格中]
     * @author tangyang 
     * @date 2021-08-29 
     * @returns {Object} [网格对象]
     */
    meshAddGeometryAndMaterial() {
        return new THREE.Mesh(this.geometry, this.material);
    }

    /**
     * [sceneAddMeshes  把网格添加到场景中]
     * @author tangyang 
     * @date 2021-08-29  
     */
    sceneAddMeshes() {
        this.scene.add(this.mesh);
    }

    animationFrame() {
        requestAnimationFrame(this.animationFrame.bind(this));
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
}
