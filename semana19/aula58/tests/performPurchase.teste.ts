import { performPurchase, User } from "../src/performPurchase"

describe("testes do exercicio 2 ", () => {

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100
    }
  
    const result = performPurchase(user, 50)
    
    expect(result).toEqual({
      ...user,
      balance: 50
    })
  })
  
  
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50
    }
  
    const result = performPurchase(user, 50)
    
    expect(result).toEqual({
      ...user,
      balance: 0
    })
  })
  
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30
    }
  
    const result = performPurchase(user, 50)
    
    expect(result).toEqual(undefined)
  })

})

