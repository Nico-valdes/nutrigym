import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const fetchUserByEmail = async (email) => {
  const response = await fetch(`http://localhost:3001/usuarios/obtener-por-email/${encodeURIComponent(email)}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Error al obtener el usuario");
  const { usuario } = await response.json();
  return usuario;
};

const validateCredentials = async (email, password) => {
  const usuario = await fetchUserByEmail(email);
  if (!usuario) return null;

  const isPasswordValid = await bcrypt.compare(password, usuario.contrasenia);
  if (!isPasswordValid) return null;

  return {
    email: usuario.email,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    rol: usuario.idRol,
    id: usuario.id,
    idRutinaPdf: usuario.idRutinaPdf,
  };
};

export const authOptions = {
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await validateCredentials(credentials.email, credentials.password);
          if (!user) return null;

          // Generar el JWT
          const token = jwt.sign(user, process.env.NEXTAUTH_SECRET, { expiresIn: '1h' });
          console.log("Generated JWT:", token); // Mostrar el JWT por consola

          return user;
        } catch (error) {
          console.error("Error en la autenticación:", error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) Object.assign(token, user);
      return token;
    },
    async session({ session, token }) {
      session.user = { ...token };
      return session;
    },
  },
};

// Exportamos los métodos HTTP explícitamente
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };