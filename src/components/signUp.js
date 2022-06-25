import { useFormik } from "formik";
import * as yup from 'yup';


const SignUp = () => {

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: (valuse) => console.log(valuse),
    validationSchema: yup.object({
      name: yup.string().required("لطفا نام خود را وارد کنید")
        .min(5, "حداقل تعداد کاراکتر های شما باید 6 عدد باشد").max(13, "حداکثر تعداد کاراکتر های شما باید 13 عدد باشد"),

      email: yup.string().email("ایمیل شما صحیح نمیباشد").required("لطفا ایمیل خود را وارد کنید"),

      phoneNumber: yup.string().required("لطفا شماره خود را وارد کنید").matches(/^[0-9]{11}/, "شماره موبایل شما صحیح نمیباشد").nullable(),

      password: yup.string().required("لطفا یک رمز برای خود انتخاب کنید")
        .min(8, "حداقل باید 8 کاراکتر باشد").matches(/[A-Az-z]/, "باید با حروف بزرگ شروع شود"),

      passwordConfirm: yup.string().required("لطفا رمز خود را دوباره وارد کنید")
        .oneOf([yup.ref('password'), null], "رمز شما مطابقت ندارد"),

    })
  })

  console.log(formik.errors)


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="md:border p-4 px-6 rounded-lg max-w-[350px] w-full">

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="name">Name</lable>
          <input
            type={"text"}
            name="name"
            {...formik.getFieldProps("name")}
            id="name"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.name && formik.touched.name && "border-red-500"}`}
            placeholder="alireza..."
          />
          {formik.errors.name && formik.touched.name && <span className="text-red-500 w-full text-right block">{formik.errors.name}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="email">Email</lable>
          <input
            name="email"
            type={"text"}
            {...formik.getFieldProps("email")}
            id="email"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.email && formik.touched.email && "border-red-500"}`}
            placeholder="ali@gmail.com..."
          />
          {formik.errors.email && formik.touched.email && <span className="text-red-500 w-full text-right block">{formik.errors.email}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="phoneNumber">phone Number</lable>
          <input
            name="phoneNumber"
            inputMode="numeric"
            type={"text"}
            {...formik.getFieldProps("phoneNumber")}
            id="phoneNumber"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.phoneNumber && formik.touched.phoneNumber && "border-red-500"}`}
            placeholder="09415648515"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && <span className="text-red-500 w-full text-right block">{formik.errors.phoneNumber}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="password">Password</lable>
          <input
            type={"text"}
            name="password"
            {...formik.getFieldProps("password")}
            id="password"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.password && formik.touched.password && "border-red-500"}`}
            placeholder="A562cxs5a..."
          />
          {formik.errors.password && formik.touched.password && <span className="text-red-500 w-full text-right block">{formik.errors.password}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="passwordConfirm">Password Confirmation</lable>
          <input
            type={"text"}
            name="passwordConfirm"
            {...formik.getFieldProps("passwordConfirm")}
            id="passwordConfirm"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.passwordConfirm && formik.touched.passwordConfirm && "border-red-500"}`}
            placeholder="A562cxs5a..."
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <span className="text-red-500 w-full text-right block">{formik.errors.passwordConfirm}</span>}
        </div>

        <button className="w-full py-3 bg-blue-500 text-white font-sans mt-8 rounded-lg">sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;