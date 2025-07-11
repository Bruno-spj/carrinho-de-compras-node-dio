// Função para criar um item no carrinho de compras
// Recebe o nome, preço e quantidade do item e retorna um objeto com esses dados e uma função para calcular o subtotal
export async function createItem(name, price, quantity) {
 return {
   name,
   price,
   quantity,
   subtotal: () => price * quantity,
 }; 
}