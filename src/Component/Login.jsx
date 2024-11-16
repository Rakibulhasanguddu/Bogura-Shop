import { useForm } from "react-hook-form";


const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm()
	
	  const onSubmit = (data) => console.log(data)
	
	  console.log(watch("example")) // watch input value by passing the name of it
	
    return (
        <div className="flex justify-center items-center mt-10   h-[800px] bg-[url('https://i.postimg.cc/0jZr66hR/pexels-pixabay-264636.jpg')]">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 bg-transparent-500 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"{...register("email", { required: true })} />
				{errors.exampleRequired && <span>This field is required</span>}

			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" {...register("email", { required: true })}/>
				{errors.password && <span>This field is required</span>}

			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="/regester" className="hover:underline dark:text-violet-600">Regestration</a>.
			</p>
		</div>
		
		<input type="submit" />
	</form>
</div>
        </div>
    );
};

export default Login;