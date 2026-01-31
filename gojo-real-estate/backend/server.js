require("dotenv").config();
const connectDB = require("./db");
connectDB();

const http = require("http");
const fs = require("fs");
const path = require("path");
const Contact = require("./models/Contact");

const PORT = 5001;

/* Helper: send JSON */
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  /* CORS preflight */
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  /* TEST ROUTE */
  if (req.method === "GET" && req.url === "/api/test") {
    sendJSON(res, 200, { message: "Backend connected successfully 🚀" });
    return;
  }

  /* POST CONTACT MESSAGE */
  if (req.method === "POST" && req.url === "/api/contact") {
    let body = "";

    req.on("data", chunk => (body += chunk.toString()));

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        if (!data.name || !data.email || !data.message) {
          return sendJSON(res, 400, { error: "All fields are required" });
        }

        await Contact.create({
          name: data.name,
          email: data.email,
          message: data.message,
        });

        sendJSON(res, 200, { success: true, message: "Message saved" });
      } catch (error) {
        console.error(error);
        sendJSON(res, 500, { error: "Server error" });
      }
    });

    return;
  }

  /* GET CONTACT MESSAGES */
  if (req.method === "GET" && req.url === "/api/messages") {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      sendJSON(res, 200, messages);
    } catch (error) {
      sendJSON(res, 500, { error: "Failed to load messages" });
    }
    return;
  }

  /* GET PROPERTIES */
  if (req.method === "GET" && req.url === "/api/properties") {
    const filePath = path.join(__dirname, "properties.json");
    const data = fs.readFileSync(filePath, "utf8");
    sendJSON(res, 200, JSON.parse(data));
    return;
  }

  /* FALLBACK */
  sendJSON(res, 404, { message: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
