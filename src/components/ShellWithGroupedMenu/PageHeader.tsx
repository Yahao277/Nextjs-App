import { Box, Container, Heading, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { useRouter } from 'next/router';
import { TabLink } from './TabLink'

const tabElements = [
  {
    name: 'Overview',
    href: '/dashboard/',
  },
  {
    name: 'Previewer',
    href: '/dashboard/previewer/',
  },
  {
    name: 'Configurations',
    href: '/dashboard/config/',
  }
]

export const PageHeader = () => {
  const router = useRouter();

  const isCurrent = (href: string) => {
    return router.asPath === href;
  }
  return (
    <Box bg={mode('white', 'gray.900')}  pt="8" shadow="base" rounded="lg">
      <Container maxW="7xl">
        <Heading size="lg" mb="3" pl="3">
          Projects
        </Heading>
        <Stack direction="row" spacing="4">
          {tabElements.map((tab) => (
            isCurrent(tab.href) ? 
            <TabLink aria-current="page" href={tab.href} key={tab.href}>{tab.name}</TabLink> : 
            <TabLink href={tab.href} key={tab.name}>{tab.name}</TabLink>
          ))}

        </Stack>
      </Container>
    </Box>
  )
}
