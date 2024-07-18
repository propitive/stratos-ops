import {
  cloudBenefits,
  cloudCtaParagraph,
  cloudOverviewBulletpoints,
  cloudOverviewParagraph,
  cloudOverviewTitle,
  cloudTechTools,
} from "../../utils/service/ServiceCloud";
import cloudCtaImage from "../../images/service/cta/backupCta.png";

import ServiceDivBenefits from "../ServiceDivBenefits/ServiceDivBenefits";
import ServiceDivHeader from "../ServiceDivHeader/ServiceDivHeader";
import ServiceDivOverview from "../ServiceDivOverview/ServiceDivOverview";
import ServiceDivTechTools from "../ServiceDivTechTools/ServiceDivTechTools";
import ServiceDivHero from "../ServiceDivHero/ServiceDivHero";

function ServiceCloud({ handleOpenGetAQuote }) {
  return (
    <div className="service-security">
      <ServiceDivHeader title="Cloud Migration" />
      <ServiceDivTechTools subtitle={null} tools={cloudTechTools} />
      <ServiceDivOverview
        bulletpoints={cloudOverviewBulletpoints}
        paragraph={cloudOverviewParagraph}
        title={cloudOverviewTitle}
      />
      <ServiceDivBenefits benefits={cloudBenefits} />
      <ServiceDivHero
        handleOpenGetAQuote={handleOpenGetAQuote}
        image={cloudCtaImage}
        paragraph={cloudCtaParagraph}
      />
    </div>
  );
}

export default ServiceCloud;
