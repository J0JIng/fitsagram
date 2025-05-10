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

| Method | EndPoint | Status Endpoint | Result |
| --- | --- | --- | --- |
| GET | /users  | 200 |  [User] : List of `User` object |
| GET | /users/:userID | 200 | User : `User`object |
| POST | /users | 201 | `Response` object  |
| PATCH  | /users/:userID | 204 |  `Response` object  |
| DELETE | /users/:userID | 204 |  `Response` object  |
| GET | /users/:userID/goals | 200 |  [`userGoal`] : List of `userGoal` object |
| POST | /users/:userID/goals | 201 | `Response` object  |
| PATCH | /users/:userID/goals/:goalID | 204 |  `Response` object  |
| DELETE | /users/:userID/goals/:goalID | 204 |  `Response` object  |
| GET | /users/:userID/activity-logs | 200 |  [`UserActivityLog`] : List of `UserActivityLog` object |
| POST | /users/:userID/activity-logs | 201 | `Response` object  |
| PATCH | /users/:userID/activity-logs/:logID | 204 |  `Response` object  |
| GET | /users/:userID/posts | 200 |  [`Post`] : List of `Post` |
| GET | /users/:userID/posts/:postID | 200 |  `Post` : `Post` object |
| POST | /users/:userID/posts | 201 |  `Response` object  |
| PATCH | /users/:userID/posts/:postID | 204 |  `Response` object  |
| DELETE | /users/:userID/posts/:postID | 204 |  `Response` object  |
| GET | /users/:userID/posts/:postID/comments | 200 |  [`Comment`] : List of `Comment` |
| POST | /users/:userID/posts/:postID/comments | 201 |  `Response` object  |
| PATCH | /users/:userID/posts/:postID/comments/:commentID | 204 |  `Response` object  |
| DELETE | /users/:userID/posts/:postID/comments/:commentID | 204 |  `Response` object  |

### /api/v1/workouts

| Method | EndPoint | Status Endpoint | Result |
| --- | --- | --- | --- |
| GET | /workouts | 200 |  [`Workout`] : List of `Workout` object |
| GET | /workouts/:workoutID | 200 | `Workout` object  |
| POST | /workouts | 201 | `Response` object  |
| PATCH  | /workouts/:workoutID | 204 | `Response` object  |
| DELETE | /workouts/:workoutID | 204 | `Response` object  |

### /api/v1/nutrition-items

| Method | EndPoint | Status Endpoint | Result |
| --- | --- | --- | --- |
| GET | /nutrition-items | 200 |  [`Nutrition-item`] : List of `Nutrition-item`object |
| GET | /nutrition-items/:nutrition-item-ID | 200 | `Nutrition-item`object |
| POST | /nutrition-items | 201 | `Response` object  |
| PATCH  | /nutrition-items/:nutrition-item-ID | 204 | `Response` object  |
| DELETE | /nutrition-items/:nutrition-item-ID | 204 | `Response` object  |