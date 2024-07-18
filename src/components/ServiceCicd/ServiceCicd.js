import {
  cicdBenefits,
  cicdCtaParagraph,
  cicdOverviewBulletpoints,
  cicdOverviewParagraph,
  cicdOverviewTitle,
  cicdTechTools,
} from "../../utils/service/serviceCicd";
import securityCtaImage from "../../images/service/cta/backupCta.png";

import ServiceDivBenefits from "../ServiceDivBenefits/ServiceDivBenefits";
import ServiceDivHeader from "../ServiceDivHeader/ServiceDivHeader";
import ServiceDivOverview from "../ServiceDivOverview/ServiceDivOverview";
import ServiceDivTechTools from "../ServiceDivTechTools/ServiceDivTechTools";
import ServiceDivHero from "../ServiceDivHero/ServiceDivHero";

function ServiceCicd({ handleOpenGetAQuote }) {
  return (
    <div className="service-security">
      <ServiceDivHeader title="Security Consulting" />
      <ServiceDivTechTools subtitle={null} tools={cicdTechTools} />
      <ServiceDivOverview
        bulletpoints={cicdOverviewBulletpoints}
        paragraph={cicdOverviewParagraph}
        title={cicdOverviewTitle}
      />
      <ServiceDivBenefits benefits={cicdBenefits} />
      <ServiceDivHero
        handleOpenGetAQuote={handleOpenGetAQuote}
        image={securityCtaImage}
        paragraph={cicdCtaParagraph}
      />
    </div>
  );
}

export default ServiceCicd;
