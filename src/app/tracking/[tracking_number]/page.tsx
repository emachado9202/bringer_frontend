'use client'
import TrackingView from '@/components/TrackingView';

export default function Home({ params }: { params: { tracking_number: string } }) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <TrackingView tracking_number={params.tracking_number} />
      </div>
    </main>
  )
}
