# Project Name
Clear Space 

## Product Overview 
In today's fast-paced world, where challenges abound and burnout is a real concern, it's crucial to foster a growth mindset and prioritize our well-being. Our goal is to empower individuals to navigate life's ups and downs with resilience and clarity, ultimately improving their overall mental health.

Our solution revolves around the simple yet powerful habit of daily journaling. By integrating journaling seamlessly into users' daily routines through a mobile application, we aim to eliminate barriers and make the process as effortless as possible.

Through short, 5-minute journaling sessions with straightforward prompts, users can cultivate self-awareness and gain clarity on their feelings and goals. Morning and evening logs provide structured moments for reflection, while weekly and monthly recaps allow users to track their emotional journey over time.

By guiding users to identify their emotions and prioritize their tasks, our application helps them stay focused on what truly matters. With a monthly priority habit feature, users can set and track their most important goals, ensuring continued growth and progress.

In essence, our product facilitates personal growth and well-being by making daily journaling accessible, convenient, and insightful, ultimately empowering users to lead happier and more fulfilling lives

## Framework 
I used MERN framework for this project. 
- MongoDB: NoSQL database storing data in JSON-like documents, known for scalability
- Express.js: Web application framework for Node.js, simplifying building web APIs
- React.js: JavaScript library for building interactive UI components, maintained by Facebook
- Node.js: JavaScript runtime environment for executing server-side JavaScript code
  
## Usage 
![Habit Tracker](https://github.com/juldyzmurat/clearspace/blob/main/usecase_media/habit-tracker.png)
Habit tracker allows users to choose one habit every month and track its completion daily in order to make habit a natural process. 
Days until the current day can be edited for completion status in case a user forgets to log previous days' habit check in. 
![Morning Log](https://github.com/juldyzmurat/clearspace/raw/main/usecase_media/morning-log.png)
Morning log consists of 5 questions. It is not mandatory to complete the morning log. However, if a user opens the morning log, then they at least have to answer one quesiton in order to be able to submit the response. 
![Evening Log](https://github.com/juldyzmurat/clearspace/blob/main/usecase_media/evening-log.png)
Evening log has the same aattributes as the morning log, but offers a different set of quesitons. 
![Weekly Recap](https://github.com/juldyzmurat/clearspace/blob/main/usecase_media/weekly-recap.png)
Weekly recap generates a random motivational quote, number of morning entries completed this week, number of evening entries completed this week, and number of habit streaks this week.
![Monthly Recap](https://github.com/juldyzmurat/clearspace/blob/main/usecase_media/monthly-recap.png)
Monthly recap uses language processing models to identify top 5 higest scoring emotions/ sentiments from the current month's entires and match them with colors based on popular research that builds links between emotions and colors. Based on top 5 colors and their scores, a new unique color of the month is generated. These six colors create the palette of the month. API in the backend of the app searches for images of nature with each of the colors in the palette to disaply a moodboard for the user. 

## Credits 
Zhuldyz Ualikhankyzy
Thomas Shikoh
Maria Eradze 
Jadon Orr

