import Link from "next/link";

import Image from "next/image";


    
 
export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none"
    >
      <div className="flex h-25 w-25 items-center justify-center  ">
  <Image
      src="/logo.png"
      alt="Logo"
      width={120}
      height={120}
    />
      </div>

      <div className="leading-tight">
        <h1 className="text-lg font-bold">
          DestinySphere
        </h1>

        <p className="text-xs text-muted-foreground">
          Discover. Understand. Transform.
        </p>
      </div>
    </Link>
  );
}