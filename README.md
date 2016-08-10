# Messages example

Right now we have the following topics:
- acd
- channel
- ice
- consolidated
- agent

### acd
Arrives when:
1. An inbound call is being queued.
2. An inbound call is being dequeued.

Example:

### channel
Channel message listen to every inbound call a customer makes, it shows every step the call is doing on real time (when it starts, when it bridges, when it hangs up , etc)

Example:
### ice
Send messages related to the ice plataform.
### consolidated
Send messages related to the full cycle of the call, from when it started to when it finished

Example:
### agent
Send messages realted to the agent status change of every agent
Example:
