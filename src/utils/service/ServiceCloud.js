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

export const cloudBenefits = [
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

export const cloudCtaParagraph =
  "Experience a seamless transition to the cloud with our expert migration services, designed to minimize downtime and ensure data integrity. Our dedicated team tailors each migration to your specific needs, guaranteeing a smooth and efficient process. Get a quote today to enhance your business agility with a hassle-free cloud migration.";

export const cloudTechTools = [
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

export const cloudTechToolsSubtitle =
  "Stratos Operations offers a wide range of log monitoring from cloud services for flexible cloud imfrastructure backup. What tools are suitable for a successful migration to the cloud?";

export const cloudOverviewBulletpoints = [
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold">ADJUST </span>
    resources based on demand without the need for costly hardware upgrades
  </p>,
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold"> PAY-AS-YOU-GO </span>
    model that reduces operational costs
  </p>,
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold">REMOTE ACCESS </span>
    to data and applications from anywhere
  </p>,
];

export const cloudOverviewParagraph = (
  <p className="service-div-overview__paragraph">
    Choosing our company for migrating your IT infrastructure ensures a seamless
    transition backed by years of expertise and a proven track record in
    managing complex technological shifts. We prioritize your business's unique
    needs, offering tailored solutions that maximize efficiency and minimize
    downtime. Our team of skilled professionals combines industry best practices
    with cutting-edge technology to deliver reliable and scalable infrastructure
    solutions.
    <br />
    <br />
    With a commitment to transparency and clear communication, we guide you
    through every step of the migration process, ensuring your systems are
    optimized for performance and security. Trust us to elevate your IT
    infrastructure, allowing you to focus on driving your business forward with
    confidence.
  </p>
);

export const cloudOverviewTitle = (
  <h3 className="service-div-overview__title">
    Deploying your IT infrastructure into the
    <span className="service-div-overview__title-bold"> cloud with ease</span>
  </h3>
);
