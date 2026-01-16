import AuthForm from "../components/AuthForm";

export default function Home() {
  return (
    <main suppressHydrationWarning className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,209,255,0.15),rgba(255,255,255,0))] px-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none opacity-20"></div>
      <AuthForm />
    </main>
  );
}
