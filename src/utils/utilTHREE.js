import * as THREE from 'three';

export default class utilTHREE {

    /**
     * [perspectiveCamera 透视投影相机]
     * @author tangyang 
     * @date 2021-08-28   
     * @param {Number} fov [视场，摄像机看到的角度，默认：50°] 
     * @param {Number} aspect [渲染窗口宽高比，默认：window.innerWidth / innerHeight]
     * @param {Number} near [近面距离，距离相机最近位置开始渲染，默认：0.01] 
     * @param {Number} far [远面距离，距离相机最远位置结束渲染，推荐最远：1000]
     * @param {Number} zoom [变焦，缩放场景，zoom < 1 缩小  zoom>1 放大 zoom为负数 场景上下颠倒]
     * @returns {Object} [camera对象] 
     */
    perspectiveCamera(fov, aspect, near, far, zoom) {
        return new THREE.PerspectiveCamera(fov, aspect, near, far, zoom);
    }

    /**
     * [scene 场景]
     * @author tangyang 
     * @date 2021-08-28 
     * @returns {Object} [场景对象]
     */
    scene() {
        return new THREE.Scene();
    }

    renderer() {
        return new THREE.WebGLRender();
    }
}