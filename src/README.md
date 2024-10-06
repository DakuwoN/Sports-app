Challenges:

- When designing the header (navbar), it was a struggle to separate the company name and the links (to the right), using Material UI.
Solution: The 'Box' component doesn't automatically take up the space to push the links to the right. I had to use flexGrow: 1 to make sure the space  between 'Typography' (app title) and the links is filled.