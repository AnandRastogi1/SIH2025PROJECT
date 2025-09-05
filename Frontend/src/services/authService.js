// For now, mock API calls. Later replace with fetch/axios to backend.
export async function loginUser(email, password) {
  // In future: call your backend API -> POST /auth/login
  // const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });

  if (email.includes("admin")) {
    return { email, role: "admin", token: "fake-jwt-admin" };
  }
  return { email, role: "alumni", token: "fake-jwt-alumni" };
}

export async function registerUser(form) {
  // In future: call backend API -> POST /auth/register
  return { ...form, role: "alumni", token: "fake-jwt-new" };
}

export async function logoutUser() {
  // In future: maybe call backend /auth/logout if sessions are server-side
  return true;
}