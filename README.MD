# Express JS Tutorials and Examples

---

## To Get Started:

> - Clone the project repository to your computer: `git clone <projectURL>`
> - `cd` into the project directory
> - Run `npm install` to install the project dependices
> - Run `node <script>.js` to start a script. For example: `node simple-api-example_1.js`
>    - Or run `npm run ex1`


---

## Tutorial

To get the most out of this repo, please read the following tutorial:
https://fofocode.dev/article/?post=7

## API Documentation for the Tutorial


### Example 1 (GET Requests): simple-api-example_1.js

###### To Run the App:

`node simple-api-example_1.js` OR `npm run ex1`

###### Endpoint URLs: 
> GET: http://localhost:3000

###### To Test the Endpoint from a Command Line or Terminal:

Powershell (Windows)
```
$response = Invoke-RestMethod 'http://localhost:3000' -Method 'GET' -Headers $headers
$response | ConvertTo-Json
```

Terminal / CURL (CURL, macOS and Linux)
```
curl --location --request GET 'http://localhost:3000'
```

###### Expected Output From HTTP Request:

```
Look Out World! Here We Come!
```

### Example 2 (POST Requests): simple-api-example_2.js

##### To Run the App:

`node simple-api-example_2.js` OR `npm run ex2`

##### Endpoint URLs: 
> POST: http://localhost:3000/submit-data

##### To Test a POST to the Endpoint from a Command Line or Terminal:

Powershell (Windows)

> JSON

```
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/json")

$body = "{`"someKey`":`"Some Data`"}"

$response = Invoke-RestMethod 'http://localhost:3000/submit-data' -Method 'POST' -Headers $headers -Body $body
$response | ConvertTo-Json
```

> URL FORM ENCODED

```
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/x-www-form-urlencoded")

$body = "someKey=Some%20Data"

$response = Invoke-RestMethod 'http://localhost:3000/submit-data' -Method 'POST' -Headers $headers -Body $body
$response | ConvertTo-Json
```

Terminal / CURL (CURL, macOS and Linux)

> JSON

```
curl --location --request POST 'http://localhost:3000/submit-data' \
--header 'Content-Type: application/json' \
--data-raw '{
    "someKey": "Some Data"
}'
```

> URL FORM ENCODED

```
curl --location --request POST 'http://localhost:3000/submit-data' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'someKey=Some Data'
```

###### Expected Output From HTTP Request:
```
You sent the following data:
{"someKey":"Some Data"}
```

### Example 3 (PUT/DELETE Requests): simple-api-example_3.js

##### To run the app:

`node simple-api-example_3.js` OR `npm run ex3`

##### Endpoint URLs: 
> GET: http://localhost:3000/get-data
> POST: http://localhost:3000/submit-data
> PUT: http://localhost:3000/update-data
> DELETE: http://localhost:3000/delete-data

##### To Test a PUT to the Endpoint from a Command Line or Terminal:

Powershell (Windows)

```
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/x-www-form-urlencoded")

$body = "movieKey=2&newMovieTitle=My%20New%20Movie!"

$response = Invoke-RestMethod 'http://localhost:3000/update-data' -Method 'PUT' -Headers $headers -Body $body
$response | ConvertTo-Json
```

Terminal / CURL (CURL, macOS and Linux)

```
curl --location --request PUT 'http://localhost:3000/update-data' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'movieKey=2' \
--data-urlencode 'newMovieTitle=My New Movie!'
```

###### Expected Output From HTTP Request:
```
{
    "status": "Updated Database Successfully",
    "databaseData": [
        ...
        ...
        "My New Movie!",
        ...
    ]
}
```

##### To Test a DELETE to the Endpoint from a Command Line or Terminal:

Powershell (Windows)

```
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Content-Type", "application/x-www-form-urlencoded")

$body = "movieKey=0"

$response = Invoke-RestMethod 'http://localhost:3000/delete-data' -Method 'DELETE' -Headers $headers -Body $body
$response | ConvertTo-Json
```

Terminal / CURL (CURL, macOS and Linux)

```
curl --location --request DELETE 'http://localhost:3000/delete-data' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'movieKey=0'
```

###### Expected Output From HTTP Request:
```
{
    "status": "Deleted ... from Database Successfully",
    "databaseData": [
        ...
    ]
}
```
