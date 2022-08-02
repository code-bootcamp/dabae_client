import { gql } from "@apollo/client";

export const FETCH_PICKS_BY_USER = gql`
  query {
    fetchPicksByUser
  }
`;
