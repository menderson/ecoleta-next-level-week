import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) { //index é pradrão para listagem
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                // image_url: `http://localhost:3333/uploads/${item.image}`, //esse nao funciona no expo(mobile)
                image_url: `http://192.168.0.62:3333/uploads/${item.image}`,
            };
        });

        return response.json(serializedItems);
    }
}

export default ItemsController;