import sharp from "sharp"
import fs from "fs"
import path from "path"

const SUPABASE_URL = "https://dylrlrpqagnbcblddglk.supabase.co/storage/v1/object/public/assets"
const IMAGES_TO_CONVERT = [
  "butterfly-logo.jpg",
  "nidhi-elite-og-image.jpg",
  "site-layout.jpg",
  "IMG-20250929-WA0008.jpg",
]

async function convertToWebP() {
  console.log("[v0] Starting image conversion to WebP format...")

  for (const image of IMAGES_TO_CONVERT) {
    try {
      const inputPath = path.join(process.cwd(), "public", "images", image)
      const outputPath = path.join(process.cwd(), "public", "images", image.replace(/\.(jpg|png)$/i, ".webp"))

      if (!fs.existsSync(inputPath)) {
        console.log(`[v0] Skipping ${image} - file not found`)
        continue
      }

      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath)

      console.log(`[v0] ✓ Converted ${image} to WebP`)
    } catch (error) {
      console.error(`[v0] Error converting ${image}:`, error)
    }
  }

  console.log("[v0] Image conversion complete!")
  console.log("[v0] Note: Upload WebP versions to Supabase for better performance")
}

convertToWebP()
