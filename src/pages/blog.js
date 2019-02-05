import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "1300px"
    }}
  >
    {data.allWordpressPost.edges.map(({ node }) => {
      const media = node.featured_media ? node.featured_media : {};
      return (
        <div
          key={node.id}
          style={{
            width: "360px",
            border: "solid 1px gray",
            padding: "16px",
            margin: "16px"
          }}
        >
          <img
            width="360"
            height="216"
            src={media.source_url}
            alt={media.alt_text}
          />
          <div>
            {node.author.name} - {node.date}
          </div>
          <h1>{node.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      );
    })}
  </div>
);

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          date
          status
          link
          title
          excerpt
          author {
            name
            link
          }
          featured_media {
            source_url
            alt_text
          }
        }
      }
    }
  }
`;
