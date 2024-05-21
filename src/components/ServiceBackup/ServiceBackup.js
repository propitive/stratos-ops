import { backupBenefits, backupTechTools } from "../../utils/constants";

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
        subtitle="Stratos Operations offers a wide range of log monitoring from cloud services for flexible cloud imfrastructure backup. What tools are suitable for a successful migration to the cloud?"
        tools={backupTechTools}
      />
      <ServiceDivOverview
        bulletpoints={[
          <p className="service-div-overview__point-text">
            <span className="service-div-overview__point-bold"></span>
          </p>,
          <p className="service-div-overview__point-text">
            <span className="service-div-overview__point-bold"></span>
          </p>,
          <p className="service-div-overview__point-text">
            <span className="service-div-overview__point-bold"></span>
          </p>,
        ]}
        paragraph="This is a paragraph."
        title={
          <h3 className="service-div-overview__title">
            <span className="service-div-overview__title-bold"></span>
          </h3>
        }
      />
      <ServiceDivBenefits benefits={backupBenefits} />
      <ServiceDivCta image={""} paragraph="This is a paragraph" />
    </div>
  );
}

export default ServiceBackup;
