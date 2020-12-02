# DEV264 - Deep dive into SAP Cloud Platform Workflow Management

## Description

This repository contains the material for the SAP TechEd 2020 session called DEV264 - Deep dive into  SAP Cloud Platform Workflow Management.

## Overview

SAP Cloud Platform Workflow Management is a serivce enabling customers to automate workflows, manage decisions and gain real time visibility into processes.
The following key capablities are part of this service.
- **Workflow** - Automating processes,extending processes or orchestrating process steps across line of business applications.
- **Business Rules** - Managing decisions centrally and seperat decision logic from application logic.
- **Process Visivility** - Real time visibility into business process across processes and insight to actions.
- **My Inbox** - Enable business users to claim and complete their workflow tasks with FIORI user expereince. 
Workflow management provides [**Live Process Content**](https://api.sap.com/themes/WorkflowManagement) enabling customers to accelerate workflow automation by configuring or extending these process content.

In this exercise you will learn advanced capabilities of Workflow Management are included.
- Prinicipal Propagation - How to call APIs from Workflow using the credentials of a process participant.
- Reference Subflow - How to modularize workflows.
- Substitution - Substitute a user during absence with another user so that all workflow tasks will be assigned to the substitute.
- Insight to Action - Notifying Process Admins or Process Owners as and when process status changes to Failed, Suspended, Overdue or threshold violation. Enable business users to perform action based on process status. for eg: Workflow task attributes like priority from process visiblity.
- Configure Process Performance Indicators.

## Requirements

The requirements to follow the exercises in this repository are
- SAP Cloud Platform Workflow Management Subscription
- Basic knowledge of SAP Cloud Platform

## Exercises
There are four exercises in this session. Exercise 0 and 1 are mandatory.

**Exercise 0**: [Setup your SAP Cloud Platform Account](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise0/DEV264%20-%20Setup%20SAP%20%20Cloud%20Platform%20Trial%20Account.pdf) 

 Description - In this exercise you will subscribe Workflow Management and create the reuired Destinations.

 Duration - 15 minutes

**Exercise 1**: [Model SAP Cloud Platform Workflow](https://github.com/SAP-samples/teched2020-DEV264/blob/main/exercises/Exercise1/DEV264%20-%20Model%20Investment%20Approval%20Workfow.pdf)

Description: In this exercise you will model workflow froms scratch and configure user tasks for approval.

Duration - 30 minutes

**Exercise 2**: [Execute and Montior Cloud Platform Workflow](www.sap.com)

Description: In this exercise you will create instance of the modeled workflow, monitor the instance and complete the task.

Duration - 5 minutes

**Exercise 3**: [Insight to Action - User Action](www.sap.com)

Description: In this exercise you will model a workflow to configure a user action to in SAP Cloud Platform Process Visibility

Duration - 15 minutes

**Exercise 4**: [Insight to Action - System Action](www.sap.com)

Description: In this exercise you will model a workflow to configure a system action in SAP Cloud Platform Process Visibility

Duration - 15 minutes

**Exercise 5**: [Configure Process Visibility](www.sap.com)

Description: In this ex<ercise you will create a scenario, import your workflow from **Exercise 1**, configure phases, attributes , actions and performance indicators. You access process workspace , analyse process  performance indicators and trigger actions.

Duration - 30 minutes


**IMPORTANT**

Your repo must contain the .reuse and LICENSES folder and the License section below. DO NOT REMOVE the section or folders/files. Also, remove all unused template assets(images, folders, etc) from the exercises folder. 

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
