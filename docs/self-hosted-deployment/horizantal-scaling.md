---
sidebar_position: 95
---

# Horizontal Scaling Guide

This guide explains how to scale **DronaHQ Self-Hosted** horizontally on **Docker, Kubernetes, and other cloud platforms** to improve performance, availability, and fault tolerance.

## Prerequisite: Externalizing Databases

Before proceeding with horizontal scaling, it is **strongly recommended** to externalize your databases. Running multiple instances of your application with an embedded database can lead to inconsistencies and scaling issues. 

[Follow this guide to configure external databases](http://localhost:3000/self-hosted-deployment/configure-external-databases/).

## What is Horizontal Scaling?

Horizontal scaling (scaling out) involves adding more instances of your application to distribute load efficiently. This is essential for handling increased traffic, improving resilience, and reducing downtime.

## Scaling on Different Platforms

### 1. Scaling with Docker Compose

If running **DronaHQ Self-Hosted** using Docker Compose, you can scale by increasing container replicas.

#### Steps:

1. Modify your `docker-compose.yml`:
   ```yaml
   version: '3'
   services:
     dronahq:
       image: dronahq/self-hosted:latest
       deploy:
         replicas: 3  # Increase this number to scale horizontally
   ```
2. Apply changes:
   ```sh
   docker-compose up -d --scale dronahq=3
   ```

### 2. Scaling on Kubernetes (K8s)

For Kubernetes-based deployments, you can use a **Deployment** with an **HPA (Horizontal Pod Autoscaler)**.

#### Steps:

1. Ensure your Deployment is configured in `dronahq-deployment.yaml`:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: dronahq
   spec:
     replicas: 2  # Set desired replicas
     template:
       spec:
         containers:
           - name: dronahq
             image: dronahq/self-hosted:latest
   ```
2. Apply the Deployment:
   ```sh
   kubectl apply -f dronahq-deployment.yaml
   ```

3. Enable **autoscaling** based on CPU or memory:
   ```sh
   kubectl autoscale deployment dronahq --cpu-percent=50 --min=2 --max=10
   ```

### 3. Scaling on Cloud Platforms

Most cloud providers offer **container orchestration** and **auto-scaling solutions** similar to Kubernetes. You can scale using built-in auto-scaling mechanisms:

#### Steps:

1. Enable **Cluster Autoscaler** or equivalent service on your cloud platform.
2. Adjust node scaling policies using your provider’s auto-scaling settings.

### 4. Scaling on Virtual Machines (VMs)

For VM-based deployments:

- Use **Load Balancer** to distribute traffic.
- Configure an **Auto Scaling Group** or equivalent mechanism to add/remove instances based on CPU or memory utilization.

#### Steps:

1. Create an **Auto Scaling Group** (or similar) for your VM instances.
2. Attach a **Load Balancer** to distribute requests.
3. Set scaling policies to adjust instances dynamically.

## Load Balancing

To ensure efficient traffic distribution:

- **Docker Swarm**: Use an internal load balancer (`docker service create --replicas=3`).
- **Kubernetes**: Use a `Service` of type `LoadBalancer`:
  ```yaml
  kind: Service
  apiVersion: v1
  metadata:
    name: dronahq-service
  spec:
    type: LoadBalancer
    selector:
      app: dronahq
  ```
- **Cloud Platforms**: Use the provider’s load balancer (e.g., Application Load Balancer, Network Load Balancer, or equivalent).

## Summary

| Platform         | Scaling Method                                |
|-----------------|----------------------------------------------|
| **Docker Compose** | Increase `replicas` in `docker-compose.yml` |
| **Kubernetes (K8s)** | Use `kubectl scale` or HPA (`autoscale`) |
| **Cloud Platforms** | Enable Cluster Autoscaler, adjust scaling policies |
| **Virtual Machines** | Auto Scaling Group + Load Balancer |
| **Docker Swarm** | Scale services using `docker service scale` |

By implementing horizontal scaling, you can efficiently manage increased workloads while maintaining high availability and reliability.

For more details, refer to the platform-specific scaling guides.

