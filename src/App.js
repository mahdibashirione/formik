import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import HomePage from "./page/HomePage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";

function App() {
  return (
    <>
      <main className="w-full h-screen md:bg-gray-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
