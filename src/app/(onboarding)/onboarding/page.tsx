import LogoPaypot from "@/assets/images/logo-paypot.svg";
import OnboardingImg from "@/assets/images/onboarding.svg";
import Link from "next/link";

function OnboardingPage() {
  return (
    <div className="max-w-[430px] min-h-screen  overflow-y-auto mx-auto bg-white flex flex-col items-center justify-center gap-5 p-4">
      <OnboardingImg
        width={340}
        height={326}
        role="img"
        aria-label="onboarding img"
        className="mb-7 w-full flex-shrink-0"
      />
      <LogoPaypot
        width={81}
        height={81}
        role="img"
        aria-label="app logo"
        className="flex-shrink-0"
      />
      <h1 className="font-sans font-medium text-2xl ">PayPot</h1>
      <p className="font-sans font-medium text-md text-center text-secondary-2 ">
        Because fun should be shared too
      </p>

      <Link
        href="/signin"
        className="bg-primary-1 text-white text-center w-3/5 py-3 mb-20 mt-8 rounded-xl font-sans font-medium text-md cursor-pointer hover:bg-primary-2 transition-colors duration-200 ease-in-out"
      >
        Get Started
      </Link>
    </div>
  );
}

export default OnboardingPage;
