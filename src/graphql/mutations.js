/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const csvToDB = /* GraphQL */ `
  mutation CsvToDB($projectId: String, $fileName: String) {
    csvToDB(projectId: $projectId, fileName: $fileName)
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      projectName
      entriesURL
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      projectName
      entriesURL
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      projectName
      entriesURL
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Invoices {
        items {
          id
          invoiceNumber
          date
          amount
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Invoices {
        items {
          id
          invoiceNumber
          date
          amount
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Invoices {
        items {
          id
          invoiceNumber
          date
          amount
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
      id
      invoiceNumber
      date
      amount
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
      id
      invoiceNumber
      date
      amount
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
      id
      invoiceNumber
      date
      amount
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      endBalance
      category
      specialBook
      name
      projectID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AccountTransactions {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      endBalance
      category
      specialBook
      name
      projectID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AccountTransactions {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      endBalance
      category
      specialBook
      name
      projectID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AccountTransactions {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createAccountTransaction = /* GraphQL */ `
  mutation CreateAccountTransaction(
    $input: CreateAccountTransactionInput!
    $condition: ModelAccountTransactionConditionInput
  ) {
    createAccountTransaction(input: $input, condition: $condition) {
      id
      accountID
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      transaction {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Invoices {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
      }
      account {
        id
        endBalance
        category
        specialBook
        name
        projectID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AccountTransactions {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateAccountTransaction = /* GraphQL */ `
  mutation UpdateAccountTransaction(
    $input: UpdateAccountTransactionInput!
    $condition: ModelAccountTransactionConditionInput
  ) {
    updateAccountTransaction(input: $input, condition: $condition) {
      id
      accountID
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      transaction {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Invoices {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
      }
      account {
        id
        endBalance
        category
        specialBook
        name
        projectID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AccountTransactions {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteAccountTransaction = /* GraphQL */ `
  mutation DeleteAccountTransaction(
    $input: DeleteAccountTransactionInput!
    $condition: ModelAccountTransactionConditionInput
  ) {
    deleteAccountTransaction(input: $input, condition: $condition) {
      id
      accountID
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      transaction {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Invoices {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
      }
      account {
        id
        endBalance
        category
        specialBook
        name
        projectID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AccountTransactions {
          nextToken
          startedAt
        }
      }
    }
  }
`;
