import './globals.css';

export const metadata = {
  title: 'Akvaryum Simülatörü',
  description: '3D Akvaryum Simülasyonu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="m-0 p-0 overflow-hidden bg-slate-900">
        {children}
      </body>
    </html>
  );
}