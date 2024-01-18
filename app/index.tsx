import { Redirect } from "expo-router";

export default function Root() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Redirect href="/dashboard" />;
  }

  return <Redirect href="/login" />;
}

