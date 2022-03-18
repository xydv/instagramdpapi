const idp = require("instagramdp");
const app = require("express")();
app.get("/:username", async (req, res) => {
    res.send(await idp.getDP(req.params.username))
});
app.get("/", (req, res) => {
    res.send({ status: 404, picture: "No API Found On This End-Point" });
})
app.listen(3000);