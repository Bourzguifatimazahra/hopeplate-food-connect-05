
import SignInForm from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
