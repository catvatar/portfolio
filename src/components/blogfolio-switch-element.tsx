import { useSelectedLayoutSegments } from "next/navigation";
import Break from "./break";
import Link from "next/link";

export default function BlogfolioSwitchElement(){
  const onPortfolio = useSelectedLayoutSegments().includes('blog');
  return(
  <div>
    <Break />
    <Link
      href={onPortfolio?'/':'/blog'}
    >
      {onPortfolio?'Portfolio':'Blog'}
    </Link>
  </div>)
}