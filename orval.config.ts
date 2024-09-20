module.exports = {
  gea: {
    output: {
      mode: "tags",
      client: "react-query",
      target: "./src/types/generated/strapi.ts",
      mock: false,
      clean: true,
      prettier: true,
      override: {
        mutator: {
          path: "./src/services/api.ts",
          name: "API",
        },
        query: {
          useQuery: true,
          useMutation: true,
          signal: true,
        },
      },
    },
    input: {
      target: "https://global-ecosystem-atlas.staging.dev-vizzuality.com/api/api",
      filters: {
        tags: ["datasets", "layers"],
      },
    },
  },
};
