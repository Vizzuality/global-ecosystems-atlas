import { Header } from "@/containers/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {children}
    </main>
  );
}
