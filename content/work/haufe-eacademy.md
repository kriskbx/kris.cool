---
order: 2
url: 'https://eacademy.haufe.de'
color: 'blue'                    
title: 'Haufe eAcademy'                    
excerpt: 'As the leader of workplace training in the German speaking world the Haufe Group started in 2019 to offer courses digitally on their new eAcademy e-learning platform'
tags:
    - 'Docker'
    - 'Laravel'
    - 'React'
    - 'Vuejs'
---

One of the key challenges in this project was obviously building a fairly complex platform in a small team of two and later all by myself, including a checkout process and a sophisticated mass onboarding of employees for big teams and companies.

Integrating the platform into existing LMS systems using the Scorm standard was also an exciting challenge. 

Another one was creating and maintaining the necessary infrastructure to run the platform on AWS redundantly and scalable within the given compliance and security guidelines. We chose Docker Swarm over EKS and ECS to keep the complexity of the infrastructure low and used Terraform to deploy it to production and make multiple environments easy and feasible.
