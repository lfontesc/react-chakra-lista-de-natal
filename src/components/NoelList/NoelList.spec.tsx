import React from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import NoelList, { NoelListProps } from './NoelList';
import { render, screen } from '@testing-library/react';

const defaultNoelList: NoelListProps = {
  data: [
    {
      description: 'Papete do Senninha'
    },
    {
      icon: <CheckCircleIcon />,
      description: 'Power Ranger'
    }
  ]
}

describe('Testar componente de lista de pedidos', () => {
  it('deve renderizar o componente', () => {
    const rendered = render(<NoelList {...defaultNoelList} />)
    expect(rendered).toBeTruthy();
  });

  it('deve exibir os itens na lista', () => {
    render(<NoelList {...defaultNoelList} />);
    defaultNoelList.data.map(itemList => {
      return expect(screen.getByText(itemList.description)).toBeTruthy();
    });
  });

  it('deve exibir o icone default quando nao é setado um icone', () => {
    render(<NoelList {...defaultNoelList} />);
    expect(screen.getByTestId('bell-icon-default')).toBeTruthy();
  });

  it('deve exibir msg de sem itens quando não há itens na lista', () => {
    render(<NoelList data={[]} />);
    expect(screen.getByText('Não há itens')).toBeTruthy();
  });
})