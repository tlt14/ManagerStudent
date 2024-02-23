import LoginForm from "./components/LoginForm";
type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};
export default function Page(props: Props) {
  return (
    <main>
      <LoginForm callbackUrl="dashboard" />
    </main>
  );
}
