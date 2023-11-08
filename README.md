# ReadMe- Project 4 - What’s for Dinner?

## Description 

This was our fourth and final project for SEI. It was a solo project and we had 10 days to complete it. 

You can find ‘What’s for Dinner?’ on Heroku, here: https://whats-for-dinner-jbmh-667af0679eab.herokuapp.com/

You can also find the code on my GitHub page:https://github.com/jillbmh/whats-for-dinner. 

I worked mainly on the development branch and pushed to the main branch on deployment day.


## Technologies Used

I used the following technologies:

* Python
* Django Rest Framework
* PostgreSQL
* React
* JavaScript
* Bootstrap
* Insomnia
* TablePlus

We were given the following brief:

![requirements](../whats-for-dinner/client/src/images/p4-req.png)

## The Idea

When I was working in the Learning Disability Sector, it was always a priority to support people to be more independent when choosing their meals. We would often find that the people we supported were unable to think of the range of foods available and use them to build up a meal. Carers would support people to make a meal planner and shopping list and ask “what do you want for dinner this week?”. Often the response would be “I dont know” or “fish and chips” or the meal they had the evening before. This always led to very staff led meal plans reducing the independence and choice for that individual. Another challenge in the care sector is that carers often have very poor diets themselves, this is typical of carers as they are good at caring for others and not themselves, plus the challenge of a low income household that works shift work can often mean meals are quick and unhealthy. Staff often lack nutritional understanding despite investment in nutrition training and all of these factors heavily influence the diets of the Learning Disability population.

I wanted to create an application that helps people with a Learning Disability and their carers to choose meals, using images to support the individuals choice and understanding nd using the NHS eatwell plate to encourage a healthy and nutritional balance. The user would pick a protein, carbohydrate, vegetables and flavour, they can then save their meal and see it on a plate. The user can make a number of meals. The stretch goal was then to be able to print these for their meal planner.

## Getting Started

I started with planning the project on Trello and figma. I wanted to be as clear as possible about my plan so I did not end up changing my mind and wasting time in the middle. 

I  researched colour schemes and used this website for inspiration:

![colour ideas](../whats-for-dinner/client/src/images/p4-ideas.png)

I knew it would be difficult to make the website colourful and Learning Disability friendly while also being eye catching. I loved this website as I felt it did everything I wanted to do with my design. I used their colour scheme for inspiration.

I started with my wireframes. I spend a long time on these planning the user journey, I wanted to make sure I was clear what it would be like to use the site.

![wireframe](../whats-for-dinner/client/src/images/p4-wireframe.png)

I knew I wanted to use lots of colour, linking it to the NHS eatwell plate:

![eat well plate](../whats-for-dinner/client/src/images/eatwell-plate.png)

I planned my to-do list on Trello, planning what I would do each day as well as planning ahead for some stretch goals. 

! [trello](../whats-for-dinner/client/src/images/p4-trello.png)

I planned how my back end relationships would work on an ERD:

![erd](../whats-for-dinner/client/src/images/p4-erd.png)

## Build/Code Process

I started by coding the back end. I created my different apps, the associated models, serializers and views. I tested these out in TablePlus and Django Admin and Insomnia as I went to make sure that they worked as expected. In hindsight, I hadn't actually planned as well as I thought as I ended up missing subgroups and adding it later on which overcomplicated my code. If I was to do it again I would not have a separate app for subgroups and food groups. 

I made the back end with stretch goals in mind, such as the ability for a user to log in and create ingredients that only they can see. 

My understanding of the relationships and views was really tested during this project, I felt so much clearer after completing the back end and being able to see it work.

I then moved onto the client side. It was great to be able to see the project coming together. The ‘create meal’ component was the most challenging, I wanted to be able to create a dropdown for every food group, see the images of the ingredients,  create a list of ingredients selected, see them on a plate and toggle the selected ingredients so they could be unselected. I made sure to write plenty of notes to make the code more readable. 

![code example](../whats-for-dinner/client/src/images/p4-code1.png)

I used log in, the navigation in the header and the footer as code for when I needed something a little easier, that way I knew I could make the most of my time. It was challenging as I had covid and my toddler was at home with covid so it helped being able to identify which bits of code were easier to do.

I made the update meal component a replica of the create and then tweaked it. I plan on going back and making that code more DRY.

I moved onto the styling last. I did this as I had wanted to prioritise the functionality. I was really pleased to be able to get the images on a plate! 

![code example](../whats-for-dinner/client/src/images/p4-code2.png)

## Challenges & Wins

The biggest challenge I had was my initial understanding of the back end relationships meant I had over complicated it. I learnt so much during the process of project 4 so it was really useful for my development. I also learnt so much in the process of completing the ‘create’ component as I had found it really challenging to extract the data as I kept getting errors about the fact that I was trying to use an Integer and it expected a Dictionary. It was really satisfying to see the outcome when it worked.


## Key Learnings/Takeaways

My key learning is about planning, I would write more pseudocode for any future projects to reduce errors so I don't miss or over complicate things. I feel so much more confident with Python and Django rest framework following this project. 


## Bugs & future improvements

There are no bugs that I am aware of but I would love to improve the following:

* Add more error handling
* Connect up the user/ register authentication so users only see their own meals
* Add functionality to share meals with housemates
* Add the ability for users to add ingredients
* Add print functionality
* Be able to drag meals into a 7 day meal planner
* Improve on the design including the data and images in the application 
* Add easy read information using makaton
* Add the ability to change the theme 
* Add favourites and dislike so users dont see food they dont like
* Have a ‘pick for me’ button that uses AI to generate a popular meal
* Improve responsiveness
* Add more screen reader alternatives to make it more accessible
* Add search functionality
