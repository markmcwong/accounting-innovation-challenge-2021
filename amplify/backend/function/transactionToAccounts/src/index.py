import json
import boto3
from decimal import Decimal
import uuid

dynamodb = boto3.resource('dynamodb')
accounts = 'Account-igpj4yfefngbnk3whqdz4aojvi-dev'


def lambda_handler(event, context):
    table = dynamodb.Table(accounts)
    uniqueAccounts = {}
    for record in event['Records']:
        if ('NewImage' in record['dynamodb']):
            item = record['dynamodb']['NewImage']
            print(item)
            if (item['particular'] not in uniqueAccounts):
                uniqueAccounts[item['particular']] = {
                    "endBalance": item['amountInGJ'],
                    "createdAt": item['createdAt'],
                    "updatedAt": item['updatedAt'],
                }
            else:
                uniqueAccounts[item['particular']
                               ]['endBalance'] += item['amountInGJ']
            # print(record['dynamodb']['NewImage']['Message']["S"])

    # with table.batch_writer() as batch:
    #     counter = 0
    #     for key in uniqueAccounts:
    #         print(counter)
    #         counter += 1
    #         batch.put_item(
    #             Item={
    #                 'id': str(uuid.uuid4()),
    #                 'projectID': 'f5a80c8a-5f6a-466e-bc53-6f1f22299191',
    #                 'name': key,
    #                 'category': 'test',
    #                 'endBalance': Decimal(uniqueAccounts[key]['endBalance']),
    #                 'createdAt': uniqueAccounts[key]['createdAt'],
    #                 'updatedAt': uniqueAccounts[key]['updatedAt'],
    #                 # '_lastChangedAt': time.mktime((ciso8601.parse_datetime(currentTimeInString)).timetuple()),
    #             }
    #         )
    # for record in event['Records']:
    #     print("DynamoDB Record: " + json.dumps(record['dynamodb'], indent=2))
    return 'Successfully processed {} records.'.format(len(event['Records']))
