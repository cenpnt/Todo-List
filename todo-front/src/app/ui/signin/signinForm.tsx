import Link from "next/link"


export default function SignInForm() {
    return (
        <form className="space-y-3" action="">
            <div className="flex-1 rounded-lg ">
                <div>
                    <label
                        className="mb-3 mt-5 block text-md font-medium text-custom-grey"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="peer block w-full rounded-md border border-custom-grey py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                        id="email" 
                        name="email"
                        type="email"
                        placeholder="e.g. johndoe@gmail.com"
                        required
                    />
                    
                </div>
                <div className="mt-4">
                    <label
                        className="mb-3 mt-5 block text-md font-medium text-custom-grey"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="peer block w-full rounded-md border border-custom-grey py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                        id="password" 
                        name="password"
                        type="password"
                        placeholder="Enter a password"
                        minLength={6}
                        required
                    />
                    
                </div>

                <div className="mt-4 text-xs">
                    <Link
                        href={''}
                        className="text-custom-orange hover:underline"
                    >
                        forgot password?
                    </Link>
                    
                </div>

                <button className="flex h-10 items-center justify-center mt-4 w-full bg-custom-orange font-medium text-custom-lightcream rounded-md transition-colors hover:bg-opacity-85 ">
                    Sign in
                </button>

                <div className="flex flex-row mt-4 text-custom-grey">
                    <div className="border-b-2 border-custom-grey"></div>
                    or sign in with
                    <div className="border-b-2 border-custom-grey"></div>
                </div>
            </div>
        </form>
    )
}