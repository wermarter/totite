import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <div className="flex items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
