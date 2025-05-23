import React, { createContext, useContext, useEffect, useState } from "react";

export enum Role {
  Admin = "admin",
  User = "user",
}

type User = {
  name: string;
  email: string;
  role: Role;
};

type AuthContextType = {
  user: User | undefined;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    authHandler();
  }, []);

  const authHandler = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // setUser({ name: "code hub", email: "codehub@gmail.com" });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Please use a wrapper.");
  }

  return context;
}
