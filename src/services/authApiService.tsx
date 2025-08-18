export type LoginInput = { email: string; password: string };

export const loginService = async (input: LoginInput) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(input),
  });
  return response;
};
