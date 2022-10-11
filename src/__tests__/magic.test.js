const { getMagicCard } = require('../magic');
// require('../../startest/mockSetup');

jest.setTimeout(10000);

describe('1 - Testes da função getMagicCard', () => {
  it('1.1 Verifique se getMagicCard é uma função.', () => {
    expect(typeof getMagicCard).toBe('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    expect.assertions(1);
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    expect.assertions(1);
    const endpoint = '130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(`https://api.magicthegathering.io/v1/cards/${endpoint}`);
  });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    const { name } = response;
    expect(name).toMatch(/Ancestor's Chosen/);
  });
});
