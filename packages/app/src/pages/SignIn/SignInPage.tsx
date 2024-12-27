import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Form, Link } from "react-router";

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

import type { Route } from "./+types/SignInPage";

export async function clientAction({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  return {};
}

function SignInPage() {
  const { t } = useTranslation();
  const form = useForm();

  return (
    <div className="p-5">
      <main>
        <Card>
          <CardHeader>
            <Button asChild type="submit" variant="link">
              <Link to="/sign-up">Não possui uma conta? {t("signUp")}</Link>
            </Button>
            <h2>{t("signIn")}</h2>
          </CardHeader>
          <FormProvider {...form}>
            <Form method="POST" navigate={false}>
              <CardContent>
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
              </CardContent>
              <CardFooter>
                <Button type="submit" variant="default">
                  <Link to="/">{t("signIn")}</Link>
                </Button>
                <Button asChild type="submit" variant="link">
                  <Link to="/forgot-password">{t("forgotPassword")}</Link>
                </Button>
              </CardFooter>
            </Form>
          </FormProvider>
        </Card>
      </main>
    </div>
  );
}

export default SignInPage;
