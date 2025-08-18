import { create } from "zustand";
import { LoginInput, loginService } from "@/services/authApiService";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  email: string;
  name?: string;
}

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isSubmitting: boolean;
  login: (input: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isSubmitting: false,
      login: async (input: LoginInput) => {
        set({ isSubmitting: true });
        try {
          const res = await loginService(input);
          console.log(res);
          if (!res.ok) {
            if (res.status === 401) {
              const errorData = await res.json();
              throw new Error(
                errorData.message || "Email or password is incorrect."
              );
            }
            if (res.status === 500) {
              throw new Error("Server error. Please try again later.");
            }
            throw new Error("Unknown error occurred.");
          }
          const data = await res.json();
          set({
            token: data.token,
            user: { email: data.user.email, name: data.user.name },
            isAuthenticated: true,
          });
        } finally {
          set({ isSubmitting: false });
        }
      },
      logout: async () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "user", // key in storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
