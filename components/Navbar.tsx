import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar({}) {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button className="btn-logo">feed</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref>
                <button className="btn-blue">write posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <a>
                  <Image
                    src={user?.photoURL}
                    alt=""
                    width="50px"
                    height="50px"
                  ></Image>
                </a>
              </Link>
            </li>
          </>
        )}

        {/* user is not signed-in OR has not created an username */}
        {!username && (
          <li>
            <Link href="/enter" passHref>
              <button className="btn-blue">log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
