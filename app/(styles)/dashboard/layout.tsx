export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="font-sans">{children}</div>;
}
// ignore root layout
