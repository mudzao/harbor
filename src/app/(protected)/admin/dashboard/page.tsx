import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard with overview of site metrics",
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-black aspect-video rounded-xl flex items-center justify-center">
          <div className="text-white font-medium">Card 1</div>
        </div>
        <div className="bg-black aspect-video rounded-xl flex items-center justify-center">
          <div className="text-white font-medium">Card 2</div>
        </div>
        <div className="bg-black aspect-video rounded-xl flex items-center justify-center">
          <div className="text-white font-medium">Card 3</div>
        </div>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  )
} 