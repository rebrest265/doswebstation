# Kubernetes Deployment

This directory contains the manifests required to run the DOS Webstation in a K8s cluster.

## Deployment Steps
1. Build the Image:
   `docker build -t your-username/doswebstation:latest .`
2. Push to Registry:
   `docker push your-username/doswebstation:latest`
3. Configure HostPath:
   Edit deployment.yaml and update the volumes.hostPath.path to the physical location of the /games folder on the worker node.
4. Deploy:
   `kubectl apply -f deployment.yaml`
   `kubectl apply -f service.yaml`

## Architecture
* Deployment: Runs the Nginx container serving the static engine.
* Service: Exposes the station (typically on port 30080).
* Volume: Uses a hostPath mount to ensure game data and the romlist.js persist outside of the pod lifecycle.