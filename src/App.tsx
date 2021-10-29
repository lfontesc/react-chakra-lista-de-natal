import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import NoelList, { ItemList } from "./components/NoelList/NoelList"
import { CheckCircleIcon } from "@chakra-ui/icons"
import React, { useEffect, useState } from 'react';
import AddItem from "./components/AddItem/AddItem";

export const App = () => {

  const [list, setList] = useState([
    {
      description: 'Papete do Senninha'
    },
    {
      icon: <CheckCircleIcon />,
      description: 'Power Ranger'
    }
  ]);

  const [newItem, setNewItem] = useState<ItemList>({description: ''});
  
  useEffect(() => {
    if (newItem && newItem.description !== '') {
      setList([...list, newItem])
    }
  }, [newItem])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <AddItem setNewItem={setNewItem} />
            <NoelList data={list} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
