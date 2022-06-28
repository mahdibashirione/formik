import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4">
      <Link to={"/signin"} className="rounded-lg py-2 px-4 bg-blue-500 text-white text-lg">Login</Link>
      <Link to={"/signup"} className="rounded-lg py-2 px-4 bg-green-500 text-white text-lg">Create Account</Link>
    </div>
  );
}

export default HomePage;