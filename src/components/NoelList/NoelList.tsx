import { List, ListItem } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

interface ItemList {
  icon?: ReactElement<IconType>;
  description: string;
};

export interface NoelListProps {
  data: ItemList[]
};

export const NoelList = (props: NoelListProps) => {
  const { data } = props;

  return (
    <List spacing={3} style={{textAlign: 'left'}}>
      {
        data.length ? data.map(listItem => (
          <ListItem key={listItem.description}>
            <span style={{color: 'green'}}> {listItem.icon || <BellIcon data-testid='bell-icon-default' />} </span>
            {listItem.description}
          </ListItem>
        ))
        :
        <h4>
          Não há itens
        </h4>
      }
    </List>
  )
};

export default NoelList;
