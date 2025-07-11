// Importando os mudulos necessários
import * as cartService  from "./services/cart.js";  
import { createItem } from "./services/item.js";

// Constante que representa o carrinho de compras
const mycart = [];

// Exebindo no console o nome do carrinho de compras e adicionando itens
console.log("Carrinho de Compras Shopee DIO");

// Criando itens e adicionando ao carrinho
const item1 = await createItem("Tênis Nike", 299.99, 2);
const item2 = await createItem("Camisa Adidas", 89.99, 1);
const item3 = await createItem("Calça Levi's", 199.99, 1);

// Adicionando itens ao carrinho
await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);
await cartService.addItem(mycart, item3);

// Removendo o primeiro item do carrinho
await cartService.removeItem(mycart, 3); 

// Deletando um item do carrinho
await cartService.deleteItem(mycart, item1.name);
//await cartService.deleteItem(mycart, item2.name);

// Exibindo o carrinho e o total
console.log("Itens no carrinho:", mycart);
console.log("Total do carrinho:", await cartService.calculateTotal(mycart));

