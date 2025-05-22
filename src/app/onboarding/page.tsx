import LogoPaypot from "@/assets/images/logo-paypot.svg";
import OnboardingImg from "@/assets/images/onboarding.svg";

function OnboardingPage() {
  return (
    <section>
      <OnboardingImg
        width={340}
        height={326}
        role="img"
        aria-label="Logo de la app"
      />
      <LogoPaypot
        width={81}
        height={81}
        role="img"
        aria-label="Logo de la app"
      />
      <p>onboarding</p>
    </section>
  );
}

export default OnboardingPage;
