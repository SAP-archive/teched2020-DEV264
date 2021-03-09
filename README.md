# DEV264 - Deep dive into SAP Business Technology Platform Workflow Management

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/teched2020-DEV264)](https://api.reuse.software/info/github.com/SAP-samples/teched2020-DEV264)

## Description

This repository contains the material for the SAP TechEd 2020 session called DEV264 - Deep dive into SAP Business Technology Platform Workflow Management.

## Overview

SAP Business Technology Platform Workflow Management is a serivce enabling customers to automate workflows, manage decisions and gain real time visibility into processes.
The following key capabilities are part of this service.
- **Workflow** - Automating processes, extending processes or orchestrating process steps across line of business applications.
- **Business Rules** - Managing decisions centrally and seperat decision logic from application logic.
- **Process Visivility** - Real time visibility into business process across processes and insight to actions.
- **My Inbox** - Enable business users to claim and complete their workflow tasks with FIORI user expereince. 
Workflow management provides [**Live Process Content**](https://api.sap.com/themes/WorkflowManagement) enabling customers to accelerate workflow automation by configuring or extending these process content.

![Workflow](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/images/workflowmanagement.png?raw=true)

In this exercise you will learn advanced capabilities of Workflow Management are included.
- Prinicipal Propagation - How to call APIs from Workflow using the credentials of a process participant.
- Reference Sub flow - How to modularize workflows.
- Substitution - Substitute a user during absence with another user so that all workflow tasks will be assigned to the substitute.
- Insight to Action - Notifying Process Admins or Process Owners as and when process status changes to Failed, Suspended, Overdue or threshold violation. Enable business users to perform action based on process status. for eg: Workflow task attributes like priority from process visiblity.
- Configure Process Performance Indicators.

## Requirements

The requirements to follow the exercises in this repository are
- SAP Business Technology Platform Workflow Management Subscription
- Basic knowledge of SAP Business Technology

## Exercises
There are four exercises in this session. Exercise 0 and 1 are mandatory.

**Exercise 0**: [Setup your SAP Business Technology Platform Account](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise0/DEV264%20-%20Setup%20SAP%20%20Cloud%20Platform%20Trial%20Account.pdf) 

 Description - In this exercise you will subscribe Workflow Management and create the reuired Destinations.

 Duration - 15 minutes

**Exercise 1**: [Model SAP Business Technology Platform Workflow](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise1/DEV264%20-%20Model%20Investment%20Approval%20Workfow.pdf)

Description: In this exercise you will model workflow froms scratch and configure user tasks for approval.

Duration - 30 minutes

**Exercise 2**: [Execute and Montior Business Technology Platform Workflow](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise2/DEV264%20-%20Execute%20and%20Monitor%20Workflow.pdf)

Description: In this exercise you will create instance of the modeled workflow, monitor the instance and complete the task.

Duration - 5 minutes

**Exercise 3**: [Insight to Action - User Action](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise3/DEV264%20-%20Restart%20Workflow%20%20-%20Insight%20to%20Action.pdf)

Description: In this exercise you will model a workflow to configure a user action to in SAP Business Technology Platform Process Visibility

Duration - 15 minutes

**Exercise 4**: [Insight to Action - System Action](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise4/DEV264%20-%20Notify%20Process%20Administrators%20-%20Insight%20to%20Action.pdf)

Description: In this exercise you will model a workflow to configure a system action in SAP Business Technology Platform Process Visibility

Duration - 15 minutes

**Exercise 5**: [Configure Process Visibility](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise5/DEV264%20-%20Gain%20Process%20Visibility.pdf)

Description: In this exercise you will create a scenario, import your workflow from **Exercise 1**, configure phases, attributes, actions and performance indicators. You access process workspace, analyse process  performance indicators and trigger actions.

Duration - 30 minutes

**Exercise 6**: [Modularize workflows using Reference Subflow](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise6/DEV264%20-%20%20Modularize%20workflows%20using%20Reference%20Subflow.pdf)

Description: In this exercise you will learn how to modularize workflows using Refernece Subflow feature. You will reuse the workflow from **Exercise 1** as reference sublfow and create multiple approvals.

Duration - 20 minutes


## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.


