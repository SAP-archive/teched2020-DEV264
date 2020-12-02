var WorkflowStartPayload ={};
WorkflowStartPayload.definitionId = $.context.WorkflowInstanceDetail.definitionId;
WorkflowStartPayload.context={};
WorkflowStartPayload.context.Request= $.context.WorkflowInstanceDetail.Context.Request;
WorkflowStartPayload.context.Investment= $.context.WorkflowInstanceDetail.Context.Investment;
WorkflowStartPayload.context.Approver= $.context.WorkflowInstanceDetail.Context.Approver;
WorkflowStartPayload.context.Comments= [];

$.context.WorkflowStartRequest = WorkflowStartPayload;
$.context.WorkflowPatch={};
$.context.WorkflowPatch.status = "CANCELED";