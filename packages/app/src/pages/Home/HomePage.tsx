import { redirect } from "react-router";

export async function loader() {
  return redirect("/sign-up");
}

function HomePage() {
  return (
    <div className="p-5">
      <main>home</main>
    </div>
  );
}

export default HomePage;
