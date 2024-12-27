import { useForm } from "react-hook-form";
import { redirect } from "react-router";

export async function loader() {
  redirect("/sign-up");
}

function HomePage() {
  const form = useForm();

  return (
    <div {...form} className="p-5">
      <main>home</main>
    </div>
  );
}

export default HomePage;
