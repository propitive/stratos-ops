import {
  backupBenefits,
  backupCtaParagraph,
  backupOverviewBulletpoints,
  backupOverviewParagraph,
  backupOverviewTitle,
  backupTechTools,
  backupTechToolsSubtitle,
} from "../../utils/service/serviceBackup";
import backupCtaImage from "../../images/service/cta/backupCta.png";

import ServiceDivBenefits from "../ServiceDivBenefits/ServiceDivBenefits";
import ServiceDivCta from "../ServiceDivCta/ServiceDivCta";
import ServiceDivHeader from "../ServiceDivHeader/ServiceDivHeader";
import ServiceDivOverview from "../ServiceDivOverview/ServiceDivOverview";
import ServiceDivTechTools from "../ServiceDivTechTools/ServiceDivTechTools";

function ServiceBackup() {
  return (
    <div className="service-backup">
      <ServiceDivHeader title="Backup and Recovery" />
      <ServiceDivTechTools
        subtitle={backupTechToolsSubtitle}
        tools={backupTechTools}
      />
      <ServiceDivOverview
        bulletpoints={backupOverviewBulletpoints}
        paragraph={backupOverviewParagraph}
        title={backupOverviewTitle}
      />
      <ServiceDivBenefits benefits={backupBenefits} />
      <ServiceDivCta image={backupCtaImage} paragraph={backupCtaParagraph} />
    </div>
  );
}

export default ServiceBackup;