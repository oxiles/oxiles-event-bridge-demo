const {ConsensusTopicCreateTransaction, Client} = require('@hashgraph/sdk');
require("dotenv").config();

const operatorAccountId = process.env.OPERATOR_ID;
const operatorPrivateKey = process.env.OPERATOR_KEY;

if (operatorPrivateKey == null || operatorAccountId == null) {
    throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID");
}
const client = Client.forTestnet();
client.setOperator(operatorAccountId, operatorPrivateKey);

(async function () {
    const transactionId = await new ConsensusTopicCreateTransaction().execute(client);

    const topicId = (await transactionId.getReceipt(client)).getConsensusTopicId();

    console.log("Your topic ID is: " + topicId);
})();