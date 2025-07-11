// Função para adicionar um item ao carrinho de compras
// Recebe o carrinho de compras e o item a ser adicionado
// Retorna uma Promise que resolve quando o item é adicionado
export async function addItem(userCart, item) {
 userCart.push(item)
}

// Função para remover um item do carrinho de compras
// Recebe o carrinho de compras e o nome do item a ser removido
// Retorna uma Promise que resolve quando o item é removido
// Se o item não for encontrado, exibe uma mensagem no console
export async function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  } else {
    console.log(`Item ${name} not found in cart.`);
  }
}

// Função para remover um item do carrinho de compras pelo índice
// Recebe o carrinho de compras e o índice do item a ser removido
// Retorna uma Promise que resolve quando o item é removido
// Se o índice for inválido, exibe uma mensagem no console
export async function removeItem(userCart, index) {
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
}
}

// Função para calcular o total do carrinho de compras
// Recebe o carrinho de compras e retorna a soma dos subtotais de todos os itens
// Retorna uma Promise que resolve com o total calculado
export async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}