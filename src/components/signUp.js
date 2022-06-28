import { useFormik } from "formik";
import * as yup from 'yup';
import { FiSmartphone } from "react-icons/fi"
import { FiUnlock } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import Input from "./common/input";
import Radio from "./common/radio";
import { Link } from "react-router-dom";

const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      passwordConfirm: "",
      gender: ""
    },
    onSubmit: (valuse) => console.log(valuse),
    validationSchema: yup.object({
      name: yup.string().required("لطفا نام خود را وارد کنید")
        .min(5, "حداقل تعداد کاراکتر های شما باید 6 عدد باشد")
        .max(13, "حداکثر تعداد کاراکتر های شما باید 13 عدد باشد"),

      email: yup.string().email("ایمیل شما صحیح نمیباشد")
        .required("لطفا ایمیل خود را وارد کنید"),

      phoneNumber: yup.string().required("لطفا شماره خود را وارد کنید")
        .matches(/^[0-9]{11}/, "شماره موبایل شما صحیح نمیباشد").nullable(),

      password: yup.string().required("لطفا یک رمز برای خود انتخاب کنید")
        .min(8, "حداقل باید 8 کاراکتر باشد"),

      passwordConfirm: yup.string().required("لطفا رمز خود را دوباره وارد کنید")
        .oneOf([yup.ref('password'), null], "رمز شما مطابقت ندارد"),

      gender: yup.string().required("لطفا جنسیت خود را وارد کنید")
    }),
    validateOnMount: true,
  })

  const radioData = [
    { lable: "male", id: "1", formik, name: "gender" },
    { lable: "female", id: "2", formik, name: "gender" },
  ]

  return (
    <div className="container w-screen h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-end">
        <div className="w-[calc(100%-5%)] h-[calc(100%-5%)] bg-blue-500 rounded-l-xl"></div>
      </div>
      <form onSubmit={formik.handleSubmit} className="md:w-1/2 h-full w-full flex items-center md:justify-start justify-center">
        <div className="w-[calc(100%-5%)] h-[calc(100%-5%)] md:bg-white rounded-r-xl flex items-center justify-center">
          <div className="w-full md:max-h-full overflow-scroll max-w-[300px] max-h-screen">
            <h2 className="w-full text-center font-sans text-3xl my-8">Sign Up</h2>
            <Input formik={formik} name="name" lable="name" >
              <FiUser className="ml-2 text-2xl" />
            </Input>
            <Input formik={formik} name="email" lable="Email" type="email">
              <FiUser className="ml-2 text-2xl" />
            </Input>
            <Input formik={formik} name="phoneNumber" lable="Phone Number">
              <FiSmartphone className="ml-2 text-2xl" />
            </Input>
            <Input formik={formik} name="password" l lable="Password" type="password">
              <FiUnlock className="ml-2 text-2xl" />
            </Input>
            <Input formik={formik} name="passwordConfirm" lable="Password Confirmation" type="password">
              <FiUnlock className="ml-2 text-2xl" />
            </Input>
            <div className="w-full flex items-center justify-start gap-x-4 flex-wrap px-2 mt-4">
              {radioData.map(radio => {
                return (
                  <Radio
                    key={radio.id}
                    formik={radio.formik}
                    name={radio.name}
                    id={radio.id}
                    lable={radio.lable}
                  />
                )
              })}
            </div>
            <div className="w-full flex items-center justify-center">
              <button disabled={!formik.isValid} className={`${!formik.isValid ? "opacity-50" : "opacity-100"} w-2/3 py-3 bg-blue-500 text-white font-sans mt-8 rounded-full font-bold`}>CREATE</button>
            </div>
            <div className="w-full flex items-center justify-center my-10 text-sm">
              <span>Already have an account ?</span>
              <Link to={"/signin"} className="text-blue-500 font-bold ml-2">Login Here</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;