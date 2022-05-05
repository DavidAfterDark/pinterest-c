const aws = require('aws-sdk')
const ddb = new aws.DynamoDB()

const tableName = process.env.USERTABLE

exports.handler = async (event) => {
  // Confirm the user
  event.response.autoConfirmUser = true

  // Set the email as verified if it is in the request
  if (event.request.userAttributes.hasOwnProperty('email')) {
    event.response.autoVerifyEmail = true
  }

  const now = new Date()

  const timestamp = now.getTime()

  const email = event.request.userAttributes.email

  const arroba = email.lastIndexOf('@')

  const userItem = {
    id: { S: event?.userName },
    email: { S: email },
    image: null,
    name: { S: email.slice(0, arroba) },
    username: { S: `@${email.slice(0, arroba)}` },
    __typename: { S: 'User' },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: '1' }
  }

  // save a new user to DynamoDB
  const params = {
    Item: userItem,
    TableName: tableName
  }

  try {
    console.log(params)
    await ddb.putItem(params).promise()
    console.log('success')
  } catch (error) {
    console.log('error saving user')
    console.log(error)
  }
}
