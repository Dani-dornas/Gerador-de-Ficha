console.log('Bem vindo ao meu gerador de fichas!')

function dado(){
  a = numAleatorio = Math.floor(Math.random() * 6) + 1
  b = numAleatorio = Math.floor(Math.random() * 6) + 1
  c = numAleatorio = Math.floor(Math.random() * 6) + 1
  soma = a+b+c  
  return soma
}
console.log('ATRIBUTOS')
atributos = ['Força ', 'Destreza ', 'Constituição ', 'Inteligência ', 'Sabedoria ', 'Carisma ']
capeta = {Força : dado(), Destreza : dado(), Constituição : dado(), Inteligência : dado(), Sabedoria : dado() ,Carisma : dado()}
console.log(capeta)

function raca(){
  let numAleatorio = Math.floor(Math.random() * 16)
  return numAleatorio
}
raça = ['Homem', 'Elfo', 'Anão', 'Drow', 'Yandre', 'Goblin', 'Halfling', 'Estelar', 'Elfo da Floresta', 'Elfo do Mar', 'Orc', 'Tiefling', 'Draconato', 'Gnomo', 'Suryan', 'Chandran']
console.log('RAÇA: '+ raça[raca()])