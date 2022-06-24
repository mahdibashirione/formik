import { useFormik } from "formik";

const SignUp = () => {

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
  })

  console.log(formik)

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="border p-4 rounded-lg max-w-[350px] w-full">
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="name">Name</lable>
          <input
            onChange={formik.handleChange}
            type={"text"}
            name="name"
            id="name"
            className="w-full px-4 py-3 bg-gray-200 rounded-lg"
            placeholder="alireza..."
            value={formik.values.name}
          />
        </div>
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="email">Email</lable>
          <input
            onChange={formik.handleChange}
            type={"text"}
            name="email"
            id="email"
            className="w-full px-4 py-3 bg-gray-200 rounded-lg"
            placeholder="ali@gmail.com..."
            value={formik.values.email}
          />
        </div>
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-slate-800 font-sans" for="password">Password</lable>
          <input
            onChange={formik.handleChange}
            type={"text"}
            name="password"
            id="password"
            className="w-full px-4 py-3 bg-gray-200 rounded-lg"
            placeholder="A562cxs5a..."
            value={formik.values.password}
          />
        </div>
        <button className="w-full py-3 bg-blue-500 text-white font-sans mt-8 rounded-lg">sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;