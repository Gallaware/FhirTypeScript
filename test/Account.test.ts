import test, { describe, it,  } from 'node:test';
import { instanceToPlain } from '../node_modules/class-transformer';
import { Account } from '../src/FhirTsLib/Account';
import { Identifier } from "../src/FhirTsLib/Identifier";

describe('Account creation', () => {
  it("JSON test for account", () => {
  let myAccount;

  myAccount = new Account();

  let id = new Identifier();
  id.setId("TimboAccount");
  myAccount.addIdentifier(id);
  
 let accountPlain = instanceToPlain(myAccount);

//  test(JSON.stringify(accountPlain)).toBe('{"resourceType":"Account","identifier":[{"id":"TimboAccount"}]}');
 })
});