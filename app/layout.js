import "./globals.css";

export const metadata = {
  title: "Kavya Labs — AI Analytics Platform",
  description:
    "Kavya Labs turns your raw data into decisions. Real-time AI analytics for modern teams. Built in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
