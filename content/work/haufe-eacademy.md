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
---

One of the key challenges in this project was obviously building a fairly complex platform, including a checkout process, mass onboarding of employees for big teams and integrations in existing LMS systems. 

Another one was creating and maintaining the necessary infrastructure to run the platform on AWS redundant and scalable within the given compliance and security guidelines. We chose Docker Swarm over EKS to keep complexity of the infrastructure low and used Terraform to deploy it to production and make multiple environments easy and feasible.
