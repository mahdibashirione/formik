

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="bg-purple-400 p-4 rounded-lg max-w-[350px] w-full">
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-white font-sans" for="name">Name</lable>
          <input
            type={"text"}
            name="name"
            id="name"
            className="w-full px-4 py-3 bg-white rounded-lg"
            placeholder="alireza..."
          />
        </div>
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-white font-sans" for="email">Email</lable>
          <input
            type={"text"}
            name="email"
            id="email"
            className="w-full px-4 py-3 bg-white rounded-lg"
            placeholder="ali@gmail.com..."
          />
        </div>
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <lable className="text-white font-sans" for="password">Password</lable>
          <input
            type={"text"}
            name="password"
            id="password"
            className="w-full px-4 py-3 bg-white rounded-lg"
            placeholder="A562cxs5a..."
          />
        </div>
        <button className="w-full py-3 bg-blue-500 text-white font-sans mt-8 rounded-lg">sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;