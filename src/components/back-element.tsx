'use client'

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation"

export default function BackElement(){
  const selectedLayoutSegments = useSelectedLayoutSegments();
  return(<div className={clsx('judtify-self-start', {'hidden' : selectedLayoutSegments.length === 0})}>
  <Link href="/">
    <div className="hover:text-gray-400">
      Back
    </div>
  </Link>
</div>)
}