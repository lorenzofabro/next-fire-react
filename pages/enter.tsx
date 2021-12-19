import { auth, googleAuthProvider } from "../lib/firebase";
import Image from "next/image";

export default function EnterPage({}) {
  const user = null;
  const username = null;

  // 1. user signed out (SignInButton)
  // 2. user signed in, but missing username (UsernameForm)
  // 3. user signed in, and has username (SignOutButton)
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google Authentication
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <Image
        src="/google.png"
        alt="Google SignIn"
        width={40}
        height={40}
      ></Image>
      Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
