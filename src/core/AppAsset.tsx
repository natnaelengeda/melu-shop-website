import Logo from "@/assets/imgs/logo.png"
import HeroImage from "@/assets/imgs/hero.jpg"
import Placeholder from "@/assets/imgs/placeholder-image.svg";

// Payment Icons
import ChapaButtonLogo from "@/assets/logo/chapa.png";
import ArifPayButtonLogo from "@/assets/logo/arif-pay-logo.jpg";
import SantimPayButtonLogo from "@/assets/logo/santim.png";
import StripePayButtonLogo from "@/assets/logo/stripe-button-logo.png";

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
}

export default AppAsset
