import express from "express";

const app = express();
const port = 3001;

// 使用express.json()解析JSON请求体
app.use(express.json());

// 模拟数据
let posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 2,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 2,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
];

let comments = [
  {
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate...",
    postId: 1,
  },
  {
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam...",
    postId: 1,
  },
  {
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur...",
    postId: 2,
  },
];

// 获取所有posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// 根据ID获取特定post
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

// 创建新post
app.post("/posts", (req, res) => {
  const newPost = {
    userId: req.body.userId || 1,
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// 更新post
app.put("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  posts[postIndex] = {
    userId: req.body.userId,
    id: id,
    title: req.body.title,
    body: req.body.body,
  };

  res.json(posts[postIndex]);
});

// 部分更新post
app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (req.body.title) {
    posts[postIndex].title = req.body.title;
  }

  if (req.body.body) {
    posts[postIndex].body = req.body.body;
  }

  res.json(posts[postIndex]);
});

// 删除post
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  const deletedPost = posts.splice(postIndex, 1);
  res.json(deletedPost[0]);
});

// 获取所有users
app.get("/users", (req, res) => {
  res.json(users);
});

// 根据ID获取特定user
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// 创建新user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// 更新user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = {
    id: id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
  };

  res.json(users[userIndex]);
});

// 删除user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

// 获取所有comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// 根据ID获取特定comment
app.get("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((c) => c.id === id);

  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  res.json(comment);
});

// 根据postId获取comments
app.get("/posts/:postId/comments", (req, res) => {
  const postId = parseInt(req.params.postId);
  const postComments = comments.filter((c) => c.postId === postId);

  res.json(postComments);
});

// 创建新comment
app.post("/comments", (req, res) => {
  const newComment = {
    id: comments.length + 1,
    name: req.body.name,
    email: req.body.email,
    body: req.body.body,
    postId: req.body.postId,
  };

  comments.push(newComment);
  res.status(201).json(newComment);
});

// 搜索posts
app.get("/search/posts", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: "Query parameter 'q' is required" });
  }

  const results = posts.filter(
    (post) =>
      post.title.includes(query) || post.body.includes(query)
  );

  res.json(results);
});

// 搜索users
app.get("/search/users", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: "Query parameter 'q' is required" });
  }

  const results = users.filter(
    (user) =>
      user.name.includes(query) ||
      user.username.includes(query) ||
      user.email.includes(query)
  );

  res.json(results);
});

// 登录端点（模拟）
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  
  // 模拟验证
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  
  // 模拟成功登录
  const user = users.find(u => u.username === username);
  if (user) {
    return res.json({
      message: "Login successful",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // 模拟JWT token
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email
      }
    });
  }
  
  res.status(401).json({ message: "Invalid credentials" });
});

// 受保护的端点示例
app.get("/profile", (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  // 模拟验证token
  const token = authHeader.substring(7); // 移除 "Bearer " 前缀
  if (token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...") {
    return res.json({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    });
  }
  
  res.status(401).json({ message: "Invalid token" });
});

// 帮助端点 - 列出所有可用的路由
app.get("/help", (req, res) => {
  const routes = {
    message: "Available API endpoints",
    endpoints: [
      { method: "GET", path: "/posts", description: "获取所有文章" },
      { method: "GET", path: "/posts/:id", description: "根据ID获取特定文章" },
      { method: "POST", path: "/posts", description: "创建新文章" },
      { method: "PUT", path: "/posts/:id", description: "更新文章" },
      { method: "PATCH", path: "/posts/:id", description: "部分更新文章" },
      { method: "DELETE", path: "/posts/:id", description: "删除文章" },
      { method: "GET", path: "/users", description: "获取所有用户" },
      { method: "GET", path: "/users/:id", description: "根据ID获取特定用户" },
      { method: "POST", path: "/users", description: "创建新用户" },
      { method: "PUT", path: "/users/:id", description: "更新用户" },
      { method: "DELETE", path: "/users/:id", description: "删除用户" },
      { method: "GET", path: "/comments", description: "获取所有评论" },
      { method: "GET", path: "/comments/:id", description: "根据ID获取特定评论" },
      { method: "GET", path: "/posts/:postId/comments", description: "根据postId获取评论" },
      { method: "POST", path: "/comments", description: "创建新评论" },
      { method: "GET", path: "/search/posts", description: "搜索文章 (查询参数: q)" },
      { method: "GET", path: "/search/users", description: "搜索用户 (查询参数: q)" },
      { method: "POST", path: "/login", description: "用户登录" },
      { method: "GET", path: "/profile", description: "获取用户资料 (需要Bearer Token认证)" },
    ]
  };
  res.json(routes);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});