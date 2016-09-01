# Messages example

Right now we have the following topics:
- acd
- channel
- ice
- consolidated
- agent
- call

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
Send messages related to the full cycle of the call, from when it started to when it finished.

Inbound consolidated message:

Example:
- {"uuid":"f1777aaa-5ffc-11e6-9c21-c779d9c0875b","ani":"+1004","dnis":"2628067463","type":"inbound","projectId":"13bdc142-34aa-11e6-9bda-0ee219ddbc75","clientId":"96147fb6-2f2b-11e6-a373-0ee219ddbc75","abandoned":"true","lifecycle":[{"action":"channel-create","time":"2016-08-11T19:51:07.132Z"},{"action":"channel-bridge","time":"2016-08-11T19:51:07.220Z","serverAddress":"52.20.57.149","serverName":"ivr-engine-dev","serverType":"ivr","ivrName":"ws_get_success"},{"action":"channel-unbridge","time":"2016-08-11T19:51:08.060Z","serverAddress":"52.20.57.149","serverName":"ivr-engine-dev","ivrName":"ws_get_success"},{"action":"channel-enqueue","time":"2016-08-11T19:51:08.135Z","skills":"DevSkill1","queueName":"successqueue"},{"action":"channel-bridge","time":"2016-08-11T19:51:08.126Z","serverAddress":"52.5.187.19","serverName":"acd-engine-dev","serverType":"acd"},{"action":"channel-hangup","time":"2016-08-11T19:51:23.031Z","hangupParty":"agent"}],"action":"consolidated-call","topic":"consolidated"}
- 
Outbound consolidated message:

Example:
- {"agentName":"Carl_Lewis", "campaignName":"Dev3Home","type":"Preview (Open Progressive)","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","tenant":"TimeWarner","dnis":"1234567890","sessionId":"SI_0032_214435517320160901","transactionId":1164975507241861,"lifecycle":[{"action":"channel-preview","time":"2016-09-01T15:11:07.180Z"},{"action":"Waiting for call (reserved for specific call)","time":"2016-09-01T15:11:33.791Z"},{"action":"channel-talking","time":"2016-09-01T15:11:48.566Z"},{"action":"channel-wrap","time":"2016-09-01T15:11:58.070Z"},{"action":"channel-outcome","time":"2016-09-01T15:12:00.748Z","agentOutcome":"257","recordingPath":"http://59.123.88.45/recordings/F../sytel/rec/Dev3/dev/b8f3839f-acbb-4d48-a817-877a66c74d11.wav"}],"action":"consolidated-call","topic":"consolidated"}

### agent
Send messages related to the agent status change of every agent

Example:

- {"tenant":"Dev3","campaign-name":"Dev3Home","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"2","state":"Logged in and not ACD available","transaction-order":"23996376650361","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Home","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"0","state":"Not logged in","transaction-order":"23996379737558","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"2","state":"Logged in and not ACD available","transaction-order":"23996387655069","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","state-code":"3","state":"Waiting for call","transaction-order":"23996387655069","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:37.958Z","session-id":"SWIN3-STG_inbound_42593_5864033796_3","telephone-number":"1008","ice-queue":"Dev3SpanishQueue","state-code":"10","state":"Being offered a call","transaction-order":"23996387655069","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

- {"tenant":"Dev3","campaign-name":"Dev3Spanish","call-type-code":"5","call-type":"Inbound","agent-name":"Carl_Lewis","state-time":"2016-08-11T21:15:38.044Z","session-id":"SWIN3-STG_inbound_42593_5864033796_3","telephone-number":"1008","ice-queue":"Dev3SpanishQueue","state-code":"6","state":"Talking","transaction-order":"23996511225347","trigger":"agent-data","clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","supervisor-name":"AnthonyDaniels","action":"agent-status","topic":"agent"}

### call
Information related of a call disposition.

Example:
- {"state-time":"42599.686128","tenant":"DTAIn2","campaign-name":"DTAIn2IBProduct3RetAndService","session-id":"SWIN3-STG_inbound_42599_2831479282_792","telephone-number":"1003","data":"Phone_Number~N~|Title~N~|First_Name~N~|Lead_Contact_Owner~N~|Disposition~N~|Project_ID~N~|City~N~|Campaign_Id~N~|Type~N~|Fax~N~|Sal~N~|Inbound_DNIS~N~|Member_ID~N~|Call_Count~N~|Country~N~|Salesforce_ID~N~|Campaign_Type~N~|Mobile_Phone~N~|Zip~N~|Member_First_Associated_Date~N~|Last_Name~N~|Account~N~|Account_Owner~N~|Member_status~N~|Member_Type~N~|Street_Line_1~N~|State~N~|Street_Line_2~N~|Website~N~|Street_Line_3~N~|Address~N~|Campaign_Name~N~|Email_opt_out~N~|Industry~N~|Origin~N~|Email~N~|","agent-outcome":"138","reason-code":"10","reason":"Connected","agent-name":"dbf8f33a-ac48-4ec3-8520-60033454db73","recording-path":"E:/sytel/rec/DTAIn2/DTAIn2IBProduct3RetAndService/30064bb7-0487-41cc-b070-c69cbe977d5d.wa_","inbound":"","dialed-number":"4804059886","group-address":"DTAIn2QueueProduct3RetServ","transaction-order":"694754238141316","trigger":"outcome-data","recordingPath":"http://208.64.5.195/recordings/E../sytel/rec/DTAIn2/DTAIn2IBProduct3RetAndService/30064bb7-0487-41cc-b070-c69cbe977d5d.wav" ,"clientId":"ee5e6d4e-096b-11e5-bfee-22000b2a3325","action":"call-dispositions","topic":"call"}
