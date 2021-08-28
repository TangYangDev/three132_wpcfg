# 安装THREE命令
## npm insatll three

# 安装轨道控制插件(必须引入THREE后才能正确安装)
## npm install three-orbit-controls
## 引入方式：OrbitControls = require('three-orbit-controls')(THREE);
## 使用：controls = new OrbitControls(camera);

# 安装加载.obj和.mtl类型模型的loader (必须引入THREE后才能正确安装)
## npm install --save three-obj-mtl-loader
## 引入方式：import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
## 使用：mtlLoader = new MTLLoader(); objLoader = new OBJLoader();

# 安装three-css2drender 插件，npm install --save three-css2drender(必须引入THREE后才能正确安装)
## 引入方式：import {CSS2dRrenderer, CSS2DObject} from 'three-css2drender';
## labelRenderer = new CSS2dRrenderer(); label = new CSS2DObject(text);