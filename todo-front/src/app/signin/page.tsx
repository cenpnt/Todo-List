import SignInForm from "../ui/signin/signinform";


export default function SignIn() {
    return (
        <main className="flex items-center justify-center h-screen bg-custom-lightcream">
                <div className="bg-custom-cream text-black text-center p-6 w-full max-w-lg rounded-xl">
                    Sign in
                    <SignInForm/>
                </div>
        </main>
        
    );  
}