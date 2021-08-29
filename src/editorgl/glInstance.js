/**
 * 定义glInstance初始化类
 */

import boxGeometryWidget from "./widgets/boxGeometryWidget";


export default class glInstance {
    init() {
        const boxGeo = new boxGeometryWidget();
        boxGeo.renderer.setClearColor(0x000000);
        boxGeo.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(boxGeo.renderer.domElement);
    }
}
