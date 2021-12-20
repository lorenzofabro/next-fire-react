import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1>404 - that page does not seem to exist 😥</h1>
      <iframe
        src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/" passHref>
        <button className="btn-blue">go home 🏡</button>
      </Link>
    </main>
  );
}
