import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "TaskFlow — AI Task Management by Kavya Labs",
  description:
    "TaskFlow is the AI-powered task management platform by Kavya Labs. Prioritize work, predict delays, and keep your team in sync. Built in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
