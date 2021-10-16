# TIL

* Using the enum type

```gql
 enum Size {
    LARGE
    SMALL
 }

```

* For clients to fetch the objects defined in the type definition, we need to define queries in our schema defination so that they can be executed against the data graph, there is a special type called `Query`

* For clients to enable modifying of data, we need to define some mutation, there is a special type called `Mutation`

* A data source is any database, service or API that holds the data you use to populate the schema's fields

* `DataSource` can extend to handle interaction logic for particular data source

* `RESTDataSource` class is an extension of `DataSource` which can handle fetching data from REST API

* `RESTDataSource` class automatically caches responses from REST resources with no additional setup, this feature is called `partial query caching`

* A resolver is a function that's responsible for populating the data for a single field in your schema. It reutns one of the following:

  * Data of the type required by the resolver's corresponding schema field(string,integer,object, etc)
  * A promise that fulfills with data of the required type

* `_` convention to indicate that they don't use its value, `__` secon poitional argument not used
