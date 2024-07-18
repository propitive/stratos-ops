import aboutChecklist from "../images/icons/about/aboutChecklist.png";
import aboutHandshake from "../images/icons/about/aboutHandshake.png";
import aboutHourglass from "../images/icons/about/aboutHourglass.png";
import aboutChef from "../images/icons/about/aboutChef.png";

import check from "../images/icons/about/check.png";
import checklist from "../images/icons/about/checklist.png";
import cloud from "../images/icons/about/cloud.png";
import cyber from "../images/icons/about/cyber.png";
import improve from "../images/icons/about/improve.png";
import piggybank from "../images/icons/about/piggybank.png";

/////////////// ABOUT ///////////////

export const aboutInfoCards = [
  {
    icon: cyber,
    paragraph:
      "We stay at the forefront of cybersecurity and cloud advancements, leveraging the latest tools and methodologies to protect your business from evolving threats. Our solutions are designed to be agile and scalable, adapting to your unique needs as your business grows.",
  },
  {
    icon: cloud,
    paragraph:
      "We specialize in fortifying your cloud environment, implementing robust security measures to protect your data, applications, and infrastructure from unauthorized access, breaches, and malicious attacks. Our proactive approach ensures continuous monitoring and threat detection, allowing for swift incident response.",
  },
  {
    icon: piggybank,
    paragraph:
      "We understand the importance of maximizing your return on investment. Our solutions are designed to be cost-effective, optimizing your cloud resources and eliminating unnecessary expenses. We offer transparent pricing and flexible service models to meet your specific budget and requirements.",
  },
  {
    icon: check,
    paragraph:
      "We recognize that your cybersecurity and cloud needs may fluctuate. That's why we offer on-demand solutions that can be quickly deployed and scaled to address immediate challenges or capitalize on new opportunities. Our team is available to provide support and guidance whenever you need it.",
  },
  {
    icon: improve,
    paragraph:
      "We go beyond simply implementing technology. We help you optimize your processes and systems to enhance efficiency, productivity, and security. Our team conducts comprehensive assessments to identify areas for improvement and implement best practices that drive tangible results.",
  },
  {
    icon: checklist,
    paragraph:
      "We believe that one size does not fit all when it comes to cybersecurity and cloud services. Our team takes a personalized approach, tailoring our solutions to your specific industry, business model, and risk profile. We work closely with you to understand your unique challenges and objectives, ensuring that our solutions align with your overall strategy.",
  },
];

/////////////// FORM ///////////////

export const serviceOptions = [
  {
    label: "Security Consulting and Hardening",
    value: "Security Consulting and Hardening",
  },
  {
    label: "Cloud Migration and Implementations",
    value: "Cloud Migration and Implementations",
  },
  { label: "CI/CD Processes", value: "CI/CD Processes" },
  { label: "Backup and Recovery", value: "Backup and Recovery" },
];

/////////////// HEADER ///////////////

export const menuNavItems = [
  {
    id: 1,
    title: "Security Consulting",
    path: "/services/securityConsulting",
    className: "nav-item",
  },
  {
    id: 2,
    title: "Cloud Migration",
    path: "/services/cloudMigration",
    className: "nav-item",
  },
  {
    id: 3,
    title: "CI/CD",
    path: "/services/ciCd",
    className: "nav-item",
  },
  {
    id: 4,
    title: "Backup And Recovery",
    path: "/services/backupAndRecovery",
    className: "nav-item",
  },
];
