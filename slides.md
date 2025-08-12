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

Postman是一个强大的API平台，用于构建和使用API。它提供了以下特性：

- 🚀 **API客户端** - 轻松发送各种HTTP请求
- 🧪 **测试自动化** - 编写和运行测试用例
- 📚 **文档生成** - 自动生成API文档
- 👥 **协作功能** - 团队成员共享和协作
- 🔄 **工作流** - 创建复杂的API工作流
- 📊 **监控** - 监控API性能和可用性

了解更多 [Postman官方文档](https://learning.postman.com/)

---
transition: slide-left
layout: image-right
image: public/Copilot_20250810_172200.png
backgroundSize: contain
---

# 为什么要使用 Postman 测试后端 API？

Postman 是一个很好的API测试工具，通过直观的UI界面，无需写代码就可以轻松地测试后端API。

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
- 造成BUG进入生产环境，影响客户使用。
- 沟通成本过高，DEBUG 时间过长。
- 造成前后端开发者的关系紧张，开发团队无法协同工作

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
image: /postman.png
backgroundSize: contain
---

# Postman界面概览

Postman主界面示例

::v-clicks

- 顶部导航栏包含产品、定价、企业版、账号登录等选项
- 左侧边栏用于管理集合、环境和历史记录
- 中央工作区用于发送请求和显示响应信息
- 右侧边栏可以看到不同语言或者框架的请求代码片段
- 底部状态栏显示当前状态和信息

::

---
transition: slide-left
layout: image-right
image: /first_request.png
backgroundSize: contain
---

# 发送第一个请求

让我们通过一个简单的示例来学习如何发送请求

## 步骤

::v-clicks

- 1. 在地址栏输入URL:

  ```text
  https://jsonplaceholder.typicode.com/posts/1
  ```

- 2. 确保选择了"GET"方法

- 3. 点击"Send"按钮

- 4. 查看响应结果

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
transition: slide-left
layout: image-right
image: /http_methods.png
backgroundSize: contain
---

# Postman支持所有标准HTTP方法

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
image: /env.png
backgroundSize: contain
---

# 使用示例

这是一个URL中的变量

::v-clicks

- url 变量

  ```text
  https://jsonplaceholder.typicode.com/posts/{{user_id}}
  ```

- 使用预请求脚本设置变量

  ```javascript
  pm.variables.set("userid", 1);
  ```

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

## 环境变量设置

<v-clicks>

- 点击右上角环境选择器
- 点击齿轮图标打开环境管理
- 创建新环境并添加变量
- 设置变量名和初始值

常用变量示例:

- `base_url`: https://api.example.com
- `auth_token`: 用户认证Token
- `user_id`: 当前用户ID

</v-clicks>

![Postman环境变量设置](https://miro.medium.com/max/1400/1*e4628xZJ5E9r-fGj6JWY1Q.png)

---

# 动态Token获取和使用

自动获取并使用Token进行接口测试

<div grid="~ cols-2 gap-4">
<div>

## 登录接口示例

<v-clicks>

1. 创建登录请求获取Token
2. 在Tests标签中编写脚本提取Token
3. 将Token保存到环境变量
4. 在其他请求中使用Token变量

</v-clicks>

<v-click>

## 提取Token的脚本

```javascript
// 解析响应体
const responseJson = pm.response.json();

// 检查响应中是否包含Token
if (responseJson && responseJson.token) {
  // 将Token设置为环境变量
  pm.environment.set("auth_token", responseJson.token);

  // 添加测试用例验证Token是否设置成功
  pm.test("Token is saved to environment", function () {
    pm.expect(pm.environment.get("auth_token")).to.eql(responseJson.token);
  });
} else {
  pm.test("Token not found in response", function () {
    pm.expect.fail("Token not found in response");
  });
}
```

</v-click>

</div>
<div>

![Postman Tests脚本示例](https://blog.postman.com/wp-content/uploads/2021/06/Testing%20with%20variables%20and%20the%20response%20body-1.gif)

</div>
</div>

---

# 复杂场景下的请求配置

处理复杂的API测试场景

<div grid="~ cols-2 gap-4">
<div>

## 多层嵌套JSON请求体

<v-clicks>

- 使用变量构建动态请求体
- 处理数组和嵌套对象
- 根据条件设置不同参数

```json
{
  "user": {
    "id": {{user_id}},
    "profile": {
      "name": "{{user_name}}",
      "preferences": {
        "theme": "{{theme}}",
        "notifications": {{notifications_enabled}}
      }
    },
    "roles": ["{{role1}}", "{{role2}}"]
  },
  "metadata": {
    "timestamp": "{{current_timestamp}}",
    "version": "{{api_version}}"
  }
}
```

</v-clicks>

## 条件逻辑处理

<v-clicks>

- 使用预请求脚本设置条件变量
- 根据环境设置不同参数
- 动态生成时间戳或随机数据

```javascript
// 预请求脚本示例
const currentTime = new Date().getTime();
pm.environment.set("current_timestamp", currentTime);

// 根据环境设置不同参数
if (pm.environment.name === "Production") {
  pm.environment.set("api_version", "v2");
} else {
  pm.environment.set("api_version", "v1");
}
```

</v-clicks>

</div>
<div>

![Postman预请求脚本](https://blog.postman.com/wp-content/uploads/2021/05/pre-request-scripts-in-collection.gif)

</div>
</div>

# Token认证和变量使用

在API测试中使用Token认证和变量

<div grid="~ cols-2 gap-4">
<div>

## Token认证方式

<v-clicks>

- **Bearer Token** - 最常见的认证方式
- **API Key** - 通过API密钥认证
- **Basic Auth** - 基础认证（用户名/密码）
- **OAuth 2.0** - 开放授权标准

</v-clicks>

## 变量使用场景

<v-clicks>

- 不同环境的URL配置
- 动态用户ID或参数
- 认证Token管理
- 测试数据参数化

</v-clicks>

</div>
<div>

<v-click>

## 设置Token变量示例

```javascript
// 从响应中提取Token并设置为环境变量
const jsonData = pm.response.json();
pm.environment.set("auth_token", jsonData.access_token);

// 检查Token是否设置成功
pm.test("Token is set", function () {
  pm.expect(pm.environment.get("auth_token")).to.exist;
});
```

</v-click>

<v-click>

## 使用Token变量

```http
GET /api/v1/users/profile HTTP/1.1
Host: {{api_host}}
Authorization: Bearer {{auth_token}}
Content-Type: application/json
```

</v-click>

</div>
</div>

---

# 各种请求类型的详细讲解

深入了解不同HTTP请求类型的使用

<div grid="~ cols-2 gap-4">
<div>

## GET请求

用于获取资源，参数通过URL传递

<v-clicks>

- 适用于数据查询
- 参数在URL中可见
- 可被缓存
- 有长度限制

```http
GET /api/v1/users?role=admin&page=1 HTTP/1.1
Host: {{api_host}}
Authorization: Bearer {{auth_token}}
```

</v-clicks>

## POST请求

用于创建新资源，数据在请求体中

<v-clicks>

- 用于创建资源
- 数据在请求体中
- 不会被缓存
- 无长度限制

```http
POST /api/v1/users HTTP/1.1
Host: {{api_host}}
Authorization: Bearer {{auth_token}}
Content-Type: application/json

{
  "name": "张三",
  "email": "zhangsan@example.com",
  "role": "{{user_role}}"
}
```

</v-clicks>

</div>
<div>

![Postman GET请求示例](https://user-images.githubusercontent.com/9093305/145695915-4d25c2d3-0a15-4b5b-85b8-8780c00d75d9.png)

</div>
</div>

---

# PUT和PATCH请求

更新资源的不同方式

<div grid="~ cols-2 gap-4">
<div>

## PUT请求

<v-clicks>

- 更新整个资源
- 需要提供完整数据
- 幂等操作

```http
PUT /api/v1/users/{{user_id}} HTTP/1.1
Host: {{api_host}}
Authorization: Bearer {{auth_token}}
Content-Type: application/json

{
  "name": "张三丰",
  "email": "zhangsanfeng@example.com",
  "role": "admin"
}
```

</v-clicks>

## PATCH请求

<v-clicks>

- 部分更新资源
- 只需提供要更新的字段
- 更加灵活

```http
PATCH /api/v1/users/{{user_id}} HTTP/1.1
Host: {{api_host}}
Authorization: Bearer {{auth_token}}
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

</v-clicks>

</div>
<div>

![Postman POST请求示例](https://user-images.githubusercontent.com/9093305/145695917-4d25c2d3-0a15-4b5b-85b8-8780c00d75d9.png)

</div>
</div>

---

# DELETE请求和高级技巧

删除资源和其他高级用法

<div grid="~ cols-2 gap-4">
<div>

## DELETE请求

<v-clicks>

- 用于删除资源
- 可以带有请求体（不推荐）
- 通常是幂等的

```http
DELETE /api/v1/users/{{user_id}} HTTP/1.1
Host: {{api_host}}
Authorization: Bearer {{auth_token}}
```

</v-clicks>

## 高级技巧

<v-clicks>

- **预请求脚本** - 在发送请求前执行
- **测试脚本** - 验证响应结果
- **变量作用域** - 合理使用不同级别变量
- **集合运行** - 批量执行测试用例
- **环境切换** - 在不同环境间切换

</v-clicks>

</div>
<div>

![Postman DELETE请求示例](https://user-images.githubusercontent.com/9093305/145695919-4d25c2d3-0a15-4b5b-85b8-8780c00d75d9.png)

</div>
</div>

---

# 编写测试脚本

使用JavaScript验证API响应

## 测试示例

<v-clicks>

```javascript
// 状态码检查
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

// 响应时间检查
pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});

// 响应体检查
pm.test("Response body contains title", function () {
  const jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property("title");
});
```

</v-clicks>

---

# 集成与协作

团队协作和持续集成

<div grid="~ cols-2 gap-4">
<div>

## 团队协作

<v-clicks>

- 共享集合和环境
- 添加注释和文档
- 版本控制
- 工作区管理
- 权限控制

</v-clicks>

</div>
<div>

## 持续集成

<v-clicks>

- Newman命令行工具
- Postman CLI
- 与CI/CD集成
- 自动化测试运行
- 监控和告警

</v-clicks>

</div>
</div>

---

# 实践练习

动手练习巩固所学知识

<v-clicks>

1. 创建一个集合来管理用户API
2. 配置开发和生产环境
3. 编写GET、POST、PUT、DELETE请求
4. 添加测试验证响应
5. 创建预请求脚本设置认证
6. 运行整个集合的测试
7. 导出和分享结果

</v-clicks>

<v-click>

## 提示

使用 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 作为测试API

</v-click>

---

# 请求体类型详解

Postman支持多种请求体格式

<div grid="~ cols-2 gap-4">
<div>

## Raw格式

<v-clicks>

- 用于发送JSON、XML、纯文本等数据
- 可以使用变量替换
- 需要手动设置Content-Type头

```json
{
  "name": "{{user_name}}",
  "email": "{{user_email}}",
  "age": {{user_age}},
  "active": {{is_active}}
}
```

</v-clicks>

## Form-data格式

<v-clicks>

- 用于表单提交和文件上传
- 支持文本和文件字段
- 自动设置Content-Type为multipart/form-data

使用场景:

- 用户注册包含头像上传
- 表单数据提交
- 文件批量上传

</v-clicks>

## x-www-form-urlencoded

<v-clicks>

- 传统的表单提交格式
- 数据以键值对形式编码
- 适用于简单的表单数据

```text
username=john&password=secret&remember=true
```

</v-clicks>

</div>
<div>

![Postman请求体设置](https://assets.postman.com/postman-docs/request-body-tabs.jpg)

</div>
</div>

---

# 认证方式详解

Postman支持的多种认证方式

<div grid="~ cols-2 gap-4">
<div>

## Bearer Token

<v-clicks>

- 最常用的API认证方式
- 在Authorization选项卡中选择Bearer Token
- 输入Token值或使用变量

```http
Authorization: Bearer {{access_token}}
```

</v-clicks>

## Basic Auth

<v-clicks>

- 基础认证方式
- 用户名和密码通过Base64编码
- 适用于简单的认证场景

```http
Authorization: Basic base64(username:password)
```

</v-clicks>

## API Key

<v-clicks>

- 通过API密钥进行认证
- 可以添加到Header、Query Params或Body中
- 适用于第三方API集成

```http
X-API-Key: {{api_key}}
```

</v-clicks>

## OAuth 2.0

<v-clicks>

- 开放授权标准
- 支持多种授权流程
- 适用于第三方应用集成

配置步骤:

1. 选择OAuth 2.0认证类型
2. 配置授权URL、Token URL等参数
3. 获取并使用访问令牌

</v-clicks>

</div>
<div>

![Postman认证设置](https://assets.postman.com/postman-docs/authorization-tabs.jpg)

</div>
</div>

---

# 实际应用场景和最佳实践

常见API测试场景和解决方案

<div grid="~ cols-2 gap-4">
<div>

## 场景1：用户登录和后续操作

<v-clicks>

1. 发送登录请求获取Token
2. 保存Token到环境变量
3. 在后续请求中使用Token
4. 处理Token过期情况

</v-clicks>

<v-click>

## 场景2：批量数据处理

```javascript
// 使用数据文件进行批量测试
const users = pm.iterationData.toObject();
pm.test("User data is valid", function () {
  pm.expect(users.name).to.exist;
  pm.expect(users.email).to.exist;
});
```

</v-click>

<v-click>

## 场景3：API响应验证

```javascript
// 验证响应结构和数据
pm.test("Response has required fields", function () {
  const response = pm.response.json();
  pm.expect(response).to.have.property("id");
  pm.expect(response).to.have.property("name");
  pm.expect(response.name).to.be.a("string");
});
```

</v-click>

</div>
<div>

![Postman集合运行](https://blog.postman.com/wp-content/uploads/2021/06/Collection%20Runner%20interface.png)

</div>
</div>

---

# 最佳实践

使用Postman的推荐做法

<v-clicks>

- 使用有意义的命名约定
- 组织集合和文件夹结构
- 使用环境变量管理配置
- 编写全面的测试
- 添加详细描述和文档
- 定期更新和维护
- 利用Postman的协作功能

</v-clicks>

---

# 资源和学习

进一步学习Postman的资源

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- [Postman学习中心](https://learning.postman.com/)
- [Postman文档](https://www.postman.com/docs/)
- [API基础知识](https://learning.postman.com/docs/apis/)
- [Postman社区](https://community.postman.com/)
- [Postman YouTube频道](https://www.youtube.com/postman)

</v-clicks>

</div>
<div>

<v-clicks>

- [Postman Bootcamp](https://www.postman.com/learning/)
- [API网络研讨会](https://www.postman.com/events/webinars/)
- [Postman认证](https://academy.postman.com/)
- [API-first开发](https://www.postman.com/api-first/)
- [Postman博客](https://blog.postman.com/)

</v-clicks>

</div>
</div>

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

<v-click>

<div class="text-center mt-10">

## 开始使用Postman提升您的API开发工作流程！

[立即下载Postman](https://www.postman.com/downloads/)

</div>

</v-click>
