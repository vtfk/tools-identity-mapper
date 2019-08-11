# tools-identity-mapper

Tools for wrangling data for the identity mapper service.

## Usage

Add `students.csv` and `employees.csv` to the `data` directory.

The expected format for `.csv` is like this

```
fnr,upn,sam,upnOld,origin
18090012345,ole1809@skole.vtfk.no,ole1809,v1809ole@skole.vfk.no,VFK
20020067890,per20021@skole.vtfk.no,per20021,v2002per@skole.vfk.no,VFK
```

Configure a local `.env` file

```
NODE_ENV=development
MONGODB_CONNECTION=mongodb-connection-string
MONGODB_COLLECTION=identity
MONGODB_NAME=minelev
```

Run the generate scripts

```
$ node utils/generate-students-file.js
```

```
$ node utils/generate-employees-file.js
```

Run the insert scripts

```
$ node utils/insert-data.js students
```

```
$ node utils/insert-data.js employees
```

Due to limitations in the CosmosDB connection inserts will be done in batches of size 50 with 1000 ms pause between batches

## License

[MIT](LICENSE)
