#!/usr/bin/env zx

const server =
"https://229e9d7f-c263-4ab5-9ce0-381ae1b9f895.poki-gdn.com/34e0bfdd-87bc-4780-9bd4-5a5f81efd968/"

const user_agent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";

const process = require("node:process");

// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on("SIGINT", () => {
  console.log("Received SIGINT. Press Control-D to exit.");
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on("SIGINT", handle);
process.on("SIGTERM", handle);

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

// 以上，不是很理解，凑合用

rl.on("line", (input) => {
  //   console.log(`Received: ${input}`);
  if (input.indexOf("Error (404)") > 0) {
    // let url = input.match(/ [A-z0-9/\-\.]+\"/g);
    // 匹配 http-server 的输出，T 是 GET 或 POST，通常是 GET
    let url = input.match(/T .+\" Error \(404\)/);
    url = url && url[0].substring(2, url[0].indexOf('" Error (404)'));
    console.log(url);
    download(url);
  }
});

const set = new Set();

/**
 *
 * @param {string} p1
 * @returns
 */
async function download(p1) {
  if (set.has(p1)) return;
  set.add(p1);

  var cmd = "";
  if (p1.startsWith("/")) p1 = "." + p1;
  const p = decodeURI(p1);
  let ext = path.extname(p);
  if (ext) fs.mkdirSync(path.dirname(p), { recursive: true });
  if (ext && !fs.existsSync(p)) {
    var from = `${server}${p1}`;
    var to = `${p}`;
  }
  if (from) {
    console.log(cmd);
    if (from.indexOf("?") >= 0) from = from.substring(0, from.indexOf("?"));
    if (to.indexOf("?") >= 0) to = to.substring(0, to.indexOf("?"));

    // await $`curl "${from}" > "${to}";`;
    await $`curl --user-agent ${user_agent} ${from} > ${to};`;
    // cmd = "curl " + from + " > " + to;
    // await $(cmd);
  }
}
