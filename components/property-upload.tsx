"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, ImageIcon } from "lucide-react"

export function PropertyUpload() {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const newImages = [...selectedImages, ...files].slice(0, 10) // Max 10 images
    setSelectedImages(newImages)

    // Create preview URLs
    const newPreviewUrls = newImages.map((file) => URL.createObjectURL(file))
    setPreviewUrls(newPreviewUrls)
  }

  const removeImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index)
    const newPreviews = previewUrls.filter((_, i) => i !== index)

    setSelectedImages(newImages)
    setPreviewUrls(newPreviews)
  }

  const handleUpload = async () => {
    if (selectedImages.length === 0) return

    setIsUploading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      alert(`Successfully uploaded ${selectedImages.length} images!`)

      // Clear selections
      setSelectedImages([])
      setPreviewUrls([])
    } catch (error) {
      alert("Upload failed. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          Upload Property Images
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* File Input */}
        <div>
          <Label htmlFor="images" className="text-sm font-medium">
            Select Images (Max 10)
          </Label>
          <div className="mt-2">
            <Input
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageSelect}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>
        </div>

        {/* Image Previews */}
        {previewUrls.length > 0 && (
          <div>
            <Label className="text-sm font-medium">Preview ({previewUrls.length}/10)</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <img
                    src={url || "/placeholder.svg"}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Button */}
        <Button onClick={handleUpload} disabled={selectedImages.length === 0 || isUploading} className="w-full">
          {isUploading ? (
            "Uploading..."
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Upload {selectedImages.length} Image{selectedImages.length !== 1 ? "s" : ""}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
