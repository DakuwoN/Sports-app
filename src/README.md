Challenges:

- When designing the header (navbar), it was a struggle to separate the company name and the links (to the right), using Material UI.
- Solution: The 'Box' component doesn't automatically take up the space to push the links to the right. I had to use flexGrow: 1 to make sure the space  between 'Typography' (app title) and the links is filled.

- Trying to create a tile with cards displaying a news feed. I have the Title and description, but I am having a hard time adding the image without distorting the cards text.
- Solution: Removing the fixed height from the card container. Add a maximum height to the card itself and use "overflow: 'auto'" on the content. This way if the content exceeds the maximum height, it will scroll rather than getting pushed out of view. 

News Feed Improvements:
Next steps and potential improvements:
1. Caching: Consider implementing caching to reduce API calls and improve load times. You could use localStorage or a more robust caching solution.

2. Pagination or Infinite Scroll: If the API supports it, you could implement pagination or infinite scroll to load more news articles as the user scrolls.

3. Category Filtering: Add options for users to filter news by specific sports or leagues.

4. Refresh Button: Add a button that allows users to manually refresh the news feed.

5. Error Retry: Implement a retry mechanism if the API call fails.

6. Responsive Images: Ensure that the images from the API are responsive and don't break your layout on different screen sizes.

7. Date Formatting: Use a library like date-fns or moment.js to format the publication dates more nicely.

8. Link to Full Articles: Add clickable links to the full news articles.

9. Testing: Write unit and integration tests for your new API integration and components.

10. Performance Optimization: Monitor the performance of your app, especially after adding this new feature. You might need to optimize rendering if you're displaying a large number of news items.


Technology stack:
React
Axios 
Material UI
React router 