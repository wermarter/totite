import { SignedOut, SignedIn } from "@clerk/nextjs";

import { Images } from "./_components/Images";

// export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="text-center text-2xl">Sign in to view</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
