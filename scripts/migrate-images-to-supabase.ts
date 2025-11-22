import { createClient } from "@supabase/supabase-js"
import * as fs from "fs"
import * as path from "path"

const supabaseUrl = process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("[v0] Missing Supabase credentials")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function uploadImagesToSupabase() {
  const imagesDir = path.join(process.cwd(), "public", "images")
  const files = fs.readdirSync(imagesDir)

  console.log(`[v0] Found ${files.length} images to upload`)

  for (const file of files) {
    const filePath = path.join(imagesDir, file)
    const fileBuffer = fs.readFileSync(filePath)
    const remotePath = `images/${file}`

    try {
      const { data, error } = await supabase.storage.from("assets").upload(remotePath, fileBuffer, {
        cacheControl: "31536000",
        upsert: true,
        contentType: `image/${file.split(".").pop()}`,
      })

      if (error) {
        console.error(`[v0] Error uploading ${file}:`, error.message)
      } else {
        console.log(`[v0] ✅ Uploaded: ${file}`)
      }
    } catch (err) {
      console.error(`[v0] Failed to upload ${file}:`, err)
    }
  }

  console.log("[v0] Image migration complete!")
}

uploadImagesToSupabase()
