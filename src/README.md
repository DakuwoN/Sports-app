Challenges:

- When designing the header (navbar), it was a struggle to separate the company name and the links (to the right), using Material UI.
- Solution: The 'Box' component doesn't automatically take up the space to push the links to the right. I had to use flexGrow: 1 to make sure the space  between 'Typography' (app title) and the links is filled.

- Trying to create a tile with cards displaying a news feed. I have the Title and description, but I am having a hard time adding the image without distorting the cards text.