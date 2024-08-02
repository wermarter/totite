import { SignedOut, SignedIn } from "@clerk/nextjs";

import { Images } from "./_components/Images";
import { Suspense } from "react";

// export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="text-center text-2xl">Sign in to view</div>
      </SignedOut>
      <SignedIn>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Images />
        </Suspense>
      </SignedIn>
    </main>
  );
}
