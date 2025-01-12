import WelcomeImg from "../assets/welcome.png";

const Welcome = () => {
  return (
    <div className="text-white text-center pt-8 flex-grow">
      <p className="text-4xl font-semibold">Welcome to RBAC System</p>
      <p className="mt-6 font-light">
        Login to access Dashboard content. A Secure Role Based Access Control
        System, you can access dashboard based on your assigned roles.
      </p>
      <div className="flex justify-center">
        <img src={WelcomeImg} alt="Welcome Image" className="h-auto w-auto" />
      </div>
    </div>
  );
};

export default Welcome;
