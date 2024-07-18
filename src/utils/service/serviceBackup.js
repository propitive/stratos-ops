import chart from "../../images/service/benefits/chart.svg";
import checkCircle from "../../images/service/benefits/checkCircle.svg";
import code from "../../images/service/benefits/code.svg";
import hardDrive from "../../images/service/benefits/hard-drive.svg";
import lock from "../../images/service/benefits/lock.svg";
import piggyBank from "../../images/service/benefits/piggyBank.svg";

import argocd from "../../images/service/techTools/argocd.png";
import aws from "../../images/service/techTools/aws.jpg";
import bitbucket from "../../images/service/techTools/bitbucket.png";
import circleci from "../../images/service/techTools/circleci.png";
import droneci from "../../images/service/techTools/droneci.png";
import flux from "../../images/service/techTools/flux.png";
import github from "../../images/service/techTools/github.png";
import jenkins from "../../images/service/techTools/jenkins.png";
import msazure from "../../images/service/techTools/msazure.png";
import teamcity from "../../images/service/techTools/teamcity.png";
import travisci from "../../images/service/techTools/travisci.png";

export const backupBenefits = [
  {
    image: code,
    title: "Enhanced code quality",
  },
  {
    image: checkCircle,
    title: "Effective compliance management ",
  },
  {
    image: piggyBank,
    title: "Facilitating financial savings",
  },
  {
    image: chart,
    title: "Quick deployment and time to market",
  },
  {
    image: lock,
    title: "Strengthens the security system",
  },
  {
    image: hardDrive,
    title: "Enhanced mean time to resolution",
  },
];

export const backupCtaParagraph =
  "Ensure your critical data is secure and easily recoverable with our comprehensive cloud backup and recovery services. Our advanced technology and dedicated support team provide reliable protection and quick access to your data. Request a quote today to safeguard your operations and achieve peace of mind with our affordable, scalable solutions.";

export const backupTechTools = [
  {
    image: aws,
    title: "AWS",
  },
  {
    image: bitbucket,
    title: "Bitbucket",
  },
  {
    image: circleci,
    title: "CirceCI",
  },
  {
    image: droneci,
    title: "DroneCI",
  },
  {
    image: github,
    title: "Github",
  },
  {
    image: jenkins,
    title: "Jenkins",
  },
  {
    image: msazure,
    title: "MS Azure",
  },
  {
    image: teamcity,
    title: "teamcity",
  },
];

export const backupTechToolsSubtitle =
  "Stratos Operations offers a wide range of log monitoring from cloud services for flexible cloud imfrastructure backup. What tools are suitable for a successful migration to the cloud?";

export const backupOverviewBulletpoints = [
  <p className="service-div-overview__point-text">
    Regular backups ensure that critical data is
    <span className="service-div-overview__point-bold"> SAFELY </span>stored
  </p>,
  <p className="service-div-overview__point-text">
    Disaster recovery plans allow you to quickly
    <span className="service-div-overview__point-bold"> RESTORE </span> IT
    operations after a disruption
  </p>,
  <p className="service-div-overview__point-text">
    Backup recovery solutions helps organizarions
    <span className="service-div-overview__point-bold"> COMPLY </span>with legal
    requirements
  </p>,
];

export const backupOverviewParagraph = (
  <p className="service-div-overview__paragraph">
    Backing up your IT infrastructure is crucial for safeguarding against
    unforeseen disasters such as hardware failures, cyberattacks, or natural
    disasters. It ensures business continuity by allowing quick recovery of data
    and systems, minimizing downtime and potential revenue loss. Regular backups
    also protect against human errors, ensuring that accidental deletions or
    modifications can be reversed.
    <br />
    <br />
    Moreover, compliance requirements often mandate data retention policies,
    making backups essential for legal and regulatory purposes. By investing in
    a robust backup strategy, businesses can maintain customer trust, uphold
    operational resilience, and preserve critical data integrity in the face of
    any adversity.
  </p>
);

export const backupOverviewTitle = (
  <h3 className="service-div-overview__title">
    Ensuring your business operations are
    <span className="service-div-overview__title-bold"> protected</span> from
    modern day threats
  </h3>
);
