import { useFormik } from "formik";

const SignUp = () => {

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: (valuse) => console.log(valuse),
    validate: (valuse) => {
      let errors = {}

      if (!valuse.name) {
        errors.name = "لطفا نام خود را وارد کنید"
      }

      if (!valuse.email) {
        errors.email = "لطفا ایمیل خود را وارد کنید"
      }

      if (!valuse.password) {
        errors.password = "لطفا رمز خود را وارد کنید"
      }

      return errors;
    }
  })

  console.log(formik.errors)


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="md:border p-4 px-6 rounded-lg max-w-[350px] w-full">

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="name">Name</lable>
          <input
            onChange={formik.handleChange}
            type={"text"}
            name="name"
            onBlur={formik.handleBlur}
            id="name"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.name && formik.touched.name && "border-red-500"}`}
            placeholder="alireza..."
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && <span className="text-red-500 w-full text-right block">{formik.errors.name}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="email">Email</lable>
          <input
            onChange={formik.handleChange}
            type={"text"}
            name="email"
            onBlur={formik.handleBlur}
            id="email"
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.email && formik.touched.email && "border-red-500"}`}
            placeholder="ali@gmail.com..."
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && <span className="text-red-500 w-full text-right block">{formik.errors.email}</span>}
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="password">Password</lable>
          <input
            type={"text"}
            name="password"
            onBlur={formik.handleBlur}
            id="password"
            onChange={formik.handleChange}
            className={`w-full outline-none bg-gray-200 px-4 py-3 rounded-lg border ${formik.errors.password && formik.touched.password && "border-red-500"}`}
            placeholder="A562cxs5a..."
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && <span className="text-red-500 w-full text-right block">{formik.errors.password}</span>}
        </div>

        <button className="w-full py-3 bg-blue-500 text-white font-sans mt-8 rounded-lg">sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;