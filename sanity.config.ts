import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "default",
  title: "Nidhi Elite CMS",
  projectId: "9vgq2wji",
  dataset: "nidhielite",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
