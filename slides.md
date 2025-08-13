---
# You can also start simply with 'default'
theme: seriph
background: https://cover.sli.dev
title: Postman教程 - API测试与开发工具
info: |
  ## Postman教程幻灯片
  学习如何使用Postman进行API测试和开发

  了解更多请访问 [Postman官方文档](https://learning.postman.com/)
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Postman 初级教程

使用Postman调试和测试后端API

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  按空格进入下一页 <img src="/postman-original.svg" style="width: 20px; display: inline-block; vertical-align: middle;" />
</div>

---
transition: slide-left
---

# 什么是Postman?

Postman 是一个强大的 API 平台，用于构建和使用 API。它提供了以下特性：

- 🚀 **API 客户端** - 轻松发送各种 HTTP 请求
- 🧪 **测试自动化** - 编写和运行测试用例
- 📚 **文档生成** - 自动生成 API 文档
- 👥 **协作功能** - 团队成员共享和协作
- 🔄 **工作流** - 创建复杂的 API 工作流
- 📊 **监控** - 监控 API 性能和可用性

了解更多 [Postman 官方文档](https://learning.postman.com/)

---
transition: slide-left
layout: image-right
image: public/Copilot_20250810_172200.png
backgroundSize: contain
---

# 为什么要使用 Postman 测试后端 API？

Postman 是一个很好的 API 测试工具，通过直观的 UI 界面，无需写代码就可以轻松地测试后端 API。

<br>

- 提高工作效率，后端与前端可以**独立测试**。
- 确保后端实现与前端预期的接口**契约一致**，避免联调时的“**扯皮**”。

---
transition: slide-left
layout: image-right
image: /Copilot_20250811_094236.png
backgroundSize: contain
---

# 不测试 API 的风险

- API 的实际行为与文档不一致（如字段名错误、返回格式变化），客户在对接时会认为开发团队不专业，影响客户评价和产品销量。
- 造成 BUG 进入生产环境，影响客户使用。
- 沟通成本过高，DEBUG 时间过长。
- 造成前后端开发者的关系紧张，开发团队无法协同工作。

---
transition: slide-left
layout: full
---

# 全球开发者的选择

全球众多公司和开发者使用Postman进行API开发和测试

<LogoGrid :logos="[
  { name: 'Microsoft', url: '/logos/microsoft-logo-horizontal.svg' },
  { name: 'Stripe', url: '/logos/stripe-logo-horizontal.svg' },
  { name: 'Meta', url: '/logos/meta-logo-horizontal.svg' },
  { name: 'Notion', url: '/logos/notion-symbol.svg' },
  { name: 'Salesforce', url: '/logos/salesforce-cloud-logo.svg' },
  { name: 'Mercedes-Benz', url: '/logos/mercedes-benz-logo-horizontal.png' },
  { name: 'Datadog', url: '/logos/datadog-logo.svg' },
  { name: 'PayPal', url: '/logos/paypal-logo-horizontal.svg' },
  { name: 'AWS', url: '/logos/aws-small-logo.png' },
  { name: 'Twitter', url: '/logos/twitter-logo.svg' },
  { name: 'Cisco', url: '/logos/cisco-devnet-black-logo.svg' },
  { name: 'Intuit', url: '/logos/intuit-logo.png' },
  { name: 'MongoDB', url: '/logos/mongodb-logo-horizontal.png' },
  { name: 'Hubspot', url: '/logos/hubspot-logo.svg' },
  { name: 'Dolby', url: '/logos/dolby-io.png' },
  { name: 'Oracle', url: '/logos/oracle-developers-logo.jpg' },
  { name: 'Slack', url: '/logos/slack-logo-horizontal.png' },
  { name: 'Google Maps', url: '/logos/google-maps-logo-horizontal.svg' },
  { name: 'Mastercard', url: '/logos/mastercard-logo.svg' },
  { name: 'Adobe', url: '/logos/adobe-logo-horizontal.png' },
  { name: 'Uber', url: '/logos/uber-logo.svg' },
  { name: 'Miro', url: '/logos/miro-logo-stacked.svg' },
  { name: 'Anvil', url: '/logos/anvil-logo.svg' },
  { name: 'Plaid', url: '/logos/plaid-logo-stacked.png' }
]" />

---
transition: slide-left
layout: image-right
image: /postman-first-use.png
backgroundSize: contain
---

# 首次使用

<br>

第一次打开Postman时，会看到右侧的账号登录页。

::v-click

- 可以直接跳过登录，选择“Continue without an acount”。
  ::

::v-click

- 也可以创建一个账号
  ::

::v-click

- 或者可以登录其他账号，Google、Github 或者 单点登陆(SSO)
  ::

---
transition: slide-left
layout: image-right
image: /postman.png
backgroundSize: contain
---

# Postman界面概览

进入主界面后

右侧是 Postman 主界面示例 →

::v-clicks

- 顶部导航栏包含产品、定价、企业版、账号登录等选项
- 左侧边栏用于管理集合、环境和历史记录
- 中央工作区用于发送请求和显示响应信息
- 右侧边栏可以看到不同语言或者框架的请求代码片段
- 底部状态栏显示当前状态和信息

::

---
transition: slide-up
layout: image-right
image: /first_request.png
backgroundSize: contain
---

# 发送第一个请求

让我们通过一个简单的示例来学习如何发送请求

步骤

::v-clicks

- 1. 在地址栏输入URL:

  ```text
  http://localhost:3001/posts/1
  ```

- 2. 选择"GET"方法

- 3. 点击"Send"按钮

- 4. 查看响应体原始格式或者显示可视化的结果呈现。

  ```json
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  ```

::

---
layout: image-right
image: /first_request.png
backgroundSize: contain
---

::v-clicks

- 5. 点击右侧"Code"按钮查看生成的等效请求代码

  Python 代码：

  ```python
  import requests

  url = "http://localhost:3001/posts/1"

  payload = {}
  headers = {}

  response = requests.request("GET", url, headers=headers, data=payload)

  print(response.text)
  ```

  Curl 命令：

  ```bash
  curl --location 'http://localhost:3001/posts/1'
  ```

::

---
layout: image-right
image: /http_methods.png
backgroundSize: contain
---

# Postman 支持所有标准HTTP方法

::v-clicks

- **GET** - 获取资源
- **POST** - 创建新资源
- **PUT** - 更新整个资源
- **PATCH** - 部分更新资源
- **DELETE** - 删除资源
- **HEAD** - 只获取响应头
- **OPTIONS** - 获取服务器支持的选项

::

---
transition: slide-left
layout: section
---

# 变量

---
transition: slide-left
layout: image-right
image: /var.png
backgroundSize: contain
---

# 使用示例

这是一个URL中的变量

::v-clicks

- url 变量

  ```text
  http://localhost:3001/posts/{{user_id}}

  ```

- url 参数

  ```text
  http://localhost:3001/posts/1?title={{ title }}
  ```

- Request Body 变量

  ```json
  {
    "name": {{name}}
  }
  ```

::

---
layout: image-right
image: /var.png
backgroundSize: contain
---

# 设置变量

Postman 工具中的变量有类型

::v-clicks
- 环境变量
- 全局变量
- Vault 变量
::

---

# 环境变量 (Environment Variables)

环境变量是与特定环境关联的变量，适用于需要在不同环境（如开发、测试、生产）之间切换的情况。

::v-clicks

- **作用范围**：仅在选定的环境下有效
- **适用场景**：管理不同环境的配置，如 base_url、auth_token、数据库连接信息等
- **特点**：可以在不同环境之间切换，每个环境可以有同名但不同值的变量
- **示例**：开发环境使用 http://localhost:3000，生产环境使用 https://api.example.com

::

---

# 全局变量 (Global Variables)

全局变量是在整个Postman环境中都可以访问的变量，不局限于特定环境。

::v-clicks

- **作用范围**：在整个Postman工作空间中都可以访问
- **适用场景**：存储在所有环境中都需要使用的值，如用户ID、通用配置等
- **优先级**：环境变量会覆盖同名的全局变量
- **示例**：用户名、常用请求头等在所有环境中都相同的值

::

---

# Vault 变量 (Vault Secrets)

Vault变量是用于存储敏感信息的安全变量，仅在本地可用，不会同步到Postman云端。

::v-clicks

- **作用范围**：仅在本地Postman实例中可用
- **适用场景**：存储敏感数据，如API密钥、密码、访问令牌等
- **安全性**：只有你本人可以访问和使用这些值，不会与团队成员共享或同步到云端
- **特点**：提供最高级别的安全保护，适用于机密信息

::

---
transition: slide-left
layout: section
---

# Token认证配置详解

详细配置各种Token认证方式

---
transition: slide-up
layout: image-right
image: /postman-beartoken.png
backgroundSize: contain
---

# Bearer Token认证

Bearer Token 认证是最常用的 Token 认证方式

::v-clicks

- 在 Authorization 选项卡中选择 Bearer Token
- 直接输入 Token 或使用变量

  ```http
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```

  或者 使用变量

  ```javascript
  pm.variables.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
  ```

  ```http
  Authorization: Bearer {{token}}
  ```

::

---

# 其他 Token 认证

::v-clicks

- OAuth 2.0
- API Key
- Basic Auth
- Digest Auth
- 等等

::

---
layout: two-cols-header
---

# 资源和学习

进一步学习Postman的资源

<v-clicks>

- [Postman学习中心](https://learning.postman.com/)
- [Postman文档](https://www.postman.com/docs/)
- [API基础知识](https://learning.postman.com/docs/apis/)
- [Postman社区](https://community.postman.com/)
- [Postman YouTube频道](https://www.youtube.com/postman)

</v-clicks>

::right::

<v-clicks>

- [Postman Bootcamp](https://www.postman.com/learning/)
- [API网络研讨会](https://www.postman.com/events/webinars/)
- [Postman认证](https://academy.postman.com/)
- [API-first开发](https://www.postman.com/api-first/)
- [Postman博客](https://blog.postman.com/)

</v-clicks>

---

# 总结

Postman是一个强大的API开发和测试平台

<v-clicks>

1. **简化API开发** - 从简单的请求到复杂的测试场景
2. **提高效率** - 自动化测试和文档生成
3. **促进协作** - 团队共享和协作开发
4. **确保质量** - 全面的测试和监控功能
5. **持续学习** - 丰富的学习资源和社区支持

</v-clicks>

---

<v-click>

<div class="text-center mt-10">

## 开始使用Postman提升您的API开发工作流程！

[立即下载Postman](https://www.postman.com/downloads/)

</div>

</v-click>
