import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';

//Chakra UI
import { Code } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

//Icons
import {
   PhoneIcon, 
   AddIcon, 
   WarningIcon,
   ChevronRightIcon
} from '@chakra-ui/icons'

//Components
import  SponsorModal from '../components/sponsorButton'


const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>time.now api</title>
        <meta name="description" content="🕖 Time dot now - api" />
        <link rel="icon" href="icon/favicon.ico" />
      </Head>
      <Grid
        templateAreas={`
        "header header"
        "nav main"
        "nav footer"`}
        gridTemplateRows={
            '30px 1fr 30px'
        }
        gridTemplateColumns={
            '150px 1fr'
        }
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
        >
        <GridItem pl='2' bg='orange.300' area={'header'}>
            Header
        </GridItem>
        <GridItem pl='2' bg='green.300'>
            Main
        </GridItem>
        <GridItem pl='1' bg='blue.300' area={'footer'}>
            Footer
        </GridItem>
        </Grid>
    </div>
  )
}
