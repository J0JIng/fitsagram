# Fitsagram 
A MERN stack app

## API Design

### Version 1.2


```Response``` object
```
{
  "data": [ /* list of items */ ],
  "pagination": {
    "page": 1, /* page number */
    "limit": 20, /* Number of items per page */
    "total": 432 /* Total number of items */
  }
}
```
Note: ```Response``` object standardise return format. Pagination field used in the case for search parameters (if required).


### /api/v1/user

| Method | EndPoint | Status Code | Result |
| --- | --- | --- | --- |
| GET | /users  | 200 |  [User] : List of `User` object |
| GET | /users/:userID | 200 | User : `User`object |
| POST | /users | 201 | `response` object  |
| PATCH  | /users/:userID | 204 |  `response` object  |
| DELETE | /users/:userID | 204 |  `response` object  |
| GET | /users/:userID/goals | 200 |  [`userGoal`] : List of `userGoal` object |
| POST | /users/:userID/goals | 201 | `response` object  |
| PATCH | /users/:userID/goals/:goalID | 204 |  `response` object  |
| DELETE | /users/:userID/goals/:goalID | 204 |  `response` object  |
| GET | /users/:userID/activity-logs | 200 |  [`userActivityLog`] : List of `userActivityLog` object |
| POST | /users/:userID/activity-logs | 201 | `response` object  |
| PATCH | /users/:userID/activity-logs/:logID | 204 |  `response` object  |
| GET | /users/:userID/posts | 200 |  [`post`] : List of `post` |
| GET | /users/:userID/posts/:postID | 200 |  `post` : `post` object |
| POST | /users/:userID/posts | 201 |  `response` object  |
| PATCH | /users/:userID/posts/:postID | 204 |  `response` object  |
| DELETE | /users/:userID/posts/:postID | 204 |  `response` object  |
| GET | /users/:userID/posts/:postID/comments | 200 |  [`comment`] : List of `comment` |
| POST | /users/:userID/posts/:postID/comments | 201 |  `response` object  |
| PATCH | /users/:userID/posts/:postID/comments/:commentID | 204 |  `response` object  |
| DELETE | /users/:userID/posts/:postID/comments/:commentID | 204 |  `response` object  |


### /api/v1/workouts

| Method | EndPoint | Status Code | Result |
| --- | --- | --- | --- |
| GET | /workouts | 200 |  [`workout`] : List of `workout` object |
| POST | /workouts | 201 | `response` object  |
| PATCH  | /workouts/:workoutID | 204 | `response` object  |
| DELETE | /workouts/:workoutID | 204 | `response` object  |


### /api/v1/nutrition-items

| Method | EndPoint | tatus Code | Result |
| --- | --- | --- | --- |
| GET | /nutrition-items | 200 |  [`nutrition-item`] : List of `nutrition-item`object |
| POST | /nutrition-items | 201 | `response` object  |
| PATCH  | /nutrition-items/:nutrition-item-ID | 204 | `response` object  |
| DELETE | /nutrition-items/:nutrition-item-ID | 204 | `response` object  |