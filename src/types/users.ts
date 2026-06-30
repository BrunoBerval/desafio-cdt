/**
 * Tipos que representam o contrato completo da resposta da API JSONPlaceholder.
 * Todos os campos são tipados mesmo que nem todos sejam exibidos na UI,
 * garantindo segurança de tipos em qualquer uso futuro dos dados.
 */

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}