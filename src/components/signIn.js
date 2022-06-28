import { useFormik } from "formik";
import * as yup from 'yup';
import Input from "./common/input";
import { FiUser } from "react-icons/fi"
import { FiUnlock } from "react-icons/fi"
import { Link } from "react-router-dom";

const SignIn = () => {

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (valuse) => console.log(valuse),
    validationSchema: yup.object({
      email: yup.string().required("ایمیل خود را وارد کنید").email("ایمیل نامعتبر است"),
      password: yup.string().required("رمز خود را وارد کنید")
    }),
    validateOnMount: true,
  })

  return (
    <div className="container w-screen h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-end">
        <div className="w-[calc(100%-5%)] h-[calc(100%-5%)] bg-purple-500 rounded-l-xl"></div>
      </div>
      <form onSubmit={formik.handleSubmit} className="md:w-1/2 h-full w-full flex items-center md:justify-start justify-center">
        <div className="w-[calc(100%-5%)] h-[calc(100%-5%)] md:bg-white rounded-r-xl flex items-center justify-center">
          <div className="w-full md:max-h-full overflow-scroll max-w-[300px]">
            <h2 className="w-full text-center font-sans text-3xl mb-10">SIGN IN</h2>
            <Input formik={formik} name="email" lable="Email" type="email">
              <FiUser className="ml-2 text-2xl" />
            </Input>
            <Input formik={formik} name="password" l lable="Password" type="password">
              <FiUnlock className="ml-2 text-2xl" />
            </Input>
            <div className="w-full flex items-center justify-end mt-2">
              <Link to={"/"} className="text-sm">Reset Password ?</Link>
            </div>
            <div className="w-full flex items-center justify-center">
              <button disabled={!formik.isValid} className={`${!formik.isValid ? "opacity-50" : "opacity-100"} w-2/3 py-3 bg-blue-500 text-white font-sans mt-8 rounded-full font-bold`}>CREATE</button>
            </div>
            <div className="w-full flex items-center justify-center mt-10 text-sm">
              <span>Don`t have an account ?</span>
              <Link to={"/signup"} className="text-blue-500 font-bold ml-2">Create Account</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;