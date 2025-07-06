import AppAsset from "@/core/AppAsset"
import DefaultLayout from "@/layouts/default-layout"
import Image from "next/image"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col items-center justify-center pt-0">
        {/* Hero */}
        <div className="w-full h-80 ">
          <Image
            src={AppAsset.HeroImage}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </DefaultLayout>
  )
}
