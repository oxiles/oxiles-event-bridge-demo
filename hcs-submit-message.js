const {ConsensusTopicId, ConsensusMessageSubmitTransaction, Client} = require('@hashgraph/sdk');
require("dotenv").config();

const operatorAccountId = process.env.OPERATOR_ID;
const operatorPrivateKey = process.env.OPERATOR_KEY;
const topicId = process.env.TOPIC_ID;

if (operatorPrivateKey == null || operatorAccountId == null || topicId == null) {
    throw new Error("environment variables OPERATOR_KEY, OPERATOR_ID and TOPIC_ID must be present");
}
if (!process.argv[2]) {
    throw new Error("please provide a message");
}
const client = Client.forTestnet();
client.setOperator(operatorAccountId, operatorPrivateKey);

(async function () {
    await new ConsensusMessageSubmitTransaction()
        .setTopicId(ConsensusTopicId.fromString(topicId))
        .setMessage(process.argv[2])
        .build(client)
        .execute(client);

    console.log('Message submitted successfully');
})();