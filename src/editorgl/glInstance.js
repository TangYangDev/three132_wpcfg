/**
 * 定义glInstance初始化类
 */

import boxGeometryWidget from './widgets/boxGeometryWidget';

export default class glInstance {
    init() {
        const boxBaseObj = new boxGeometryWidget()
        boxBaseObj.renderer.setClearColor(0x000000);
        boxBaseObj.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(boxBaseObj.renderer.domElement);
        boxBaseObj.render();
    }
}
