import { LogIn as IconLogIn } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Form, Link } from "react-router";

import spark from "@/assets/spark.png";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import type { Route } from "./+types/SignUpPage";

export async function clientAction({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData.entries()));

  return {};
}

function SignUpPage() {
  const { t } = useTranslation(["common", "home"]);

  const form = useForm();

  return (
    <div>
      <header>
        <Link to="/">
          <img alt="Spark logo" className="w-5 h-5" src={spark} />
          <p>Spark</p>
        </Link>
        <nav>
          <div>
            <Button asChild variant="outline">
              <Link to="/sign-in">
                <IconLogIn />
                {t("signIn")}
              </Link>
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <h1>{t("home:title")}</h1>
            <h2>{t("home:subtitle")}</h2>
          </div>
          <Card>
            <CardHeader>
              <h2>{t("home:form_title")}</h2>
            </CardHeader>
            <FormProvider {...form}>
              <Form method="POST" navigate={false}>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("name")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("email")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("password")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("confirmPassword")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="document_identifier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("document_identifier")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" variant="default">
                    Crie sua conta!
                  </Button>
                </CardFooter>
              </Form>
            </FormProvider>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default SignUpPage;
