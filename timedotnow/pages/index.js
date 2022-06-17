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


//Icons
import {
   PhoneIcon, 
   AddIcon, 
   WarningIcon,
   ChevronRightIcon
} from '@chakra-ui/icons'

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
      <Box
          as="footer"
          bg="black"
          color="white"
          fontSize="sm"
          p={4}
          textAlign="left"
        >
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      <br /><br />
      <Container maxWidth="lg">
        <Box>
          <Stack spacing={6}>
            <Heading as='h1' size='4xl' noOfLines={1}>
              Time.now
            </Heading>
          </Stack>
          <br /><br />
          <Text fontSize='3xl'>
            Minimal API for getting the current time.
          </Text>
        </Box>
      </Container>
      <footer>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br />
        <Box
          as="footer"
          bg="black"
          color="white"
          fontSize="sm"
          p={4}
          textAlign="center"
        >
          <Text fontSize='lg'>
            © {new Date().getFullYear()}, Built by <a href="https://github.com/LyeZinho">LyeZinho 📚</a>
          </Text>
        </Box>
      </footer>
    </div>
  )
}