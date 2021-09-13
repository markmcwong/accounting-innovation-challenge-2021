import csv
import boto3
from boto3.dynamodb.conditions import Key
import json
from random import random
import codecs
import uuid
from datetime import datetime
from decimal import Decimal
from requests import request

# resources name
dynamodb = boto3.resource('dynamodb')
s3 = boto3.resource('s3')
bucket = s3.Bucket('aic2021ad68ba2274874a1f9253848fe04737bd00904-dev')
transactions = 'Transaction-igpj4yfefngbnk3whqdz4aojvi-dev'
accountTransactions = 'AccountTransaction-igpj4yfefngbnk3whqdz4aojvi-dev'
accounts = 'Account-igpj4yfefngbnk3whqdz4aojvi-dev'
APPSYNC_API_ENDPOINT_URL = 'https://wmkmdvnpbrfs7ndv4i2x2337fq.appsync-api.ap-southeast-1.amazonaws.com/graphql'
projectID = ''
gjFileName = ''


def lambda_handler(event, context):
    projectID = event['projectId']
    gjFileName = event['fileName']
    print(event)
    obj = bucket.Object('public/' + gjFileName).get()
    new = codecs.getreader('utf-8')(obj['Body'])
    next(new, None)
    write_to_dynamo(csv.DictReader(
        new, fieldnames=['date', 'particulars', 'debit', 'credit']))
    # test()
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }


def getListOfAccounts():
    url = "https://wmkmdvnpbrfs7ndv4i2x2337fq.appsync-api.ap-southeast-1.amazonaws.com/graphql"
    payload = "{\"query\":\"query MyQuery {\\n  listAccounts(filter: {projectID: {eq: \\\"" + projectID + \
        "\\\"}}) {\\n    items {\\n      name\\n      id\\n    }\\n  }\\n}\",\"variables\":{}}"
    headers = {
        'x-api-key': 'da2-sdyvfihih5flhe3s4wgdzg3u4q',
        'Content-Type': 'application/json'
    }
    response = request("POST", url, headers=headers, data=payload)
    return (response.json()
            ['data']['listAccounts']['items'])


def getListOfTransactions(particular):
    url = "https://wmkmdvnpbrfs7ndv4i2x2337fq.appsync-api.ap-southeast-1.amazonaws.com/graphql"
    payload = "{\"query\":\"query MyQuery {\\n  listTransactions(filter: {particular: {eq: \\\"" + str(
        particular) + "\\\"}}) {\\n    items {\\n      id\\n    }\\n  }\\n}\",\"variables\":{}}"
    headers = {
        'x-api-key': 'da2-sdyvfihih5flhe3s4wgdzg3u4q',
        'Content-Type': 'application/json'
    }
    response = request("POST", url, headers=headers, data=payload)
    # print(response.text)
    return (list(map(lambda x: x['id'], response.json()
                     ['data']['listTransactions']['items'])))


def write_to_dynamo(rows):
    table = dynamodb.Table(transactions)
    accountsTable = dynamodb.Table(accounts)
    accountTransactionsTable = dynamodb.Table(accountTransactions)
    lastRecordedDate = None
    records = {}
    currentTime = datetime.utcnow()
    currentTimeInString = currentTime.isoformat()[:-3] + 'Z'
    with table.batch_writer() as batch:
        for row in rows:
            # insert transaction\
            if (row['date'] != ''):
                lastRecordedDate = row['date']
            if not(row['debit'] == '' and row['credit'] == ''):
                if (row['particulars'] != '' and row['particulars'] not in records):
                    records[row['particulars']
                            ] = Decimal(row['debit'] if (row['debit'] != '') else row['credit'])
                else:
                    records[row['particulars']
                            ] += Decimal(row['debit'] if (row['debit'] != '') else row['credit'])
                batch.put_item(
                    Item={
                        'id': str(uuid.uuid4()),
                        'date': row['date'] if (row['date'] != '') else lastRecordedDate,
                        'amountInGJ': Decimal(row['debit'] if (row['debit'] != '') else row['credit']),
                        'projectID': 'f5a80c8a-5f6a-466e-bc53-6f1f22299191',
                        'createdAt': currentTimeInString,
                        'updatedAt': currentTimeInString,
                        'particular': row['particulars']
                        # '_lastChangedAt': time.mktime((ciso8601.parse_datetime(currentTimeInString)).timetuple()),
                    }
                )

    with accountsTable.batch_writer() as accountsBatch:
        # print('recorsds: ')
        # print(records)
        for key in records:
            accountsBatch.put_item(
                Item={
                    'id': str(uuid.uuid4()),
                    'projectID': 'f5a80c8a-5f6a-466e-bc53-6f1f22299191',
                    'name': key,
                    'category': 'test',
                    'endBalance': Decimal(records[key]),
                    'createdAt': currentTimeInString,
                    'updatedAt': currentTimeInString,
                    # '_lastChangedAt': time.mktime((ciso8601.parse_datetime(currentTimeInString)).timetuple()),
                }
            )

    listOfAccounts = getListOfAccounts()
    with accountTransactionsTable.batch_writer() as aTbatch:
        for account in listOfAccounts:
            # print(account['name'])
            listOfTransactions = getListOfTransactions(account['name'])
            # print(listOfTransactions)
            for transaction in listOfTransactions:
                aTbatch.put_item(
                    Item={
                        'id': str(uuid.uuid4()),
                        'accountID': account['id'],
                        'transactionID': transaction,
                        # '_lastChangedAt': time.mktime((ciso8601.parse_datetime(currentTimeInString)).timetuple()),
                    }
                )


# def test():
#     # Use AWS4Auth to sign a requests session
#     session = requests.Session()
#     session.auth = AWS4Auth(
#         # An AWS 'ACCESS KEY' associated with an IAM user.
#         'AKIASYVMBYZEFTH7EDH6',
#         # The 'secret' that goes with the above access key.
#         '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',
#         'ap-southeast-1',
#         'appsync'
#     )
#     # Use JSON format string for the query. It does not need reformatting.
#     query = """ query foo { getProject(id: "c9adc7a9-5ecc-4cc4-891a-1d6a1f20b250") { Accounts { items { name, id, projectID, category, endBalance, createdAt}}}} }"""

#     # Now we can simply post the request...
#     response = session.request(
#         url=APPSYNC_API_ENDPOINT_URL,
#         method='POST',
#         headers={'x-api-key': 'da2-sdyvfihih5flhe3s4wgdzg3u4q'},
#         json={'query': query}
#     )
#     print(response.text)
