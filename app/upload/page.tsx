import { PropertyUpload } from "@/components/property-upload"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Upload Property Images</h1>
          <p className="text-xl text-muted-foreground">Add beautiful images to showcase your property</p>
        </div>
        <PropertyUpload />
      </div>
    </div>
  )
}
