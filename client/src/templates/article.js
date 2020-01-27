import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticles.title}</h1>
    <p>by &nbsp;
      {
        data.strapiArticles.author.map(author => (
          <Link to={`/authors/Users_${author.id}`}>
            {author.username}
          </Link>
        ))
      }
    </p>
    <Img fluid={data.strapiArticles.image.childImageSharp.fluid}/>
    <p>{data.strapiArticles.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: {eq: $id}) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`