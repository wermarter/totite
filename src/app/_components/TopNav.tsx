"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useEffect, useState } from "react";

import { UploadButton } from "./UploadButton";

export function TopNav() {
  const router = useRouter();

  // const [hasMounted, setHasMounted] = useState(false);
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }

  return (
    <div className="flex items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">
        <div>Gallery</div>
      </Link>
      <div className="flex gap-10">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            onComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
