import Logo from "@/assets/imgs/logo-high-quality.png"
import HeroImage from "@/assets/imgs/hero.avif"
import Placeholder from "@/assets/imgs/placeholder-image.svg";

// Payment Icons
import ChapaButtonLogo from "@/assets/logo/chapa.png";
import ArifPayButtonLogo from "@/assets/logo/arif-pay-logo.jpg";
import SantimPayButtonLogo from "@/assets/logo/santim.png";
import StripePayButtonLogo from "@/assets/logo/stripe-button-logo.png";

// Icons
import EmailIcon from "@/assets/icons/mail.png";
import PhoneIcon from "@/assets/icons/phone-call.png";
import GoogleIcon from "@/assets/icons/search.png";


class AppAsset {
  private constructor() { }

  static Logo = Logo;
  static HeroImage = HeroImage;
  static Placeholder = Placeholder;

  // Payment Icons
  static ChapaButtonLogo = ChapaButtonLogo;
  static ArifPayButtonLogo = ArifPayButtonLogo;
  static SantimPayButtonLogo = SantimPayButtonLogo;
  static StripePayButtonLogo = StripePayButtonLogo;

  // Icons
  static EmailIcon = EmailIcon;
  static PhoneIcon = PhoneIcon;
  static GoogleIcon = GoogleIcon;
}

export default AppAsset
