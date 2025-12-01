---
title: Useful Commands for Maintaining Docker Servers
icon: emojione:recycling-symbol
date: 2024-07-23
isOriginal: true
tag:
 - Docker
 - Fundamentals
 - Server Maintenance
---

# Useful Commands for Maintaining Docker Servers

Usually there will be containers and images which are no longer in use, yet their creators just forgot to remove them, left them to remain in servers as 'Status: Exited, Last Used: 3 Years Ago'. Unused containers will hold up their images, and every image of those no longer used old versions will hold up 3~5GB disk space.

Do server maintainers need to manually remove these unattended containers and images? Do server maintainers need to 
write some automatic scripts for this boring operation? The answer is: probably no. Docker has already provided useful commands to cleanup these cyber waste and release unused resource.

## What to Clean Up

Usually, containers that has exited naturally (not because of faults) and resource which is not used by any container should be considered as cyber waster. 

Containers, images, custom networks and attached volumes for these unused containers should be cleaned up.

## How to Clean Up

### All-In-One Command

This command will remove all exited containers, images, networks, and volumes which are not being used by any running container.

```shell
docker system prune -a --volume
```
Option '-a' for remove all unused images rather than only dangling images (images without tags); option '--volume' for 
clean up unused volumes.

There will be a confirmation which requires a human operator to type 'y' to continue, and adding '-f' option will skip this confirmation process:

```shell
docker system prune -a --volume -f
```

### Individual Commands

Search and remove containers that exited naturally (with exit code 0):

```shell
docker rm `docker ps -a | grep 'Exited (0)' | awk '{print $1}'`
```

Remove all exited containers:

```shell
docker container prune
```

Remove all unused images:

```shell
docker image prune -a
```

Option '-a' is for removing unused images, otherwise only images without tags will be removed.

Remove all unused networks:

```shell
docker network prune
```

Remove all unused vloumes:

```shell
docker volume prune
```

## Best Practice

1. Use `Crontab` (a tool in Linux to schedule scripts) to schedule a clean up operation every day, or week, or month, or year.

2. Force every user to release resource after they finish using containers.