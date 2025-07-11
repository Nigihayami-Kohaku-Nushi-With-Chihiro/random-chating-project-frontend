import RootNavigation from "@/components/RootNavigation";

import "./globals.css";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
   return (
      <html lang="ko">
         <body>
            <RootNavigation />
            {children}
         </body>
      </html>
   );
};

export default RootLayout;
