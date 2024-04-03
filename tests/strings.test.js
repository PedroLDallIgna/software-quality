const { alterarString } = require("../utils/strings.cjs")
describe("convcerterStrings", () => {
  test("converter a string para maiúsculas", () => {
    const textoOriginal = "olá, mundo!"
    const textoEsperado = "OLÁ, MUNDO!"
    const textoMaiusculo = alterarString(textoOriginal, "maiusculas")
    expect(textoMaiusculo).toBe(textoEsperado)
  })
  
  test("converter a string para minúsculas", () => {
    const textoOriginal = "OLÁ, MUNDO!"
    const textoEsperado = "olá, mundo!"
    const textoMinusculo = alterarString(textoOriginal, "minusculas")
    expect(textoMinusculo).toBe(textoEsperado)
  })
})