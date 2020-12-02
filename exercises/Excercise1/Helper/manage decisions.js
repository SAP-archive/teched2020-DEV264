
var lastUserTask1 = $.usertasks.usertask1.last;
 $.context.Approver.UserId = lastUserTask1.processor;
 $.context.Approver.decision = lastUserTask1.decision;

 var decision={};
 decision.User= lastUserTask1.processor;
 decision.Role="Cost Center Approver";
 decision.Decision = lastUserTask1.decision;
 decision.Comment=$.context.Approver.Comment;
 $.context.Comments.push(decision);
 
 $.context.Decision = lastUserTask1.decision

 $.context.Approver.UserId = "";
 $.context.Approver.decision = "";
 $.context.Approver.Comment ="";