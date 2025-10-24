import { createClient } from "@supabase/supabase-js"
import * as fs from "fs"
import * as path from "path"

const supabaseUrl = process.env.SUPABASE_URL || "https://dylrlrpqagnbcblddglk.supabase.co"
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bHJscnBxYWduYmNibGRkZ2xrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDkxOTgxMSwiZXhwIjoyMDc2NDk1ODExfQ.Bysa50kT5S-9a08vTX1dl-85Jovsa2kfuxQfVVgKEHA"

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function uploadImagesToSupabase() {
  const publicImagesDir = path.join(process.cwd(), "public", "images")

  if (!fs.existsSync(publicImagesDir)) {
    console.log("[v0] Images directory not found")
    return
  }

  const files = fs.readdirSync(publicImagesDir)
  console.log(`[v0] Found ${files.length} images to upload`)

  for (const file of files) {
    const filePath = path.join(publicImagesDir, file)
    const fileBuffer = fs.readFileSync(filePath)

    try {
      const { data, error } = await supabase.storage.from("assets").upload(`images/${file}`, fileBuffer, {
        cacheControl: "31536000",
        upsert: true,
        contentType: `image/${file.split(".").pop()}`,
      })

      if (error) {
        console.log(`[v0] Error uploading ${file}:`, error.message)
      } else {
        console.log(`[v0] Successfully uploaded ${file}`)
      }
    } catch (err) {
      console.log(`[v0] Exception uploading ${file}:`, err)
    }
  }

  console.log("[v0] Image upload complete!")
}

uploadImagesToSupabase()
