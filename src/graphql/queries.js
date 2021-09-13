/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getAccountTransactions = `
  query GetAccount ($id: ID!) {
    getAccount(id: $id) {
      AccountTransactions {
        items {
          transaction {
            id
            amountInGJ
            date
            createdAt
            particular
            amountInInvoice
            isDebit
            customer
            amountInBook
            contractNumber
          }
        }
      }
    }
  }
`;

export const getTransactiionInvoices = `
  query GetAccount ($id: ID!) {
    getTransaction(id: $id) {
      Invoices {
        items {
          date
          amount
          invoiceNumber
          downloadURL
        }
      }
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      user
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        message
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
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user
        message
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
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      projectName
      entriesURL
      owner
      bookIncomplete
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        items {
          id
          date
          amountInGJ
          amountInInvoice
          amountInBook
          particular
          contract
          contractNumber
          projectID
          isDebit
          customer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          isUploaded
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectName
        entriesURL
        owner
        bookIncomplete
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Transactions {
          nextToken
          startedAt
        }
        Accounts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectName
        entriesURL
        owner
        bookIncomplete
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Transactions {
          nextToken
          startedAt
        }
        Accounts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      projectID
      isDebit
      customer
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
          downloadURL
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        projectID
        isDebit
        customer
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
      nextToken
      startedAt
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        projectID
        isDebit
        customer
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
      nextToken
      startedAt
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      invoiceNumber
      date
      amount
      transactionID
      downloadURL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        invoiceNumber
        date
        amount
        transactionID
        downloadURL
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
`;
export const syncInvoices = /* GraphQL */ `
  query SyncInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        invoiceNumber
        date
        amount
        transactionID
        downloadURL
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
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      endBalance
      category
      specialBook
      name
      projectID
      isUploaded
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        endBalance
        category
        specialBook
        name
        projectID
        isUploaded
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
      nextToken
      startedAt
    }
  }
`;
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        endBalance
        category
        specialBook
        name
        projectID
        isUploaded
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
      nextToken
      startedAt
    }
  }
`;
export const syncAccountTransactions = /* GraphQL */ `
  query SyncAccountTransactions(
    $filter: ModelAccountTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccountTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          projectID
          isDebit
          customer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        account {
          id
          endBalance
          category
          specialBook
          name
          projectID
          isUploaded
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
