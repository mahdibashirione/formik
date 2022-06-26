import { useFormik } from "formik";
import * as yup from 'yup';
import { FiSmartphone } from "react-icons/fi"
import { FiUnlock } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import Input from "./common/input";


const SignUp = () => {

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
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

    }),
    validateOnMount: true,
  })

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="md:border p-4 px-6 rounded-lg max-w-[350px] w-full">

        <Input formik={formik} name="name" lable="name" />
        <Input formik={formik} name="email" lable="Email" type="email" />
        <Input formik={formik} name="phoneNumber" lable="Phone Number" />
        <Input
          formik={formik}
          name="password" l
          lable="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          lable="Password Confirmation"
          type="password"
        />

        <div className="w-full flex items-center justify-center">
          <button disabled={!formik.isValid} className={`${!formik.isValid ? "opacity-50" : "opacity-100"} w-2/3 py-3 bg-blue-500 text-white font-sans mt-8 rounded-full font-bold`}>CREATE</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;