import 'reflect-metadata';
import { instanceToPlain } from 'class-transformer';
import { Account } from '../../src/FhirTsLib/Account';
import { Identifier } from '../../src/FhirTsLib/Identifier';

// test('Account creation', () => {
//   let myAccount;

//   myAccount = new Account();

//   let id = new Identifier();
//   id.setId("TimboAccount");
//   myAccount.addIdentifier(id);
  
//  let accountPlain = instanceToPlain(myAccount);

//   expect(JSON.stringify(accountPlain)).toBe('{"resourceType":"Account","identifier":[{"id":"TimboAccount"}]}');
// })