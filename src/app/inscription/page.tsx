import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { InscriptionTracker } from "./tracker";

export default function InscriptionPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-noir px-6 py-24">
      <InscriptionTracker />
      <div className="w-full max-w-md">
        <h1 className="text-center font-heading text-4xl font-medium text-blanc md:text-5xl">
          Soyez les premiers informés.
        </h1>
        <p className="mt-4 text-center font-body text-base font-medium text-gris">
          Laissez-nous votre email et on vous prévient dès que Fleurizz est
          disponible.
        </p>
        <div className="mt-10">
          <NewsletterForm />
        </div>
      </div>
    </main>
  );
}
