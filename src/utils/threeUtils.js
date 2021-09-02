/**
 * 把THREE封装成工具对象
 */

import * as THREE from 'three';

const threeUtils = {

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
    },




    /**
     * [scene 场景]
     * @author tangyang 
     * @date 2021-08-28 
     * @returns {Object} [场景对象]
     */
    scene() {
        return new THREE.Scene();
    },

    /**
     * [renderer 渲染器]
     * @author tangyang 
     * @date 2021-08-28
     * @param {any} parameters [可选参数]
     * @returns {Object} [渲染器对象]
     */
    renderer(parameters = {}) {
        return new THREE.WebGLRenderer(parameters);
    },


    /**
     * [mesh 网格]
     * @author tangyang 
     * @date 2021-08-28 
     * @param {BufferGeometry} geo 
     * @param {Material} mtl 
     * @returns {Object} [网格对象]
     */
    mesh(geo, mtl) {
        return new THREE.Mesh(geo, mtl);
    },

    /** 常用几何体 */
    geometry: {
        buf() {
            return new THREE.BufferGeometry(); //基础啊buffer几何体
        },
        insBuf() {
            return new THREE.InstancedBufferGeometry(); //基础buffer实例几何体
        },
        shape(shp, seg) {
            return new THREE.ShapeBufferGeometry(shp, seg); //形状集合体 
        },

        //内置
        box(w, h, dep) {
            return new THREE.BoxGeometry(w, h, dep);//长方体
        },
        plane(w, h) {
            return new THREE.PlaneGeometry(w, h); //二维集合体
        }
    },

    /** 常用材质 */
    material: {
        standerd(param) {
            return new THREE.MeshStandardMaterial(param); //标准几何体材质
        },
        lambert(param) {
            return new THREE.MeshLambertMaterial(param); //兰伯特感光几何体材质
        },
        normal(param) {
            return new THREE.MeshNormalMaterial(param); //法线网格材质
        },
        basic(param) {
            return new THREE.MeshBasicMaterial(param); //基础网格材质
        }
    }
}

export default threeUtils;