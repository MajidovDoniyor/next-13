/* eslint-disable @next/next/no-head-element */

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>salom dunyo</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
