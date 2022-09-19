/*
 * 开放性问题：谈谈项目中的亮点/难点？ 
 *   规避功能型问题 & 业务型问题，除非是功能和业务确实很复杂，例如：
 *     + 单点登录
 *     + 权限的多维度管控
 *     + 多组件信息的复杂共享类问题
 *     + 产品安全解决策略
 *     + 数据埋点&性能监控
 *     + 直播类、音视频类、实时通信类、可视化处理类...的功能处理「突出自己的知识体系面」
 *     + ...
 * 
 *   重点讲解的是：
 *     + 性能优化方案
 *       + webpack层面
 *       + HTTP层面
 *       + 页面渲染层面「包含代码渲染」
 *       + 骨架屏
 *       + 延迟/异步加载
 *       + 大数据渲染优化
 *       + 大文件传输处理
 *       + ...
 *       强调结果，例如：之前打包/加载时间是N秒，经过我的优化后是M秒「N>M」
 * 
 *     + 插件组件封装「敏捷化平台构建之一」
 *       + 公共方法库
 *       + 插件/组件封装：二次封装 & 开源级插件组件的打造
 *       + Vue自定义指令
 *       + ...
 *       除了强调结果「例如：之前半个月开发周期，现在只需要7天」，还可以突出自己的原理/源码阅读能力
 * 
 *   也可以讲解一些新技术方向的攻坚
 *     + Hybrid
 *     + 可视化
 *     + uni-app/flutter
 *     + typescript
 *     + node
 *     + ...
 */

/*
 * 从输入URL到页面呈现都发生了什么？
 *   CRP（Critical [ˈkrɪtɪkl] Rendering [ˈrendərɪŋ] Path）关键渲染路径
 *   + HTTP网络环节及优化指南 ->“HTTP网络层.html”
 *   + 浏览器渲染环节及回流重绘 ->“浏览器底层渲染机制.html”
 */