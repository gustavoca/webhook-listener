# Messages example

Right now we have the following topics:
- acd
- channel
- ice
- consolidated
- agent

### acd
Arrives when an inbound call gets into the queue, and will track the status of the call inside the call:
1. An inbound call is being queued.
2. An inbound call is being dequeued.

Examples:
-  {"action":"adding to queue","ani":"1004","cdrId":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","concurrentCalls":"123","destination":"_undef_","dnis":"2628067463","mandatorySkills":"_undef_","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","queueName":"successqueue","skills":"DevSkill1","time":"2016-08-11T19:51:08.135Z","timeout":"15","useCcm":"true","uuid":"ee11d6b5-369e-440a-87cb-30ddffd50581","transaction":"18926770226182","topic":"acd"}
-  {"action":"call timeout in a queue","ani":"1004","cdrId":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","concurrentCalls":"123","destination":"_undef_","dnis":"2628067463","mandatorySkills":"_undef_","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","queueName":"successqueue","skills":"DevSkill1","time":"2016-08-11T19:51:22.262Z","timeout":"15","useCcm":"true","uuid":"ee11d6b5-369e-440a-87cb-30ddffd50581","queue":"successqueue","transaction":"18940897624639","topic":"acd"}

### channel
Channel message listen to every inbound call a customer makes, it shows every step the call is doing on real time (when it starts, when it bridges, when it hangs up , etc)

Examples:
- {"uuid":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","ani":"+1004","dnis":"2628067463","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","time":"2016-08-11T19:51:07.132Z","action":"channel-create","topic":"channel"}
- {"uuid":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","ani":"+1004","dnis":"2628067463","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","time":"2016-08-11T19:51:07.220Z","serverName":"ivr-engine-dev","serverType":"ivr","serverAddress":"52.20.57.149","ivrName":"ws_get_success","action":"channel-bridge","topic":"channel"}
- {"uuid":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","ani":"+1004","dnis":"2628067463","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","time":"2016-08-11T19:51:08.060Z","serverName":"ivr-engine-dev","serverAddress":"52.20.57.149","ivrName":"ws_get_success","action":"channel-unbridge","topic":"channel"}

### ice
Send messages related to the ice plataform.

Examples:
- {"campaign-name":"Dev3Spanish","queue-length":"1","queue-agents-waiting":"1","queue-agents-busy":"0","queue-agents-active":"0","resource-status-code":"5","resource-status":"Call queued, no agent available","telephone-number":"1003","dialed-number":"2628067394","transaction-order":"23729598028873","trigger":"group-data","action":"ice","topic":"ice"}
{"campaign-name":"Dev3Spanish","queue-length":"1","queue-agents-waiting":"1","queue-agents-busy":"0","queue-agents-active":"0","resource-status-code":"7","resource-status":"Agent added to group","agent-name":"Muhammad_Ali","transaction-order":"23729838975878","trigger":"group-data","action":"ice","topic":"ice"}

- {"tenant":"Dev3","campaign-name":"Dev3Home","call-type-code":"5","call-type":"Inbound","agent-name":"Muhammad_Ali","state-time":"42593.882771","state-code":"2","state":"Logged in and not ACD available","transaction-order":"23729841406951","trigger":"agent-data","action":"ice","topic":"ice"}

- {"tenant":"Dev3","campaign-name":"Dev3Home","call-type-code":"5","call-type":"Inbound","agent-name":"Muhammad_Ali","state-time":"42593.882771","state-code":"0","state":"Not logged in","transaction-order":"23729843954407","trigger":"agent-data","action":"ice","topic":"ice"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Muhammad_Ali","state-time":"42593.882771","state-code":"2","state":"Logged in and not ACD available","transaction-order":"23729843954407","trigger":"agent-data","action":"ice","topic":"ice"}
### consolidated
Send messages related to the full cycle of the call, from when it started to when it finished

Example:
- {"uuid":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","ani":"+1004","dnis":"2628067463","type":"inbound","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","abandoned":"true","lifecycle":[{"action":"channel-create","time":"2016-08-11T19:51:07.132Z"},{"action":"channel-bridge","time":"2016-08-11T19:51:07.220Z","serverAddress":"52.20.57.149","serverName":"ivr-engine-dev","serverType":"ivr","ivrName":"ws_get_success"},{"action":"channel-unbridge","time":"2016-08-11T19:51:08.060Z","serverAddress":"52.20.57.149","serverName":"ivr-engine-dev","ivrName":"ws_get_success"},{"action":"channel-enqueue","time":"2016-08-11T19:51:08.135Z","skills":"DevSkill1","queueName":"successqueue"},{"action":"channel-bridge","time":"2016-08-11T19:51:08.126Z","serverAddress":"52.5.187.19","serverName":"acd-engine-dev","serverType":"acd"},{"action":"channel-hangup","time":"2016-08-11T19:51:23.031Z","hangupParty":"agent"}],"action":"consolidated-call","topic":"consolidated"}

### agent
Send messages related to the agent status change of every agent

Example:

- {"tenant":"Dev3","campaign-name":"Dev3Home","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"2","state":"Logged in and not ACD available","transaction-order":"23996376650361","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Home","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"0","state":"Not logged in","transaction-order":"23996379737558","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"2","state":"Logged in and not ACD available","transaction-order":"23996387655069","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"3","state":"Waiting for call","transaction-order":"23996387655069","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","session-id":"SWIN3-STG_inbound_42593_5864033796_3","telephone-number":"1008","ice-queue":"Dev3SpanishQueue","state-code":"10","state":"Being offered a call","transaction-order":"23996387655069","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:38.044Z","session-id":"SWIN3-STG_inbound_42593_5864033796_3","telephone-number":"1008","ice-queue":"Dev3SpanishQueue","state-code":"6","state":"Talking","transaction-order":"23996511225347","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}
