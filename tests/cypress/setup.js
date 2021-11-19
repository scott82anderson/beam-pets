const dotenv = require("dotenv");
const got = require("got");
const waitOn = require("wait-on");

dotenv.config({
  path: ".env",
});

(async () => {
  console.log("Awaiting API...");
  await waitOn({
    resources: [process.env.CYPRESS_API_HOST],
    timeout: 30 * 1000,
  });

  console.log("Resetting API...");
  try {
    await got.post(`${process.env.CYPRESS_API_HOST}/reset`);
  } catch (error) {
    console.log(error.response.body);
  }

  console.log("Awaiting Next.js build...");
  await waitOn({
    resources: [process.env.CYPRESS_BASE_URL],
    timeout: 3 * 60 * 1000,
  });

  console.log("Starting cypress...");
  process.exit(0);
})();
