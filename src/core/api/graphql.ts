export const fetchGraphQL = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_URL is not defined");
  }

  const response = await fetch(`${endpoint}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.error("GraphQL Errors:", errors);
    throw new Error(errors[0]?.message || "GraphQL Error");
  }

  return data;
};
