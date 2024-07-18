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

export const securityBenefits = [
  {
    image: code,
    title: "Cost effective strategies",
  },
  {
    image: checkCircle,
    title: "Modern and Secure Solutions",
  },
  {
    image: piggyBank,
    title: "Flexible and On-Demand Services ",
  },
  {
    image: chart,
    title: "Review Security Architecture",
  },
  {
    image: lock,
    title: "Implement CI/CD pipelines",
  },
  {
    image: hardDrive,
    title: "Migrate on-prem services to the cloud",
  },
];

export const securityCtaParagraph =
  "Protect your digital assets with our comprehensive cloud security services, designed to safeguard against threats and ensure compliance. Our expert team provides advanced monitoring, threat detection, and rapid response to secure your infrastructure. Request a quote today to enhance your cybersecurity and maintain the integrity of your data.";

export const securityTechTools = [
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

export const securityOverviewBulletpoints = [
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold"> PREPARE </span>for any
    disaster or cyber attack that your organization faces.
  </p>,
  <p className="service-div-overview__point-text">
    Utilize the
    <span className="service-div-overview__point-bold"> POWER </span>
    of the cloud and offloading on-prem workloads
  </p>,
  <p className="service-div-overview__point-text">
    <span className="service-div-overview__point-bold"> ENHANCE </span>your IT
    infrastructure with the latest best practices
  </p>,
];

export const securityOverviewParagraph = (
  <p className="service-div-overview__paragraph">
    Cyber security stands as the bedrock of modern digital existence,
    safeguarding individuals, businesses, and nations from a myriad of threats.
    In today's interconnected world, where data is the new currency, the
    protection of sensitive information is paramount. A breach in cyber security
    can lead to devastating consequences, ranging from financial losses to
    reputational damage. Moreover, with the exponential rise of digital
    transactions and online interactions, the threat landscape continues to
    evolve, demanding robust defense mechanisms.
    <br />
    <br />
    Beyond financial considerations, cyber attacks can disrupt critical
    infrastructure, jeopardizing public safety and national security. Embracing
    robust cyber security practices not only shields against potential threats
    but also fosters trust and reliability in digital ecosystems. Ultimately,
    investing in cyber security is not just a precautionary measure; it's a
    strategic imperative for the sustainability and resilience of our digital
    future.
  </p>
);

export const securityOverviewTitle = (
  <h3 className="service-div-overview__title">
    <span className="service-div-overview__title-bold">
      Strengthening and Building
    </span>{" "}
    your Cloud & Security infrastructure
  </h3>
);
