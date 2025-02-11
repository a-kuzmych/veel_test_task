/* eslint-disable react/react-in-jsx-scope */
import LoginForm from "@/components/forms/LogInForm";
import SignUpForm from "@/components/forms/SignUpForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUpForm />
      <LoginForm />
    </main>
  );
}
