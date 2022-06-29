import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4">
      <div className="w-full h-full container flex flex-col md:flex-row items-center justify-center">
        <div className="p-4 w-[calc(100%-5%)] h-[calc(100%-5%)] md:bg-green-600 md:rounded-l-lg flex items-center justify-center" >
          <div className="w-2/3">
            <img className="w-full object-cover" src="/assets/image/login.svg" alt="logoLogin" />
          </div>
        </div>
        <div className="w-[calc(100%-5%)] h-[calc(100%-5%)] bg-white md:rounded-r-lg" >bashiri</div>
      </div>
      {/*<Link to={"/signin"} className="rounded-lg py-2 px-4 bg-blue-500 text-white text-lg">Login</Link>*/}
      {/*<Link to={"/signup"} className="rounded-lg py-2 px-4 bg-green-500 text-white text-lg">Create Account</Link>*/}
    </div>
  );
}

export default HomePage;