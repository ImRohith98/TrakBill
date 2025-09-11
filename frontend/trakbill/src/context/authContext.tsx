import React, { type ReactNode } from "react";

export interface User {
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem("authUser");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("authUser");
      }
    }
  }, []);

  const login = (u: User) => {
    setUser(u);
    localStorage.setItem("authUser", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
