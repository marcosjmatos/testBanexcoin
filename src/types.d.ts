export type Status = 0 | 1


export interface ClientEntry {
  id: string,
  created: string,
  updated: string,
  status: Status,
  fname: string,
  lname: string,
  address: string,
  birthdate: string
}
export type NewClientEntry = Pick<ClientEntry , 'status'|'fname'|'lname'|'birthdate'|'address'>
