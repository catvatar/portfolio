'use client'

import { useSelectedLayoutSegments } from "next/navigation";
import Break from "./break";
import Link from "next/link";

function generateURL( selectedLayoutSegments ){
  const targetSelectedLayoutSegments = selectedLayoutSegments.includes('blog')?selectedLayoutSegments.filter(item=>item!='blog'):['blog', ...selectedLayoutSegments];
  return targetSelectedLayoutSegments.reduce((URL, item) => {return URL + `${item}/`},'/');
}

export default function BlogfolioSwitchElement({ availableRouts }){
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const isBlog = selectedLayoutSegments.includes('blog');
  return(
  <div>
    <Link
      href={(isBlog?availableRouts.portfolio:availableRouts.blog).includes(selectedLayoutSegments.at(-1))?generateURL(selectedLayoutSegments):(isBlog?'/':'/blog')}
      prefetch={true}
    >
      {isBlog?'Portfolio':'Blog'}
    </Link>
  </div>)
}