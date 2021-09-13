import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Category {
  SALES = "SALES",
  COST_OF_GOOD_SOLD = "COST_OF_GOOD_SOLD",
  OTHER_REVENUES = "OTHER_REVENUES",
  EXPENSES = "EXPENSES",
  NON_CURRENT_ASSETS = "NON_CURRENT_ASSETS",
  CURRENT_ASSETS = "CURRENT_ASSETS",
  NON_CURRENT_LIABILITIES = "NON_CURRENT_LIABILITIES",
  CURRENT_LIABILITIES = "CURRENT_LIABILITIES",
  CAPITAL = "CAPITAL"
}



type NotificationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccountTransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InvoiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Notification {
  readonly id: string;
  readonly user: string;
  readonly message: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notification, NotificationMetaData>);
  static copyOf(source: Notification, mutator: (draft: MutableModel<Notification, NotificationMetaData>) => MutableModel<Notification, NotificationMetaData> | void): Notification;
}

export declare class Project {
  readonly id: string;
  readonly projectName: string;
  readonly entriesURL?: string;
  readonly Accounts?: (Account | null)[];
  readonly owner?: string;
  readonly Transactions?: (Transaction | null)[];
  readonly bookIncomplete: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Account {
  readonly id: string;
  readonly endBalance?: number;
  readonly category?: Category | keyof typeof Category;
  readonly specialBook?: string;
  readonly name: string;
  readonly AccountTransactions?: (AccountTransaction | null)[];
  readonly projectID?: string;
  readonly isUploaded?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Account, AccountMetaData>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account, AccountMetaData>) => MutableModel<Account, AccountMetaData> | void): Account;
}

export declare class AccountTransaction {
  readonly id: string;
  readonly account: Account;
  readonly transaction: Transaction;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AccountTransaction, AccountTransactionMetaData>);
  static copyOf(source: AccountTransaction, mutator: (draft: MutableModel<AccountTransaction, AccountTransactionMetaData>) => MutableModel<AccountTransaction, AccountTransactionMetaData> | void): AccountTransaction;
}

export declare class Transaction {
  readonly id: string;
  readonly date?: string;
  readonly amountInGJ: number;
  readonly amountInInvoice: number;
  readonly amountInBook?: number;
  readonly particular?: string;
  readonly contract?: string;
  readonly contractNumber?: string;
  readonly accounts?: (AccountTransaction | null)[];
  readonly Invoices?: (Invoice | null)[];
  readonly projectID?: string;
  readonly isDebit?: boolean;
  readonly customer?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}

export declare class Invoice {
  readonly id: string;
  readonly invoiceNumber?: string;
  readonly date?: string;
  readonly amount: number;
  readonly transactionID?: string;
  readonly downloadURL: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Invoice, InvoiceMetaData>);
  static copyOf(source: Invoice, mutator: (draft: MutableModel<Invoice, InvoiceMetaData>) => MutableModel<Invoice, InvoiceMetaData> | void): Invoice;
}