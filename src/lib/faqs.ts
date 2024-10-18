export const FAQS = [
  {
    question: "What is the primary purpose of the Global Ecosystems Atlas Synthesis Map?",
    answer:
      "The primary purpose of the gea_synthesis data product is to create a harmonised, regularly updated, global map of the world’s ecosystems. The data are intended to support a range of different purposes, from conservation to environmental management to ecosystem accounting.",
  },
  {
    question: "What makes the gea_synthesis data product unique?",
    answer:
      "The gea_synthesis data product was designed to (1) build on decades of investments in ecosystem mapping through the discovery and compilation of existing datasets while (2) enabling new datasets on the distribution of ecosystems to be incorporated into a global map. It offers a rigorous and open-access processing protocol, is regularly updated to enable the incorporation of new data, and integrates multiple datasets into a unified framework to achieve the broadest coverage of high-quality ecosystem maps to date. This makes it an essential tool for global ecosystem monitoring and management efforts.",
  },
  {
    question: "How was the data for the gea_synthesis data product compiled?",
    answer:
      "Existing ecosystem maps were compiled and processed into a single data product suitable for a range of purposes. Candidate datasets underwent a rigorous evaluation process, including a quality assessment, which incorporated reviews by experts and map developers to ensure conceptual alignment with the Global Ecosystem Typology. Ecosystem classes in datasets that met evaluation criteria were cross-referenced to ecosystem functional groups in the Global Ecosystem Typology. After the evaluation and cross-referencing process, the datasets were then subjected to a spatial processing pipeline that yielded the gea_synthesis data product, which is a set of 119 data layers that depict the distribution of ecosystems on Earth.",
  },
  {
    question: "What is cross-referencing, and why is it important?",
    answer:
      "Referencing map classes from source datasets to ecosystem functional groups defined by the Global Ecosystem Typology is an essential step in developing the Global Ecosystems Atlas ecosystem synthesis map. This process is frequently termed “crosswalking”. The cross-referencing process is crucial for integrating data from a large variety of source datasets into a single data product and allows for a unified global representation of ecosystems in the gea_synthesis data product. Map classes that have little or no relationship to ecosystem functional groups, such as “bare earth”, cannot proceed through the cross-referencing analysis and are identified as no data or unresolved pixels in the gea_synthesis data mask.",
  },
  {
    question: "How is the gea_synthesis kept up to date?",
    answer:
      "The gea_synthesis is designed to be regularly updated with new data. A versioning system is in place to track all updates, ensuring that the Global Ecosystem Atlas synthesis map remains a current and relevant resource.",
  },
  {
    question: "Where can I find more information on the tools and methodologies used?",
    answer: `Additional resources include:
- [IUCN Global Ecosystems Typology](https://global-ecosystems.org/)
- Link to source datasets are available via tooltips and the [sources catalogue](/data/sources-catalogue#tabs)
- [Github Organisation](https://github.com/geo-global-ecosystem-atlas)
`,
  },
  {
    question: "How can I report any issue?",
    answer: `We value your feedback. If you want to report errors, missing data or if you are experiencing issues with the platform, you can report it to us through our [feedback form](https://forms.office.com/e/xCnX7HyVgy).\n
Please include as much detail as possible in your report.
`,
  },
];
