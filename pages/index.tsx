import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast("toasted", { icon: "🍆" })}>toast me</button>
    </div>
  );
}
