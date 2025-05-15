// apps/web/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
            <header>
                <div className="d-flex justify-center">
                    <div>
                        Logo
                    </div>
                    <div>
                        Res Name
                    </div>
                    <div>
                        Search
                    </div>
                </div>
            </header>
            {children}
        </body>
      </html>
    );
  }
  