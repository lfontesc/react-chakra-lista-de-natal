import React from 'react';
import { ArrowForwardIcon, BellIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from 'react';

export interface AddItemProps {
  setNewItem: any;
};

export const AddItem = (props: AddItemProps) => {
  const [item, setItem] = useState('');

  const addPresente = () => {
    const presenteToAdd = {
      icon: <BellIcon />,
      description: item
    };

    props.setNewItem(presenteToAdd);
  };

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<BellIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Nome do presente"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
        style={{marginLeft: '6px'}}
        onClick={addPresente}
      >
        Add
      </Button>
    </InputGroup>
  )

};

export default AddItem;