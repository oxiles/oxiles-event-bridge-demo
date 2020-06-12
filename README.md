# oxiles-event-bridge-demo
This is a simple demo project for showing [oxiles-event-bridge](https://github.com/oxiles/oxiles-event-bridge) in action.

In this example, Oxiles listens to a HCS topic and broadcast the message to an HTTP endpoint.

##Instructions
* Install dependencies with ```npm install```
* Set your Hedera Hashgraph operator ID and private key in the ```.env``` file. If you already have a topic you can use to listen to, set it also in the ``.env`` file.
* In case you want to create a new topic, execute ```node hcs-create-topic.js``` and set it in the ```.env``` file
* Set Oxiles configuration environment variables in ```docker-compose.yml``` file, in oxiles service:
    * HCS_TOPIC_ID with the same topic ID you put in ```.env``` file.
    * HTTP_BROADCASTER_URL with your API url you want to broadcast your HCS messages. For an easy and fast example, I suggest you to create a free endpoint in [Beeceptor](https://beeceptor.com/), for example ``https://oxiles-event-bridge-demo.free.beeceptor.com``
* Start Oxiles executing ```docker-compose up```
* When Oxiles has started, you can test the demo by submitting a new message to HCS to the topic you have configured, executing ```node hcs-submit-message.js 'Oxiles HCS example message'```
* You should see the message JSON in the Beeceptor console or in your API server:

``` 
{
  "mirrorNode": "hcs.testnet.mirrornode.hedera.com:5600",
  "topicId": "0.0.68412",
  "consensusTimestamp": 1591959712.501942,
  "message": "Oxiles HCS example message",
  "sequenceNumber": 4
}
```
   
We have also included .yml example configurations for listening to Kabuto and Dragonglass APIs, in order to listen to your Hedera Hashgrapsh contract transactions. 

This is just a simple example, with Oxiles, apart from listening to HCS, Kafka and Kabuto and Dragonglass APIs, you can also listen to other blockchains as Ethereum. 
Apart from broadcasting to HTTP, Oxiles is able to broadcast to Kafka, RabbitMQ, Pulsar, and even to HCS. 
For more information, please visit [oxiles-event-bridge](https://github.com/oxiles/oxiles-event-bridge) repository.
