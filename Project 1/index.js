const exp = require("express");
const users = require("./MOCK_DATA.json");
const app = exp();
const fs = require("fs");

//plugin
app.use(exp.urlencoded({ extended: false }));

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
  const b = req.body;
  //console.log(b);
  users.push({ ...b, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (e, result) => {
    return res.send({ status: "success", id: users.length });
  });
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
    const id = req.params.id;
    const updatedData = req.body;
    const u = users.find((x) => x.id == id);
    if (!u) {
      return res.send("couldnt find User");
    }
    if (updatedData.first_name) u.first_name = updatedData.first_name;
    if (updatedData.last_name) u.last_name = updatedData.last_name;
    if (updatedData.email) u.email = updatedData.email;
    if (updatedData.gender) u.gender = updatedData.gender;
    if (updatedData.job_title) u.job_title = updatedData.job_title;
    const updatedUsers = users.map((data) => (data.id === id ? u : data));
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(updatedUsers),
      (e, data) => {
        return res.send({ status: "success", id: id });
      }
    );
  })
  .delete((req, res) => {
    const id = req.params.id;
    const newUsers = users.filter((x) => x.id != id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers), (e, data) => {
      return res.send({ status: "success", id: id });
    });
  });

app.listen(8000, () => console.log("Server started"));
