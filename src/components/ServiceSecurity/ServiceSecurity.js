import {
  securityBenefits,
  securityCtaParagraph,
  securityOverviewBulletpoints,
  securityOverviewParagraph,
  securityOverviewTitle,
  securityTechTools,
} from "../../utils/service/ServiceSecurity";
import securityCtaImage from "../../images/service/cta/backupCta.png";

import ServiceDivBenefits from "../ServiceDivBenefits/ServiceDivBenefits";
import ServiceDivHeader from "../ServiceDivHeader/ServiceDivHeader";
import ServiceDivOverview from "../ServiceDivOverview/ServiceDivOverview";
import ServiceDivTechTools from "../ServiceDivTechTools/ServiceDivTechTools";
import ServiceDivHero from "../ServiceDivHero/ServiceDivHero";

function ServiceSecurity({ handleOpenGetAQuote }) {
  return (
    <div className="service-security">
      <ServiceDivHeader title="Security Consulting" />
      <ServiceDivTechTools subtitle={null} tools={securityTechTools} />
      <ServiceDivOverview
        bulletpoints={securityOverviewBulletpoints}
        paragraph={securityOverviewParagraph}
        title={securityOverviewTitle}
      />
      <ServiceDivBenefits benefits={securityBenefits} />
      <ServiceDivHero
        handleOpenGetAQuote={handleOpenGetAQuote}
        image={securityCtaImage}
        paragraph={securityCtaParagraph}
      />
    </div>
  );
}

export default ServiceSecurity;
