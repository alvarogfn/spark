import { LogIn as IconLogIn } from "lucide-react";
import { Link } from "react-router";

import spark from "@/assets/spark.png";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] shadow-2xl">
      <header className="flex justify-between items-center h-20 p-4">
        <Link className="flex justify-between items-center" to="/">
          <img alt="oi" className="w-8 h-8" src={spark} />
          <p className="font-bold text-2xl">Spark</p>
        </Link>
        <nav>
          <Button asChild variant="outline">
            <Link to="/sign-up">
              <IconLogIn />
              Entrar
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex flex-grow items-center bg-center bg-cover bg-promotional">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Spark. Uma escolha brilhante.
        </h1>
        <h2>N Possibilidades de produtos e serviços para você.</h2>
        <section className="flex flex-col">
          <h2>Peça sua conta e cartão de crédito do Spark</h2>
          <form className="flex flex-col gap-2">
            <label htmlFor="name">Nome:</label>
            <input id="name" />

            <label htmlFor="email">Email:</label>
            <input id="email" />

            <label htmlFor="CPF">CPF:</label>
            <input id="cpf" />

            <label htmlFor="password">Senha:</label>
            <input id="password" />

            <Button type="submit" variant="default">
              Crie sua conta!
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
