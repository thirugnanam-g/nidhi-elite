import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"

const supabaseUrl =
  process.env.SUPABASE_POSTGRES_URL?.replace("postgresql://", "https://") ||
  process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function uploadImages() {
  const imagesDir = path.join(process.cwd(), "public", "images")

  if (!fs.existsSync(imagesDir)) {
    console.log("No images directory found")
    return
  }

  const files = fs.readdirSync(imagesDir)
  const uploadedUrls: Record<string, string> = {}

  console.log(`Found ${files.length} images to upload...`)

  for (const file of files) {
    const filePath = path.join(imagesDir, file)
    const fileBuffer = fs.readFileSync(filePath)
    const fileName = `images/${file}`

    try {
      const { data, error } = await supabase.storage.from("assets").upload(fileName, fileBuffer, {
        cacheControl: "3600",
        upsert: true,
        contentType: `image/${path.extname(file).slice(1)}`,
      })

      if (error) {
        console.error(`Failed to upload ${file}:`, error.message)
        continue
      }

      const { data: publicUrl } = supabase.storage.from("assets").getPublicUrl(fileName)

      uploadedUrls[`/images/${file}`] = publicUrl.publicUrl
      console.log(`✓ Uploaded ${file}`)
    } catch (err) {
      console.error(`Error uploading ${file}:`, err)
    }
  }

  // Save mapping for reference
  fs.writeFileSync(path.join(process.cwd(), "scripts", "image-urls.json"), JSON.stringify(uploadedUrls, null, 2))

  console.log(`\nUpload complete! ${Object.keys(uploadedUrls).length} images uploaded.`)
  console.log("Image URL mapping saved to scripts/image-urls.json")
}

uploadImages().catch(console.error)
