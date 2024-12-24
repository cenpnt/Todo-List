import SignInForm from "../ui/signin/signinForm";
import Link from "next/link";

export default function SignIn() {
    return (
        <main className="flex items-center justify-center h-screen bg-custom-lightcream">
                <div className="bg-custom-cream text-black p-6 w-full max-w-lg rounded-xl px-10">
                    <div className="text-4xl text-custom-grey">
                       Sign in 
                    </div>
                    <div className="text-xs mt-2 text-custom-grey">
                        doesn't have an account yet?
                        <Link
                            href={''}
                            className="text-custom-orange ml-3 hover:underline"
                        >
                            create an account
                        </Link>
                    </div>
                    <SignInForm/>
                </div>
        </main>
        
    );  
}