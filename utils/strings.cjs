function alterarString(texto, tipoAlteracao) {
  let novaString = texto

  switch (tipoAlteracao) {
    case "maiusculas":
      novaString = novaString.toUpperCase()
      break
    case "minusculas":
      novaString = novaString.toLowerCase()
      break
    default:
      console.log("Tipo de alteração inválido!")
      break
  }

  return novaString
}

module.exports = { alterarString }