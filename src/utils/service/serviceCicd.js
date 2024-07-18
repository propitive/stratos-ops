import chart from "../../images/service/benefits/chart.svg";
import checkCircle from "../../images/service/benefits/checkCircle.svg";
import code from "../../images/service/benefits/code.svg";
import hardDrive from "../../images/service/benefits/hard-drive.svg";
import lock from "../../images/service/benefits/lock.svg";
import piggyBank from "../../images/service/benefits/piggyBank.svg";

import argocd from "../../images/service/techTools/argocd.png";
import aws from "../../images/service/techTools/aws.jpg";
import docker from "../../images/service/techTools/docker.png";
import gitlab from "../../images/service/techTools/gitlab.png";
import kubernetes from "../../images/service/techTools/kubernetes.png";
import droneci from "../../images/service/techTools/droneci.png";
import flux from "../../images/service/techTools/flux.png";
import github from "../../images/service/techTools/github.png";
import jenkins from "../../images/service/techTools/jenkins.png";
import msazure from "../../images/service/techTools/msazure.png";
import teamcity from "../../images/service/techTools/teamcity.png";
import travisci from "../../images/service/techTools/travisci.png";

export const cicdBenefits = [
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

export const cicdCtaParagraph =
  "Optimize your development workflow with our cloud CI/CD services, designed to accelerate deployment and improve software quality. Our solutions ensure seamless integration, continuous delivery, and reduced time-to-market. Get a quote today to enhance your development efficiency and achieve faster, more reliable releases.";

export const cicdTechTools = [
  {
    image: aws,
    title: "AWS",
  },
  {
    image: docker,
    title: "Docker",
  },
  {
    image: github,
    title: "Github",
  },
  {
    image: gitlab,
    title: "Gitlab",
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
    image: kubernetes,
    title: "Kubernetes",
  },
];

export const cicdTechToolsSubtitle =
  "Stratos Operations offers a wide range of log monitoring from cloud services for flexible cloud imfrastructure backup. What tools are suitable for a successful migration to the cloud?";

export const cicdOverviewBulletpoints = [
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold"> SAVE </span>cost on full
    time employees
  </p>,
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold"> CUSTOMIZE </span>{" "}
    pipeline specs to meet your needs
  </p>,
  <p className="service-div-overview__point-text">
    Feature
    <span className="service-div-overview__point-bold"> FLEXIBILITY </span>for
    pipeline improvements and updates
  </p>,
];

export const cicdOverviewParagraph = (
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

export const cicdOverviewTitle = (
  <h3 className="service-div-overview__title">
    Helping organizations build out their CI/CD pipeline processes
    <span className="service-div-overview__title-bold">
      {" "}
      efficiently and quickly
    </span>
  </h3>
);
