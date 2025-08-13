import express from "express";

const port = 3001;
const app = express();

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
];

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
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

// 启动服务器
app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});
