import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"

const Logo = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(absolutePath: {regex: "/^((?!node_modules).)*$/"}, name: {eq: "site-logo"}) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `)
  return (
    <Box position={["absolute", "absolute", "static"]} left="0" right="0" m={["auto", "auto","0"]} w="50px">
      <Box
        overflow="hidden"
        h="50px"
        w="50px"
        display="block"
        p="5px"
      >
        <Img
          fixed={imageData.file.childImageSharp.fixed}
          alt="Site Logo"
          className="site-logo"
          itemProp="logo"
          style={{
            display: "block",
            maxWidth: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  )
}

export default Logo
