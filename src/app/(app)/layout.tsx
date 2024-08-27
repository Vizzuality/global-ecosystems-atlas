import { Footer } from "@/containers/footer";
import { Header } from "@/containers/header";
import { Newsletter } from "@/containers/newsletter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </main>
  );
}
