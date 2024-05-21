import { techToolsBackup } from "../../utils/constants";

import ServiceDivHeader from "../ServiceDivHeader/ServiceDivHeader";
import ServiceDivOverview from "../ServiceDivOverview/ServiceDivOverview";
import ServiceDivTechTools from "../ServiceDivTechTools/ServiceDivTechTools";

function ServiceBackup() {
  return (
    <div className="service-backup">
      <ServiceDivHeader title="Backup and Recovery" />
      <ServiceDivTechTools
        subtitle="Stratos Operations offers a wide range of log monitoring from cloud services for flexible cloud imfrastructure backup. What tools are suitable for a successful migration to the cloud?"
        tools={techToolsBackup}
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
    </div>
  );
}

export default ServiceBackup;
