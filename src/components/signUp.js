import { useFormik } from "formik";
import * as yup from 'yup';
import { FiSmartphone } from "react-icons/fi"
import { FiUnlock } from "react-icons/fi"
import { FiUser } from "react-icons/fi"


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

    })
  })

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="md:border p-4 px-6 rounded-lg max-w-[350px] w-full">

        <div className="flex flex-col items-start gap-y-2 mt-5">
          <div className={`${!formik.errors.name && formik.touched.name && "border-blue-600"} bg-white w-full px-2 py-1 flex items-center justify-start rounded-full border ${formik.errors.name && formik.touched.name && "border-red-500"}`}>
            <FiUser className={`${!formik.errors.name && formik.touched.name && "text-blue-600"} text-2xl ml-2 text-gray-500`} />
            <input
              type={"text"}
              name="name"
              {...formik.getFieldProps("name")}
              id="name"
              className={`${!formik.errors.name && formik.touched.name && "text-blue-600"} w-full outline-none bg-white px-2 py-3 rounded-full`}
              placeholder="alireza..."
            />
          </div>
          {formik.errors.name && formik.touched.name && <span className="text-red-500 w-full text-right block">{formik.errors.name}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-5">
          <div className={`${!formik.errors.email && formik.touched.email && "border-blue-600"} bg-white px-2 py-1 w-full flex items-center justify-start rounded-full border ${formik.errors.email && formik.touched.email && "border-red-500"}`}>
            <FiSmartphone className={`${!formik.errors.email && formik.touched.email && "text-blue-600"} text-2xl ml-2 text-gray-500`} />
            <input
              name="email"
              type={"text"}
              {...formik.getFieldProps("email")}
              id="email"
              className={`${!formik.errors.email && formik.touched.email && "text-blue-600"} w-full outline-none bg-white px-2 py-3 rounded-full`}
              placeholder="ali@gmail.com..."
            />
          </div>
          {formik.errors.email && formik.touched.email && <span className="text-red-500 w-full text-right block">{formik.errors.email}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-5">
          <div className={`${!formik.errors.phoneNumber && formik.touched.phoneNumber && "border-blue-600"} bg-white px-2 py-1 w-full flex items-center justify-start rounded-full border ${formik.errors.phoneNumber && formik.touched.phoneNumber && "border-red-500"}`}>
            <FiSmartphone className={`${!formik.errors.phoneNumber && formik.touched.phoneNumber && "text-blue-600"} text-2xl ml-2 text-gray-500`} />
            <input
              name="phoneNumber"
              inputMode="numeric"
              type={"text"}
              {...formik.getFieldProps("phoneNumber")}
              id="phoneNumber"
              className={`${!formik.errors.phoneNumber && formik.touched.phoneNumber && "text-blue-600"} w-full outline-none bg-white px-2 py-3 rounded-full`}
              placeholder="09415648515"
            />
          </div>
          {formik.errors.phoneNumber && formik.touched.phoneNumber && <span className="text-red-500 w-full text-right block">{formik.errors.phoneNumber}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-5">
          <div className={`${!formik.errors.password && formik.touched.password && "border-blue-600"} bg-white px-2 py-1 w-full flex items-center justify-start rounded-full border ${formik.errors.password && formik.touched.password && "border-red-500"}`}>
            <FiUnlock className={`${!formik.errors.password && formik.touched.password && "text-blue-600"} text-2xl ml-2 text-gray-500`} />
            <input
              type={"text"}
              name="password"
              {...formik.getFieldProps("password")}
              id="password"
              className={`${!formik.errors.password && formik.touched.password && "text-blue-600"} w-full outline-none bg-white px-2 py-3 rounded-full`}
              placeholder="A562cxs5a..."
            />
          </div>
          {formik.errors.password && formik.touched.password && <span className="text-red-500 w-full text-right block">{formik.errors.password}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-5">
          <div className={`${!formik.errors.passwordConfirm && formik.touched.passwordConfirm && "border-blue-600"} bg-white px-2 py-1 w-full flex items-center justify-start rounded-full border ${formik.errors.passwordConfirm && formik.touched.passwordConfirm && "border-red-500"}`}>
            <FiUnlock className={`${!formik.errors.passwordConfirm && formik.touched.passwordConfirm && "text-blue-600"} text-2xl ml-2 text-gray-500`} />
            <input
              type={"text"}
              name="passwordConfirm"
              {...formik.getFieldProps("passwordConfirm")}
              id="passwordConfirm"
              className={`${!formik.errors.passwordConfirm && formik.touched.passwordConfirm && "text-blue-600"} w-full outline-none bg-white px-2 py-3 rounded-full`}
              placeholder="A562cxs5a..."
            />
          </div>
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <span className="text-red-500 w-full text-right block">{formik.errors.passwordConfirm}</span>}
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="w-2/3 py-3 bg-blue-500 text-white font-sans mt-8 rounded-full font-bold">CREATE</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;