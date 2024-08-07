const exp = require("express");
const users = require("./MOCK_DATA.json");
const app = exp();

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
   <ul>
   ${users.map((m) => `<li>${m.first_name}</li>`).join("")}
   </ul>
   `;
  res.send(html);
});

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;
//   const u = users.find((x) => x.id == id);

//   return res.send(u);
// });

app.post("/api/users", (req, res) => {
  res.json({ status: "pending" });
});

// app.patch("/api/users/:id", (req, res) => {
//   res.json({ status: "pending" });
// });
// app.delete("/api/users/:id", (req, res) => {
//   res.json({ status: "pending" });
// });

//ShortForm
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const u = users.find((x) => x.id == id);
    return res.send(u);
  })
  .patch((req, res) => {
    res.json({ status: "pending" });
  })
  .delete((req, res) => {
    res.json({ status: "pending" });
  });

app.listen(8000, () => console.log("Server started"));
