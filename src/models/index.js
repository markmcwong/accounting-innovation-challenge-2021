// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Category = {
  "SALES": "SALES",
  "COST_OF_GOOD_SOLD": "COST_OF_GOOD_SOLD",
  "OTHER_REVENUES": "OTHER_REVENUES",
  "EXPENSES": "EXPENSES",
  "NON_CURRENT_ASSETS": "NON_CURRENT_ASSETS",
  "CURRENT_ASSETS": "CURRENT_ASSETS",
  "NON_CURRENT_LIABILITIES": "NON_CURRENT_LIABILITIES",
  "CURRENT_LIABILITIES": "CURRENT_LIABILITIES",
  "CAPITAL": "CAPITAL"
};

const { Project, Account, AccountTransaction, Transaction, Invoice } = initSchema(schema);

export {
  Project,
  Account,
  AccountTransaction,
  Transaction,
  Invoice,
  Category
};