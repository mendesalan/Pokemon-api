export interface IPokemon {
    id: number;
    name: string;
    url: string;

    sprites: {
        front_default: string;
    };

    types: [
        {
            type: {
                name: string;
            };
        }
    ];

    abilities: [
        {
            ability:{
              name: string,
              url: string
            }
          }
    ];

}
