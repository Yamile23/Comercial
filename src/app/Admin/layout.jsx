import FormCategory from "./Componentes/FormCategory";
import FormEmpresa from "./Componentes/FormEmpresa";
import FormPublic from "./Componentes/FormPublic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
  </head>
      <body>
        <FormEmpresa/>
        
        {children}
        </body>
    </html>
  )
}