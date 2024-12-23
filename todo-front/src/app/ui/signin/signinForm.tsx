
export default function SignInForm() {
    return (
        <form action="">
            <div className="flex-1 rounded-lg">
                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-custom-grey"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="" 
                        id="email" 
                        name="email"
                        type="email"
                        placeholder="e.g. johndoe@gmail.com"
                        required
                    >
                        
                    </input>
                </div>
            </div>
        </form>
    )
}