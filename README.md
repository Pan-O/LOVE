 # LOVE

一个简单的情侣单页


大部分都是网上的代码抄抄改改（笑


[预览](https://chenyuhan.panjianhao.top)

![img2.png](https://i.loli.net/2021/08/11/1FatnRP8cuMDsGU.png)

![img1.png](https://i.loli.net/2021/08/11/L24HqSOWjrw1CdD.png)

## 特色
* 响应式布局
* 音乐播放
* 祝福
* 自动获取QQ头像
* 恋爱计时
* 一言祝福感谢语
* 留言功能-使用[Valine ](https://valine.js.org/)（修改版）
* 恋爱清单
* 节日计时
* 较花哨的动画？？
* ......


### 2021/8/11 更新
* 修改Valine（修改了gravatar源，修复了获取QQ中文昵称失败的问题，改了一点CSS）
* 重新设计了布局（也许更乱了）
* 重构了CSS样式
* 添加了恋爱清单
* 重构了一言祝福感谢语功能
* 留言支持用QQ快速留言
* 音乐播放音量渐增（不突兀？？）
* 对部分动画进行修改
* 添加了节日计时的功能


## 使用方法
下载源码后上传到服务器（需支持PHP）

修改other目录下的setting.php文件，按提示即可

修改js目录下的app.js文件，第3，191，192三行（ID和Key请参考[Valine-快速开始 ](https://valine.js.org/quickstart.html)中的 “获取APP ID 和 APP Key”


祝福语自定义可修改other目录下的love.txt文件，一行一句

恋爱清单自定义可修改other目录下的list.json文件


### 部分代码来源

[JS简易整页滚动 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1685617)

[PHP开发计算下一个节假日时间并倒计时-不败君](https://www.bubaijun.com/page.php?id=148)
