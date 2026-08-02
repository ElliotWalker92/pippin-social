import { defineCliConfig } from "sanity/cli";

const projectId = "uez78jeb";
const dataset = "production";

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: {
    appId: "dskyvaxohgjmxje93gd7hwrr",
  },
});
