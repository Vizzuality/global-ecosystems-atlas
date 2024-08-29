export interface Dataset {
  Source_ID: number;
  data_id_code: string;
  title: string;
  language: string;
  abstract: string;
  detailed_description: string;
  provider: string;
  dataset_citation: string;
  published_year: number;
  contact_name: string;
  contact_email: string;
  licence: string;
  URL: string;
  DOI: string;
  tags: string;
  GET_realm_tag: string;
  GET_biome_tag: string;
  GET_efg_tag: string;
  stage_1_pass: string;
  stage1_comments: string;
  in_geoatlas: string;
}
