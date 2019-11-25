前端测试框架

1. 单元测试 (karma)

Karma，karma不是一个测试框架，也不是一个断言库。karma只是启动一个HTTP服务器，并生成HTML文件。所以你可以选择你自己喜欢的测试框架。如Jasmine,Mocha,QUnit等等。

Jasmine，即是上面所说的JavaScript测试框架。它不依赖于其他任何JavaScript组件，它有干净的语法，Jasmine断言库可以让你简单的写出测试代码，（断言：表示为一些布尔表达式，你可以采用假设的方式，当程序输出的结果是否与假设的结果一致时，断言为真，否则，断言为假）在karma上运行Jasmine可以完成JavaScript的自动化测试、生成覆盖率报告等。

2. e2e测试 (selenium-webdriver)

Selenium已经支持了大部分主流的浏览器，它是一个用于自动化测试的绝佳工具。

WebDriver（或者Selenium 2）基本上指的都是特定浏览器控制代码的语言绑定和实现。

WebDriver引入了一个JSON wire protocol用于将不同的语言和浏览器控制器进行交流。

3. UI测试 || "UI走查" (backstopjs)

BackstopJS就是一个能够实现css自动化回归测试的工具，和Mocha这种依靠JavaScript判断断言语句正误和PhantomJS以模拟用户操作的测试工具不同，BackstopJS是一个基于比较网站快照的变化的回归测试工具，因此他更适给项目中的样式做回归测试，可以确保我们在重构网站样式的时候样式不发生变化，而且他支持设置多种浏览器尺寸，可以测试响应式布局。

4. 接口测试 (mocha && mochawesome)

mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行。

使用mocha，我们就只需要专注于编写单元测试本身，然后，让mocha去自动运行所有的测试，并给出测试结果。

mocha的特点主要有：

- 既可以测试简单的JavaScript函数，又可以测试异步代码，因为异步是JavaScript的特性之一；

- 可以自动运行所有测试，也可以只运行特定的测试；

- 可以支持before、after、beforeEach和afterEach来编写初始化代码。

使用mochawesome模块，可以生成漂亮的HTML格式的报告。