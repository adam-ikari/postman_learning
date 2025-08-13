# Postman Learning

这是一个用于学习Postman的演示项目。

## 启动演示

```bash
npm install
npm run dev
```

## 启动Mock API服务器

为了更好地演示Postman的功能，我们创建了一个本地的Mock API服务器。

```bash
npm run mock-api
```

服务器将在 http://localhost:3001 启动，提供以下端点：

- `GET /posts` - 获取所有文章
- `GET /posts/:id` - 获取特定文章
- `POST /posts` - 创建新文章
- `PUT /posts/:id` - 更新文章
- `PATCH /posts/:id` - 部分更新文章
- `DELETE /posts/:id` - 删除文章
- `GET /users` - 获取所有用户
- `GET /users/:id` - 获取特定用户

## 构建

```bash
npm run build
```