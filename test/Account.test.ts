import { assertEquals } from "https://Deno.land/std/testing/asserts.ts";
import { instanceToPlain } from '../node_modules/class-transformer';
import { Account } from '../src/FhirTsLib/Account.ts';
import { Identifier } from "../src/FhirTsLib/Identifier.ts";

Deno.test('Account creation', () => {
  let myAccount;

  myAccount = new Account();

  let id = new Identifier();
  id.setId("TimboAccount");
  myAccount.addIdentifier(id);
  
 let accountPlain = instanceToPlain(myAccount);

 assertEquals(JSON.stringify(accountPlain), '{"resourceType":"Account","identifier":[{"id":"TimboAccount"}]}');
 })