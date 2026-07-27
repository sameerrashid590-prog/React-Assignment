const signup = async () => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/dashboard`,
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert(
    "Verification email sent!\n\nPlease check your inbox and click the verification link."
  );
};
export default Signup;