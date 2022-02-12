// 全局语言设置
var language="zh-cn"
var languageResourse =
    function a() {
        let allElements = document.body.children
        // 获取所有的元素
        for (let i = 0; i < allElements.length; i++) {
            let element = allElements[i]
            if (element.attributes.length != 0) {
                for (let i = 0; i < element.attributes.length; i++) {
                    if (element.attributes[i].name == "t-i18n")
                        console.log("ok");
                    element.innerHTML = 456
                }
            }
        }
    }
a()