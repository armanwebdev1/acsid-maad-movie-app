import Link from "next/link";

const BackButton = () => (
  <Link href="/">
    <button className="bg-netflix-red px-5 py-2 rounded-lg font-semibold transition duration-300 hover:bg-red-700">
      ← Back to Home
    </button>
  </Link>
);

export default BackButton;
