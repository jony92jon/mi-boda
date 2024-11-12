# mi-boda



## API locally

### Create docker network
```
docker network create mi-boda-network
```

### Docker ps

To check if the server is running and the network is created

```
docker ps
```

### Start dynamodb container

```
docker run -d --network mi-boda-network --name dynamodb-local -p 8000:8000 amazon/dynamodb-local
```

(if you want to inspect the network)
```
docker network inspect mi-boda-network
```

You should see the network created and both containers running


### To create the FormData table

```
aws dynamodb create-table \
  --table-name FormData \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --endpoint-url http://localhost:8000 \
  --region eu-central-1
```

### To scan the FormData table exist 

```
aws dynamodb scan \
  --table-name FormData \
  --endpoint-url http://localhost:8000 \
  --region eu-central-1
``` 


### Start local server
```
sam local start-api --docker-network mi-boda-network  
```

### Test API Endpoint

```
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/json" \
  -d '{"id": "123", "name": "John Doe", "email": "john.doe@example.com"}'
``` 

### To scan the FormData table exist items

```
aws dynamodb scan \
  --table-name FormData \
  --endpoint-url http://localhost:8000 \
  --region eu-central-1
``` 

## API deploy

```
sam deploy 
```

### To list the API endpoints

```
sam list endpoints --region eu-central-1
```